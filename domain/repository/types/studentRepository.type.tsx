import { IStudentUpdateByUserIdPayload } from "@/_types/payload.type";
import {
  ICitiesGetAllResponse,
  IProvinceGetAllResponse,
  IRoleGetByUserIdResponse,
  ISchoolGetByCityIdResponse,
  IStudentUpdateByUserIdResponse,
} from "@/_types/response.type";

export interface IStudentRepository {
  getAllProvinceRepository: () => Promise<IProvinceGetAllResponse>;
  getAllCitiesRepository: (
    provinceId: number
  ) => Promise<ICitiesGetAllResponse>;
  getSchoolsByCityIdRepository: (
    cityId: number
  ) => Promise<ISchoolGetByCityIdResponse>;
  updateStudentByUserIdRepository: (
    userId: number,
    payload: IStudentUpdateByUserIdPayload
  ) => Promise<IStudentUpdateByUserIdResponse>;
  getRoleByUserIdRepository: (
    userId: number
  ) => Promise<IRoleGetByUserIdResponse>;
}
