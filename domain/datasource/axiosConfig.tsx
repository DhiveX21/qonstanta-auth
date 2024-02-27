import axios from "axios";
// import { signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const axiosInstance = () => {
  const instance = axios.create({
    timeout: 120000,
  });
  instance.interceptors.request.use(async (config) => {
    // const session: any = await getSession();
    // if (session) {
    //   config.headers["Authorization"] = `Bearer ${session.accessToken}`;
    // } else {
    //   // toast.error("Session Expired");
    //   await signOut({ callbackUrl: "/" });
    // }

    // const session: any = await getSession();

    return config;
  });

  instance.interceptors.response.use(
    async (response) => {
      // If the response status code is in the 200 range, return the response as is
      return response;
    },
    async (error) => {
      if (error?.response?.status === 401) {
        // await signOut({
        //   callbackUrl: "/?note=Expired%20Session%20Please%20Relogin",
        // });
        // return Promise.reject("Session Expired, Relogin");
      } else {
        // For other errors, simply reject the promise with the error
        return Promise.reject(error);
      }
    }
  );
  return instance;
};

export default axiosInstance();
