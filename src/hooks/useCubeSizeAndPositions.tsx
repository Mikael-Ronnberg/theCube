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

    let newHtmlPositions = {
      home: [0, 0, 0] as [number, number, number],
      contact: [0, 0, 0] as [number, number, number],
      works: [0, 0, 0] as [number, number, number],
      about: [0, 0, 0] as [number, number, number],
    };

    if (window.screen.width < 768) {
      newHtmlPositions = {
        home: [-0.15, 0.1, halfDepth] as [number, number, number],
        contact: [-0.1, halfDepth, 0] as [number, number, number],
        works: [-0.1, -0.05, -halfDepth] as [number, number, number],
        about: [-0.1, -halfDepth, 0] as [number, number, number],
      };
    } else {
      newHtmlPositions = {
        home: [0, 0, halfDepth] as [number, number, number],
        contact: [0, halfDepth, 0] as [number, number, number],
        works: [0, 0, -halfDepth] as [number, number, number],
        about: [0, -halfDepth, 0] as [number, number, number],
      };
    }
    setHtmlPositions(newHtmlPositions);
  }, [viewport]);

  return { cubeSize, htmlPositions };
};
