import { ReactElement } from "react";
import { create } from "zustand";

type DisplayComponentState = {
  currentComponent: ReactElement | undefined;
  setCurrentComponent: (currentComponent: ReactElement | undefined) => void;
};

export const useDisplayComponentState = create<DisplayComponentState>(
  (set) => ({
    currentComponent: undefined,
    setCurrentComponent: (currentComponent: ReactElement | undefined) =>
      set({ currentComponent }),
  })
);
