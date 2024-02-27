import {
  IChapterGetAllByFilterPayload,
  IQuestionGetVideoExplanationPayload,
  IQuestionGetallByChapterIdPayload,
  ISubjectGetAllPayload,
} from "@/_types/payload.type";
import {
  IChapterGetAllByFilterResponse,
  IQuestionGetVideoExplanationResponse,
  IQuestionGetallByChapterIdResponse,
  ISubjectGetAllResponse,
  ITryoutGetAllTypeResponse,
} from "@/_types/response.type";

export interface IChapterServices {
  questionGetallByChapterIdServices: (
    body: IQuestionGetallByChapterIdPayload
  ) => Promise<IQuestionGetallByChapterIdResponse | null>;
  subjectGetAllServices: (
    body: ISubjectGetAllPayload
  ) => Promise<ISubjectGetAllResponse | null>;
  chapterGetAllByFilterServices: (
    body: IChapterGetAllByFilterPayload
  ) => Promise<IChapterGetAllByFilterResponse | null>;
  tryoutGetAllTypeServices: () => Promise<ITryoutGetAllTypeResponse | null>;
  questionGetVideoExplanationServices: (
    body: IQuestionGetVideoExplanationPayload
  ) => Promise<IQuestionGetVideoExplanationResponse | null>;
}
