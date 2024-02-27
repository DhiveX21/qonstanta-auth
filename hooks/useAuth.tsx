import {
  ISendOTPRegisterPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  ISendOTPRegisterResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";
import userServices from "@/domain/services/userServices";
import useControlZustand from "@/zustand/useControlZustand";
import React from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  // const { isPostLoading, setIsPostLoading } = useControlZustand();
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

  return { sendOTPRegister, verifyOTPRegister, userRegister };
};

export default useAuth;
