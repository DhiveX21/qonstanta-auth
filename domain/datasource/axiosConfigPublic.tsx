import axios from "axios";

const axiosInstancePublic = () => {
  const instance = axios.create({
    timeout: 120000,
  });

  return instance;
};

export default axiosInstancePublic();
