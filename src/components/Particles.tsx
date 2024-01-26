import { useRef } from "react";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export interface ParticleProps {
  position: [number, number, number];
}

export const Particle = ({ position }: ParticleProps) => {
  const meshRef = useRef<Mesh>(null);
  const velocity = useRef([
    Math.random() * 0.02 - 0.01,
    Math.random() * 0.02 - 0.01,
    Math.random() * 0.02 - 0.01,
  ]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += velocity.current[0];
      meshRef.current.position.y += velocity.current[1];
      meshRef.current.position.z += velocity.current[2];

      if (meshRef.current.position.x > 5 || meshRef.current.position.x < -5) {
        velocity.current[0] *= -1;
      }
      if (meshRef.current.position.y > 5 || meshRef.current.position.y < -5) {
        velocity.current[1] *= -1;
      }
      if (meshRef.current.position.z > 5 || meshRef.current.position.z < -5) {
        velocity.current[2] *= -1;
      }
    }
  });

  return <Sphere ref={meshRef} args={[1, 2, 3]} position={position} />;
};
