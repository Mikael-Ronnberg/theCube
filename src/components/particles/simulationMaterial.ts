import simulationVertexShader from "./shaders/simulationVertexShader.glsl?raw";
import simulationFragmentShader from "./shaders/simulationFragmentShader.glsl?raw";
import * as THREE from "three";

const getRandomData = (width: number, height: number) => {
  const length = width * height * 4;
  const data = new Float32Array(length);

  for (let i = 0; i < width * height; i++) {
    const stride = i * 4;

    const distance = Math.sqrt(Math.random()) * 2.0;
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);

    data[stride] = distance * Math.sin(theta) * Math.cos(phi);
    data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] = distance * Math.cos(theta);
    data[stride + 3] = 1.0; // Alpha component
  }

  return data;
};

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(size: number) {
    const positionsTexture = new THREE.DataTexture(
      getRandomData(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTexture.needsUpdate = true;

    const simulationUniforms = {
      positions: { value: positionsTexture },
      uFrequency: { value: 0.3 },
      uTime: { value: 0 },
      obbCenter: { value: new THREE.Vector3() },
      obbHalfSize: { value: new THREE.Vector3() },
      obbRotation: { value: new THREE.Quaternion() },
    };

    super({
      uniforms: simulationUniforms,
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

export default SimulationMaterial;
