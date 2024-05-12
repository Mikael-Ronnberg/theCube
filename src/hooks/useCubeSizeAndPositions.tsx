import { useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
// import { isMobile } from "react-device-detect";

export const useCubeSizeAndPositions = () => {
  const { viewport } = useThree();
  const [cubeSize, setCubeSize] = useState<[number, number, number]>([1, 1, 1]);
  const [htmlPositions, setHtmlPositions] = useState<{
    [key: string]: [number, number, number];
  }>({});

  useEffect(() => {
    const newWidth = viewport.width / 1.8;
    const newHeight = viewport.height / 1.9;
    const newSize: [number, number, number] = [newWidth, newHeight, newHeight];

    setCubeSize(newSize);

    const halfDepth = newSize[2] / 2 + 0.01;

    // const measureWindowHeight = () => {
    //   const screenWidth = window.screen.width;
    //   const screenHeight = window.screen.height;

    //   if (screenHeight % 2 !== 0 || screenWidth % 2 !== 0) {

    //   }
    // };

    // window.requestAnimationFrame(measureWindowHeight);
    // const handleResize = () => {
    //   measureWindowHeight();
    // };

    // if (!isMobile) {
    //   window.addEventListener("resize", handleResize);
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }
    const newHtmlPositions = {
      side1: [0, 0, halfDepth] as [number, number, number],
      side2: [0, halfDepth, 0] as [number, number, number],
      side3: [0, 0, -halfDepth] as [number, number, number],
      side4: [0, -halfDepth, 0] as [number, number, number],
    };

    setHtmlPositions(newHtmlPositions);
  }, [viewport]);

  return { cubeSize, htmlPositions };
};
