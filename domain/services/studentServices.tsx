import {
  ICitiesGetAllResponse,
  IProvinceGetAllResponse,
  IRoleGetByUserIdResponse,
  ISchoolGetByCityIdResponse,
  IStudentUpdateByUserIdResponse,
} from "@/_types/response.type";
import { toast } from "react-toastify";
import { IStudentServices } from "./types/studentServices.type";
import studentRepository from "../repository/studentRepository";
import { IStudentUpdateByUserIdPayload } from "@/_types/payload.type";

const studentServices: IStudentServices = {
  provinceGetAllServices: async (): Promise<IProvinceGetAllResponse | null> => {
    try {
      const res = await studentRepository.getAllProvinceRepository();
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  citiesGetAllServices: async (
    provinceId: number
  ): Promise<ICitiesGetAllResponse | null> => {
    try {
      const res = await studentRepository.getAllCitiesRepository(provinceId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  schoolsGetByCityIdServices: async (
    cityId: number
  ): Promise<ISchoolGetByCityIdResponse | null> => {
    try {
      const res = await studentRepository.getSchoolsByCityIdRepository(cityId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  studentUpdateByUserIdServices: async (
    userId: number,
    payload: IStudentUpdateByUserIdPayload
  ): Promise<IStudentUpdateByUserIdResponse | null> => {
    try {
      const res = await studentRepository.updateStudentByUserIdRepository(
        userId,
        payload
      );
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
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
};

export default studentServices;
