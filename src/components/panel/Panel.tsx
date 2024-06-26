import { ReactElement } from "react";
import { useCubeState } from "../../stores/cubeStore";
import { PanelContainer } from "./panelStyles";
import useClickOutside from "../../hooks/useClickOutside";

type PanelProps = {
  component?: ReactElement;
};

export const Panel = ({ component }: PanelProps) => {
  const { isMoved, setIsMoved } = useCubeState();
  const panelRef = useClickOutside(() => {
    setIsMoved(false);
  });

  return (
    <PanelContainer
      ref={panelRef}
      className={`PanelContainer ${isMoved ? "active" : "inactive"}`}
      data-augmented-ui="
  tl-2-clip-y bl-clip border"
    >
      {component}
    </PanelContainer>
  );
};
