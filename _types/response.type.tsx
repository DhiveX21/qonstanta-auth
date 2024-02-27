import {
  IDatatableResponse,
  ISimpleString,
  ISimpleString2,
  ISimpleStringWithSubject,
  ITeachersIds,
} from "./common.type";
import {
  IEnumGender,
  IEnumMajor,
  IEnumRoles,
  IEnumScheduleType,
} from "./enum.type";
import {
  IInstallmentDetail,
  IProductBannerItem,
  IProductInstallment,
} from "./product.type";
import { IQuestion, IQuestionIds } from "./question.type";
import { IResultTest } from "./result.type";
import {
  IAttendees,
  ISchedule,
  IScheduleId,
  IScheduleIds,
} from "./schedule.type";
import { ISchool } from "./school.type";
import { IPaymentMethod } from "./transaction.type";
import { IClassStudent, IReferral, IRoles } from "./users.type";

export interface IResponseMeta {
  message: string;
  status: "success" | "error";
  code: number;
}

export type IErrorHandler = Omit<IResponseMeta, "code">;

export interface ISendOTPRegisterData {
  message: string;
  otp: string;
  phone_number: string;
}

export interface IVerifyOTPRegisterData {
  message:
    | string
    | {
        otp: string;
        phonenumber: string;
      };
}
export interface IVerifyReferralCodeData {
  message:
    | string
    | {
        otp: string;
        phonenumber: string;
      };
}

export interface IUserRegisterData {
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
  id: number;
  role: IEnumRoles;
  dummy: boolean;
  send_email_verif: boolean;
}
export interface IProductPromoBannerData {
  id: string;
  name: string;
  image_urls: IProductBannerItem[];
  status: string;
}

export interface IScheduleGetAllByTodayData {
  exam: ISimpleString;
  batch_id?: string;
  batch_name?: string;
  type_tryout: ISimpleString;
  chapter_ids: ISimpleStringWithSubject[];
  is_batch: false;
  _id: string;
  name: string;
  role: string;
  calculate_type: string;
  is_continue: boolean;
  class_student: IClassStudent[];
  question_ids: IQuestionIds[];
  target_user: string;
  attendees: IAttendees[];
  semester: number;
  date_start: string;
  date_end: string;
  time_start: string;
  time_end: string;
  duration: number;
  total_question: number;
  time_start_schedule: number;
  time_start_schedule_alt: string;
  time_end_schedule: number;
  time_end_schedule_alt: string;
  deleted: boolean;
  created_at: string;
  update_at: string;
  score: number;
  working_status: boolean;
  batch_detail: ISimpleString;
  is_shuffle: boolean;
  link_room: string;
  teacher_ids: ITeachersIds[];
  type_schedule: IEnumScheduleType;
}

export interface IResultGetAllByUserIdData {
  user_id: ISimpleString2;
  deleted: boolean;
  _id: string;
  schedule_id: IScheduleIds;
  resulttests: IQuestion[];
  date_result: string;
  time_start: string;
  time_end: string;
  date_result_now: string;
  time_start_schedule: number;
  time_end_schedule: number;
  created_at: string;
  updated_at: string;
  score: number;
}

export interface IExamGetDetailByUserIdData extends ISchedule {}

export interface IExamGetDetailBatchByUserIdData {
  _id: string;
  name: string;
  schedule_ids: IScheduleId[];
  is_continue: boolean;
  working_status: boolean;
  total_score: number;
}

export interface IExamCreateResultByUserIdData {
  schedule_id: string;
  user_id: number;
  resulttests: IResultTest[];
  date_result: string;
  time_start: string;
  time_end: string;
  date_result_now: string;
  time_start_schedule: string;
  time_end_schedule: string;
  _id: string;
  deleted: boolean;
  created_at: string;
  update_at: string;
}

export interface IResultGetDetailByUserIdData {
  _id: string;
  is_batch: boolean;
  schedule_id: {
    _id: string;
    name: string;
    role: "tryout" | "edulive";
    exam: ISimpleString;
    type_tryout: ISimpleString;
    is_batch: boolean;
    // subject_id: ISimpleString;
    chapter_ids: ISimpleStringWithSubject;
    time_start_schedule: number;
    time_end_schedule: number;
  };
  calculate_type: string;
  user_id: {
    id: number;
    name: string;
    email: string;
    major: IEnumMajor;
  };
  resulttests: IResultTest[];
  score: number;
  date_result: string;
  time_start: string;
  time_end: string;
  date_result_now: string;
  time_start_schedule: string;
  time_end_schedule: string;
}

