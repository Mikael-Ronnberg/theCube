import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Particles: React.FC<{ count?: number }> = ({ count = 1000 }) => {
  const meshRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 5 - 2.5;
      const y = Math.random() * 5 - 2.5;
      const z = Math.random() * 5 - 2.5;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        color="white"
        depthTest={false}
        depthWrite={false} // Add this line
        transparent={true} // Optionally, make the material transparent
        opacity={0.5}
      />
    </points>
  );
};
