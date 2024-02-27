import {
  IResultGetAllByUserIdPayload,
  IScheduleGetAllByTodayPayload,
} from "@/_types/payload.type";
import {
  IProductPromoBannerData,
  IProductPromoBannerResponse,
  IResultGetAllByUserIdData,
  IResultGetAllByUserIdResponse,
  IScheduleGetAllByTodayData,
  IScheduleGetAllByTodayResponse,
} from "@/_types/response.type";
import productServices from "@/domain/services/productServices";
import scheduleServices from "@/domain/services/scheduleServices";
import useControlZustand from "@/zustand/useControlZustand";
import React, { useState } from "react";

const useDashboard = () => {
  const [todayScheduleData, setTodayScheduleData] =
    useState<IScheduleGetAllByTodayData[]>();
  const [productBannerData, setProductBannerdata] =
    useState<IProductPromoBannerData>();
  const [allResultData, setAllResultData] =
    useState<IResultGetAllByUserIdData[]>();

  const { fetchLoading, setFetchLoading, removeFetchLoading } =
    useControlZustand();

  const fetchScheduleData = async (body: IScheduleGetAllByTodayPayload) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Schedule...",
        title: "Fetching.",
        id: "todayScheduleDashboard",
      });
      let todayScheduleDataRes: IScheduleGetAllByTodayResponse | null =
        await scheduleServices.scheduleGetAllByTodayServices(body);
      setTodayScheduleData(todayScheduleDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("todayScheduleDashboard");
      }, 500);
    }
  };

  const fetchBannerdata = async (type: string) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Promotions",
        title: "Fetching.",
        id: "productBannerDashboard",
      });
      let productBannerDataRes: IProductPromoBannerResponse | null =
        await productServices.getProductPromoBannerServices(type);
      setProductBannerdata(productBannerDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("productBannerDashboard");
      }, 500);
    }
  };

  const fetchAllResultData = async (userId: string | number) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the results",
        title: "Fetching.",
        id: "allResultDashboard",
      });
      let allResultRes: IResultGetAllByUserIdResponse | null =
        await scheduleServices.resultGetAllByUserIdServices(userId);
      setAllResultData(allResultRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("allResultDashboard");
      }, 500);
    }
  };

  return {
    fetchScheduleData,
    todayScheduleData,
    fetchBannerdata,
    productBannerData,
    fetchAllResultData,
    allResultData,
  };
};

export default useDashboard;
