import {
  ISendOTPRegisterPayload,
  IUserLoginPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  IGetOneStudentByUserIdResponse,
  IRoleGetByUserIdResponse,
  ISendOTPRegisterResponse,
  IUserLoginResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";
import { IAuthCookies } from "@/_types/users.type";
import userServices from "@/domain/services/userServices";
import useControlZustand from "@/zustand/useControlZustand";
import React from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import useEncrypt from "./useEncrypt";
import studentServices from "@/domain/services/studentServices";

const useAuth = () => {
  // const { isPostLoading, setIsPostLoading } = useControlZustand();

  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "credentials",
    "studentData",
    "roles",
  ]);
  const { encrypt, decrypt } = useEncrypt();

  const [isPostLoading, setIsPostLoading] = useControlZustand((state) => [
    state.isPostLoading,
    state.setIsPostLoading,
  ]);

  const sendOTPRegister = async (
    body: ISendOTPRegisterPayload
  ): Promise<ISendOTPRegisterResponse | null> => {
    setIsPostLoading({
      active: true,
    });
    try {
      const res = await userServices.sendOTPRegisterServices(body);
      setIsPostLoading({
        active: false,
      });
      return res;
    } catch (error) {
      toast.error(String(error));
      setIsPostLoading({
        active: false,
      });
      return null;
    }
  };

  const verifyOTPRegister = async (
    body: IVerifyOTPRegisterPayload
  ): Promise<IVerifyOTPRegisterResponse | null> => {
    setIsPostLoading({
      active: true,
    });
    try {
      const res = await userServices.verifyOTPRegisterServices(body);
      setIsPostLoading({
        active: false,
      });
      return res;
    } catch (error) {
      toast.error(String(error));
      setIsPostLoading({
        active: false,
      });
      return null;
    }
  };

  const userRegister = async (
    body: IUserRegisterPayload
  ): Promise<IUserRegisterResponse | null> => {
    setIsPostLoading({
      active: true,
    });
    try {
      const res = await userServices.userRegisterServices(body);
      setIsPostLoading({
        active: false,
      });
      return res;
    } catch (error) {
      toast.error(String(error));
      setIsPostLoading({
        active: false,
      });
      return null;
    }
  };

  const userLogin = async (
    body: IUserLoginPayload
  ): Promise<IUserLoginResponse | null> => {
    setIsPostLoading({
      active: true,
    });
    try {
      const res = await userServices.userLoginServices(body);
      setIsPostLoading({
        active: false,
      });
      return res;
    } catch (error) {
      toast.error(String(error));
      setIsPostLoading({
        active: false,
      });
      return null;
    }
  };

  const getUserRole = async (
    userId: number
  ): Promise<IRoleGetByUserIdResponse | null> => {
    setIsPostLoading({
      active: true,
    });
    try {
      const res = await studentServices.getRoleByUserIdServices(userId);
      setIsPostLoading({
        active: false,
      });
      return res;
    } catch (error) {
      toast.error(String(error));
      setIsPostLoading({
        active: false,
      });
      return null;
    }
  };
  const getOneStudentByUserId = async (
    userId: number,
    config: any
  ): Promise<IGetOneStudentByUserIdResponse | null> => {
    setIsPostLoading({
      active: true,
    });
    try {
      const res = await studentServices.getOneStudentByUserIdServices(
        userId,
        config
      );
      setIsPostLoading({
        active: false,
      });
      return res;
    } catch (error) {
      toast.error(String(error));
      setIsPostLoading({
        active: false,
      });
      return null;
    }
  };

  const setLoginCookies = (cookiesData: IAuthCookies) => {
    setCookie("accessToken", encrypt(JSON.stringify(cookiesData.accessToken)));
    setCookie("credentials", encrypt(JSON.stringify(cookiesData.credentials)));
    setCookie("studentData", encrypt(JSON.stringify(cookiesData.studentData)));
    setCookie("roles", encrypt(JSON.stringify(cookiesData.roles)));
  };

  const removeLoginCookies = () => {
    removeCookie("accessToken");
    removeCookie("credentials");
    removeCookie("studentData");
    removeCookie("roles");
  };

  return {
    sendOTPRegister,
    verifyOTPRegister,
    userRegister,
    userLogin,
    getUserRole,
    setLoginCookies,
    removeLoginCookies,
    getOneStudentByUserId,
  };
};

export default useAuth;
