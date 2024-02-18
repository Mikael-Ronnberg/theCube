import { useRef, useEffect } from "react";
import useCubeState from "../../stores/cubeStore";
import "./Panel.css";

export const Panel = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { isMoved, setIsMoved } = useCubeState();
  console.log(panelRef.current);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMoved &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsMoved(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
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
          <p>Your dynamic content here...</p>
        </div>
      </div>
    </>
  );
};