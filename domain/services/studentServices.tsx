import {
  IGetOneStudentByUserIdResponse,
  IRoleGetByUserIdResponse,
} from "@/_types/response.type";
import { toast } from "react-toastify";
import { IStudentServices } from "./types/studentServices.type";
import studentRepository from "../repository/studentRepository";

const studentServices: IStudentServices = {
  getRoleByUserIdServices: async (
    userId: number
  ): Promise<IRoleGetByUserIdResponse | null> => {
    try {
      const res = await studentRepository.getRoleByUserIdRepository(userId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getOneStudentByUserIdServices: async (
    userId: number,
    config: any
  ): Promise<IGetOneStudentByUserIdResponse | null> => {
    try {
      const res = await studentRepository.getOneStudentByUserIdRepository(
        userId,
        config
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default studentServices;
