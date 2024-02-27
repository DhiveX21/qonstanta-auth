import { initializeApp } from "firebase/app";

import {
  onSnapshot,
  doc,
  getFirestore,
  collection,
  setDoc,
  addDoc,
  getDocs,
  query,
  getDoc,
  deleteDoc,
  where,
  limit,
} from "firebase/firestore";
import { IFirebaseDatasource } from "./types/firebaseDatasource.type";
import {
  IFireDeleteAllDocPayload,
  IFireDeleteOneDocPayload,
  IFireExamProgressContinuesPayload,
  IFireExamProgressPayload,
  IFireGetDocByQueryPayload,
  IFireGetOneDocPayload,
  IFireWatchExamProgressPayload,
} from "@/_types/payload.type";

const firebaseConfig = {
  apiKey: "AIzaSyDrXQM2rigdyaJO-9jMGA_I6drxEWa6jdA",
  authDomain: "dark-depth-381308.firebaseapp.com",
  projectId: "dark-depth-381308",
  storageBucket: "dark-depth-381308.appspot.com",
  messagingSenderId: "764616535885",
  appId: "1:764616535885:web:d323c5daf81f147d3c5104",
  measurementId: "G-W6KDRGYBLR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firebaseDatasource: IFirebaseDatasource = {
  setFireExamProgressDatasource: async (
    payload: IFireExamProgressPayload | IFireExamProgressContinuesPayload
  ) => {
    try {
      const addResponse = await setDoc(
        doc(
          db,
          "exam_progress",
          String(payload.userId + "_" + payload.examProgressData.id)
        ),
        {
          ...payload,
        }
      );
      return addResponse;
    } catch (e: any) {
      console.error(e.message);
      throw new Error("Error adding document: ", e);
    }
  },
  watchOneData: (payload: IFireWatchExamProgressPayload) => {
    try {
      const watchData = doc(db, payload.collection, payload.doc);

      return watchData;
    } catch (e: any) {
      console.error(e.message);
      throw new Error("Error Watch data: ", e);
    }
  },
  getOneDoc: async (payload: IFireGetOneDocPayload) => {
    try {
      const data = getDoc(doc(db, payload.collection, payload.doc));

      return data;
    } catch (e: any) {
      console.error(e.message);
      throw new Error("Error Watch data: ", e);
    }
  },
  getDocByQuery: async (payload: IFireGetDocByQueryPayload) => {
    try {
      const data = await getDocs(
        query(collection(db, payload.collection), payload.where)
      );
      let response: any[] = [];
      data.forEach((doc) => {
        response.push(doc.data());
      });

      // const q = query(
      //   collection(db, "exam_progress"),
      //   where("userId", "==", 20290)
      // );
      // console.log(q);
      // const data = await getDocs(q);
      // console.log(data);

      // data.forEach((item) => {
      //   console.log(item.data());
      // });

      return response;
    } catch (e: any) {
      console.error(e.message);
      throw new Error("Error Watch data: ", e);
    }
  },
  deleteOneDoc: async (payload: IFireDeleteOneDocPayload) => {
    try {
      const data = deleteDoc(doc(db, payload.collection, payload.doc));

      return data;
    } catch (e: any) {
      console.error(e.message);
      throw new Error("Error Delete data: ", e);
    }
  },
  deleteAllDoc: async (payload: IFireDeleteAllDocPayload) => {
    try {
      const data = await getDocs(
        query(collection(db, payload.collection), limit(100))
      );

      data.forEach((docSnap) => {
        const docData = docSnap.data();

        if (
          new Date("September 8, 2023 09:10:00") >
          new Date(docData?.examProgressData.startTime.seconds * 1000)
        ) {
          const docRef = doc(db, payload.collection, docSnap.id);
          deleteDoc(docRef);
        }

        // console.log(docRef);
        // Delete the document
      });
      // const data = deleteDoc(doc(db, payload.collection, payload.doc));

      return data;
    } catch (e: any) {
      console.error(e.message);
      throw new Error("Error Delete data: ", e);
    }
  },
};

export default firebaseDatasource;
