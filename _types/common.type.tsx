export interface IName {
  _id: string;
  name: string;
}
export interface ISimpleString {
  _id: string;
  name: string;
}

export interface ISimpleStringWithSubject {
  _id: string;
  name: string;
  subject: {
    _id: string;
    name: string;
    code?: string;
    major: "IPA" | "IPS" | "ALL" | "";
  };
}

export interface ISimpleString2 {
  id: string;
  name: string;
}
export interface ISimpleNumber {
  _id: number;
  name: string;
}

export interface IDropdownOption {
  label: string;
  value: string | number;
}

export interface IDatatablePayload<T> {
  filter: T;
  pageNumber: number;
  pageSize: number;
  sortField: string;
  sortOrder: "desc" | "asc";
}

export interface IDatatableResponse<T> {
  entities: T[];
  errorMessage: string;
  totalCount: number;
}

export interface ITeachersIds {
  photo: string;
  name: string;
  _id: string;
}
