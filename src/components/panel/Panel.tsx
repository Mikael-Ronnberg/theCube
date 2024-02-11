import useCubeState from "../../stores/cubeStore";
import "./Panel.css";

export const Panel = () => {
  const { isMoved } = useCubeState();

  return (
    <>
      <div className={`panel-slide ${isMoved ? "active" : "inactive"}`}>
        <div>
          <h2>Some Text</h2>
          <p>Your dynamic content here...</p>
        </div>
      </div>
    </>
  );
};
