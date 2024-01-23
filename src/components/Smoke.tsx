import React, { useMemo } from "react";
import { Vector2 } from "three";
import { useFrame } from "@react-three/fiber";
import {
  vertexShader,
  fragmentShader,
  createUniforms,
  uniformsConfig,
} from "./shader";

export const Smoke: React.FC = () => {
  const shaderUniforms = useMemo(() => createUniforms(uniformsConfig), []);

  useFrame(({ clock }) => {
    if (shaderUniforms.time) {
      shaderUniforms.time.value = clock.getElapsedTime();
    }
    if (shaderUniforms.resolution) {
      shaderUniforms.resolution.value = new Vector2(
        window.innerWidth,
        window.innerHeight
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[4, 4, 4]} />
      <shaderMaterial
        attach="material"
        uniforms={shaderUniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
