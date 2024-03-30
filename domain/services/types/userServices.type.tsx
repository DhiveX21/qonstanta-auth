import {
  ISendOTPRegisterPayload,
  IUserLoginPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  ISendOTPRegisterResponse,
  IUserLoginResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";

export interface IUserServices {
  sendOTPRegisterServices: (
    body: ISendOTPRegisterPayload
  ) => Promise<ISendOTPRegisterResponse | null>;
  verifyOTPRegisterServices: (
    body: IVerifyOTPRegisterPayload
  ) => Promise<IVerifyOTPRegisterResponse | null>;
  userRegisterServices: (
    body: IUserRegisterPayload
  ) => Promise<IUserRegisterResponse | null>;
  userLoginServices: (
    body: IUserLoginPayload
  ) => Promise<IUserLoginResponse | null>;
}
