import { Suspense, useRef } from "react";
import { ScrollControls } from "@react-three/drei";
import { Cube } from "../cube/Cube";
import { Mesh } from "three";
import { FBOParticles } from "../particles/FBOParticles";
import { useCubeState } from "../../stores/cubeStore";
import { Panel } from "../panel/Panel";
import { Navbar } from "../navbar/Navbar";
import { useDisplayComponentState } from "../../stores/displayComponentStore";
import { CanvasContainer, ViewContainer } from "./theViewStyles";
import { EffectComposer, Bloom, GodRays } from "@react-three/postprocessing";

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);
  const orbRef = useRef<Mesh>(null);
  const { isMoved } = useCubeState();
  const { currentComponent } = useDisplayComponentState();

  return (
    <>
      <ViewContainer>
        <Navbar />
        <CanvasContainer>
          {/* <OrbitControls /> */}
          <ambientLight intensity={2.5} />

          <mesh ref={orbRef} position={[20, 30, -48]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial
              color="red"
              transparent
              opacity={0.5}
              emissive="pink"
              emissiveIntensity={1.2}
            />
          </mesh>
          <group position={[0, 0, 0]}>
            <FBOParticles cubeRef={cubeRef} />
          </group>
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.1}
              height={230}
              opacity={0.8}
            />

            <GodRays
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              sun={orbRef as any}
              samples={20}
              density={0.94}
              decay={0.97}
              weight={0.28}
              exposure={0.3}
              clampMax={0.7}
              blur={true}
            />
          </EffectComposer>
          <ScrollControls
            eps={100}
            pages={3}
            damping={0.01}
            enabled={!isMoved}
            maxSpeed={0.07}
            distance={4}
          >
            <Suspense fallback={null}>
              <Cube cubeRef={cubeRef} />
            </Suspense>
          </ScrollControls>
        </CanvasContainer>
        <Panel component={currentComponent} />
      </ViewContainer>
    </>
  );
};
