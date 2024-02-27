import { IDatatableResponse } from "@/_types/common.type";
import { IGetAllRelatedReferralPayload } from "@/_types/payload.type";
import {
  IGetAllRelatedReferralData,
  IGetAllRelatedReferralResponse,
} from "@/_types/response.type";
import userServices from "@/domain/services/userServices";
import useControlZustand from "@/zustand/useControlZustand";
import React, { useState } from "react";

const useUser = () => {
  const [referralList, setReferralList] =
    useState<IDatatableResponse<IGetAllRelatedReferralData>>();
  const { fetchLoading, setFetchLoading, removeFetchLoading } =
    useControlZustand();

  const getAllrelatedUserByReferral = async (
    body: IGetAllRelatedReferralPayload
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Data...",
        title: "Fetching.",
        id: "relatedReferral",
      });
      let relatedReferralRes: IGetAllRelatedReferralResponse | null =
        await userServices.getAllRelatedReferralServices(body);
      setReferralList(relatedReferralRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("relatedReferral");
      }, 500);
    }
  };

  const exportReferral = async (referral_id: string) => {
    userServices.exportReferralServices(referral_id);
  }

  return {
    getAllrelatedUserByReferral,
    exportReferral,
    referralList,
  };
};

export default useUser;
