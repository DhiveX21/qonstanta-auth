import { ISimpleNumber } from "./common.type";

export interface ICity {
  id: number;
  province_id: number;
  name: string;
  province: ISimpleNumber;
}

export interface ISchool {
  id: number;
  name: string;
  nspn: string;
  status: number;
  city_name: string;
  city_id: number;
  city: ICity;
}
