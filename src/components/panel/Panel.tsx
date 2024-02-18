import { useRef, useEffect, ReactElement } from "react";
import { useCubeState } from "../../stores/cubeStore";
import "./Panel.css";

type PanelProps = {
  component?: ReactElement;
};

export const Panel = ({ component }: PanelProps) => {
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
      <div>{component}</div>
    </div>
  );
};
