import { useFBO } from "@react-three/drei";
import { useFrame, createPortal } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import SimulationMaterial from "./simulationMaterial";

import vertexShader from "./shaders/vertexShader.glsl?raw";
import fragmentShader from "./shaders/fragmentShader.glsl?raw";

extend({ SimulationMaterial: SimulationMaterial });

interface FBOParticlesProps {
  cubeRef: React.RefObject<THREE.Mesh>;
}

export const FBOParticles = ({ cubeRef }: FBOParticlesProps) => {
  const size = 128;
  const points = useRef<THREE.Points>(null);
  const simulationMaterialRef = useRef<SimulationMaterial>(null);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1
  );
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const scaleFactor = 2; // Adjust this value to scale the particle system
  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = ((i % size) / size) * scaleFactor;
      particles[i3 + 1] = (i / size / size) * scaleFactor;
      // particles[i3 + 2] = (i / size / size) * scaleFactor;
    }
    return particles;
  }, [size, scaleFactor]);

  const uniforms = useMemo(
    () => ({
      uPositions: { value: null },
      cubePos: { value: new THREE.Vector3() },
      cubeDimensions: { value: new THREE.Vector3() },
    }),
    []
  );

  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    if (simulationMaterialRef.current && cubeRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(cubeRef.current);
      simulationMaterialRef.current.uniforms.boundingBoxMin.value =
        boundingBox.min;
      simulationMaterialRef.current.uniforms.boundingBoxMax.value =
        boundingBox.max;
    }

    if (points.current && simulationMaterialRef.current) {
      const pointsMaterial = points.current.material as THREE.ShaderMaterial;
      pointsMaterial.uniforms.uPositions.value = renderTarget.texture;
      simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial
            ref={simulationMaterialRef}
            size={size}
            args={[size]}
          />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={points} scale={[5, 5, 5]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          transparent={true}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};
