import {
  IGetOneStudentByUserIdResponse,
  IRoleGetByUserIdResponse,
} from "@/_types/response.type";

export interface IStudentServices {
  getRoleByUserIdServices: (
    userId: number
  ) => Promise<IRoleGetByUserIdResponse | null>;
  getOneStudentByUserIdServices: (
    userId: number,
    config: any
  ) => Promise<IGetOneStudentByUserIdResponse | null>;
}
