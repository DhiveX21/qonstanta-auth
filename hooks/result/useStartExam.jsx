import { useRouter } from "next/router";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../helpers/localStorage";
import React from "react";
import { toast } from "react-toastify";

export default function useStartExam() {
  const router = useRouter();
  const handleStartExam = (detailExamData) => {
    // dispatch(setCurrentExamQuestion(detailExamData));

    const examStartTime = new Date(detailExamData.time_start_schedule * 1000);
    const examEndTime = new Date(detailExamData.time_end_schedule * 1000);
    const dateNow = new Date();

    if (examStartTime > dateNow) {
      toast.error("Schedule is Still Closed");
      return null;
    }
    if (examEndTime < dateNow) {
      toast.error("Schedule is Already Over");
      return null;
    }

    let previousExamData = getLocalStorage("exam_progress");

    if (previousExamData && previousExamData !== "expire") {
      if (previousExamData.item.exam_detail._id === detailExamData._id) {
        if (
          confirm(
            "unfinished Progress for this exam is detected, do you want to Continue? 'yes' for continue. 'no' for discard the previous Progress"
          )
        ) {
          router.push(
            `/exam/${previousExamData.item.exam_detail._id}/progress/`
          );
        } else {
          removeLocalStorage("exam_progress");
        }
      } else {
        if (
          confirm(
            "unfinished Progress for OTHER exam is detected, do you want to Continue?"
          )
        ) {
          router.push(
            `/exam/${previousExamData.item.exam_detail._id}/progress/`
          );
        } else {
          removeLocalStorage("exam_progress");
        }
      }
    } else {
      if (confirm("are you ready for the exam?")) {
        let examProgressData = {
          exam_detail: detailExamData,
          start_time: new Date().getTime(),
          exam_data: [],
        };
        setLocalStorage(`exam_progress`, examProgressData, 10000000000000);

        router.push(`/exam/${detailExamData._id}/progress/`);
      }
    }
  };

  const handleStartBatchExam = (detailExamData) => {
    // dispatch(setCurrentExamQuestion(detailExamData));

    const examStartTime = new Date(detailExamData.time_start_schedule * 1000);
    const examEndTime = new Date(detailExamData.time_end_schedule * 1000);
    const dateNow = new Date();

    if (examStartTime > dateNow) {
      toast.error("Schedule is Still Closed");
      return null;
    }
    if (examEndTime < dateNow) {
      toast.error("Schedule is Already Over");
      return null;
    }

    let previousExamData = getLocalStorage("exam_progress");

    if (previousExamData && previousExamData !== "expire") {
      if (previousExamData.item.exam_detail._id === detailExamData._id) {
        if (
          confirm(
            "unfinished Progress for this exam is detected, do you want to Continue? 'yes' for continue. 'no' for discard the previous Progress"
          )
        ) {
          router.push(
            `/exam/${previousExamData.item.exam_detail._id}/progress/`
          );
        } else {
          removeLocalStorage("exam_progress");
        }
      } else {
        if (
          confirm(
            "unfinished Progress for OTHER exam is detected, do you want to Continue?"
          )
        ) {
          router.push(
            `/exam/${previousExamData.item.exam_detail._id}/progress/`
          );
        } else {
          removeLocalStorage("exam_progress");
        }
      }
    } else {
      if (confirm("are you ready for the exam?")) {
        let examProgressData = {
          exam_detail: detailExamData,
          start_time: new Date().getTime(),
          exam_data: [],
        };
        setLocalStorage(`exam_progress`, examProgressData, 10000000000000);

        router.push(`/exam/${detailExamData._id}/progress/`);
      }
    }
  };

  const handleStartContinueshExam = (allBunchScheduleData) => {
    // dispatch(setCurrentExamQuestion(detailExamData));

    let previousExamData = getLocalStorage("exam_progress");

    if (previousExamData && previousExamData !== "expire") {
      for (var i = 0; i < allBunchScheduleData.schedule_ids.length; i++) {
        if (!allBunchScheduleData.schedule_ids[i].working_status) {
          if (
            previousExamData.item.exam_detail._id ===
            allBunchScheduleData.schedule_ids[i].schedule_id._id
          ) {
            if (
              confirm(
                "unfinished Progress for this exam is detected, do you want to Continue? 'yes' for continue. 'no' for discard the previous Progress"
              )
            ) {
              router.push(
                `/exam/${previousExamData.item.exam_detail._id}/progress/`
              );
            } else {
              removeLocalStorage("exam_progress");
            }
          } else {
            if (
              confirm(
                "unfinished Progress for OTHER exam is detected, do you want to Continue?"
              )
            ) {
              router.push(
                `/exam/${previousExamData.item.exam_detail._id}/progress/`
              );
            } else {
              removeLocalStorage("exam_progress");
            }
          }
          break;
        }
      }
    } else {
      if (confirm("are you ready for the exam?")) {
        let continuesGroup = [];
        allBunchScheduleData.schedule_ids.map((item) => {
          continuesGroup = [...continuesGroup, item.schedule_id];
        });

        for (var i = 0; i < allBunchScheduleData.schedule_ids.length; i++) {
          if (!allBunchScheduleData.schedule_ids[i].working_status) {
            let examProgressData = {
              exam_detail: allBunchScheduleData.schedule_ids[i].schedule_id,
              start_time: new Date().getTime(),
              exam_data: [],
              continues_group: continuesGroup,
            };
            setLocalStorage(`exam_progress`, examProgressData, 10000000000000);

            router.push(
              `/exam/${allBunchScheduleData.schedule_ids[i].schedule_id._id}/progress/`
            );

            break;
          }
        }
      }
    }
  };

  return { handleStartExam, handleStartBatchExam, handleStartContinueshExam };
}
