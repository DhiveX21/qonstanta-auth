import axiosInstance from "@/domain/datasource/axiosConfig";
import axiosInstancePublic from "@/domain/datasource/axiosConfigPublic";

const urlUserService = process.env.NEXT_PUBLIC_URL_USER_SERVICE;
const urlPublicService = process.env.NEXT_PUBLIC_URL_PUBLIC_SERVICE;

/////////////////////////////////
//////////////POST///////////////
/////////////////////////////////

export function userLogin(body) {
  return axiosInstancePublic.post(`${urlPublicService}api/login`, { ...body });
}

export async function userCheck(body) {
  return await axiosInstancePublic.post(`${urlPublicService}api/check-user`, {
    ...body,
  });
}

// export const userLogin = (body) => async (dispatch) => {
//   try {
//     dispatch(addGlobalPostLoading);
//     const data = await axiosInstance.post(`${urlUserService}/api/user/login`, {
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
export function userGetOne(userId) {
  return axiosInstance.get(`${urlUserService}api/users/${userId}`);
}
