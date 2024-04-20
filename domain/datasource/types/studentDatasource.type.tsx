import {
  IGetOneStudentByUserIdResponse,
  IRoleGetByUserIdResponse,
} from "@/_types/response.type";
import { Axios, AxiosResponse } from "axios";

export interface IStudentDatasource {
  getRoleByUserId: (
    userId: number
  ) => Promise<AxiosResponse<IRoleGetByUserIdResponse>>;
  getOneStudentByUserId: (
    userId: number,
    config: any
  ) => Promise<AxiosResponse<IGetOneStudentByUserIdResponse>>;
}
