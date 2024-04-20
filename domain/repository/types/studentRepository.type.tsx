import {
  IGetOneStudentByUserIdResponse,
  IRoleGetByUserIdResponse,
} from "@/_types/response.type";

export interface IStudentRepository {
  getRoleByUserIdRepository: (
    userId: number
  ) => Promise<IRoleGetByUserIdResponse>;
  getOneStudentByUserIdRepository: (
    userId: number,
    config: any
  ) => Promise<IGetOneStudentByUserIdResponse>;
}
