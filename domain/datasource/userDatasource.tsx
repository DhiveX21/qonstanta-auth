import {
  IGetAllRelatedReferralPayload,
  ISendOTPRegisterPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
  IVerifyReferralCodePayload,
} from "@/_types/payload.type";
import { IUserDatasource } from "./types/userDatasource.type";
import axiosInstance from "./axiosConfig";
import axiosInstancePublic from "./axiosConfigPublic";

const urlUserService = process.env.URL_USER_SERVICE;
const urlPublicService = process.env.URL_PUBLIC_SERVICE;

const userDatasource: IUserDatasource = {
  sendOTPRegister: async (body: ISendOTPRegisterPayload) => {
    return await axiosInstancePublic.post(`${urlPublicService}api/send-otp`, {
      ...body,
    });
  },
  verifyOTPRegister: async (body: IVerifyOTPRegisterPayload) => {
    return await axiosInstancePublic.post(`${urlPublicService}api/check-otp`, {
      ...body,
    });
  },
  verifyReferralCode: async (body: IVerifyReferralCodePayload) => {
    return await axiosInstance.post(
      `${urlUserService}api/users/check-referral`,
      {
        ...body,
      }
    );
  },
  userRegister: async (body: IUserRegisterPayload) => {
    return await axiosInstancePublic.post(`${urlPublicService}api/register`, {
      ...body,
    });
  },
  getAllRelatedReferral: async (body: IGetAllRelatedReferralPayload) => {
    return await axiosInstance.post(
      `${urlUserService}api/users/datatable/referral`,
      {
        ...body,
      }
    );
  },
};

export default userDatasource;
