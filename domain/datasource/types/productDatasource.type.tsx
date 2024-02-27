import { IProductGetAllPayload } from "@/_types/payload.type";
import {
  IProductGetAllResponse,
  IProductGetOneResponse,
  IProductPromoBannerResponse,
} from "@/_types/response.type";
import { AxiosResponse } from "axios";

export interface IProductDatasource {
  getProductPromoBanner: (
    name: string
  ) => Promise<AxiosResponse<IProductPromoBannerResponse>>;
  getAllProduct: (
    params: IProductGetAllPayload
  ) => Promise<AxiosResponse<IProductGetAllResponse>>;
  getOneProduct: (id: string) => Promise<AxiosResponse<IProductGetOneResponse>>;
}
