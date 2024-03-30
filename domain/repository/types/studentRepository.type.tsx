import { IRoleGetByUserIdResponse } from "@/_types/response.type";

export interface IStudentRepository {
  getRoleByUserIdRepository: (
    userId: number
  ) => Promise<IRoleGetByUserIdResponse>;
}
