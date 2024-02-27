import {
  IOrderCreateResponse,
  IPaymentMethodGetAllResponse,
} from "@/_types/response.type";
import { AxiosResponse } from "axios";
import { ITransactionRepository } from "./types/transactionRepository.type";
import transactionDatasource from "../datasource/transactionDatasource";
import { IOrderCreatePayload } from "@/_types/payload.type";

const transactionRepository: ITransactionRepository = {
  getAllPaymentMethodRepository:
    async (): Promise<IPaymentMethodGetAllResponse> => {
      try {
        const res: AxiosResponse<IPaymentMethodGetAllResponse> =
          await transactionDatasource.getAllPaymentMethod();
        return res.data;
      } catch (error: any) {
        console.error(JSON.stringify(error));
        throw new Error(String(error));
      }
    },
  createOrderRepository: async (
    payload: IOrderCreatePayload
  ): Promise<IOrderCreateResponse> => {
    try {
      const res: AxiosResponse<IOrderCreateResponse> =
        await transactionDatasource.createOrder(payload);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default transactionRepository;
