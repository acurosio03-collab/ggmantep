import{F as f,e as v}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as d}from"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var A=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;class g extends f{constructor(){const i={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};super(v,A,i),this.alpha=1}_loadMatrix(i,r=!1){let t=i;r&&(this._multiply(t,this.uniforms.m,i),t=this._colorMatrix(t)),this.uniforms.m=t}_multiply(i,r,t){return i[0]=r[0]*t[0]+r[1]*t[5]+r[2]*t[10]+r[3]*t[15],i[1]=r[0]*t[1]+r[1]*t[6]+r[2]*t[11]+r[3]*t[16],i[2]=r[0]*t[2]+r[1]*t[7]+r[2]*t[12]+r[3]*t[17],i[3]=r[0]*t[3]+r[1]*t[8]+r[2]*t[13]+r[3]*t[18],i[4]=r[0]*t[4]+r[1]*t[9]+r[2]*t[14]+r[3]*t[19]+r[4],i[5]=r[5]*t[0]+r[6]*t[5]+r[7]*t[10]+r[8]*t[15],i[6]=r[5]*t[1]+r[6]*t[6]+r[7]*t[11]+r[8]*t[16],i[7]=r[5]*t[2]+r[6]*t[7]+r[7]*t[12]+r[8]*t[17],i[8]=r[5]*t[3]+r[6]*t[8]+r[7]*t[13]+r[8]*t[18],i[9]=r[5]*t[4]+r[6]*t[9]+r[7]*t[14]+r[8]*t[19]+r[9],i[10]=r[10]*t[0]+r[11]*t[5]+r[12]*t[10]+r[13]*t[15],i[11]=r[10]*t[1]+r[11]*t[6]+r[12]*t[11]+r[13]*t[16],i[12]=r[10]*t[2]+r[11]*t[7]+r[12]*t[12]+r[13]*t[17],i[13]=r[10]*t[3]+r[11]*t[8]+r[12]*t[13]+r[13]*t[18],i[14]=r[10]*t[4]+r[11]*t[9]+r[12]*t[14]+r[13]*t[19]+r[14],i[15]=r[15]*t[0]+r[16]*t[5]+r[17]*t[10]+r[18]*t[15],i[16]=r[15]*t[1]+r[16]*t[6]+r[17]*t[11]+r[18]*t[16],i[17]=r[15]*t[2]+r[16]*t[7]+r[17]*t[12]+r[18]*t[17],i[18]=r[15]*t[3]+r[16]*t[8]+r[17]*t[13]+r[18]*t[18],i[19]=r[15]*t[4]+r[16]*t[9]+r[17]*t[14]+r[18]*t[19]+r[19],i}_colorMatrix(i){const r=new Float32Array(i);return r[4]/=255,r[9]/=255,r[14]/=255,r[19]/=255,r}brightness(i,r){const t=[i,0,0,0,0,0,i,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(t,r)}tint(i,r){const[t,s,e]=d.shared.setValue(i).toArray(),l=[t,0,0,0,0,0,s,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(l,r)}greyscale(i,r){const t=[i,i,i,0,0,i,i,i,0,0,i,i,i,0,0,0,0,0,1,0];this._loadMatrix(t,r)}blackAndWhite(i){const r=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(r,i)}hue(i,r){i=(i||0)/180*Math.PI;const t=Math.cos(i),s=Math.sin(i),e=Math.sqrt,l=1/3,m=e(l),o=t+(1-t)*l,c=l*(1-t)-m*s,x=l*(1-t)+m*s,h=l*(1-t)+m*s,a=t+l*(1-t),p=l*(1-t)-m*s,u=l*(1-t)-m*s,M=l*(1-t)+m*s,_=t+l*(1-t),n=[o,c,x,0,0,h,a,p,0,0,u,M,_,0,0,0,0,0,1,0];this._loadMatrix(n,r)}contrast(i,r){const t=(i||0)+1,s=-.5*(t-1),e=[t,0,0,0,s,0,t,0,0,s,0,0,t,0,s,0,0,0,1,0];this._loadMatrix(e,r)}saturate(i=0,r){const t=i*2/3+1,s=(t-1)*-.5,e=[t,s,s,0,0,s,t,s,0,0,s,s,t,0,0,0,0,0,1,0];this._loadMatrix(e,r)}desaturate(){this.saturate(-1)}negative(i){const r=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(r,i)}sepia(i){const r=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(r,i)}technicolor(i){const r=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(r,i)}polaroid(i){const r=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(r,i)}toBGR(i){const r=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(r,i)}kodachrome(i){const r=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(r,i)}browni(i){const r=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(r,i)}vintage(i){const r=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(r,i)}colorTone(i,r,t,s,e){i=i||.2,r=r||.15,t=t||16770432,s=s||3375104;const l=d.shared,[m,o,c]=l.setValue(t).toArray(),[x,h,a]=l.setValue(s).toArray(),p=[.3,.59,.11,0,0,m,o,c,i,0,x,h,a,r,0,m-x,o-h,c-a,0,0];this._loadMatrix(p,e)}night(i,r){i=i||.1;const t=[i*-2,-i,0,0,0,-i,0,i,0,0,0,i,i*2,0,0,0,0,0,1,0];this._loadMatrix(t,r)}predator(i,r){const t=[11.224130630493164*i,-4.794486999511719*i,-2.8746118545532227*i,0*i,.40342438220977783*i,-3.6330697536468506*i,9.193157196044922*i,-2.951810836791992*i,0*i,-1.316135048866272*i,-3.2184197902679443*i,-4.2375030517578125*i,7.476448059082031*i,0*i,.8044459223747253*i,0,0,0,1,0];this._loadMatrix(t,r)}lsd(i){const r=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(r,i)}reset(){const i=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(i,!1)}get matrix(){return this.uniforms.m}set matrix(i){this.uniforms.m=i}get alpha(){return this.uniforms.uAlpha}set alpha(i){this.uniforms.uAlpha=i}}g.prototype.grayscale=g.prototype.greyscale;export{g as C};
