import {
  IFireDeleteAllDocPayload,
  IFireDeleteOneDocPayload,
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IFireWatchExamProgressPayload,
} from "../../../_types/payload.type";

export interface IFirebaseDatasource {
  setFireExamProgressDatasource: (
    body: IFireExamProgressPayload | IFireExamProgressContinuesPayload
  ) => Promise<any>;
  watchOneData: (payload: IFireWatchExamProgressPayload) => any;
  getOneDoc: (payload: IFireGetOneDocPayload) => Promise<any>;
  getDocByQuery: (payload: IFireGetDocByQueryPayload) => Promise<any>;
  deleteOneDoc: (payload: IFireDeleteOneDocPayload) => Promise<any>;
  deleteAllDoc: (payload: IFireDeleteAllDocPayload) => Promise<any>;
}
