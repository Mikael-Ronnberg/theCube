import { Html, useScroll } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Mesh, PMREMGenerator } from "three";
import useCubeState from "../stores/cubeStore";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;
interface CubeProps {
  cubeRef: React.RefObject<Mesh>;
}

export const Cube = ({ cubeRef }: CubeProps) => {
  const { isMoved, setIsMoved } = useCubeState();

  const { gl, scene } = useThree();
  const hdrTexture = useLoader(RGBELoader, "/kloppenheim_06_puresky_1k.hdr");

  const scroll = useScroll();
  const [cubeSize, setCubeSize] = useState<[number, number, number]>([1, 1, 1]);
  const [htmlPosition, setHtmlPosition] = useState<[number, number, number]>([
    0, 0, 0.51,
  ]);

  const lerpFactor = 0.7;
  const snapThreshold = 0.1;
  const snapPoints = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI];

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
      const rotationFactorX = Math.PI * 2;
      let targetRotationX = scroll.offset * rotationFactorX;

      const closestSnapPointX = snapPoints.reduce((prev, curr) =>
        Math.abs(curr - targetRotationX) < Math.abs(prev - targetRotationX)
          ? curr
          : prev
      );

      if (Math.abs(closestSnapPointX - targetRotationX) < snapThreshold) {
        targetRotationX = lerp(
          cubeRef.current.rotation.x,
          closestSnapPointX,
          lerpFactor
        );
      }

      cubeRef.current.rotation.x = targetRotationX;

      if (isMoved) {
        if (Math.abs(cubeRef.current.position.x - 3.5) > 0.01) {
          cubeRef.current.position.x = lerp(
            cubeRef.current.position.x,
            -3.5,
            0.05
          );
        }
        if (Math.abs(cubeRef.current.rotation.y - 1.5) > 0.01) {
          cubeRef.current.rotation.y = lerp(
            cubeRef.current.rotation.y,
            1.5,
            0.05
          );
        }
      } else {
        if (Math.abs(cubeRef.current.position.x) > 0.01) {
          cubeRef.current.position.x = lerp(
            cubeRef.current.position.x,
            0,
            0.05
          );
        }
        if (Math.abs(cubeRef.current.rotation.y) > 0.01) {
          cubeRef.current.rotation.y = lerp(
            cubeRef.current.rotation.y,
            0,
            0.05
          );
        }
      }
    }
  });

  const updateSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const navbarHeight = 100;
    const padding = 60;

    const newWidth = Math.max(0, width - padding * 4) / 180;
    const newHeight = Math.max(0, height - navbarHeight - padding * 2) / 170;

    const newSize: [number, number, number] = [newWidth, newHeight, newHeight];
    setCubeSize(newSize);
    setHtmlPosition([0, 0, newSize[2] / 2 + 0.01]);
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
        distanceFactor={2.5}
        transform
        portal={{ current: scrollData.fixed }}
        position={htmlPosition}
      >
        <span>Hej på er!</span>
        <button onClick={handleButtonClick}>Click me plz</button>
      </Html>
    </mesh>
  );
};
