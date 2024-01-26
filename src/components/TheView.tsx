import { Physics } from "@react-three/cannon";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./Cube";
import { Effect } from "./Effect";

export const TheView = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Physics>
          <pointLight intensity={2} position={[2, 10, 10]} />
          <ambientLight intensity={1.5} />
          <OrbitControls enableZoom={false} />
          <Effect />
          <ScrollControls pages={4} damping={0.25}>
            <Cube />
          </ScrollControls>
        </Physics>
      </Canvas>
    </div>
  );
};
