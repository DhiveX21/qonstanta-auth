import {
  ISendOTPRegisterPayload,
  IStudentUpdateByUserIdPayload,
  IUserRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import {
  ICitiesGetAllResponse,
  IErrorHandler,
  IProvinceGetAllResponse,
  IRoleGetByUserIdResponse,
  ISchoolGetByCityIdResponse,
  ISendOTPRegisterResponse,
  IStudentUpdateByUserIdResponse,
  IUserRegisterResponse,
  IVerifyOTPRegisterResponse,
} from "@/_types/response.type";
import React from "react";
import userDatasource from "../datasource/userDatasource";
import { IUserRepository } from "./types/userRepository.type";
import { IStudentRepository } from "./types/studentRepository.type";
import studentDatasource from "../datasource/studentDatasource";

const studentRepository: IStudentRepository = {
  getAllProvinceRepository: async (): Promise<IProvinceGetAllResponse> => {
    try {
      const res = await studentDatasource.getAllProvince();
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllCitiesRepository: async (
    provinceId: number
  ): Promise<ICitiesGetAllResponse> => {
    try {
      const res = await studentDatasource.getAllCities(provinceId);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getSchoolsByCityIdRepository: async (
    cityId: number
  ): Promise<ISchoolGetByCityIdResponse> => {
    try {
      const res = await studentDatasource.getSchoolsByCityId(cityId);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  updateStudentByUserIdRepository: async (
    userId: number,
    payload: IStudentUpdateByUserIdPayload
  ): Promise<IStudentUpdateByUserIdResponse> => {
    try {
      const res = await studentDatasource.updateStudentByUserId(
        userId,
        payload
      );
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getRoleByUserIdRepository: async (
    userId: number
  ): Promise<IRoleGetByUserIdResponse> => {
    try {
      const res = await studentDatasource.getRoleByUserId(userId);
      return res.data;
    } catch (error: any) {
      console.error(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default studentRepository;
