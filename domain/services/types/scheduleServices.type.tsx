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

export interface IScheduleServices {
  scheduleGetAllByTodayServices: (
    payload: IScheduleGetAllByTodayPayload
  ) => Promise<IScheduleGetAllByTodayResponse | null>;
  scheduleGetAllByFilterServices: (
    payload: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ) => Promise<IScheduleGetAllByFilterResponse | null>;
  resultGetAllByUserIdServices: (
    userId: string | number
  ) => Promise<IResultGetAllByUserIdResponse | null>;
  examGetDetailByUserIdServices: (
    payload: IExamGetDetailByUserIdPayload
  ) => Promise<IExamGetDetailByUserIdResponse | null>;
  getDetailExamBatchByUserIdServices: (
    payload: IExamGetDetailBatchByUserIdPayload
  ) => Promise<IExamGetDetailBatchByUserIdResponse | null>;
  createExamResultByUserIdServices: (
    payload: IExamCreateResultByUserIdPayload
  ) => Promise<IExamCreateResultByUserIdResponse | null>;
  getDetailResultByUserIdServices: (
    payload: IResultGetDetailByUserIdPayload
  ) => Promise<IResultGetDetailByUserIdResponse | null>;
  getAllBatchScoreByUserIdServices: (
    userId: number
  ) => Promise<IResultGetAllBatchScoreByUserIdResponse | null>;
  getAllBatchScheduleByMajorServices: (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ) => Promise<IScheduleGetAllBatchByMajorResponse | null>;
}
