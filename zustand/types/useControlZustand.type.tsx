import { IEnumMediaQuery } from "@/_types/enum.type";

export interface IUseControlZustand {
  isPageLoading: IIsPageLoading;
  setIsPageLoading: (cond: IIsPageLoading) => void;
  fetchLoading: IFetchLoading[];
  setFetchLoading: (cond: IFetchLoading) => void;
  getFetchLoading: (id: string) => IFetchLoading | undefined;
  removeFetchLoading: (id: string) => void;
  isPostLoading: IIsPostLoading;
  setIsPostLoading: (cond: IIsPostLoading) => void;
  controlMediaQuery: string | null;
  setControlMediaQuery: (cond: string | null) => void;
  controlMenuPopup: IControlMenuPopup;
  setControlMenuPopup: (cond: IControlMenuPopup) => void;
}

export interface IIsPageLoading {
  active: boolean;
  title?: string;
  description?: string;
}
export interface IFetchLoading {
  id?: string;
  active: boolean;
  title?: string;
  description?: string;
}

export interface IIsPostLoading {
  active: boolean;
  title?: string;
  description?: string;
}

export interface IControlMenuPopup {
  active: boolean;
  menuList: any[];
}
