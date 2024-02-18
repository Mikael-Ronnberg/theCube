import { useState, useEffect } from "react";

export const useCubeSizeAndPositions = () => {
  const [cubeSize, setCubeSize] = useState<[number, number, number]>([1, 1, 1]);
  const [htmlPositions, setHtmlPositions] = useState<{
    [key: string]: [number, number, number];
  }>({});

  useEffect(() => {
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
        newWidth = Math.max(0, width - padding * 2) / 170;
        newHeight = Math.max(0, height - navbarHeight - padding * 2) / 160;
      } else if (width <= breakpoints.tablet) {
        newWidth = Math.max(0, width - padding * 2) / 175;
        newHeight = Math.max(0, height - navbarHeight - padding * 2) / 165;
      } else {
        newWidth = Math.max(0, width - padding * 2) / 180;
        newHeight = Math.max(0, height - navbarHeight - padding * 2) / 170;
      }

      const newSize: [number, number, number] = [
        newWidth,
        newHeight,
        newHeight,
      ];
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

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return { cubeSize, htmlPositions };
};
