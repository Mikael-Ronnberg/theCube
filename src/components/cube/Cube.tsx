import { Html, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { Mesh } from "three";
import useCubeState from "../../stores/cubeStore";

import { AboutPage } from "../../pages/AboutPage";
import { StartPage } from "../../pages/StartPage";
import { ExperiencePage } from "../../pages/ExperiencePage";
import { useCubeSizeAndPositions } from "../../hooks/useCubeSizeAndPositions";
import { useEnvironmentSetup } from "../../hooks/useEnvironmentSetup";
import { useState } from "react";

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;
interface CubeProps {
  cubeRef: React.RefObject<Mesh>;
}

export const Cube = ({ cubeRef }: CubeProps) => {
  const [activeSide, setActiveSide] = useState<string | null>(null);
  const { isMoved, setIsMoved } = useCubeState();
  const { cubeSize, htmlPositions } = useCubeSizeAndPositions();
  const scroll = useScroll();
  const totalSides = 3;

  useEnvironmentSetup(cubeRef);

  useFrame(() => {
    if (cubeRef.current) {
      const sideIndex = Math.floor(scroll.offset * totalSides);
      let targetRotationX = (sideIndex * Math.PI) / 2;

      cubeRef.current.rotation.x = lerp(
        cubeRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      if (isMoved) {
        let targetRotationY = 0;
        let targetPositionX = 0;
        switch (activeSide) {
          case "side1":
            targetRotationX = (sideIndex * Math.PI) / 2;
            targetRotationY = 1.5;
            targetPositionX = -3.5;

            break;
          case "side2":
            targetRotationX = (sideIndex * Math.PI) / 2;
            targetRotationY = 1.57;
            targetPositionX = -3.5;
            break;
          case "side3":
            targetRotationX = (sideIndex * Math.PI) / 2;
            targetRotationY = -1.5;
            targetPositionX = -3.5;
            break;
          case "side4":
            targetRotationY = -1.57;
            targetPositionX = -3.5;
            break;
        }
        cubeRef.current.rotation.y = lerp(
          cubeRef.current.rotation.y,
          targetRotationY,
          0.05
        );
        cubeRef.current.position.x = lerp(
          cubeRef.current.position.x,
          targetPositionX,
          0.05
        );
      } else {
        cubeRef.current.rotation.y = lerp(cubeRef.current.rotation.y, 0, 0.05);
        cubeRef.current.position.x = lerp(cubeRef.current.position.x, 0, 0.05);
      }
    }
  });

  const scrollData = useScroll();

  const handleButtonClick = (side: string) => {
    setIsMoved(!isMoved);
    setActiveSide(side);
  };

  console.log(isMoved);

  return (
    <mesh ref={cubeRef} visible position={[0, -0.3, 0]}>
      <boxGeometry args={cubeSize} />
      <meshStandardMaterial metalness={2} roughness={0} color="black" />
      <Html
        occlude
        distanceFactor={1.5}
        transform
        portal={{ current: scrollData.fixed }}
        position={htmlPositions.side1}
      >
        <StartPage />
        <button onClick={() => handleButtonClick("side1")}>Click me plz</button>
      </Html>
      <Html
        occlude
        distanceFactor={1.5}
        transform
        rotation-x={-Math.PI / 2}
        portal={{ current: scrollData.fixed }}
        position={htmlPositions.side2}
      >
        <AboutPage />
        <button onClick={() => handleButtonClick("side2")}>Click me plz</button>
      </Html>
      <Html
        occlude
        distanceFactor={1.5}
        transform
        rotation-x={-Math.PI / 1}
        portal={{ current: scrollData.fixed }}
        position={htmlPositions.side3}
      >
        <ExperiencePage />
        <button onClick={() => handleButtonClick("side3")}>Click me plz</button>
      </Html>
      <Html
        occlude
        distanceFactor={1.5}
        transform
        rotation-x={-Math.PI / -2}
        portal={{ current: scrollData.fixed }}
        position={htmlPositions.side4}
      >
        <span>sida 4</span>
        <button onClick={() => handleButtonClick("side4")}>Click me plz</button>
      </Html>
    </mesh>
  );
};
