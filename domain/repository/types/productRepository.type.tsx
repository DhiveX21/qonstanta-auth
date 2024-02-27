import { IProductGetAllPayload } from "@/_types/payload.type";
import {
  IProductGetAllResponse,
  IProductGetOneResponse,
  IProductPromoBannerResponse,
} from "@/_types/response.type";

export interface IProductRepository {
  getProductPromoBannerRepository: (
    name: string
  ) => Promise<IProductPromoBannerResponse>;
  getAllProductRepository: (
    params: IProductGetAllPayload
  ) => Promise<IProductGetAllResponse>;
  getOneProductRepository: (id: string) => Promise<IProductGetOneResponse>;
}
