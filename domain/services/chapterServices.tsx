import {
  IChapterGetAllByFilterResponse,
  IQuestionGetVideoExplanationResponse,
  IQuestionGetallByChapterIdResponse,
  ISubjectGetAllResponse,
  ITryoutGetAllTypeResponse,
} from "@/_types/response.type";
import { toast } from "react-toastify";

import { IChapterServices } from "./types/chapterServices.type";
import {
  IChapterGetAllByFilterPayload,
  IQuestionGetVideoExplanationPayload,
  IQuestionGetallByChapterIdPayload,
  ISubjectGetAllPayload,
} from "@/_types/payload.type";
import chapterRepository from "../repository/chapterRepository";

const chapterServices: IChapterServices = {
  questionGetallByChapterIdServices: async (
    body: IQuestionGetallByChapterIdPayload
  ): Promise<IQuestionGetallByChapterIdResponse | null> => {
    try {
      const res = await chapterRepository.questionGetallByChapterIdRepository(
        body
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  tryoutGetAllTypeServices:
    async (): Promise<ITryoutGetAllTypeResponse | null> => {
      try {
        const res = await chapterRepository.tryoutGetAllTypeRepository();
        return res;
      } catch (error) {
        toast.error(String(error));
        return null;
      }
    },
  chapterGetAllByFilterServices: async (
    params: IChapterGetAllByFilterPayload
  ): Promise<IChapterGetAllByFilterResponse | null> => {
    try {
      const res = await chapterRepository.chapterGetAllByFilterRepository(
        params
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  subjectGetAllServices: async (
    params: ISubjectGetAllPayload
  ): Promise<ISubjectGetAllResponse | null> => {
    try {
      const res = await chapterRepository.subjectGetAllRepository(params);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  questionGetVideoExplanationServices: async (
    params: IQuestionGetVideoExplanationPayload
  ): Promise<IQuestionGetVideoExplanationResponse | null> => {
    try {
      const res = await chapterRepository.questionGetVideoExplanationRepository(
        params
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default chapterServices;
