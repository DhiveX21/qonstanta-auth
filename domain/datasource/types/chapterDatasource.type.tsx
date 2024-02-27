import {
  ISubjectGetAllPayload,
  IQuestionGetallByChapterIdPayload,
  IChapterGetAllByFilterPayload,
  IQuestionGetVideoExplanationPayload,
} from "@/_types/payload.type";
import {
  IChapterGetAllByFilterResponse,
  IQuestionGetVideoExplanationResponse,
  IQuestionGetallByChapterIdResponse,
  ISubjectGetAllResponse,
  ITryoutGetAllTypeResponse,
} from "@/_types/response.type";
import { AxiosResponse } from "axios";

export interface IChapterDatasource {
  questionGetallByChapterId: (
    body: IQuestionGetallByChapterIdPayload
  ) => Promise<AxiosResponse<IQuestionGetallByChapterIdResponse>>;
  subjectGetAll: (
    params: ISubjectGetAllPayload
  ) => Promise<AxiosResponse<ISubjectGetAllResponse>>;
  chapterGetAllByFilter: (
    body: IChapterGetAllByFilterPayload
  ) => Promise<AxiosResponse<IChapterGetAllByFilterResponse>>;
  tryoutGetAllType: () => Promise<AxiosResponse<ITryoutGetAllTypeResponse>>;
  questionGetVideoExplanation: (
    body: IQuestionGetVideoExplanationPayload
  ) => Promise<AxiosResponse<IQuestionGetVideoExplanationResponse>>;
}
