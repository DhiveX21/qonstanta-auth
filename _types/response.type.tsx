import {
  IEnumGender,
  IEnumMajor,
  IEnumRoles,
  IEnumScheduleType,
} from "./enum.type";

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
export interface IUserLoginData {
  access_token: string;
  token_type: string;
  expires_in: string;
  user: {
    id: number;
    name: string;
    role: string;
    phone_number: string;
    email: string;
    verification_date: string;
    student_detail: {
      id: number;
      name: string;
      gender: IEnumGender;
      user_id: number;
      id_qonstanta: string;
      phone_number: string;
      grade: number;
      major: string;
      school_name: string;
    };
    referral_code_regis: string;
    referral: string;
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
export interface IUserLoginResponse {
  meta: IResponseMeta;
  data: IUserLoginData;
}

export interface IRoleGetByUserIdResponse {
  meta: IResponseMeta;
  data: IRoleGetByUserIdData;
}
