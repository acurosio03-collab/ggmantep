import{O as M,Q as _,i as w,j as s}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as y}from"./@pixi_color@7.4.2.090b5ebd.js";import{M as A}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{j as E}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{W as f}from"./@pixi_constants@7.4.2.8b356162.js";import{E as b,e as D}from"./@pixi_extensions@7.4.2.089ce807.js";var R=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,F=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,P=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,S=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,O=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;const u=new A;class g extends M{constructor(e){super(e),e.runners.contextChange.add(this),this.quad=new _,this.state=w.for2d()}contextChange(){const e=this.renderer,o={globals:e.globalUniforms};this.simpleShader=s.from(S,O,o),this.shader=e.context.webGLVersion>1?s.from(F,R,o):s.from(S,P,o)}render(e){const o=this.renderer,m=this.quad;let r=m.vertices;r[0]=r[6]=e._width*-e.anchor.x,r[1]=r[3]=e._height*-e.anchor.y,r[2]=r[4]=e._width*(1-e.anchor.x),r[5]=r[7]=e._height*(1-e.anchor.y);const v=e.uvRespectAnchor?e.anchor.x:0,x=e.uvRespectAnchor?e.anchor.y:0;r=m.uvs,r[0]=r[6]=-v,r[1]=r[3]=-x,r[2]=r[4]=1-v,r[5]=r[7]=1-x,m.invalidate();const i=e._texture,a=i.baseTexture,h=a.alphaMode>0,n=e.tileTransform.localTransform,d=e.uvMatrix;let l=a.isPowerOfTwo&&i.frame.width===a.width&&i.frame.height===a.height;l&&(a._glTextures[o.CONTEXT_UID]?l=a.wrapMode!==f.CLAMP:a.wrapMode===f.CLAMP&&(a.wrapMode=f.REPEAT));const t=l?this.simpleShader:this.shader,C=i.width,T=i.height,c=e._width,p=e._height;u.set(n.a*C/c,n.b*C/p,n.c*T/c,n.d*T/p,n.tx/c,n.ty/p),u.invert(),l?u.prepend(d.mapCoord):(t.uniforms.uMapCoord=d.mapCoord.toArray(!0),t.uniforms.uClampFrame=d.uClampFrame,t.uniforms.uClampOffset=d.uClampOffset),t.uniforms.uTransform=u.toArray(!0),t.uniforms.uColor=y.shared.setValue(e.tint).premultiply(e.worldAlpha,h).toArray(t.uniforms.uColor),t.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),t.uniforms.uSampler=i,o.shader.bind(t),o.geometry.bind(m),this.state.blendMode=E(e.blendMode,h),o.state.set(this.state),o.geometry.draw(this.renderer.gl.TRIANGLES,6,0)}}g.extension={name:"tilingSprite",type:b.RendererPlugin};D.add(g);
