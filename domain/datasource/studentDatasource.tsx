import { IStudentDatasource } from "./types/studentDatasource.type";
import axiosInstance from "./axiosConfig";

const urlStudentService = process.env.NEXT_PUBLIC_URL_STUDENT_SERVICE;
const urlStudentRoleService = process.env.NEXT_PUBLIC_URL_STUDENT_ROLE_SERVICE;

const studentDatasource: IStudentDatasource = {
  getRoleByUserId: async (userId: number) => {
    return await axiosInstance.get(
      `${urlStudentRoleService}student-roles/user/${userId}`
    );
  },
  getOneStudentByUserId: async (userId: number, config: any) => {
    return await axiosInstance.get(
      `${urlStudentService}api/students/user/${userId}`,
      {
        ...config,
      }
    );
  },
};

export default studentDatasource;
