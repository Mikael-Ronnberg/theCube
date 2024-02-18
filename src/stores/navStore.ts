import { create } from "zustand";

type NavState = {
  activeSideIndex: number;
  setActiveSideIndex: (index: number) => void;
};

export const useNavStore = create<NavState>((set) => ({
  activeSideIndex: 0,
  setActiveSideIndex: (index: number) => set({ activeSideIndex: index }),
}));
