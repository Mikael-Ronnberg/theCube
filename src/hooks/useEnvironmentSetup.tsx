import { useEffect } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { Mesh, PMREMGenerator, TextureLoader } from "three";

export const useEnvironmentSetup = (cubeRef: React.RefObject<Mesh>) => {
  const { gl, scene } = useThree();
  const hdrTexture = useLoader(RGBELoader, "/kloppenheim_06_puresky_1k.hdr");
  const bumpMap = useLoader(TextureLoader, "/CubeBumpMap.jpg");

  useEffect(() => {
    if (!cubeRef.current) return;

    const pmremGenerator = new PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;

    const material = cubeRef.current.material as THREE.MeshStandardMaterial;
    material.envMap = envMap;
    material.bumpMap = bumpMap;
    // material.bumpScale = 1;
    material.needsUpdate = true;

    return () => {
      pmremGenerator.dispose();
      hdrTexture.dispose();
      bumpMap.dispose();
    };
  }, [hdrTexture, bumpMap, gl, scene, cubeRef]);
};
