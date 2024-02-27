import { IProductGetAllPayload } from "@/_types/payload.type";
import {
  IProductGetAllResponse,
  IProductGetOneResponse,
  IProductPromoBannerResponse,
} from "@/_types/response.type";

export interface IProductServices {
  getProductPromoBannerServices: (
    name: string
  ) => Promise<IProductPromoBannerResponse | null>;
  getAllProductServices: (
    params: IProductGetAllPayload
  ) => Promise<IProductGetAllResponse | null>;
  getOneProductServices: (id: string) => Promise<IProductGetOneResponse | null>;
}
