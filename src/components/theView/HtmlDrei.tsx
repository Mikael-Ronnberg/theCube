import { Html } from "@react-three/drei";
import { ReactNode, useEffect } from "react";
import { isMobile } from "react-device-detect";

type HtmlDreiProps = {
  children: ReactNode;
};

export const HTMLDrei = ({ children }: HtmlDreiProps) => {
  useEffect(() => {
    const measureWindowHeight = () => {
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;

      if (screenHeight % 2 !== 0 || screenWidth % 2 !== 0) {
        console.log("hej");
      }
    };

    window.requestAnimationFrame(measureWindowHeight);
    const handleResize = () => {
      measureWindowHeight();
    };

    if (!isMobile) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <Html>{children}</Html>
    </>
  );
};
