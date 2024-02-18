import { useRef, useEffect } from "react";
import useCubeState from "../../stores/cubeStore";
import "./Panel.css";

export const Panel = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { isMoved, setIsMoved } = useCubeState();
  console.log(panelRef.current);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isMoved &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsMoved(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [setIsMoved]);

  return (
    <>
      <div
        ref={panelRef}
        className={`panel-slide ${isMoved ? "active" : "inactive"}`}
      >
        <div>
          <h2>Some Text</h2>
          <p> </p>
        </div>
      </div>
    </>
  );
};
