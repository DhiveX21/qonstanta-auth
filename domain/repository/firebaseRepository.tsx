import {
  IFireDeleteAllDocPayload,
  IFireDeleteOneDocPayload,
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IFireWatchExamProgressPayload,
} from "@/_types/payload.type";
import { IFirebaseRepository } from "./types/firebaseRepository.type";
import firebaseDatasource from "../datasource/firebaseDatasource";

const firebaseRepository: IFirebaseRepository = {
  setFireExamProgressRepository: async (
    payload: IFireExamProgressPayload | IFireExamProgressContinuesPayload
  ): Promise<any> => {
    try {
      const res: any = await firebaseDatasource.setFireExamProgressDatasource(
        payload
      );
      return res;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  watchFireExamProgressRepository: (
    payload: IFireWatchExamProgressPayload
  ): any => {
    try {
      const res: any = firebaseDatasource.watchOneData(payload);
      console.log(res);
      return res;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getFireOneDocRepository: async (
    payload: IFireGetOneDocPayload
  ): Promise<any> => {
    try {
      const res: any = await firebaseDatasource.getOneDoc(payload);
      console.log(res);
      return res;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getDocByQueryRepository: async (
    payload: IFireGetDocByQueryPayload
  ): Promise<any> => {
    try {
      const res: any = await firebaseDatasource.getDocByQuery(payload);

      console.log(res);
      return res;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  deleteFireOneDocRepository: async (
    payload: IFireDeleteOneDocPayload
  ): Promise<any> => {
    try {
      const res: any = await firebaseDatasource.deleteOneDoc(payload);
      console.log(res);
      return res;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  deleteFireAllDocRepository: async (
    payload: IFireDeleteAllDocPayload
  ): Promise<any> => {
    try {
      const res: any = await firebaseDatasource.deleteAllDoc(payload);
      console.log(res);
      return res;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default firebaseRepository;
