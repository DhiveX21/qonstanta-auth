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

export interface IChapterRepository {
  questionGetallByChapterIdRepository: (
    body: IQuestionGetallByChapterIdPayload
  ) => Promise<IQuestionGetallByChapterIdResponse>;
  subjectGetAllRepository: (
    params: ISubjectGetAllPayload
  ) => Promise<ISubjectGetAllResponse>;
  chapterGetAllByFilterRepository: (
    params: IChapterGetAllByFilterPayload
  ) => Promise<IChapterGetAllByFilterResponse>;
  tryoutGetAllTypeRepository: () => Promise<ITryoutGetAllTypeResponse>;
  questionGetVideoExplanationRepository: (
    params: IQuestionGetVideoExplanationPayload
  ) => Promise<IQuestionGetVideoExplanationResponse>;
}
