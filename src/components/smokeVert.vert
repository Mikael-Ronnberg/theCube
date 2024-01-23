#ifdef USE_UV2
attribute vec2 uv2;
varying vec2 vUv2;
#endif

precision highp float;
precision highp int;

// Uniforms like modelMatrix, viewMatrix, etc., are provided by Three.js
uniform float time;

// Attributes like position, normal, uv, etc., are provided by Three.js

// Varyings to pass data to the fragment shader
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec2 vUv2;

void main(){
    vNormal=normal;
    vUv=uv;
    #ifdef USE_UV2
    vUv2=uv2;
    #endif
    vPosition=position;
    
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}
