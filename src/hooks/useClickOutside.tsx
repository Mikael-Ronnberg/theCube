import { useEffect, useRef } from "react";
import { useCubeState } from "../stores/cubeStore";

const useClickOutside = (callback: () => void) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { isMoved, setIsMoved } = useCubeState();

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        isMoved &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    window.addEventListener("pointerdown", handleClickOutside);

    return () => {
      window.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isMoved, callback, setIsMoved]);

  return panelRef;
};

export default useClickOutside;
