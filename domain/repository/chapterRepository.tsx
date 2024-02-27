import {
  IChapterGetAllByFilterResponse,
  IProductPromoBannerResponse,
  IQuestionGetVideoExplanationResponse,
  IQuestionGetallByChapterIdResponse,
  ISubjectGetAllResponse,
  ITryoutGetAllTypeResponse,
} from "@/_types/response.type";

import { IProductRepository } from "./types/productRepository.type";
import productDatasource from "../datasource/productDatasource";
import { AxiosResponse } from "axios";
import { IChapterRepository } from "./types/chapterRepository.type";
import {
  IChapterGetAllByFilterPayload,
  IQuestionGetVideoExplanationPayload,
  IQuestionGetallByChapterIdPayload,
  ISubjectGetAllPayload,
} from "@/_types/payload.type";
import chapterDatasource from "../datasource/chapterDatasource";

const chapterRepository: IChapterRepository = {
  questionGetallByChapterIdRepository: async (
    body: IQuestionGetallByChapterIdPayload
  ): Promise<IQuestionGetallByChapterIdResponse> => {
    try {
      const res: AxiosResponse<IQuestionGetallByChapterIdResponse> =
        await chapterDatasource.questionGetallByChapterId(body);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  tryoutGetAllTypeRepository: async (): Promise<ITryoutGetAllTypeResponse> => {
    try {
      const res: AxiosResponse<ITryoutGetAllTypeResponse> =
        await chapterDatasource.tryoutGetAllType();
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  chapterGetAllByFilterRepository: async (
    body: IChapterGetAllByFilterPayload
  ): Promise<IChapterGetAllByFilterResponse> => {
    try {
      const res: AxiosResponse<IChapterGetAllByFilterResponse> =
        await chapterDatasource.chapterGetAllByFilter(body);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  subjectGetAllRepository: async (
    params: ISubjectGetAllPayload
  ): Promise<ISubjectGetAllResponse> => {
    try {
      const res: AxiosResponse<ISubjectGetAllResponse> =
        await chapterDatasource.subjectGetAll(params);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  questionGetVideoExplanationRepository: async (
    params: IQuestionGetVideoExplanationPayload
  ): Promise<IQuestionGetVideoExplanationResponse> => {
    try {
      const res: AxiosResponse<IQuestionGetVideoExplanationResponse> =
        await chapterDatasource.questionGetVideoExplanation(params);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default chapterRepository;
