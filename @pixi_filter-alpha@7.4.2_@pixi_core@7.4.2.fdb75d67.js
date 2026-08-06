import{F as t,d as o}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var a=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;class v extends t{constructor(r=1){super(o,a,{uAlpha:1}),this.alpha=r}get alpha(){return this.uniforms.uAlpha}set alpha(r){this.uniforms.uAlpha=r}}export{v as A};
