import { IRoleGetByUserIdResponse } from "@/_types/response.type";
import { IStudentRepository } from "./types/studentRepository.type";
import studentDatasource from "../datasource/studentDatasource";

const studentRepository: IStudentRepository = {
  getRoleByUserIdRepository: async (
    userId: number
  ): Promise<IRoleGetByUserIdResponse> => {
    try {
      const res = await studentDatasource.getRoleByUserId(userId);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default studentRepository;
