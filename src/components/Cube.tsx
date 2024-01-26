import { Html, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

export const Cube = () => {
  const cubeRef = useRef<Mesh>(null);
  const scroll = useScroll();
  const [cubeSize, setCubeSize] = useState<[number, number, number]>([1, 1, 1]);
  const [htmlPosition, setHtmlPosition] = useState<[number, number, number]>([
    0, 0, 0.51,
  ]);
  const lerpFactor = 0.7;
  const snapThreshold = 0.1;
  const snapPoints = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI];

  useFrame(() => {
    if (cubeRef.current) {
      const rotationFactor = Math.PI * 2;
      let targetRotation = scroll.offset * rotationFactor;
      const closestSnapPoint = snapPoints.reduce((prev, curr) =>
        Math.abs(curr - targetRotation) < Math.abs(prev - targetRotation)
          ? curr
          : prev
      );
      if (Math.abs(closestSnapPoint - targetRotation) < snapThreshold) {
        targetRotation = lerp(
          cubeRef.current.rotation.x,
          closestSnapPoint,
          lerpFactor
        );
      }

      cubeRef.current.rotation.x = targetRotation;
    }
  });

  const updateSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const navbarHeight = 100;
    const padding = 60;

    const newWidth = Math.max(0, width - padding * 4) / 100;
    const newHeight = Math.max(0, height - navbarHeight - padding * 2) / 100;

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

  return (
    <mesh ref={cubeRef} visible position={[0, 0, -5]}>
      <boxGeometry args={cubeSize} />
      <meshStandardMaterial color="pink" />
      <Html
        occlude
        distanceFactor={5.5}
        transform
        portal={{ current: scrollData.fixed }}
        position={htmlPosition}
      >
        <span>Hej på er!</span>
        <button> Click me plz</button>
      </Html>
    </mesh>
  );
};
