import { IEnumLevel, IEnumMajor, IEnumRoles } from "./enum.type";

export interface IUser {
  expires: string;
  accessToken: string;
  credentials: ICredentials;
  Session: any;
}

export interface ICredentials {
  id: number;
  name: string;
  role: "student";
  phone_number: string;
  email: string;
  verification_date: string;
  studentData: IStudentData;
}

export interface IStudentData {
  id: number;
  gender: string;
  grade: number;

  id_qonstanta: string;
  major: IEnumMajor;
  name: string;
  phone_number: string;
  school_name: string;
  user_id: number;
}

export interface ISimpleUser {
  id: number;
  name: string;
}

export interface IClassStudent {
  major: IEnumMajor;
  level: IEnumLevel;
  grade: number;
  _id: string;
}

export interface IReferral {
  id: number;
  name: string;
  role: IEnumRoles;
  phone_number: string;
  email: string;
  verification_date: string;
  student_detail: IStudentData;
  referral_code_regis: string;
  referral: any;
}

export interface IRoles {
  short_name: string;
  name: string;
  slug: string;
  _id: string;
  special_limitations: any;
}
