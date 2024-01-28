uniform sampler2D uPositions;
uniform float uTime;

void main(){
    vec3 pos=texture2D(uPositions,position.xy).xyz;
    
    vec4 modelPosition=modelMatrix*vec4(pos,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    
    gl_Position=projectedPosition;
    
    gl_PointSize=3.;
    gl_PointSize*=step(1.-(1./64.),position.x)+.5;
}
