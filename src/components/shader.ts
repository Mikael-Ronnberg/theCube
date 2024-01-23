import { Vector2, Vector3, IUniform } from "three";

interface ShaderData {
  id: number;
  name: string;
  fragment: string;
  vertex: string;
  uniforms: { [key: string]: UniformConfig };
  url: string;
  user: {
    username: string;
    url: string;
  };
}

interface UniformConfig {
  name: string;
  displayName: string | null;
  type: "f" | "v2" | "v3";
  glslType: string;
  useGridHelper: boolean;
  useRange: boolean;
  range: unknown;
  isRandom: boolean;
  randomRange: unknown;
  useToggle: boolean;
  toggle: unknown;
  description: string;
}

const shaderData: ShaderData = {
  id: 483,
  name: "Test Universe",
  fragment:
    "precision highp float;\nprecision highp int;\nuniform vec2 resolution;\nuniform float time;\nvarying vec2 vUv;\nvec4 Test_Universe1705955524697_661_main() \n                                                {\n                                                    vec4 Test_Universe1705955524697_661_gl_FragColor = vec4(0.0);\n                                                    float timeScaled = (time + 29.) * 60.0;\n                                                    float s = 0.0, v = 0.0;\n                                                    vec2 uv = (vUv.xy / resolution.xy) * 2.0 - 1.0;\n                                                    float t = time * 0.005;\n                                                    uv.x = (uv.x * resolution.x / resolution.y) + sin(t) * 0.5;\n                                                    float si = sin(t + 1.0);\n                                                    float co = cos(t);\n                                                    uv *= mat2(co, si, -si, co);\n                                                    vec3 col = vec3(0.0);\n                                                    vec3 init = vec3(0.25, 0.25 + sin(timeScaled * 0.001) * 0.4, floor(timeScaled) * 0.0008);\n                                                    for (int r = 0;\n r < 50; r++) \n                                                    {\n                                                        vec3 p = init + s * vec3(uv, 0.143);\n                                                        p.z = mod(p.z, 2.0);\n                                                        for (int i = 0;\n i < 10; i++) p = abs(p * 2.04) / dot(p, p) - 0.75;\n                                                        v += length(p * p) * smoothstep(0.0, 0.5, 0.9 - s) * .002;\n                                                        col += vec3(v * 0.8, 1.1 - s * 0.5, .7 + v * 0.5) * v * 0.013;\n                                                        s += .01;\n                                                    }\n                                                    Test_Universe1705955524697_661_gl_FragColor = vec4(col, 1.0);\n                                                    return Test_Universe1705955524697_661_gl_FragColor *= 1.0;\n                                                }\nvoid main() \n                                                {\n                                                    gl_FragColor = Test_Universe1705955524697_661_main();                                                }\n",
  vertex: `
  precision highp float;
  precision highp int;
  
  // Varyings to pass data to the fragment shader
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  #ifdef USE_UV2
  varying vec2 vUv2;
  #endif
  
  void main() {
      vNormal = normal;
      vUv = uv;
      #ifdef USE_UV2
      vUv2 = uv2; // Assuming uv2 is provided by the geometry
      #endif
      vPosition = position;
  
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,

  uniforms: {
    cameraPosition: {
      name: "cameraPosition",
      displayName: null,
      type: "v3",
      glslType: "vec3",
      useGridHelper: false,
      useRange: false,
      range: null,
      isRandom: false,
      randomRange: null,
      useToggle: false,
      toggle: null,
      description: "",
    },
    time: {
      name: "time",
      displayName: null,
      type: "f",
      glslType: "float",
      useGridHelper: false,
      useRange: false,
      range: null,
      isRandom: false,
      randomRange: null,
      useToggle: false,
      toggle: null,
      description: "",
    },
    resolution: {
      name: "resolution",
      displayName: null,
      type: "v2",
      glslType: "vec2",
      useGridHelper: false,
      useRange: false,
      range: null,
      isRandom: false,
      randomRange: null,
      useToggle: false,
      toggle: null,
      description: "",
    },
  },
  url: "http://shaderfrog.com/app/view/483",
  user: {
    username: "andrewray",
    url: "http://shaderfrog.com/app/profile/andrewray",
  },
};

export const vertexShader = shaderData.vertex;
export const fragmentShader = shaderData.fragment;
export const uniformsConfig = shaderData.uniforms;

export function createUniforms(config: { [key: string]: UniformConfig }): {
  [key: string]: IUniform;
} {
  const uniforms: { [key: string]: IUniform } = {};
  for (const key in config) {
    const uniform = config[key];
    switch (uniform.type) {
      case "f":
        uniforms[key] = { value: 0 };
        break;
      case "v2":
        uniforms[key] = { value: new Vector2() };
        break;
      case "v3":
        uniforms[key] = { value: new Vector3() };
        break;

      default:
        break;
    }
  }
  return uniforms;
}

export const uniforms = createUniforms(uniformsConfig);
