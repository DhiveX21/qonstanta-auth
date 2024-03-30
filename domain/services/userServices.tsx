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
import userRepository from "../repository/userRepository";
import { toast } from "react-toastify";
import { IUserServices } from "./types/userServices.type";

const userServices: IUserServices = {
  sendOTPRegisterServices: async (
    body: ISendOTPRegisterPayload
  ): Promise<ISendOTPRegisterResponse | null> => {
    try {
      const res = await userRepository.sendOTPRegisterRepository(body);
      toast.success("Berhasil Mengirim OTP");
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  verifyOTPRegisterServices: async (
    body: IVerifyOTPRegisterPayload
  ): Promise<IVerifyOTPRegisterResponse | null> => {
    try {
      const res = await userRepository.verifyOTPRegisterRepository(body);
      toast.success("OTP Cocok!");
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  userRegisterServices: async (
    body: IUserRegisterPayload
  ): Promise<IUserRegisterResponse | null> => {
    try {
      const res = await userRepository.userRegister(body);
      toast.success("Success Registrasi");
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  userLoginServices: async (
    body: IUserLoginPayload
  ): Promise<IUserLoginResponse | null> => {
    try {
      const res = await userRepository.userLogin(body);
      toast.success("Success Login");
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default userServices;
