import { useFBO } from "@react-three/drei";
import { useFrame, createPortal } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import SimulationMaterial from "./simulationMaterial";

import vertexShader from "./shaders/vertexShader.glsl?raw";
import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import { OBB } from "three/examples/jsm/math/OBB.js";

extend({ SimulationMaterial: SimulationMaterial });

interface FBOParticlesProps {
  cubeRef: React.RefObject<THREE.Mesh>;
}

export const FBOParticles = ({ cubeRef }: FBOParticlesProps) => {
  const size = 128;
  const points = useRef<THREE.Points>(null);
  const simulationMaterialRef = useRef<SimulationMaterial>(null);
  const obb = useMemo(() => new OBB(), []);
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
  const effectRadius = 0.01;

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: { value: null },
    }),
    []
  );

  function calculateOBBRepulsion(
    particlePos: THREE.Vector3,
    obbCenter: THREE.Vector3,
    obbHalfSize: THREE.Vector3,
    obbRotation: THREE.Quaternion,
    effectRadius: number
  ) {
    const localPos = particlePos.clone().sub(obbCenter);

    const obbRotationInverse = obbRotation.clone().invert();
    localPos.applyQuaternion(obbRotationInverse);
    const repulsion = new THREE.Vector3();
    const repulsionRadius = effectRadius;

    const closestPoint = localPos
      .clone()
      .clamp(obbHalfSize.clone().negate(), obbHalfSize);

    const distance = localPos.distanceTo(closestPoint);

    if (distance < repulsionRadius) {
      for (let i = 0; i < 3; ++i) {
        if (
          Math.abs(localPos.getComponent(i)) <
          obbHalfSize.getComponent(i) + repulsionRadius
        ) {
          const penetrationDepth =
            obbHalfSize.getComponent(i) +
            repulsionRadius -
            Math.abs(localPos.getComponent(i));
          repulsion.setComponent(
            i,
            penetrationDepth * Math.sign(localPos.getComponent(i))
          );
        }
      }

      repulsion.applyQuaternion(obbRotation);
    }

    return repulsion;
  }

  useFrame((state) => {
    const { gl, clock } = state;
    const cube = cubeRef.current;
    const simulationMaterial = simulationMaterialRef.current;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    if (cube && simulationMaterial) {
      const transformedGeometry = cube.geometry.clone();
      transformedGeometry.applyMatrix4(cube.matrixWorld);
      transformedGeometry.computeBoundingBox();

      if (transformedGeometry.boundingBox) {
        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.extractRotation(cube.matrixWorld);

        obb.fromBox3(transformedGeometry.boundingBox);
        obb.applyMatrix4(rotationMatrix);

        if (simulationMaterial) {
          simulationMaterial.uniforms.obbCenter.value.copy(obb.center);
          simulationMaterial.uniforms.obbHalfSize.value.copy(obb.halfSize);

          const quaternion = new THREE.Quaternion();
          quaternion.setFromRotationMatrix(rotationMatrix);
          simulationMaterial.uniforms.obbRotation.value.copy(quaternion);
        }
      }

      transformedGeometry.dispose();
    }

    if (points.current && simulationMaterial) {
      const pointsMaterial = points.current.material as THREE.ShaderMaterial;
      pointsMaterial.uniforms.uPositions.value = renderTarget.texture;
      simulationMaterial.uniforms.uTime.value = clock.elapsedTime;

      for (let i = 0; i < particlesPosition.length; i += 3) {
        const particlePos = new THREE.Vector3(
          particlesPosition[i],
          particlesPosition[i + 1],
          particlesPosition[i + 2]
        );

        const repulsion = calculateOBBRepulsion(
          particlePos,
          obb.center,
          obb.halfSize,
          simulationMaterial.uniforms.obbRotation.value,
          effectRadius
        );

        particlePos.add(repulsion);

        particlesPosition[i] = particlePos.x;
        particlesPosition[i + 1] = particlePos.y;
        particlesPosition[i + 2] = particlePos.z;
      }
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
      <points ref={points}>
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
