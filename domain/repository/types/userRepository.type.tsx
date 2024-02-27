import {
  IGetAllRelatedReferralPayload,
  ISendOTPRegisterPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  IGetAllRelatedReferralResponse,
  ISendOTPRegisterResponse,
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
  getAllRelatedReferralRepository: (
    body: IGetAllRelatedReferralPayload
  ) => Promise<IGetAllRelatedReferralResponse>;
  exportReferralRepository: (referral_id: string) => void;
}
