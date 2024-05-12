import { Suspense, useEffect, useRef, useState } from "react";
import { ScrollControls } from "@react-three/drei";
import { Cube } from "../cube/Cube";
import { Mesh } from "three";
import { FBOParticles } from "../particles/FBOParticles";
import { useCubeState } from "../../stores/cubeStore";
import { Panel } from "../panel/Panel";
import { Navbar } from "../navbar/Navbar";
import { useDisplayComponentState } from "../../stores/displayComponentStore";
import { CanvasContainer } from "./theViewStyles";
import { EffectComposer, Bloom, GodRays } from "@react-three/postprocessing";
import { isMobile } from "react-device-detect";

export const TheView = () => {
  const cubeRef = useRef<Mesh>(null);
  const orbRef = useRef<Mesh>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { isMoved } = useCubeState();
  const [height, setHeight] = useState("100svh");
  const { currentComponent } = useDisplayComponentState();

  useEffect(() => {
    const measureCanvasHeight = () => {
      const canvasElement = canvasRef.current;
      let canvasHeight = 0;
      if (canvasElement) {
        canvasHeight = canvasElement.clientHeight;
      }

      if (canvasHeight % 2 !== 0) {
        setHeight(`${canvasHeight - 1}px`);
      }
    };

    window.requestAnimationFrame(measureCanvasHeight);
    const handleResize = () => {
      setHeight("100svh)");
      measureCanvasHeight();
    };

    if (!isMobile) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div style={{ height: height, background: "black" }} ref={canvasRef}>
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
      </div>
    </>
  );
};
