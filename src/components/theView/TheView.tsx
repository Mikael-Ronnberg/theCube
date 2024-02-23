import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Cube } from "../cube/Cube";
import { Mesh } from "three";
import { FBOParticles } from "../particles/FBOParticles";
import { useCubeState } from "../../stores/cubeStore";
import { Panel } from "../panel/Panel";
import { Navbar } from "../navbar/Navbar";
import "./TheView.css";
import { useDisplayComponentState } from "../../stores/displayComponentStore";

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);
  const { isMoved } = useCubeState();
  const { currentComponent } = useDisplayComponentState();

  return (
    <>
      <div className="view-container">
        <Navbar />
        <Canvas className="can">
          <ambientLight intensity={2.5} />
          <group position={[0, 0, 0]}>
            <FBOParticles cubeRef={cubeRef} />
          </group>
          <ScrollControls
            eps={1}
            pages={3}
            // damping={0.1}
            enabled={!isMoved}
            maxSpeed={0.07}
            distance={4}
          >
            <Cube cubeRef={cubeRef} />
          </ScrollControls>
        </Canvas>
        <Panel component={currentComponent} />
      </div>
    </>
  );
};