export interface IScheduleGetAllBatchByMajorData {
  exam: ISimpleString;
  type_tryout: ISimpleString;
  batch_id?: string;
  batch_name?: string;
  // subject_id: ISimpleString & { major: IEnumMajor };
  // chapter_ids: ISimpleString;
  chapter_ids: {
    _id: string;
    name: string;
    subject: {
      _id: string;
      name: string;
      code?: string;
      major: "IPA" | "IPS" | "ALL" | "";
    };
  }[];
  _id: string;
  name: string;
  role: "tryout" | "edulive";
  calculate_type: string;
  is_continue: boolean;
  is_batch: boolean;
  class_student: IClassStudent[];
  question_ids: IQuestionIds[];
  target_user: string;
  attendees: [
    {
      user_id: number;
      name: string;
      _id: string;
    }
  ];
  semester: number;
  date_start: string;
  date_end: string;
  time_start: string;
  time_end: string;
  duration: number;
  total_question: number;
  time_start_schedule: any;
  time_end_schedule: any;
  deleted: boolean;
  school_ids: [];
  created_at: string;
  update_at: string;
  batch_detail: ISimpleString;
  working_status: boolean;
}

export interface IProvinceGetData {
  id: number;
  name: string;
}
export interface ICitiesGetAllData {
  id: number;
  province_id: number;
  name: string;
  province: IProvinceGetData;
}
export interface ISchoolsGetByCityIdData {
  id: number;
  name: string;
  nspn: string;
  status: number;
  city_name: string;
  city_id: number;
  city: ICitiesGetAllData;
}
export interface IStudentUpdateByUserId {
  id: number;
  email: string;
  name: string;
  gender: IEnumGender;
  user_id: number;
  student_class: number;
  id_qonstanta: string;
  phone_number: string;
  grade: number;
  sub_class: string;
  major: IEnumMajor;
  address: string;
  birth_date: string;
  is_active: boolean;
  is_active_tryout: boolean;
  is_paid: boolean;
  dummy: boolean;
  type_to: string;
  trial_to: boolean;
  school_name: string;
  school: ISchool;
}
export interface IProductGetAllData {
  id: string;
  code_product: string;
  level_study: string;
  name: string;
  method_study: "online" | "offline";
  type_product: string;
  class_product: number;
  schools_ids: [];
  amount_total: number;
  amount_installment: IProductInstallment[];
  amount_discount: number;
  product_model: string;
  installment_count: number;
  description: string;
  status: string;
  image_url: string;
  facilities_ids: [
    {
      _id: string;
      name: string;
    }
  ];
  date_active_start: string;
  date_active_end: string;
}

export interface IOrderCreateData {
  id: string;
  installment: number;
  amount: number;
  status: string;
  installment_detail: IInstallmentDetail[];
  role_product: [
    {
      name: string;
      status: boolean;
    }
  ];
  product_detail: {
    code_product: string;
    name: string;
    type_product: string;
    class_product: number;
    method_study: string;
    product_model: string;
  };
  user_id: number;
  created_at: string;
}
export interface IResultGetAllBatchScoreData {
  _id: string;
  schedule_major: IEnumMajor;
  bunch_id: {
    _id: string;
    name: string;
    schedule_ids: any[];
  };
  user_id: {
    id: number;
    name: string;
    email: string;
  };
  schedule_ids: ISchedule[];
  result_ids: [
    {
      _id: string;
      is_batch: boolean;
      calculate_type: string;
      schedule_major: string;
      schedule_id: string;
      resulttests: [
        {
          answer_key: string;
          answer_user: any;
          result: number;
        }
      ];
      score: number;
    }
  ];
  average: number;
  score_tmp: number;
  standard_deviation_value: number;
  raw_value: number;
  final_score: number;
}

export interface ITryoutGetAllTypeData {
  _id: string;
  name: string;
  description: string;
  calculate_type: string;
}
export interface ISubjectGetAllData {
  _id: string;
  name: string;
  code: string;
  major: IEnumMajor;
}

