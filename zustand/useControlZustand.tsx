import { create } from "zustand";
import {
  IControlMenuPopup,
  IFetchLoading,
  IIsPageLoading,
  IIsPostLoading,
  IUseControlZustand,
} from "./types/useControlZustand.type";

const useControlZustand = create<IUseControlZustand>((set, get) => ({
  isPageLoading: {
    active: false,
    title: "Loading",
    description: "Sedang Loading",
  },
  setIsPageLoading: (cond: IIsPageLoading) =>
    set(() => ({ isPageLoading: cond })),
  fetchLoading: [
    {
      id: "",
      active: false,
      title: "Loading",
      description: "Sedang Loading",
    },
  ],
  setFetchLoading: (cond: IFetchLoading) =>
    set((state) => ({ fetchLoading: [...state.fetchLoading, cond] })),
  getFetchLoading: (id: string) => {
    const filteredFetchLoading = get().fetchLoading.find(
      (item: IFetchLoading) => item.id === id
    );
    return filteredFetchLoading;
  },
  removeFetchLoading: (id: string) =>
    set((state) => ({
      fetchLoading: state.fetchLoading.filter(
        (itemLoading: IFetchLoading) => itemLoading.id !== id
      ),
    })),
  isPostLoading: {
    active: false,
    title: "Loading",
    description: "Sedang Loading",
  },

  setIsPostLoading: (cond: IIsPostLoading) => {
    set(() => ({ isPostLoading: cond }));
  },
  controlMediaQuery: null,
  setControlMediaQuery: (cond: string | null) => {
    set(() => ({ controlMediaQuery: cond }));
  },
  controlMenuPopup: {
    active: false,
    menuList: [],
  },
  setControlMenuPopup: (cond: IControlMenuPopup) => {
    set(() => ({ controlMenuPopup: cond }));
  },
}));

export default useControlZustand;
