import {
  IProductGetAllResponse,
  IProductGetOneResponse,
  IProductPromoBannerResponse,
} from "@/_types/response.type";

import { IProductRepository } from "./types/productRepository.type";
import productDatasource from "../datasource/productDatasource";
import { AxiosResponse } from "axios";
import { IProductGetAllPayload } from "@/_types/payload.type";

const productRepository: IProductRepository = {
  getProductPromoBannerRepository: async (
    name: string
  ): Promise<IProductPromoBannerResponse> => {
    try {
      const res: AxiosResponse<IProductPromoBannerResponse> =
        await productDatasource.getProductPromoBanner(name);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllProductRepository: async (
    params: IProductGetAllPayload
  ): Promise<IProductGetAllResponse> => {
    try {
      const res: AxiosResponse<IProductGetAllResponse> =
        await productDatasource.getAllProduct(params);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getOneProductRepository: async (
    id: string
  ): Promise<IProductGetOneResponse> => {
    try {
      const res: AxiosResponse<IProductGetOneResponse> =
        await productDatasource.getOneProduct(id);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default productRepository;
