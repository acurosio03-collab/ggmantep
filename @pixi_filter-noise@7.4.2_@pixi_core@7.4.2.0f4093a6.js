import{F as e,e as i}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var t=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;class h extends e{constructor(o=.5,r=Math.random()){super(i,t,{uNoise:0,uSeed:0}),this.noise=o,this.seed=r}get noise(){return this.uniforms.uNoise}set noise(o){this.uniforms.uNoise=o}get seed(){return this.uniforms.uSeed}set seed(o){this.uniforms.uSeed=o}}export{h as N};
