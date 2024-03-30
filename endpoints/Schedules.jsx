import axios from "axios";
import { setGlobalPostLoading } from "../store/actions/controlActions";
import axiosInstance from "@/domain/datasource/axiosConfig";

const urlScheduleService = process.env.NEXT_PUBLIC_URL_SCHEDULE_SERVICE;

/////////////////////////////////
//////////////POST///////////////
/////////////////////////////////

export function scheduleGetAllByToday(body) {
  return axiosInstance.post(`${urlScheduleService}/try-out-schedules/today`, {
    ...body,
  });
}
export function resultCreate(body) {
  return axiosInstance.post(`${urlScheduleService}try-out-test-result`, {
    ...body,
  });
}

export function scheduleGetAllBunchByMajor(examId, body) {
  return axiosInstance.post(
    `${urlScheduleService}try-out-schedules/${examId}/batch-major`,
    {
      ...body,
    }
  );
}

/////////////////////////////////
//////////////GET////////////////
/////////////////////////////////

export function scheduleGetOne(examId = null) {
  return axiosInstance.get(`${urlScheduleService}/try-out-schedules/${examId}`);
}

export function scheduleGetAllBunchByUserId(examId = null, userId = null) {
  return axiosInstance.get(
    `${urlScheduleService}/try-out-schedules/${examId}/bunch/${userId}`
  );
}

export function scheduleGetAllBatchByUserId(examId = null, userId = null) {
  return axiosInstance.get(
    `${urlScheduleService}/try-out-schedules/${examId}/batch/${userId}`
  );
}

export function scheduleGetOneByUserId(examId = null, userId = null) {
  return axiosInstance.get(
    `${urlScheduleService}/try-out-schedules/${examId}`,
    {
      params: {
        user_id: userId,
      },
    }
  );
}
export function resultGetAllByUserId(userId = null) {
  return axiosInstance.get(`${urlScheduleService}/try-out-test-result`, {
    params: { user_id: userId },
  });
}
export function resultGetOneByUserId(userId = null, scheduleId = null) {
  return axiosInstance.get(
    `${urlScheduleService}/try-out-test-result/${scheduleId}/user/${userId}`
  );
}
export function resultGetOneBatchByUserId(userId = null) {
  return axiosInstance.get(
    `${urlScheduleService}/try-out-test-result/batch-score/${userId}`
  );
}
