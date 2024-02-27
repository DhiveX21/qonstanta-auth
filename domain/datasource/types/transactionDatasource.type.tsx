import { IOrderCreatePayload } from "@/_types/payload.type";
import {
  IOrderCreateResponse,
  IPaymentMethodGetAllResponse,
} from "@/_types/response.type";
import { AxiosResponse } from "axios";

export interface ITransactionDatasource {
  getAllPaymentMethod: () => Promise<
    AxiosResponse<IPaymentMethodGetAllResponse>
  >;
  createOrder: (
    payload: IOrderCreatePayload
  ) => Promise<AxiosResponse<IOrderCreateResponse>>;
}
