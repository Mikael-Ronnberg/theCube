import { create } from "zustand";

interface CubeState {
  isMoved: boolean;
  setIsMoved: (isMoved: boolean) => void;
}

const useCubeState = create<CubeState>((set) => ({
  isMoved: false,
  setIsMoved: (isMoved: boolean) => set({ isMoved }),
}));

export default useCubeState;
