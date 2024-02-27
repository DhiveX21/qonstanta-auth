import { IOrderCreatePayload } from "@/_types/payload.type";
import {
  IOrderCreateResponse,
  IPaymentMethodGetAllResponse,
} from "@/_types/response.type";

export interface ITransactionServices {
  getAllPaymentMethodServices: () => Promise<IPaymentMethodGetAllResponse | null>;
  createOrderServices: (
    payload: IOrderCreatePayload
  ) => Promise<IOrderCreateResponse | null>;
}
