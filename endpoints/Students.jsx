import axiosInstance from "@/domain/datasource/axiosConfig";
import axios from "axios";

const urlStudentService = process.env.URL_STUDENT_SERVICE;
const urlStudentRoleService = process.env.URL_STUDENT_ROLE_SERVICE;

/////////////////////////////////
//////////////POST///////////////
/////////////////////////////////

// export const userLogin = (body) => async (dispatch) => {
//   try {
//     dispatch(addGlobalPostLoading);
//     const data = await axios.post(`${urlStudentService}/api/user/login`, {
//       ...body,
//     });
//     dispatch(removeGlobalPostLoading);
//     return data;
//   } catch (error) {
//     dispatch(removeGlobalPostLoading);
//     return Promise.reject(error);
//   }
// };

/////////////////////////////////
//////////////GET////////////////
/////////////////////////////////
export function userGetOneByUserId(userId, config) {
  return axios.get(`${urlStudentService}/api/students/user/${userId}`, {
    ...config,
  });
}
export function getRoleByUserId(userId, config) {
  return axios.get(`${urlStudentRoleService}student-roles/user/${userId}`, {
    ...config,
  });
}
