import {
  IExamCreateResultByUserIdResponse,
  IExamGetDetailBatchByUserIdResponse,
  IExamGetDetailByUserIdResponse,
  IResultGetAllBatchScoreByUserIdResponse,
  IResultGetAllByUserIdResponse,
  IResultGetDetailByUserIdResponse,
  IScheduleGetAllBatchByMajorResponse,
  IScheduleGetAllByFilterResponse,
  IScheduleGetAllByTodayResponse,
} from "@/_types/response.type";
import { toast } from "react-toastify";

import { IScheduleServices } from "./types/scheduleServices.type";
import {
  IExamCreateResultByUserIdPayload,
  IExamGetDetailBatchByUserIdPayload,
  IExamGetDetailByUserIdPayload,
  IResultGetAllByUserIdPayload,
  IResultGetDetailByUserIdPayload,
  IScheduleGetAllBatchByMajorPayload,
  IScheduleGetAllByFilterPayload,
  IScheduleGetAllByTodayPayload,
} from "@/_types/payload.type";
import scheduleRepository from "../repository/scheduleRepository";
import { IEnumScheduleType } from "@/_types/enum.type";

const scheduleServices: IScheduleServices = {
  scheduleGetAllByTodayServices: async (
    payload: IScheduleGetAllByTodayPayload
  ): Promise<IScheduleGetAllByTodayResponse | null> => {
    try {
      const res = await scheduleRepository.scheduleGetAllByTodayRepository(
        payload
      );

      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  scheduleGetAllByFilterServices: async (
    payload: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ): Promise<IScheduleGetAllByFilterResponse | null> => {
    try {
      const res = await scheduleRepository.scheduleGetAllByFilterRepository(
        payload,
        scheduleType
      );

      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  resultGetAllByUserIdServices: async (
    userId: string | number
  ): Promise<IResultGetAllByUserIdResponse | null> => {
    try {
      const res = await scheduleRepository.resultGetAllByUserIdRepository(
        userId
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  examGetDetailByUserIdServices: async (
    payload: IExamGetDetailByUserIdPayload
  ): Promise<IExamGetDetailByUserIdResponse | null> => {
    try {
      const res = await scheduleRepository.examGetDetailByUserIdRepository(
        payload
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getDetailExamBatchByUserIdServices: async (
    payload: IExamGetDetailBatchByUserIdPayload
  ): Promise<IExamGetDetailBatchByUserIdResponse | null> => {
    try {
      const res = await scheduleRepository.getDetailExamBatchByUserIdRepository(
        payload
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  createExamResultByUserIdServices: async (
    payload: IExamCreateResultByUserIdPayload
  ): Promise<IExamCreateResultByUserIdResponse | null> => {
    try {
      const res = await scheduleRepository.createExamResultByUserIdRepository(
        payload
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      throw new Error("Something went wrong");
    }
  },
  getDetailResultByUserIdServices: async (
    payload: IResultGetDetailByUserIdPayload
  ): Promise<IResultGetDetailByUserIdResponse | null> => {
    try {
      const res = await scheduleRepository.getDetailResultByUserIdRepository(
        payload
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getAllBatchScoreByUserIdServices: async (
    userId: number
  ): Promise<IResultGetAllBatchScoreByUserIdResponse | null> => {
    try {
      const res = await scheduleRepository.getAllBatchScoreByUserIdRepository(
        userId
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getAllBatchScheduleByMajorServices: async (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ): Promise<IScheduleGetAllBatchByMajorResponse | null> => {
    try {
      const res = await scheduleRepository.getAllBatchScheduleByMajorRepository(
        examId,
        body
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default scheduleServices;
