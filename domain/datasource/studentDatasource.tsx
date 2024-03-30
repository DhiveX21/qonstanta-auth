import { IStudentDatasource } from "./types/studentDatasource.type";
import axiosInstance from "./axiosConfig";

const urlStudentService = process.env.NEXT_PUBLIC_URL_STUDENT_SERVICE;

const studentDatasource: IStudentDatasource = {
  getRoleByUserId: async (userId: number) => {
    return await axiosInstance.get(
      `${urlStudentService}student-roles/user/${userId}`
    );
  },
};

export default studentDatasource;
