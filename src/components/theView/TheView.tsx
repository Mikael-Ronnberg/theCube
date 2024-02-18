import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Cube } from "../cube/Cube";
import { Mesh } from "three";
import { FBOParticles } from "../particles/FBOParticles";
import useCubeState from "../../stores/cubeStore";
import { Panel } from "../panel/Panel";
import "./TheView.css";
import { Navbar } from "../navbar/Navbar";

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);
  const { isMoved } = useCubeState();

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100vw",
          height: "100svh",
          zIndex: 1,
        }}
      >
        <Canvas style={{ background: "black" }}>
          <pointLight intensity={1} position={[2, 10, 10]} />
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
