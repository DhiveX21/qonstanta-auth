import {
  IFireDeleteAllDocPayload,
  IFireDeleteOneDocPayload,
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IFireWatchExamProgressPayload,
} from "@/_types/payload.type";

export interface IFirebaseRepository {
  setFireExamProgressRepository: (
    body: IFireExamProgressPayload | IFireExamProgressContinuesPayload
  ) => Promise<any>;
  watchFireExamProgressRepository: (body: IFireWatchExamProgressPayload) => any;
  getFireOneDocRepository: (body: IFireGetOneDocPayload) => Promise<any>;
  getDocByQueryRepository: (body: IFireGetDocByQueryPayload) => Promise<any>;
  deleteFireOneDocRepository: (body: IFireDeleteOneDocPayload) => Promise<any>;
  deleteFireAllDocRepository: (body: IFireDeleteAllDocPayload) => Promise<any>;
}
