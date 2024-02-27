import { IStudentUpdateByUserIdPayload } from "@/_types/payload.type";
import {
  ICitiesGetAllResponse,
  IProvinceGetAllResponse,
  IRoleGetByUserIdResponse,
  ISchoolGetByCityIdResponse,
  IStudentUpdateByUserIdResponse,
} from "@/_types/response.type";

export interface IStudentServices {
  provinceGetAllServices: () => Promise<IProvinceGetAllResponse | null>;
  citiesGetAllServices: (
    provinceId: number
  ) => Promise<ICitiesGetAllResponse | null>;
  schoolsGetByCityIdServices: (
    cityId: number
  ) => Promise<ISchoolGetByCityIdResponse | null>;
  studentUpdateByUserIdServices: (
    userId: number,
    payload: IStudentUpdateByUserIdPayload
  ) => Promise<IStudentUpdateByUserIdResponse | null>;
  getRoleByUserIdServices: (
    userId: number
  ) => Promise<IRoleGetByUserIdResponse | null>;
}
