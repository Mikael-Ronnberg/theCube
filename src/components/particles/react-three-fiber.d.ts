import { ReactThreeFiber } from "@react-three/fiber";
import SimulationMaterial from "./SimulationMaterial";

interface SimulationMaterialProps {
  size: number;
  cubeDimensions: THREE.Vector3;
  cubePos: THREE.Vector3;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      simulationMaterial: ReactThreeFiber.Object3DNode<
        SimulationMaterial,
        typeof SimulationMaterial,
        SimulationMaterialProps
      >;
    }
  }
}
