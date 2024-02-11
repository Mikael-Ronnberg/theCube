import { Html, useScroll } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import THREE, { Mesh, PMREMGenerator } from "three";
import useCubeState from "../../stores/cubeStore";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { AboutPage } from "../../pages/AboutPage";
import { StartPage } from "../../pages/StartPage";
import { ExperiencePage } from "../../pages/ExperiencePage";

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;
interface CubeProps {
  cubeRef: React.RefObject<Mesh>;
}

export const Cube = ({ cubeRef }: CubeProps) => {
  const { isMoved, setIsMoved } = useCubeState();
  const { gl, scene } = useThree();
  const hdrTexture = useLoader(RGBELoader, "/kloppenheim_06_puresky_1k.hdr");
  const [cubeSize, setCubeSize] = useState<[number, number, number]>([1, 1, 1]);
  const [htmlPositions, setHtmlPositions] = useState<{
    [key: string]: [number, number, number];
  }>({
    side1: [0, 0, 0.51],
    side2: [0, 0, 0.51],
    side3: [0, 0, 0.51],
    side4: [0, 0, 0.51],
  });

  const scroll = useScroll();
  const totalSides = 3;

  useEffect(() => {
    if (!cubeRef.current) return;

    const pmremGenerator = new PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;

    const material = cubeRef.current.material as THREE.MeshStandardMaterial;
    material.envMap = envMap;
    material.needsUpdate = true;

    return () => {
      pmremGenerator.dispose();
      hdrTexture.dispose();
    };
  }, [hdrTexture, gl, scene]);

  useFrame(() => {
    if (cubeRef.current) {
      const sideIndex = Math.floor(scroll.offset * totalSides);
      const targetRotationX = (sideIndex * Math.PI) / 2;
      cubeRef.current.rotation.x = lerp(
        cubeRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      if (isMoved) {
        const targetRotationY = 1.5;
        cubeRef.current.rotation.y = lerp(
          cubeRef.current.rotation.y,
          targetRotationY,
          0.05
        );

        const targetPositionX = -3.5;
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

  const updateSize = () => {
    const breakpoints = {
      mobile: 480,
      tablet: 768,
    };

    const width = window.innerWidth;
    const height = window.innerHeight;
    let newWidth, newHeight;
    const navbarHeight = 100;
    const padding = 60;

    if (width <= breakpoints.mobile) {
      newWidth = Math.max(0, width - padding * 4) / 100;
      newHeight = Math.max(0, height - navbarHeight - padding * 2) / 90;
    } else if (width <= breakpoints.tablet) {
      newWidth = Math.max(0, width - padding * 4) / 140;
      newHeight = Math.max(0, height - navbarHeight - padding * 2) / 160;
    } else {
      newWidth = Math.max(0, width - padding * 4) / 180;
      newHeight = Math.max(0, height - navbarHeight - padding * 2) / 170;
    }

    const newSize: [number, number, number] = [newWidth, newHeight, newHeight];
    setCubeSize(newSize);

    const halfDepth = newSize[2] / 2 + 0.01;
    const newHtmlPositions = {
      side1: [0, 0, halfDepth] as [number, number, number],
      side2: [0, halfDepth, 0] as [number, number, number],
      side3: [0, 0, -halfDepth] as [number, number, number],
      side4: [0, -halfDepth, 0] as [number, number, number],
    };

    setHtmlPositions(newHtmlPositions);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const scrollData = useScroll();

  const handleButtonClick = () => {
    setIsMoved(!isMoved);
  };

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
        <button onClick={handleButtonClick}>Click me plz</button>
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
        <button onClick={handleButtonClick}>Click me plz</button>
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
        <button onClick={handleButtonClick}>Click me plz</button>
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
        <button onClick={handleButtonClick}>Click me plz</button>
      </Html>
    </mesh>
  );
};
