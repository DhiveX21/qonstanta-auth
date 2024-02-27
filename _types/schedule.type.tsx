import {
  ISimpleString,
  ISimpleString2,
  ISimpleStringWithSubject,
  ITeachersIds,
} from "./common.type";
import { IEnumMajor, IEnumScheduleType } from "./enum.type";

export interface ISchedule {
  _id: string;
  name: string;
  batch_id?: string;
  batch_name?: string;
  is_shuffle?: boolean;
  role: "tryout" | "edulive";
  exam: {
    _id: string;
    name: string;
  };
  type_tryout: {
    _id: string;
    name: string;
  };
  calculate_type: string;
  is_continue: boolean;
  is_batch: boolean;
  class_student: [
    {
      major: string;
      level: string;
      grade: number;
      _id: string;
    }
  ];
  // subject_id: {
  //   _id: string;
  //   name: string;
  //   code?: string;
  //   major: "IPA" | "IPS" | "ALL" | "";
  // };
  chapter_ids: {
    _id: string;
    name: string;
    subject: {
      _id: string;
      name: string;
      code?: string;
      major: "IPA" | "IPS" | "ALL" | "";
    };
  }[];
  question_ids: [
    {
      _id: string;
      is_shuffle: boolean;
      chapter_id: string;
      nomor: number;
    }
  ];
  target_user: "selected" | "mix" | "class";
  attendees: [
    {
      user_id: number;
      name: string;
      _id: string;
    }
  ];
  semester: number;
  date_start: string;
  date_end: string;
  time_start: string;
  time_end: string;
  duration: number;
  total_question: number;
  time_start_schedule: number;
  time_start_schedule_alt: number;
  time_end_schedule: number;
  time_end_schedule_alt: number;
  deleted?: boolean;
  //   school_ids: [];
  created_at?: string;
  update_at?: string;
  score: number;
  working_status: boolean;
  batch_detail?: {
    _id: string;
    name: string;
  };
  link_room: string;
  teacher_ids: ITeachersIds[];
  type_schedule: IEnumScheduleType;
}

export interface IScheduleId {
  _id: string;
  schedule_id: ISchedule;
}

export interface IAttendees {
  user_id: number;
  name: string;
  _id: string;
}

export interface IScheduleIds {
  chapter_ids: ISimpleStringWithSubject[];
  batch_id?: string;
  batch_name?: string;
  _id: string;
  name: string;
  role: string;
  type_tryout: string;
}
