import { useRef, useEffect } from "react";
import useCubeState from "../../stores/cubeStore";
import "./Panel.css";

export const Panel = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { isMoved, setIsMoved } = useCubeState();

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        isMoved &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsMoved(false);
      }
    };

    window.onpointerdown = handleClickOutside;

    return () => {
      window.onpointerdown = null;
    };
  }, [isMoved, setIsMoved]);

  return (
    <div
      ref={panelRef}
      className={`panel-slide ${isMoved ? "active" : "inactive"}`}
    >
      <div>
        <h2>Some Text</h2>
        <p> </p>
      </div>
    </div>
  );
};
