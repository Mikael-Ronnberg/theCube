import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Cube } from "./Cube";
import { Mesh } from "three";
import { FBOParticles } from "./particles/FBOParticles";

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <pointLight intensity={1} position={[2, 10, 10]} />
        <ambientLight intensity={2.5} />
        <OrbitControls enableZoom={false} />
        <group position={[0, 0, 0]}>
          <FBOParticles cubeRef={cubeRef} />
        </group>
        <ScrollControls pages={4} damping={0.25}>
          <Cube cubeRef={cubeRef} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};
