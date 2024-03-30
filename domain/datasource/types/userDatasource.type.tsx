import {
  ISendOTPRegisterPayload,
  IUserLoginPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
  IVerifyReferralCodePayload,
} from "@/_types/payload.type";
import {
  ISendOTPRegisterResponse,
  IUserLoginResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";
import { Axios, AxiosResponse } from "axios";

export interface IUserDatasource {
  sendOTPRegister: (
    body: ISendOTPRegisterPayload
  ) => Promise<AxiosResponse<ISendOTPRegisterResponse>>;
  verifyOTPRegister: (
    body: IVerifyOTPRegisterPayload
  ) => Promise<AxiosResponse<IVerifyOTPRegisterResponse>>;
  verifyReferralCode: (
    body: IVerifyReferralCodePayload
  ) => Promise<AxiosResponse<IVerifyOTPRegisterResponse>>;
  userRegister: (
    body: IUserRegisterPayload
  ) => Promise<AxiosResponse<IUserRegisterResponse>>;
  userLogin: (
    body: IUserLoginPayload
  ) => Promise<AxiosResponse<IUserLoginResponse>>;
}
