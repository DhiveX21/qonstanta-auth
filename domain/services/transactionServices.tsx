import {
  IOrderCreateResponse,
  IPaymentMethodGetAllResponse,
} from "@/_types/response.type";
import { toast } from "react-toastify";

import { ITransactionServices } from "./types/transactionServices.type";
import transactionRepository from "../repository/transactionRepository";
import { IOrderCreatePayload } from "@/_types/payload.type";

const transactionServices: ITransactionServices = {
  getAllPaymentMethodServices:
    async (): Promise<IPaymentMethodGetAllResponse | null> => {
      try {
        const res = await transactionRepository.getAllPaymentMethodRepository();

        return res;
      } catch (error) {
        toast.error(String(error));
        return null;
      }
    },
  createOrderServices: async (
    payload: IOrderCreatePayload
  ): Promise<IOrderCreateResponse | null> => {
    try {
      const res = await transactionRepository.createOrderRepository(payload);

      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default transactionServices;
