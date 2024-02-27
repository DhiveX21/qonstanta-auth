import { IProductDatasource } from "./types/productDatasource.type";
import axiosInstance from "./axiosConfig";
import { IProductGetAllPayload } from "@/_types/payload.type";

const urlProductService = process.env.URL_PRODUCT_SERVICE;

const productDatasource: IProductDatasource = {
  getProductPromoBanner: async (name: string) => {
    return await axiosInstance.get(
      `${urlProductService}/banner-promos/filter?name=${name}`
    );
  },
  getAllProduct: async (params: IProductGetAllPayload) => {
    return await axiosInstance.get(`${urlProductService}/products`, {
      params: { ...params },
    });
  },
  getOneProduct: async (id: string) => {
    return await axiosInstance.get(`${urlProductService}/products/${id}`);
  },
};

export default productDatasource;
