import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3, Mesh } from "three";

export interface ParticleProps {
  position: [number, number, number];
  cubePosition: [number, number, number];
}

export const Particle = ({ position, cubePosition }: ParticleProps) => {
  const meshRef = useRef<Mesh>(null);
  const velocity = useRef(
    new Vector3(
      Math.random() * 0.02 - 0.1,
      Math.random() * 0.02 - 0.1,
      Math.random() * 0.02 - 0.1
    )
  );

  const maxDistance = 100;

  const collisionThreshold = 10;
  const cubePosVector = new Vector3(...cubePosition);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.add(velocity.current);

      const distanceToCube = meshRef.current.position.distanceTo(cubePosVector);
      if (distanceToCube < collisionThreshold) {
        velocity.current.multiplyScalar(-1);
      }

      if (distanceToCube > maxDistance) {
        const direction = new Vector3(...cubePosition)
          .sub(meshRef.current.position)
          .normalize();
        velocity.current.add(direction.multiplyScalar(0.05));
      }
      meshRef.current.position.add(velocity.current);
    }
  });

  return <Sphere ref={meshRef} args={[1, 32, 32]} position={position} />;
};
