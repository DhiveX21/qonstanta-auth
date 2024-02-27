import { Query } from "firebase/firestore";
import {
  IEnumGender,
  IEnumMajor,
  IEnumProductType,
  IEnumScheduleType,
} from "./enum.type";
import { IExamStorage } from "./exam.type";
import { IQuestionIds } from "./question.type";
import { ICredentials } from "./users.type";
import { IScheduleId } from "./schedule.type";
import { IDatatablePayload } from "./common.type";

export interface ISendOTPRegisterPayload {
  phone_number: string;
  name: string;
  referral_code: string;
  email: string;
  password: string;
}

export interface IVerifyOTPRegisterPayload {
  phone_number: string;
  otp: number;
}

export interface IVerifyReferralCodePayload {
  referral_code: string;
}

export interface IUserRegisterPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  referral_code: string;
}

export interface IScheduleGetAllByTodayPayload {
  date: string;
  grade: number;
  major: IEnumMajor;
  user_id: number;
  school_id: number;
}

export interface IScheduleGetAllByTodayPayload {
  date: string;
  grade: number;
  major: IEnumMajor;
  user_id: number;
  school_id: number;
}
export interface IResultGetAllByUserIdPayload {
  user_id: number;
}

export interface IExamGetDetailByUserIdPayload {
  examId: string;
  userId: string;
  scheduleType: IEnumScheduleType;
}
export interface IExamGetDetailBatchByUserIdPayload {
  examId: string;
  userId: string;
}
export interface IQuestionGetallByChapterIdPayload {
  question_ids: string[];
  chapter_id: string;
}

export interface IExamCreateResultByUserIdPayload {
  schedule_id: string;
  user_id: number;
  questions: IQuestionIds & { answer: string[] };
  date_tryout_test: string;
  time_start: string;
  time_end: string;
  device?: string;
}
export interface IResultGetDetailByUserIdPayload {
  scheduleId: string;
  userId: string;
}
export interface IScheduleGetAllBatchByMajorPayload {
  user_id: string;
  major: string[];
}

export interface IFireExamProgressPayload {
  userId: string | number;
  name: string;
  email: string;
  examProgressData: IExamStorage;
}
export interface IFireExamProgressContinuesPayload
  extends IFireExamProgressPayload {
  continues: IScheduleId[];
}
export interface IFireWatchExamProgressPayload {
  doc: any;
  collection: string;
}
export interface IFireGetOneDocPayload {
  doc: any;
  collection: string;
}
export interface IFireDeleteOneDocPayload {
  doc: any;
  collection: string;
}
export interface IFireGetDocByQueryPayload {
  where: any;
  collection: string;
}

export interface IStudentUpdateByUserIdPayload {
  name?: string;
  gender?: IEnumGender;
  phone_number?: string;
  address?: string;
  is_active?: boolean;
  dummy?: boolean;
  grade?: number;
  school_id?: number;
  major?: number;
}
export interface IFireDeleteAllDocPayload {
  collection: string;
}

export interface IProductGetAllPayload {
  class_product?: number;
  type?: IEnumProductType;
}

export interface IOrderCreatePayload {
  installment: number;
  user_id: number;
  product_id: string;
  payment_type: string;
}
export interface IScheduleGetAllByFilterPayload {
  grade: number;
  major: string;
  user_id: number;
}

export interface ISubjectGetAllPayload {
  major: IEnumMajor;
}

export interface IChapterGetAllByFilterPayload {
  grade: number;
  major: IEnumMajor;
  subject_id: string;
  semester: number;
}
export interface IQuestionGetVideoExplanationPayload {
  questionId: string;
  chapterId: string;
}
export interface IGetAllRelatedReferralPayload
  extends IDatatablePayload<{
    referral_id: string;
  }> {}
