import {
  IChapterGetAllByFilterPayload,
  IQuestionGetVideoExplanationPayload,
  IQuestionGetallByChapterIdPayload,
  ISubjectGetAllPayload,
} from "@/_types/payload.type";
import { IChapterDatasource } from "./types/chapterDatasource.type";
import axiosInstance from "./axiosConfig";

const urlChapterService = process.env.URL_CHAPTER_SERVICE;

const chapterDatasource: IChapterDatasource = {
  questionGetallByChapterId: async (
    body: IQuestionGetallByChapterIdPayload
  ) => {
    return await axiosInstance.post(`${urlChapterService}tryouts/question`, {
      ...body,
    });
  },
  subjectGetAll: async (params: ISubjectGetAllPayload) => {
    return await axiosInstance.get(`${urlChapterService}subjects`, {
      params: {
        ...params,
      },
    });
  },
  chapterGetAllByFilter: async (body: IChapterGetAllByFilterPayload) => {
    return await axiosInstance.post(`${urlChapterService}chapters/filter`, {
      ...body,
    });
  },
  tryoutGetAllType: async () => {
    return await axiosInstance.get(`${urlChapterService}tryout-types`);
  },
  questionGetVideoExplanation: async (
    body: IQuestionGetVideoExplanationPayload
  ) => {
    return await axiosInstance.get(
      `${urlChapterService}tryouts/${body.questionId}/answer-videos/${body.chapterId}`
    );
  },
};

export default chapterDatasource;
