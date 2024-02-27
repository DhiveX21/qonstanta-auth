import { IEnumScheduleType } from "@/_types/enum.type";
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
import { AxiosResponse } from "axios";

export interface IScheduleDatasource {
  getAllScheduleByToday: (
    body: IScheduleGetAllByTodayPayload
  ) => Promise<AxiosResponse<IScheduleGetAllByTodayResponse>>;
  getAllScheduleByFilter: (
    body: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ) => Promise<AxiosResponse<IScheduleGetAllByFilterResponse>>;
  getAllResultByUserId: (
    userId: string | number
  ) => Promise<AxiosResponse<IResultGetAllByUserIdResponse>>;
  getDetailExamByUserId: (
    body: IExamGetDetailByUserIdPayload
  ) => Promise<AxiosResponse<IExamGetDetailByUserIdResponse>>;
  getDetailExamBatchByUserId: (
    body: IExamGetDetailBatchByUserIdPayload
  ) => Promise<AxiosResponse<IExamGetDetailBatchByUserIdResponse>>;
  createExamResultByUserId: (
    body: IExamCreateResultByUserIdPayload
  ) => Promise<AxiosResponse<IExamCreateResultByUserIdResponse>>;
  getDetailResultByUserId: (
    body: IResultGetDetailByUserIdPayload
  ) => Promise<AxiosResponse<IResultGetDetailByUserIdResponse>>;
  getAllBatchScheduleByMajor: (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ) => Promise<AxiosResponse<IScheduleGetAllBatchByMajorResponse>>;
  getAllBatchScoreByUserId: (
    userId: number
  ) => Promise<AxiosResponse<IResultGetAllBatchScoreByUserIdResponse>>;
}
