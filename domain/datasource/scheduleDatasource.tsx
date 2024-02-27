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

import { IScheduleDatasource } from "./types/scheduleDatasource.type";
import axiosInstance from "./axiosConfig";
import { IEnumScheduleType } from "@/_types/enum.type";

const urlScheduleService = process.env.URL_SCHEDULE_SERVICE;
const queryParam = "?type_schedule=tryout";

const scheduleDatasource: IScheduleDatasource = {
  getAllScheduleByToday: async (body: IScheduleGetAllByTodayPayload) => {
    return await axiosInstance.post(
      `${urlScheduleService}schedules/today${queryParam}`,
      {
        ...body,
      }
    );
  },
  getAllScheduleByFilter: async (
    body: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ) => {
    return await axiosInstance.post(
      `${urlScheduleService}schedules/filter`,
      {
        ...body,
      },
      {
        params: {
          type_schedule: scheduleType,
        },
      }
    );
  },

  getAllResultByUserId: async (userId: string | number) => {
    return await axiosInstance.get(`${urlScheduleService}results`, {
      params: { user_id: userId, limit: 10 },
    });
  },
  getDetailExamByUserId: async (body: IExamGetDetailByUserIdPayload) => {
    return await axiosInstance.get(
      `${urlScheduleService}schedules/${body.examId}`,
      {
        params: {
          user_id: body.userId,
          type_schedule: body.scheduleType,
        },
      }
    );
  },
  getDetailExamBatchByUserId: async (
    body: IExamGetDetailBatchByUserIdPayload
  ) => {
    return await axiosInstance.get(
      `${urlScheduleService}schedules/batch/${body.examId}/${body.userId}${queryParam}`
    );
  },
  createExamResultByUserId: async (body: IExamCreateResultByUserIdPayload) => {
    return await axiosInstance.post(`${urlScheduleService}results`, {
      ...body,
    });
  },
  getDetailResultByUserId: async (body: IResultGetDetailByUserIdPayload) => {
    return await axiosInstance.get(
      `${urlScheduleService}results/${body.scheduleId}/user/${body.userId}`
    );
  },
  getAllBatchScheduleByMajor: async (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ) => {
    return await axiosInstance.post(
      `${urlScheduleService}schedules/batch/${examId}/batch-major${queryParam}`,
      {
        ...body,
      }
    );
  },
  getAllBatchScoreByUserId: async (userId: number) => {
    return await axiosInstance.get(
      `${urlScheduleService}results/batch-score/${userId}`
    );
  },
};

export default scheduleDatasource;
