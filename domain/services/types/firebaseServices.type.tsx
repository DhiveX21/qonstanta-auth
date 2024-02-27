import {
  IFireDeleteAllDocPayload,
  IFireDeleteOneDocPayload,
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IFireWatchExamProgressPayload,
} from "@/_types/payload.type";
export interface IFirebaseServices {
  setFireExamProgressServices: (
    body: IFireExamProgressPayload | IFireExamProgressContinuesPayload
  ) => Promise<any | null>;
  watchFireExamProgressServices: (
    body: IFireWatchExamProgressPayload
  ) => any | null;
  getFireOneDocServices: (body: IFireGetOneDocPayload) => any | null;
  getDocByQueryServices: (body: IFireGetDocByQueryPayload) => any | null;
  deleteFireOneDocServices: (body: IFireDeleteOneDocPayload) => any | null;
  deleteFireAllDocServices: (body: IFireDeleteAllDocPayload) => any | null;
}
