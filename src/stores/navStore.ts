import { create } from "zustand";

interface NavState {
  activeSideIndex: number;
  setActiveSideIndex: (index: number) => void;
}

const useNavStore = create<NavState>((set) => ({
  activeSideIndex: 0,
  setActiveSideIndex: (index: number) => set({ activeSideIndex: index }),
}));

export default useNavStore;
