import { ISimpleNumber, ISimpleString } from "./common.type";

export interface IResult {
  user_id: ISimpleNumber;
  _id: string;
  schedule_id: {
    type_tryout: ISimpleString;
    subject_id: ISimpleString;
    chapter_id: ISimpleString;
    _id: string;
    name: string;
    role: "tryout" | "edulive";
  };
  resulttests: [
    {
      //   sub_question: {
      //     questions: [];
      //   };
      nomor: 1;
      type_question: string;
      question_text: string;
      opsi_a: string;
      opsi_b: string;
      opsi_c: string;
      opsi_d: string;
      opsi_e: string;
      answer_key: string;
      answer_desc: string;
      answer_user: string[];
      result: number;
      point: number;
      _id: string;
    }
  ];
  date_result: string;
  time_start: string;
  time_end: string;
  date_result_now: string;
  time_start_schedule: string;
  time_end_schedule: string;
  deleted: boolean;
  created_at: string;
  update_at: string;
}

export interface IResultTest {
  score?: string | number;
  nomor: number;
  question_text: string;
  opsi_a: string;
  opsi_b: string;
  opsi_c: string;
  opsi_d: string;
  opsi_e: string;
  sub_question: {
    questions: [
      {
        question: string;
        answer_key: boolean;
      }
    ];
  };
  answer_key: string;
  answer_user: string[];
  result: number;
  point: number;
  type_question: string;
  id: string;
}
