import { ISimpleString } from "./common.type";
import { IEnumMajor, IEnumQuestionType } from "./enum.type";

export interface IQuestionIds {
  _id: string;
  chapter_id: string;
  nomor: number;
}

export interface IQuestion {
  sub_question: {
    questions: [];
  };
  _id: string;
  nomor: number;
  is_shuffle: boolean;
  question_text: string;
  answer_sentence_key: string[];
  answer_sentence_text: string;
  type_question: IEnumQuestionType;
  opsi_a: string;
  opsi_b: string;
  opsi_c: string;
  opsi_d: string;
  opsi_e: string;
  answer_key: string | null;
  answer_desc: string;
  answer_user: string[] | null;
  not_sure: boolean;
  result: number;
  point: number;
  score: number;
  ref_id: string;
  role: "edulife" | "tryout";
  exam: ISimpleString;
  type_tryout: ISimpleString & { calculate_type: string };
  answer_file: object;
  answer_video: object;
  detail_chapter: ISimpleString & {
    subject_id: ISimpleString;
    grade: number;
    major: IEnumMajor;
    semester: number;
  };
}
