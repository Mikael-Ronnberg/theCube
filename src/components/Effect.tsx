import { useMemo } from "react";
import { Mesh, Vector3 } from "three";
import { Line } from "@react-three/drei";
import { Particle } from "./Particle";

interface EffectProps {
  cubeRef: React.RefObject<Mesh>;
}

export const Effect = ({ cubeRef }: EffectProps) => {
  const numParticles = 200;

  const particles = useMemo(() => {
    return new Array(numParticles)
      .fill(null)
      .map(
        () =>
          new Vector3(
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50
          )
      );
  }, [numParticles]);

  const points = useMemo(() => particles.map((p) => p.toArray()), [particles]);

  return (
    <>
      {particles.map((position, index) => (
        <Particle
          key={index}
          position={position.toArray()}
          cubePosition={
            cubeRef.current ? cubeRef.current.position.toArray() : [0, 0, 0]
          }
        />
      ))}
      <Line points={points} color="white" />
    </>
  );
};
