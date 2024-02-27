import { IOrderCreatePayload } from "@/_types/payload.type";
import {
  IOrderCreateResponse,
  IPaymentMethodGetAllResponse,
} from "@/_types/response.type";

export interface ITransactionRepository {
  getAllPaymentMethodRepository: () => Promise<IPaymentMethodGetAllResponse>;
  createOrderRepository: (
    payload: IOrderCreatePayload
  ) => Promise<IOrderCreateResponse>;
}
