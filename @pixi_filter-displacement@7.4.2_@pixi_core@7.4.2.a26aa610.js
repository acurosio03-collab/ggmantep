import{F as n}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{P as s,M as p}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var u=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,l=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;class w extends n{constructor(r,i){const e=new p;r.renderable=!1,super(l,u,{mapSampler:r._texture,filterMatrix:e,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])}),this.maskSprite=r,this.maskMatrix=e,i==null&&(i=20),this.scale=new s(i,i)}apply(r,i,e,m){this.uniforms.filterMatrix=r.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;const t=this.maskSprite.worldTransform,o=Math.sqrt(t.a*t.a+t.b*t.b),a=Math.sqrt(t.c*t.c+t.d*t.d);o!==0&&a!==0&&(this.uniforms.rotation[0]=t.a/o,this.uniforms.rotation[1]=t.b/o,this.uniforms.rotation[2]=t.c/a,this.uniforms.rotation[3]=t.d/a),r.applyFilter(this,i,e,m)}get map(){return this.uniforms.mapSampler}set map(r){this.uniforms.mapSampler=r}}export{w as D};
