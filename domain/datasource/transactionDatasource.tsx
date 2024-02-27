import { IOrderCreatePayload } from "@/_types/payload.type";
import axiosInstance from "./axiosConfig";

import { ITransactionDatasource } from "./types/transactionDatasource.type";

const urlTransactionService = process.env.URL_TRANSACTION_SERVICE;
const urlOrderService = process.env.URL_ORDER_SERVICE;

const transactionDatasource: ITransactionDatasource = {
  getAllPaymentMethod: async () => {
    return await axiosInstance.get(
      `${urlTransactionService}/api/payments/method`
    );
  },

  createOrder: async (payload: IOrderCreatePayload) => {
    return await axiosInstance.post(`${urlOrderService}orders`, {
      ...payload,
    });
  },
};

export default transactionDatasource;
