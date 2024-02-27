import {
  IChapterGetAllByFilterPayload,
  IQuestionGetVideoExplanationPayload,
  ISubjectGetAllPayload,
} from "@/_types/payload.type";
import {
  IChapterGetAllByFilterData,
  IChapterGetAllByFilterResponse,
  IQuestionGetVideoExplanationData,
  IQuestionGetVideoExplanationResponse,
  ISubjectGetAllData,
  ISubjectGetAllResponse,
} from "@/_types/response.type";
import chapterServices from "@/domain/services/chapterServices";
import useControlZustand from "@/zustand/useControlZustand";
import React, { useState } from "react";

const useChapter = () => {
  const [subjectData, setSubjectData] = useState<ISubjectGetAllData[]>();
  const [chapterData, setChapterData] = useState<IChapterGetAllByFilterData[]>(
    []
  );
  const [videoExplanationData, setVideoExplanationData] =
    useState<IQuestionGetVideoExplanationData>();
  const { fetchLoading, setFetchLoading, removeFetchLoading } =
    useControlZustand();

  const fetchSubjectData = async (params: ISubjectGetAllPayload) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Subjects...",
        title: "Fetching.",
        id: "subjectGetAllChapter",
      });
      let subjectGetAllDataRes: ISubjectGetAllResponse | null =
        await chapterServices.subjectGetAllServices(params);
      setSubjectData(subjectGetAllDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("subjectGetAllChapter");
      }, 500);
    }
  };

  const fetchChapterData = async (body: IChapterGetAllByFilterPayload) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Subjects...",
        title: "Fetching.",
        id: "subjectGetAllChapter",
      });
      let chapterGetAllDataRes: IChapterGetAllByFilterResponse | null =
        await chapterServices.chapterGetAllByFilterServices(body);
      setChapterData(chapterGetAllDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("subjectGetAllChapter");
      }, 500);
    }
  };

  const getQuestionVideoExplanation = async (
    body: IQuestionGetVideoExplanationPayload
  ) => {
    try {
      setFetchLoading({
        active: true,
        description: "Gathering the Questions...",
        title: "Fetching.",
        id: "videoExplanationQuestion",
      });

      let chapterGetAllDataRes: IQuestionGetVideoExplanationResponse | null =
        await chapterServices.questionGetVideoExplanationServices(body);

      setVideoExplanationData(chapterGetAllDataRes!.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        removeFetchLoading("videoExplanationQuestion");
      }, 500);
    }
  };

  return {
    fetchSubjectData,
    subjectData,
    fetchChapterData,
    chapterData,
    getQuestionVideoExplanation,
    videoExplanationData,
  };
};

export default useChapter;
