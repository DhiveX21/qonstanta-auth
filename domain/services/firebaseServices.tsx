import { toast } from "react-toastify";
import {
  IFireDeleteAllDocPayload,
  IFireDeleteOneDocPayload,
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IFireWatchExamProgressPayload,
} from "@/_types/payload.type";
import { IFirebaseServices } from "./types/firebaseServices.type";
import firebaseRepository from "../repository/firebaseRepository";

const firebaseServices: IFirebaseServices = {
  setFireExamProgressServices: async (
    body: IFireExamProgressPayload | IFireExamProgressContinuesPayload
  ): Promise<any | null> => {
    try {
      const res = await firebaseRepository.setFireExamProgressRepository(body);
      return res;
    } catch (error) {
      console.error(error);
      toast.error(String(error));
      return null;
    }
  },
  watchFireExamProgressServices: (
    body: IFireWatchExamProgressPayload
  ): any | null => {
    try {
      const res = firebaseRepository.watchFireExamProgressRepository(body);
      return res;
    } catch (error) {
      console.error(error);
      toast.error(String(error));
      return null;
    }
  },
  getFireOneDocServices: async (
    body: IFireGetOneDocPayload
  ): Promise<any | null> => {
    try {
      const res = await firebaseRepository.getFireOneDocRepository(body);

      return res.data();
    } catch (error) {
      console.error(error);
      toast.error(String(error));
      return null;
    }
  },
  getDocByQueryServices: async (
    body: IFireGetDocByQueryPayload
  ): Promise<any | null> => {
    try {
      const res = await firebaseRepository.getDocByQueryRepository(body);

      return res;
    } catch (error) {
      console.error(error);
      toast.error(String(error));
      return null;
    }
  },
  deleteFireOneDocServices: async (
    body: IFireDeleteOneDocPayload
  ): Promise<any | null> => {
    try {
      const res = await firebaseRepository.deleteFireOneDocRepository(body);

      return res;
    } catch (error) {
      console.error(error);
      toast.error(String(error));
      return null;
    }
  },
  deleteFireAllDocServices: async (
    body: IFireDeleteAllDocPayload
  ): Promise<any | null> => {
    try {
      const res = await firebaseRepository.deleteFireAllDocRepository(body);

      return res;
    } catch (error) {
      console.error(error);
      toast.error(String(error));
      return null;
    }
  },
};

export default firebaseServices;
