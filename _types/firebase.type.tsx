import { IExamStorage } from "./exam.type";
import { ICredentials } from "./users.type";

export interface IFireExamProgress extends IExamStorage {
  userId: ICredentials;
}

export interface IFireExamProgressStorage {
  userId: string | number;
  name: string;
  email: string;
  examProgressData: IExamStorage;
}
