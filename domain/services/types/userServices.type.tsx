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
  getAllRelatedReferralServices: (
    body: IGetAllRelatedReferralPayload
  ) => Promise<IGetAllRelatedReferralResponse | null>;
  exportReferralServices: (referral_id: string) => void;
}
