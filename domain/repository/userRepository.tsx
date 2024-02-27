import {
  IGetAllRelatedReferralPayload,
  ISendOTPRegisterPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  IErrorHandler,
  IGetAllRelatedReferralResponse,
  ISendOTPRegisterResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";
import React from "react";
import userDatasource from "../datasource/userDatasource";
import { IUserRepository } from "./types/userRepository.type";

const userRepository: IUserRepository = {
  sendOTPRegisterRepository: async (
    body: ISendOTPRegisterPayload
  ): Promise<ISendOTPRegisterResponse> => {
    try {
      const res = await userDatasource.sendOTPRegister(body);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  verifyOTPRegisterRepository: async (
    body: IVerifyOTPRegisterPayload
  ): Promise<IVerifyOTPRegisterResponse> => {
    try {
      const res = await userDatasource.verifyOTPRegister(body);
      return res.data;
    } catch (error) {
      console.error(JSON.stringify(error));
      throw new Error("Kode OTP Tidak Cocok!");
    }
  },
  userRegister: async (
    body: IUserRegisterPayload
  ): Promise<IUserRegisterResponse> => {
    try {
      const res = await userDatasource.userRegister(body);
      return res.data;
    } catch (error) {
      console.error(JSON.stringify(error));
      throw new Error("Gagal Registrasi");
    }
  },
  getAllRelatedReferralRepository: async (
    body: IGetAllRelatedReferralPayload
  ): Promise<IGetAllRelatedReferralResponse> => {
    try {
      const res = await userDatasource.getAllRelatedReferral(body);
      return res.data;
    } catch (error) {
      console.error(JSON.stringify(error));
      throw new Error("Gagal Registrasi");
    }
  },
  exportReferralRepository: function (referral_id: string): void {
    userDatasource.exportReferral(referral_id);
  }
};

export default userRepository;
