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

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);
  const { isMoved } = useCubeState();
  const { currentComponent } = useDisplayComponentState();

  return (
    <>
      <ViewContainer>
        <Navbar />
        <CanvasContainer>
          {/* <OrbitControls /> */}
          <ambientLight intensity={2.5} />

          {/* <mesh ref={orbRef} position={[20, 30, -48]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial
              color="red"
              transparent
              opacity={1}
              emissive="pink"
              emissiveIntensity={0.8}
            />
          </mesh> */}
          <group position={[0, 0, 0]}>
            <FBOParticles cubeRef={cubeRef} />
          </group>
          {/* <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.2}
              height={10}
              opacity={0.1}
            />

            <GodRays
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              sun={orbRef as any}
              samples={4}
              density={0.89}
              decay={0.96}
              weight={0.15}
              exposure={0.3}
              clampMax={0.1}
              blur={true}
            />
          </EffectComposer> */}
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
