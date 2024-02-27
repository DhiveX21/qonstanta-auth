import { IQuestion } from "./question.type";

export interface IExamStorage {
  id: string;
  endDate: number;
  startTime: any;
  questions: IQuestion[];
  activeQuestion: number;
}
