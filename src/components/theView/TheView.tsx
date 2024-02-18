import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Cube } from "../cube/Cube";
import { Mesh } from "three";
import { FBOParticles } from "../particles/FBOParticles";
import useCubeState from "../../stores/cubeStore";
import { Panel } from "../panel/Panel";
import { Navbar } from "../navbar/Navbar";
import "./TheView.css";

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);
  const { isMoved } = useCubeState();

  return (
    <>
      <div className="c-container">
        <Navbar />
        <Canvas className="can">
          <ambientLight intensity={2.5} />
          <group position={[0, 0, 0]}>
            <FBOParticles cubeRef={cubeRef} />
          </group>
          <ScrollControls
            pages={4}
            damping={0.3}
            enabled={!isMoved}
            maxSpeed={0.4}
            distance={2}
          >
            <Cube cubeRef={cubeRef} />
          </ScrollControls>
        </Canvas>
        <Panel />
      </div>
    </>
  );
};
