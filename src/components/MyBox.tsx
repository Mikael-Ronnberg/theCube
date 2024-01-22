import { Html } from "@react-three/drei";

export const MyBox = () => {
  return (
    <mesh visible position={[0, 0, -5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="pink" />

      <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <span>Hej på er!</span>
        <button> Click me plz</button>
      </Html>
    </mesh>
  );
};
