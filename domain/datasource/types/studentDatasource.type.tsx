import { IStudentUpdateByUserIdPayload } from "@/_types/payload.type";
import {
  ICitiesGetAllResponse,
  IProvinceGetAllResponse,
  IRoleGetByUserIdResponse,
  ISchoolGetByCityIdResponse,
  IStudentUpdateByUserIdResponse,
} from "@/_types/response.type";
import { Axios, AxiosResponse } from "axios";

export interface IStudentDatasource {
  getAllProvince: () => Promise<AxiosResponse<IProvinceGetAllResponse>>;
  getAllCities: (
    provinceId: number
  ) => Promise<AxiosResponse<ICitiesGetAllResponse>>;
  getSchoolsByCityId: (
    cityId: number
  ) => Promise<AxiosResponse<ISchoolGetByCityIdResponse>>;
  updateStudentByUserId: (
    userId: number,
    payload: IStudentUpdateByUserIdPayload
  ) => Promise<AxiosResponse<IStudentUpdateByUserIdResponse>>;
  getRoleByUserId: (
    userId: number
  ) => Promise<AxiosResponse<IRoleGetByUserIdResponse>>;
}
