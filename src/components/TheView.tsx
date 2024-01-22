import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./Cube";
export const TheView = () => {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <ambientLight intensity={2.5} />
          <OrbitControls enableZoom={false} />
          <ScrollControls pages={4} damping={0.25}>
            <Cube />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};
