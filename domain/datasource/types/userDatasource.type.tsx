import {
  IGetAllRelatedReferralPayload,
  ISendOTPRegisterPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
  IVerifyReferralCodePayload,
} from "@/_types/payload.type";
import {
  IGetAllRelatedReferralResponse,
  ISendOTPRegisterResponse,
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
  getAllRelatedReferral: (
    body: IGetAllRelatedReferralPayload
  ) => Promise<AxiosResponse<IGetAllRelatedReferralResponse>>;
}
