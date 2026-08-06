import{F as n}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{C as a}from"./@pixi_constants@7.4.2.8b356162.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";const g={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},c=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function m(h){const t=g[h],i=t.length;let e=c,s="";const o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";let l;for(let r=0;r<h;r++){let u=o.replace("%index%",r.toString());l=r,r>=i&&(l=h-r-1),u=u.replace("%value%",t[l].toString()),s+=u,s+=`
`}return e=e.replace("%blur%",s),e=e.replace("%size%",h.toString()),e}const x=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

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

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function F(h,t){const i=Math.ceil(h/2);let e=x,s="",o;t?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(let l=0;l<h;l++){let r=o.replace("%index%",l.toString());r=r.replace("%sampleIndex%",`${l-(i-1)}.0`),s+=r,s+=`
`}return e=e.replace("%blur%",s),e=e.replace("%size%",h.toString()),e}class p extends n{constructor(t,i=8,e=4,s=n.defaultResolution,o=5){const l=F(o,t),r=m(o);super(l,r),this.horizontal=t,this.resolution=s,this._quality=0,this.quality=e,this.blur=i}apply(t,i,e,s){if(e?this.horizontal?this.uniforms.strength=1/e.width*(e.width/i.width):this.uniforms.strength=1/e.height*(e.height/i.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/i.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/i.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,i,e,s);else{const o=t.getFilterTexture(),l=t.renderer;let r=i,u=o;this.state.blend=!1,t.applyFilter(this,r,u,a.CLEAR);for(let d=1;d<this.passes-1;d++){t.bindAndClear(r,a.BLIT),this.uniforms.uSampler=u;const b=u;u=r,r=b,l.shader.bind(this),l.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,u,e,s),t.returnFilterTexture(o)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}}class _ extends n{constructor(t=8,i=4,e=n.defaultResolution,s=5){super(),this._repeatEdgePixels=!1,this.blurXFilter=new p(!0,t,i,e,s),this.blurYFilter=new p(!1,t,i,e,s),this.resolution=e,this.quality=i,this.blur=t,this.repeatEdgePixels=!1}apply(t,i,e,s){const o=Math.abs(this.blurXFilter.strength),l=Math.abs(this.blurYFilter.strength);if(o&&l){const r=t.getFilterTexture();this.blurXFilter.apply(t,i,r,a.CLEAR),this.blurYFilter.apply(t,r,e,s),t.returnFilterTexture(r)}else l?this.blurYFilter.apply(t,i,e,s):this.blurXFilter.apply(t,i,e,s)}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2}get blur(){return this.blurXFilter.blur}set blur(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(t){this.blurXFilter.quality=this.blurYFilter.quality=t}get blurX(){return this.blurXFilter.blur}set blurX(t){this.blurXFilter.blur=t,this.updatePadding()}get blurY(){return this.blurYFilter.blur}set blurY(t){this.blurYFilter.blur=t,this.updatePadding()}get blendMode(){return this.blurYFilter.blendMode}set blendMode(t){this.blurYFilter.blendMode=t}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(t){this._repeatEdgePixels=t,this.updatePadding()}}export{_ as B,p as a};
