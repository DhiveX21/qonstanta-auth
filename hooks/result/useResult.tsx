import {
  IResultGetAllBatchScoreByUserIdResponse,
  IResultGetAllBatchScoreData,
  ITryoutGetAllTypeData,
  ITryoutGetAllTypeResponse,
} from "@/_types/response.type";
import chapterServices from "@/domain/services/chapterServices";
import scheduleServices from "@/domain/services/scheduleServices";
import useControlZustand from "@/zustand/useControlZustand";
import React, { useState } from "react";

const useResult = () => {
  const [resultBatchData, setResultBatchData] = useState<
    IResultGetAllBatchScoreData[]
  >([]);
  const [typeTryoutData, setTypeTryoutData] = useState<ITryoutGetAllTypeData[]>(
    []
  );

  const { setFetchLoading, removeFetchLoading } = useControlZustand();
  const fetchAllBatchResult = async (userId: number) => {
    try {
      setFetchLoading({
        active: true,
        description: "Memuat Hasil Ujian.",
        title: "Tunggu...",
        id: "allBatchResultTableView",
      });
      let resultDataRes: IResultGetAllBatchScoreByUserIdResponse | null =
        await scheduleServices.getAllBatchScoreByUserIdServices(userId);
      setResultBatchData(resultDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("allBatchResultTableView");
      }, 500);
    }
  };
  const fetchAllTypeTryout = async () => {
    try {
      setFetchLoading({
        active: true,
        description: "Memuat Tipe Ujian",
        title: "Tunggu...",
        id: "allTypeTryoutTableView",
      });
      let resultDataRes: ITryoutGetAllTypeResponse | null =
        await chapterServices.tryoutGetAllTypeServices();
      setTypeTryoutData(resultDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("allTypeTryoutTableView");
      }, 500);
    }
  };

  return {
    fetchAllBatchResult,
    resultBatchData,
    fetchAllTypeTryout,
    typeTryoutData,
  };
};

export default useResult;
