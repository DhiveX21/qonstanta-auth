import { IRoleGetByUserIdResponse } from "@/_types/response.type";

export interface IStudentServices {
  getRoleByUserIdServices: (
    userId: number
  ) => Promise<IRoleGetByUserIdResponse | null>;
}
