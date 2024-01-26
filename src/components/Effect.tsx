import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { Particle, ParticleProps } from "./Particles";

export const Effect = () => {
  const { size } = useThree();
  const numberOfParticles = 300;

  const particles = useMemo(() => {
    return new Array(numberOfParticles)
      .fill([0, 0, 0])
      .map((): ParticleProps => {
        const position: [number, number, number] = [
          Math.random() * size.width,
          Math.random() * size.height,
          0,
        ];
        return { position };
      });
  }, [numberOfParticles, size.width, size.height]);

  return (
    <group position={[-1000, -400, -100]}>
      {" "}
      {/* Adjust these values as needed */}
      {particles.map((particle, index) => (
        <Particle key={index} position={particle.position} />
      ))}
    </group>
  );
};
