import {
  IOrderCreatePayload,
  IProductGetAllPayload,
} from "@/_types/payload.type";
import {
  IOrderCreateResponse,
  IPaymentMethodGetAllResponse,
  IProductGetAllData,
  IProductGetAllResponse,
  IProductGetOneResponse,
} from "@/_types/response.type";
import { IPaymentMethod } from "@/_types/transaction.type";
import productServices from "@/domain/services/productServices";
import transactionServices from "@/domain/services/transactionServices";
import useControlZustand from "@/zustand/useControlZustand";
import React, { useState } from "react";
import { StringDecoder } from "string_decoder";

const useFacility = () => {
  const [allProductData, setAllProductData] = useState<IProductGetAllData[]>();
  const [productData, setProductData] = useState<IProductGetAllData>();
  const [paymentMethodData, setPaymentMethodData] = useState<IPaymentMethod>();

  const { setFetchLoading, removeFetchLoading } = useControlZustand();
  const fetchAllProduct = async (params: IProductGetAllPayload) => {
    try {
      setFetchLoading({
        active: true,
        description: "Merangkum Produk terbaik untukmu <3",
        title: "Tunggu...",
        id: "allProductFacility",
      });
      let allProductRes: IProductGetAllResponse | null =
        await productServices.getAllProductServices(params);
      setAllProductData(allProductRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("allProductFacility");
      }, 500);
    }
  };
  const fetchOneProduct = async (id: string) => {
    try {
      setFetchLoading({
        active: true,
        description: "Merangkum Produk terbaik untukmu <3",
        title: "Tunggu...",
        id: "oneProductFacilityDetail",
      });
      let productRes: IProductGetOneResponse | null =
        await productServices.getOneProductServices(id);
      setProductData(productRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("oneProductFacilityDetail");
      }, 500);
    }
  };

  const fetchAllPaymentMethod = async () => {
    try {
      setFetchLoading({
        active: true,
        description: "Memuat Metode Pembayaran.",
        title: "Tunggu...",
        id: "allPaymentMethodFacility",
      });
      let paymentMethodRes: IPaymentMethodGetAllResponse | null =
        await transactionServices.getAllPaymentMethodServices();
      setPaymentMethodData(paymentMethodRes!.data);
      // console.log(paymentMethodRes);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("allPaymentMethodFacility");
      }, 500);
    }
  };

  const createOrder = async (payload: IOrderCreatePayload) => {
    try {
      setFetchLoading({
        active: true,
        description: "Mengirim Permintaan Order.",
        title: "Tunggu...",
        id: "createOrderFacility",
      });
      let createOrderRes: IOrderCreateResponse | null =
        await transactionServices.createOrderServices(payload);

      window.location.replace(
        createOrderRes!.data.installment_detail[0].snap_url
      );
      // console.log(createOrderRes);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("createOrderFacility");
      }, 500);
    }
  };

  return {
    fetchAllProduct,
    allProductData,
    fetchOneProduct,
    productData,
    fetchAllPaymentMethod,
    paymentMethodData,
    createOrder,
  };
};

export default useFacility;
