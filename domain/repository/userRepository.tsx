import {
  ISendOTPRegisterPayload,
  IUserLoginPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  IErrorHandler,
  ISendOTPRegisterResponse,
  IUserLoginResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";
import React from "react";
import userDatasource from "../datasource/userDatasource";
import { IUserRepository } from "./types/userRepository.type";
import { AxiosError } from "axios";

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
  userLogin: async (body: IUserLoginPayload): Promise<IUserLoginResponse> => {
    try {
      const res = await userDatasource.userLogin(body);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      if (error.response.status === 401) {
        throw new Error("Password yang kamu masukan Salah!");
      } else {
        throw new Error("Gagal Login");
      }
    }
  },
};

export default userRepository;
