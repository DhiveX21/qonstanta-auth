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

export interface IUserRepository {
  sendOTPRegisterRepository: (
    body: ISendOTPRegisterPayload
  ) => Promise<ISendOTPRegisterResponse>;
  verifyOTPRegisterRepository: (
    body: IVerifyOTPRegisterPayload
  ) => Promise<IVerifyOTPRegisterResponse>;
  userRegister: (body: IUserRegisterPayload) => Promise<IUserRegisterResponse>;
  userLogin: (body: IUserLoginPayload) => Promise<IUserLoginResponse>;
}
