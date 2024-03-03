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
  // const [begin, setBegin] = useState<boolean>(false);

  return (
    <>
      <ViewContainer>
        <Navbar />
        <CanvasContainer>
          <ambientLight intensity={2.5} />
          <group position={[0, 0, 0]}>
            <FBOParticles cubeRef={cubeRef} />
          </group>
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
        {/* <LoadingScreen started={begin} onBegin={() => setBegin(true)} /> */}
        <Panel component={currentComponent} />
      </ViewContainer>
    </>
  );
};
