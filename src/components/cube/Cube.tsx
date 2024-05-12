import { Html, useProgress, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useCubeState } from "../../stores/cubeStore";
import { AboutPage } from "../../pages/about/AboutPage";
import { StartPage } from "../../pages/home/StartPage";
import { useCubeSizeAndPositions } from "../../hooks/useCubeSizeAndPositions";
import { useEnvironmentSetup } from "../../hooks/useEnvironmentSetup";
import { useNavStore } from "../../stores/navStore";
import { ProjectsPage } from "../../pages/projects/ProjectsPage";
import { ContactPage } from "../../pages/contact/ContactPage";
import { useRef, useState } from "react";
import "./Cube.css";

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;
interface CubeProps {
  cubeRef: React.RefObject<Mesh>;
}

export const Cube = ({ cubeRef }: CubeProps) => {
  const [progressAnimationExecuted, setProgressAnimationExecuted] =
    useState(false);
  const { isMoved, activeSide } = useCubeState();
  const { cubeSize } = useCubeSizeAndPositions();
  const { activeSideIndex, setActiveSideIndex } = useNavStore();
  const { progress } = useProgress();
  const scroll = useScroll();
  const totalSides = 3;

  const lastSideIndex = useRef(activeSideIndex);

  useEnvironmentSetup(cubeRef);

  useFrame(() => {
    if (progress === 100 && cubeRef.current && !progressAnimationExecuted) {
      cubeRef.current.rotation.y = lerp((4 * Math.PI) / 2, 0, 0.04);
      cubeRef.current.rotation.x = lerp((2 * Math.PI) / 2, -0.3, 0.04);

      setProgressAnimationExecuted(true);
    }

    const scrollSideIndex = Math.floor(scroll.offset * totalSides);

    let newSideIndex = lastSideIndex.current;

    if (
      scrollSideIndex > lastSideIndex.current &&
      scrollSideIndex - lastSideIndex.current === 1
    ) {
      newSideIndex = lastSideIndex.current + 1;
    } else if (
      scrollSideIndex < lastSideIndex.current &&
      lastSideIndex.current - scrollSideIndex === 1
    ) {
      newSideIndex = lastSideIndex.current - 1;
    }

    if (newSideIndex !== lastSideIndex.current) {
      setActiveSideIndex(newSideIndex);
      lastSideIndex.current = newSideIndex;
    }

    if (cubeRef.current) {
      const targetRotationX = -(activeSideIndex * Math.PI) / 2;

      cubeRef.current.position.z = lerp(cubeRef.current.position.z, 0, 0.08);

      cubeRef.current.rotation.x = lerp(
        cubeRef.current.rotation.x,
        targetRotationX,
        0.09
      );

      if (isMoved) {
        let targetRotationY = 0;
        let targetPositionX = 0;
        switch (activeSide) {
          case "side1":
            targetRotationY = 1.5;
            targetPositionX = -3.5;

            break;
          case "side2":
            targetRotationY = 1.57;
            targetPositionX = -3.5;
            break;
          case "side3":
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
          0.07
        );
        cubeRef.current.position.x = lerp(
          cubeRef.current.position.x,
          targetPositionX,
          0.07
        );
      } else {
        cubeRef.current.rotation.y = lerp(cubeRef.current.rotation.y, 0, 0.07);
        cubeRef.current.position.x = lerp(cubeRef.current.position.x, 0, 0.07);
      }
    }
  });

  return (
    <mesh ref={cubeRef} visible position={[0, -0.3, -30]}>
      <boxGeometry args={cubeSize} />
      <meshStandardMaterial metalness={1} roughness={0.01} color="#05050f" />
      <Html
        className="cube-side"
        occlude
        distanceFactor={1.6}
        transform
        portal={{ current: scroll.fixed }}
        position={[0, 0, cubeSize[2] / 2 + 0.01]}
      >
        <StartPage />
      </Html>
      <Html
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        occlude
        distanceFactor={1.8}
        transform
        rotation-x={-Math.PI / 2}
        portal={{ current: scroll.fixed }}
        position={[0, (cubeSize[1] / 2) * 1.02, 0]}
      >
        <ContactPage />
      </Html>
      <Html
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        occlude
        distanceFactor={1.8}
        transform
        rotation-x={-Math.PI / 1}
        portal={{ current: scroll.fixed }}
        position={[0, 0, -cubeSize[2] / 2 - 0.01]}
      >
        <ProjectsPage />
      </Html>
      <Html
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        occlude
        distanceFactor={1.8}
        transform
        rotation-x={-Math.PI / -2}
        portal={{ current: scroll.fixed }}
        position={[0, (-cubeSize[1] / 2) * 1.02, 0]}
      >
        <AboutPage />
      </Html>
    </mesh>
  );
};
