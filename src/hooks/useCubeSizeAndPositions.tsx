import { useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";

export const useCubeSizeAndPositions = () => {
  const { viewport } = useThree();
  const [cubeSize, setCubeSize] = useState<[number, number, number]>([1, 1, 1]);
  const [htmlPositions, setHtmlPositions] = useState<{
    [key: string]: [number, number, number];
  }>({});

  useEffect(() => {
    const newWidth = viewport.width / 1.8;
    const newHeight = viewport.height / 2;
    const newSize: [number, number, number] = [newWidth, newHeight, newHeight];

    setCubeSize(newSize);

    const halfDepth = newSize[2] / 2 + 0.01;

    if (window.screen.width < 768) {
      const newHtmlPositions = {
        side1: [-0.15, 0, halfDepth] as [number, number, number],
        side2: [-0.15, halfDepth, 0] as [number, number, number],
        side3: [-0.15, 0, -halfDepth] as [number, number, number],
        side4: [0.15, -halfDepth, 0] as [number, number, number],
      };
      setHtmlPositions(newHtmlPositions);
    } else {
      const newHtmlPositions = {
        side1: [0, 0, halfDepth] as [number, number, number],
        side2: [0, halfDepth, 0] as [number, number, number],
        side3: [0, 0, -halfDepth] as [number, number, number],
        side4: [0, -halfDepth, 0] as [number, number, number],
      };
      setHtmlPositions(newHtmlPositions);
    }
  }, [viewport]);

  return { cubeSize, htmlPositions };
};
