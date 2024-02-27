import { IStudentDatasource } from "./types/studentDatasource.type";
import { IStudentUpdateByUserIdPayload } from "@/_types/payload.type";
import axiosInstance from "./axiosConfig";

const urlStudentService = process.env.URL_STUDENT_SERVICE;

const studentDatasource: IStudentDatasource = {
  getAllProvince: async () => {
    return await axiosInstance.get(`${urlStudentService}api/provinces`);
  },
  getAllCities: async (provinceId: number) => {
    return await axiosInstance.get(`${urlStudentService}api/cities`, {
      params: {
        province_id: provinceId,
      },
    });
  },
  getSchoolsByCityId: async (cityId: number) => {
    return await axiosInstance.get(`${urlStudentService}api/schools`, {
      params: {
        city_id: cityId,
      },
    });
  },
  updateStudentByUserId: async (
    userId: number,
    payload: IStudentUpdateByUserIdPayload
  ) => {
    return await axiosInstance.put(
      `${urlStudentService}api/students/${userId}`,
      {
        ...payload,
      }
    );
  },
  getRoleByUserId: async (userId: number) => {
    return await axiosInstance.get(
      `${urlStudentService}student-roles/user/${userId}`
    );
  },
};

export default studentDatasource;
