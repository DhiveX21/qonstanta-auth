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

export interface IScheduleRepository {
  scheduleGetAllByTodayRepository: (
    payload: IScheduleGetAllByTodayPayload
  ) => Promise<IScheduleGetAllByTodayResponse>;
  scheduleGetAllByFilterRepository: (
    payload: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ) => Promise<IScheduleGetAllByFilterResponse>;
  resultGetAllByUserIdRepository: (
    userId: string | number
  ) => Promise<IResultGetAllByUserIdResponse>;
  examGetDetailByUserIdRepository: (
    payload: IExamGetDetailByUserIdPayload
  ) => Promise<IExamGetDetailByUserIdResponse>;
  getDetailExamBatchByUserIdRepository: (
    payload: IExamGetDetailBatchByUserIdPayload
  ) => Promise<IExamGetDetailBatchByUserIdResponse>;
  createExamResultByUserIdRepository: (
    body: IExamCreateResultByUserIdPayload
  ) => Promise<IExamCreateResultByUserIdResponse | null>;
  getDetailResultByUserIdRepository: (
    body: IResultGetDetailByUserIdPayload
  ) => Promise<IResultGetDetailByUserIdResponse>;
  getAllBatchScoreByUserIdRepository: (
    userId: number
  ) => Promise<IResultGetAllBatchScoreByUserIdResponse>;
  getAllBatchScheduleByMajorRepository: (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ) => Promise<IScheduleGetAllBatchByMajorResponse>;
}