export interface IChapterGetAllByFilterData {
  _id: string;
  subject_id: string;
  number_chapter: number;
  name: string;
  code: string;
  type_chapter: string;
  semester: number;
  grade: number;
  major: IEnumMajor;
  status: string;
  files: {
    path: string;
    url: string;
    url_public: string;
    title: string;
    type: string;
  };
  answer_documents: any[];
}
export interface IQuestionGetVideoExplanationData {
  answer_videos: [
    {
      url: string;
      _id: string;
    }
  ];
  _id: string;
  detail_chapter: {
    _id: string;
    subject_id: {
      _id: string;
      name: string;
      code: string;
      major: string;
      deleted: boolean;
      created_at: string;
      updated_at: string;
    };
    name: string;
    semester: number;
    grade: number;
    major: string;
  };
}
export interface IGetAllRelatedReferralData extends IReferral {}

export interface IRoleGetByUserIdData {
  id: string;
  user_id: number;
  roles: IRoles[];
}

////////////////////////////////////////////////////////////////////////////////

export interface ISendOTPRegisterResponse {
  meta: IResponseMeta;
  data: ISendOTPRegisterData;
}

export interface IVerifyOTPRegisterResponse {
  meta: IResponseMeta;
  data: IVerifyOTPRegisterData;
}

export interface IVerifyReferralCodeResponse {
  meta: IResponseMeta;
  data: IVerifyReferralCodeData;
}

export interface IUserRegisterResponse {
  meta: IResponseMeta;
  data: IUserRegisterData;
}
export interface IProductPromoBannerResponse {
  meta: IResponseMeta;
  data: IProductPromoBannerData;
}
export interface IScheduleGetAllByTodayResponse {
  meta: IResponseMeta;
  data: IScheduleGetAllByTodayData[];
}

export interface IResultGetAllByUserIdResponse {
  meta: IResponseMeta;
  data: IResultGetAllByUserIdData[];
}
export interface IExamGetDetailByUserIdResponse {
  meta: IResponseMeta;
  data: IExamGetDetailByUserIdData;
}
export interface IExamGetDetailBatchByUserIdResponse {
  meta: IResponseMeta;
  data: IExamGetDetailBatchByUserIdData;
}
export interface IQuestionGetallByChapterIdResponse {
  meta: IResponseMeta;
  data: IQuestion[];
}
export interface IExamCreateResultByUserIdResponse {
  meta: IResponseMeta;
  data: IExamCreateResultByUserIdData[];
}

export interface IResultGetDetailByUserIdResponse {
  meta: IResponseMeta;
  data: IResultGetDetailByUserIdData;
}
export interface IScheduleGetAllBatchByMajorResponse {
  meta: IResponseMeta;
  data: IScheduleGetAllBatchByMajorData[];
}
export interface IProvinceGetAllResponse {
  meta: IResponseMeta;
  data: IProvinceGetData[];
}
export interface ICitiesGetAllResponse {
  meta: IResponseMeta;
  data: ICitiesGetAllData[];
}
export interface ISchoolGetByCityIdResponse {
  meta: IResponseMeta;
  data: ISchoolsGetByCityIdData[];
}
export interface IStudentUpdateByUserIdResponse {
  meta: IResponseMeta;
  data: IStudentUpdateByUserId;
}
export interface IProductGetAllResponse {
  meta: IResponseMeta;
  data: IProductGetAllData[];
}
export interface IProductGetOneResponse {
  meta: IResponseMeta;
  data: IProductGetAllData;
}
export interface IPaymentMethodGetAllResponse {
  meta: IResponseMeta;
  data: IPaymentMethod;
}
export interface IOrderCreateResponse {
  meta: IResponseMeta;
  data: IOrderCreateData;
}
export interface IScheduleGetAllByFilterResponse {
  meta: IResponseMeta;
  data: IScheduleGetAllByTodayData[];
}

export interface IResultGetAllBatchScoreByUserIdResponse {
  meta: IResponseMeta;
  data: IResultGetAllBatchScoreData[];
}
export interface ITryoutGetAllTypeResponse {
  meta: IResponseMeta;
  data: ITryoutGetAllTypeData[];
}
export interface ISubjectGetAllResponse {
  meta: IResponseMeta;
  data: ISubjectGetAllData[];
}
export interface IChapterGetAllByFilterResponse {
  meta: IResponseMeta;
  data: IChapterGetAllByFilterData[];
}
export interface IQuestionGetVideoExplanationResponse {
  meta: IResponseMeta;
  data: IQuestionGetVideoExplanationData;
}
export interface IGetAllRelatedReferralResponse {
  meta: IResponseMeta;
  data: IDatatableResponse<IGetAllRelatedReferralData>;
}
export interface IRoleGetByUserIdResponse {
  meta: IResponseMeta;
  data: IRoleGetByUserIdData;
}
