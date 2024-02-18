import { useRef, useEffect } from "react";
import useCubeState from "../../stores/cubeStore";
import "./Panel.css";

export const Panel = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { isMoved, setIsMoved } = useCubeState();
  console.log(panelRef.current);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (isMoved && panelRef.current && !panelRef.current.contains(target)) {
        setIsMoved(false);
      }
    };
    document.addEventListener("click", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("click", handleClickOutside);
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
