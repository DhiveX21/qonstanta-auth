import {
  IFireExamProgress,
  IFireExamProgressStorage,
} from "@/_types/firebase.type";
import {
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IQuestionGetallByChapterIdPayload,
} from "@/_types/payload.type";
import { IQuestion } from "@/_types/question.type";
import { IExamGetDetailBatchByUserIdData } from "@/_types/response.type";
import { ISchedule, IScheduleId } from "@/_types/schedule.type";
import firebaseDatasource from "@/domain/datasource/firebaseDatasource";
import chapterServices from "@/domain/services/chapterServices";
import firebaseServices from "@/domain/services/firebaseServices";
import { shuffle } from "@/helpers/Common";
import { shuffleArray } from "@/helpers/exam";
import { where } from "firebase/firestore";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

const useExam = () => {
  const [answerOrder, setAnswerOrder] = useState<number[]>();
  const { data: session }: any = useSession();
  const router = useRouter();

  function isShuffleAction(is_shuffle: boolean, data: any[]): any[] {
    if (is_shuffle) {
      return shuffle(data);
    }
    return data;
  }

  function isShuffleAnswer(isShuffleList: any[], questions: any[]): any[] {
    const questionsResult = questions.map((questionItem) => {
      const questionShuffle = isShuffleList.find(
        (item) => item._id === questionItem._id
      );
      return {
        ...questionItem,
        is_shuffle: questionShuffle?.is_shuffle ?? false,
        answer_key: null,
        answer_user: null,
        not_sure: false,
      };
    });
    return questionsResult;
  }

  const generateQuestionOrder = (array: number[], isShuffle: boolean) => {
    if (isShuffle) {
      setAnswerOrder(shuffleArray(array));
    } else {
      setAnswerOrder(array);
    }
  };

  const startSingleExam = async (scheduleDetail: ISchedule) => {
    try {
      let querypayload: IFireGetDocByQueryPayload = {
        collection: "exam_progress",
        where: where("userId", "==", session?.credentials?.id),
      };

      const previousData: IFireExamProgressStorage[] =
        await firebaseDatasource.getDocByQuery(querypayload);

      const examStartTime = new Date(
        scheduleDetail.time_start_schedule * 1000
      ).getTime();
      const examEndTime = new Date(
        scheduleDetail.time_end_schedule * 1000
      ).getTime();
      const dateNow = new Date().getTime();

      let submitTime = new Date().getTime() + scheduleDetail.duration * 60000;

      let body: IQuestionGetallByChapterIdPayload = {
        question_ids: scheduleDetail?.question_ids?.map(
          (questionItem) => questionItem._id
        ),
        chapter_id: scheduleDetail.chapter_ids[0]?._id ?? "-",
      };
      const allQuestion =
        await chapterServices.questionGetallByChapterIdServices(body);

      if (examStartTime > dateNow) {
        toast.error("Schedule is Still Closed");
        return null;
      }

      if (examEndTime < dateNow) {
        toast.error("Schedule is Already Over");
        return null;
      }

      if (examEndTime - dateNow < scheduleDetail.duration * 60000) {
        submitTime = examEndTime;
      }

      if (allQuestion && allQuestion.data.length > 0) {
        const questionResult = isShuffleAction(
          scheduleDetail.is_shuffle!,
          allQuestion.data
        );
        const examDataStorage: IFireExamProgressPayload = {
          examProgressData: {
            id: scheduleDetail._id,
            endDate: submitTime,
            startTime: dateNow,
            questions: isShuffleAnswer(
              scheduleDetail.question_ids,
              questionResult
            ),
            activeQuestion: 1,
          },
          email: session?.credentials?.email,
          name: session?.credentials?.studentData?.name,
          userId: session?.credentials?.id,
        };

        examDataStorage.examProgressData.questions.map(
          (questionItem: IQuestion) => {
            if (
              questionItem.type_question === "TF" ||
              questionItem.type_question === "multiple"
            ) {
              questionItem.answer_user = Array(
                questionItem.sub_question.questions.length
              ).fill("false");
            } else if (questionItem.type_question === "incomplete") {
              questionItem.answer_user = Array(
                (questionItem.answer_sentence_text.match(/___/g) || []).length
              ).fill("");
            } else {
              questionItem.answer_user = [];
            }

            return questionItem;
          }
        );

        if (previousData.length > 0) {
          const options = {
            title: "Bentar dah...",
            message:
              '"Kamu masih memiliki Ujian yang berjalan, tolong selesaikan dahulu sebelum memulai ujian lain. :D"',
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                  router.push(
                    `/exam/${previousData[0].examProgressData.id}/progress/`
                  );
                },
              },
              {
                label: "No",
                onClick: () => { },
              },
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,

            overlayClassName: "overlay-custom-class-name",
          };

          confirmAlert(options);
        } else {
          const options = {
            title: "Bentar dah...",
            message:
              "APAKAH KAMU YAKIN INGIN MEMULAI UJIAN? , KAMU TIDAK AKAN DAPAT MEMULAI UJIAN LAIN JIKA MASIH ADA UJIAN YANG SEDANG BERJALAN.",
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                  firebaseServices.setFireExamProgressServices(examDataStorage);
                  router.push(`/exam/${scheduleDetail._id}/progress/`);
                },
              },
              {
                label: "No",
                onClick: () => { },
              },
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,

            overlayClassName: "overlay-custom-class-name",
          };

          confirmAlert(options);
        }
      }
    } catch (error) {
      toast.error(String(error));
    }
  };
  const startContinuesExam = async (
    scheduleBatch: IExamGetDetailBatchByUserIdData,
    continuing?: boolean
  ) => {
    const unfinishedSchedule = scheduleBatch.schedule_ids.filter(
      (scheduleItem: IScheduleId) =>
        scheduleItem.schedule_id.working_status === false
    );

    if (unfinishedSchedule.length > 0) {
      try {
        const scheduleDetail: ISchedule = unfinishedSchedule[0].schedule_id;

        let querypayload: IFireGetDocByQueryPayload = {
          collection: "exam_progress",
          where: where("userId", "==", session?.credentials?.id),
        };

        const previousData: IFireExamProgressStorage[] =
          await firebaseDatasource.getDocByQuery(querypayload);

        const examStartTime = new Date(
          scheduleDetail.time_start_schedule * 1000
        ).getTime();
        const examEndTime = new Date(
          scheduleDetail.time_end_schedule * 1000
        ).getTime();
        const dateNow = new Date().getTime();

        let submitTime = new Date().getTime() + scheduleDetail.duration * 60000;

        let body: IQuestionGetallByChapterIdPayload = {
          question_ids: scheduleDetail?.question_ids?.map(
            (questionItem) => questionItem._id
          ),
          chapter_id: scheduleDetail.chapter_ids[0]?._id ?? "-",
        };
        const allQuestion =
          await chapterServices.questionGetallByChapterIdServices(body);

        if (examStartTime > dateNow) {
          toast.error("Schedule is Still Closed");
          return null;
        }

        if (examEndTime < dateNow) {
          toast.error("Schedule is Already Over");
          return null;
        }

        if (examEndTime - dateNow < scheduleDetail.duration * 60000) {
          submitTime = examEndTime;
        }

        if (allQuestion && allQuestion.data.length > 0) {
          const examDataStorage: IFireExamProgressContinuesPayload = {
            examProgressData: {
              id: scheduleDetail._id,
              endDate: submitTime,
              startTime: dateNow,
              questions: isShuffleAnswer(
                scheduleDetail.question_ids,
                allQuestion.data
              ),
              activeQuestion: 1,
            },
            email: session?.credentials?.email,
            name: session?.credentials?.studentData?.name,
            userId: session?.credentials?.id,
            continues: unfinishedSchedule,
          };

          examDataStorage.examProgressData.questions.map(
            (questionItem: IQuestion) => {
              if (
                questionItem.type_question === "TF" ||
                questionItem.type_question === "multiple"
              ) {
                questionItem.answer_user = Array(
                  questionItem.sub_question.questions.length
                ).fill("false");
              } else if (questionItem.type_question === "incomplete") {
                questionItem.answer_user = Array(
                  (questionItem.answer_sentence_text.match(/___/g) || []).length
                ).fill("");
              } else {
                questionItem.answer_user = [];
              }

              return questionItem;
            }
          );

          if (previousData.length > 0) {
            const options = {
              title: "Bentar dah...",
              message:
                '"Kamu masih memiliki Ujian yang berjalan, tolong selesaikan dahulu sebelum memulai ujian lain. :D"',
              buttons: [
                {
                  label: "Yes",
                  onClick: () => {
                    router.push(
                      `/exam/${previousData[0].examProgressData.id}/progress/`
                    );
                  },
                },
                {
                  label: "No",
                  onClick: () => { },
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,

              overlayClassName: "overlay-custom-class-name",
            };

            confirmAlert(options);
          } else {
            const options = {
              title: "Bentar dah...",
              message:
                "APAKAH KAMU YAKIN INGIN MEMULAI UJIAN? , KAMU TIDAK AKAN DAPAT MEMULAI UJIAN LAIN JIKA MASIH ADA UJIAN YANG SEDANG BERJALAN.",
              buttons: [
                {
                  label: "Yes",
                  onClick: () => {
                    firebaseServices.setFireExamProgressServices(
                      examDataStorage
                    );
                    router.push(`/exam/${scheduleDetail._id}/progress/`);
                  },
                },
                {
                  label: "No",
                  onClick: () => { },
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,

              overlayClassName: "overlay-custom-class-name",
            };

            if (continuing) {
              firebaseServices.setFireExamProgressServices(examDataStorage);
              router.push(`/exam/${scheduleDetail._id}/progress/`);
            } else {
              confirmAlert(options);
            }
          }
        }
      } catch (error) {
        toast.error(String(error));
      }
    } else {
      toast.error("semua Jadwal telah diselesaikan.");
      router?.push("/dashboard");
    }
  };

  return {
    startSingleExam,
    startContinuesExam,
    generateQuestionOrder,
    answerOrder,
  };
};

export default useExam;
