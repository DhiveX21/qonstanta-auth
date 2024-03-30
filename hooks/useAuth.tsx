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
import { IAuthCookies } from "@/_types/users.type";
import userServices from "@/domain/services/userServices";
import useControlZustand from "@/zustand/useControlZustand";
import React from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const useAuth = () => {
  // const { isPostLoading, setIsPostLoading } = useControlZustand();
  const [cookies, setCookie] = useCookies(["auth"]);
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

  const setLoginCookies = (cookiesData: IAuthCookies) => {
    setCookie("auth", cookiesData);
  };

  return {
    sendOTPRegister,
    verifyOTPRegister,
    userRegister,
    userLogin,
    setLoginCookies,
  };
};

export default useAuth;
