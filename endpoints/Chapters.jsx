import axiosInstance from "@/domain/datasource/axiosConfig";

const urlChapterService = process.env.NEXT_PUBLIC_URL_CHAPTER_SERVICE;

/////////////////////////////////
//////////////POST///////////////
/////////////////////////////////

export function questionGetallByChapterId(body) {
  return axiosInstance.post(`${urlChapterService}tryouts/question`, {
    ...body,
  });
}

/////////////////////////////////
//////////////GET////////////////
/////////////////////////////////

// export function scheduleGetOne(examId = null) {
//   return axios.get(`${urlChapterService}/try-out-schedules/${examId}`);
// }
