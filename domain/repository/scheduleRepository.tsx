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

import { IScheduleRepository } from "./types/scheduleRepository.type";
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
import scheduleDatasource from "../datasource/scheduleDatasource";
import { IEnumScheduleType } from "@/_types/enum.type";

const scheduleRepository: IScheduleRepository = {
  scheduleGetAllByTodayRepository: async (
    payload: IScheduleGetAllByTodayPayload
  ): Promise<IScheduleGetAllByTodayResponse> => {
    try {
      const res = await scheduleDatasource.getAllScheduleByToday(payload);

      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  scheduleGetAllByFilterRepository: async (
    payload: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ): Promise<IScheduleGetAllByFilterResponse> => {
    try {
      const res = await scheduleDatasource.getAllScheduleByFilter(
        payload,
        scheduleType
      );

      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  resultGetAllByUserIdRepository: async (
    userId: string | number
  ): Promise<IResultGetAllByUserIdResponse> => {
    try {
      const res = await scheduleDatasource.getAllResultByUserId(userId);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  examGetDetailByUserIdRepository: async (
    payload: IExamGetDetailByUserIdPayload
  ): Promise<IExamGetDetailByUserIdResponse> => {
    try {
      const res = await scheduleDatasource.getDetailExamByUserId(payload);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getDetailExamBatchByUserIdRepository: async (
    payload: IExamGetDetailBatchByUserIdPayload
  ): Promise<IExamGetDetailBatchByUserIdResponse> => {
    try {
      const res = await scheduleDatasource.getDetailExamBatchByUserId(payload);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  createExamResultByUserIdRepository: async (
    payload: IExamCreateResultByUserIdPayload
  ): Promise<IExamCreateResultByUserIdResponse | null> => {
    try {
      const res = await scheduleDatasource.createExamResultByUserId(payload);

      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      // Handle response API if 409 data from firebase must be delete.
      if (![404, 500, 400].includes(error.response.status)) {
        return null;
      }
      throw new Error(String(error));
    }
  },
  getDetailResultByUserIdRepository: async (
    payload: IResultGetDetailByUserIdPayload
  ): Promise<IResultGetDetailByUserIdResponse> => {
    try {
      const res = await scheduleDatasource.getDetailResultByUserId(payload);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllBatchScoreByUserIdRepository: async (
    userId: number
  ): Promise<IResultGetAllBatchScoreByUserIdResponse> => {
    try {
      const res = await scheduleDatasource.getAllBatchScoreByUserId(userId);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllBatchScheduleByMajorRepository: async (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ): Promise<IScheduleGetAllBatchByMajorResponse> => {
    try {
      const res = await scheduleDatasource.getAllBatchScheduleByMajor(
        examId,
        body
      );
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default scheduleRepository;
