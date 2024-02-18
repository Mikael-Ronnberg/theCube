import { create } from "zustand";

type CubeState = {
  isMoved: boolean;
  activeSide: string;
  setIsMoved: (isMoved: boolean) => void;
  setActiveSide: (activeSide: string) => void;
};

export const useCubeState = create<CubeState>((set) => ({
  isMoved: false,
  activeSide: "",
  setIsMoved: (isMoved: boolean) => set({ isMoved }),
  setActiveSide: (activeSide: string) => set({ activeSide }),
}));
