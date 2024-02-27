import { IEnumScheduleType } from "@/_types/enum.type";
import {
  IExamGetDetailBatchByUserIdPayload,
  IExamGetDetailByUserIdPayload,
  IResultGetAllByUserIdPayload,
  IResultGetDetailByUserIdPayload,
  IScheduleGetAllBatchByMajorPayload,
  IScheduleGetAllByFilterPayload,
  IScheduleGetAllByTodayPayload,
} from "@/_types/payload.type";
import {
  IExamGetDetailBatchByUserIdData,
  IExamGetDetailBatchByUserIdResponse,
  IExamGetDetailByUserIdData,
  IExamGetDetailByUserIdResponse,
  IProductPromoBannerData,
  IProductPromoBannerResponse,
  IResultGetAllBatchScoreByUserIdResponse,
  IResultGetAllBatchScoreData,
  IResultGetAllByUserIdData,
  IResultGetAllByUserIdResponse,
  IResultGetDetailByUserIdData,
  IResultGetDetailByUserIdResponse,
  IScheduleGetAllBatchByMajorData,
  IScheduleGetAllBatchByMajorResponse,
  IScheduleGetAllByFilterResponse,
  IScheduleGetAllByTodayData,
  IScheduleGetAllByTodayResponse,
} from "@/_types/response.type";
import productServices from "@/domain/services/productServices";
import scheduleServices from "@/domain/services/scheduleServices";
import useControlZustand from "@/zustand/useControlZustand";
import React, { useState } from "react";

const useSchedule = () => {
  const [todayScheduleData, setTodayScheduleData] =
    useState<IScheduleGetAllByTodayData[]>();
  const [filterScheduleData, setFilterScheduleData] =
    useState<IScheduleGetAllByTodayData[]>();
  const [productBannerData, setProductBannerdata] =
    useState<IProductPromoBannerData>();
  const [allResultData, setAllResultData] =
    useState<IResultGetAllByUserIdData[]>();
  const [detailExamByUserIdData, setDetailExamByUserIdData] =
    useState<IExamGetDetailByUserIdData>();
  const [detailExamBatchByUserIdData, setDetailExamBatchByUserIdData] =
    useState<IExamGetDetailBatchByUserIdData>();
  const [detailResultByUserIdData, setDetailResultByUserIdData] =
    useState<IResultGetDetailByUserIdData>();
  const [allBatchScoreByUserIdData, setAllBatchScoreByUserIdData] =
    useState<IResultGetAllBatchScoreData[]>();
  const [allBatchScheduleByMajorData, setAllBatchScheduleByMajorData] =
    useState<IScheduleGetAllBatchByMajorData[]>();

  const { fetchLoading, setFetchLoading, removeFetchLoading } =
    useControlZustand();

  const fetchScheduleDataByToday = async (
    body: IScheduleGetAllByTodayPayload
  ) => {
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

  const fetchScheduleData = async (
    body: IScheduleGetAllByFilterPayload,
    scheduleType: IEnumScheduleType
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Schedule...",
        title: "Fetching.",
        id: "filterScheduleSchedule",
      });
      let filterScheduleDataRes: IScheduleGetAllByFilterResponse | null =
        await scheduleServices.scheduleGetAllByFilterServices(
          body,
          scheduleType
        );
      setFilterScheduleData(filterScheduleDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("filterScheduleSchedule");
      }, 500);
    }
  };

  const fetchBannerdata = async (type: string) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Promotions",
        title: "Fetching.",
        id: "productBannerSchedule",
      });
      let productBannerDataRes: IProductPromoBannerResponse | null =
        await productServices.getProductPromoBannerServices(type);
      setProductBannerdata(productBannerDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("productBannerSchedule");
      }, 500);
    }
  };

  const fetchAllResultData = async (userId: string | number) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the results",
        title: "Fetching.",
        id: "allResultSchedule",
      });
      let allResultRes: IResultGetAllByUserIdResponse | null =
        await scheduleServices.resultGetAllByUserIdServices(userId);
      setAllResultData(allResultRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("allResultSchedule");
      }, 500);
    }
  };

  const fetchDetailExamByUserId = async (
    payload: IExamGetDetailByUserIdPayload
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the results",
        title: "Fetching.",
        id: "getDetailExamByUserId",
      });
      let detailRes: IExamGetDetailByUserIdResponse | null =
        await scheduleServices.examGetDetailByUserIdServices(payload);
      setDetailExamByUserIdData(detailRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("getDetailExamByUserId");
      }, 500);
    }
  };

  const fetchDetailExamBatchByUserId = async (
    payload: IExamGetDetailBatchByUserIdPayload
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Schedule",
        title: "Fetching.",
        id: "getDetailExamBatchByUserId",
      });
      let detailRes: IExamGetDetailBatchByUserIdResponse | null =
        await scheduleServices.getDetailExamBatchByUserIdServices(payload);
      setDetailExamBatchByUserIdData(detailRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("getDetailExamBatchByUserId");
      }, 500);
    }
  };

  const fetchDetailResultByUserId = async (
    payload: IResultGetDetailByUserIdPayload
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Schedule",
        title: "Fetching.",
        id: "getDetailResultByUserId",
      });
      let detailRes: IResultGetDetailByUserIdResponse | null =
        await scheduleServices.getDetailResultByUserIdServices(payload);
      setDetailResultByUserIdData(detailRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("getDetailResultByUserId");
      }, 500);
    }
  };
  const fetchAllBatchScoreByUserId = async (userId: number) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Schedule",
        title: "Fetching.",
        id: "getDetailResultByUserId",
      });
      let detailRes: IResultGetAllBatchScoreByUserIdResponse | null =
        await scheduleServices.getAllBatchScoreByUserIdServices(userId);
      setAllBatchScoreByUserIdData(detailRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("getDetailResultByUserId");
      }, 500);
    }
  };
  const fetchAllBatchScheduleByMajor = async (
    examId: string,
    body: IScheduleGetAllBatchByMajorPayload
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Schedule",
        title: "Fetching.",
        id: "getAllBatchScheduleByMajor",
      });
      let detailRes: IScheduleGetAllBatchByMajorResponse | null =
        await scheduleServices.getAllBatchScheduleByMajorServices(examId, body);
      setAllBatchScheduleByMajorData(detailRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("getAllBatchScheduleByMajor");
      }, 500);
    }
  };

  return {
    fetchScheduleData,
    filterScheduleData,
    fetchBannerdata,
    productBannerData,
    fetchAllResultData,
    allResultData,
    fetchDetailExamByUserId,
    detailExamByUserIdData,
    fetchDetailExamBatchByUserId,
    detailExamBatchByUserIdData,
    fetchDetailResultByUserId,
    detailResultByUserIdData,
    fetchScheduleDataByToday,
    todayScheduleData,
    fetchAllBatchScoreByUserId,
    allBatchScoreByUserIdData,
    fetchAllBatchScheduleByMajor,
    allBatchScheduleByMajorData,
  };
};

export default useSchedule;
