import {
  IProductGetAllResponse,
  IProductGetOneResponse,
  IProductPromoBannerResponse,
} from "@/_types/response.type";
import { toast } from "react-toastify";
import productRepository from "../repository/productRepository";
import { IProductServices } from "./types/productServices.type";
import { IProductGetAllPayload } from "@/_types/payload.type";

const productServices: IProductServices = {
  getProductPromoBannerServices: async (
    name: string
  ): Promise<IProductPromoBannerResponse | null> => {
    try {
      const res = await productRepository.getProductPromoBannerRepository(name);

      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getAllProductServices: async (
    params: IProductGetAllPayload
  ): Promise<IProductGetAllResponse | null> => {
    try {
      const res = await productRepository.getAllProductRepository(params);

      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getOneProductServices: async (
    id: string
  ): Promise<IProductGetOneResponse | null> => {
    try {
      const res = await productRepository.getOneProductRepository(id);

      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default productServices;
