import{p as d,r as s,q as m,o as p,t as c,c as f,y as t,M as v,v as r,u as b}from"./framework.DcRevfCx.js";import{M as V,S as g,T as y,N as x}from"./theme.CK6SIbTt.js";const S=d({__name:"basic",setup(i){const e=s(1),a=l=>{console.log(l)};return(l,o)=>{const n=m("el-input-number");return p(),c(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),min:1,max:10,onChange:a},null,8,["modelValue"])}}}),w=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),j=d({__name:"controlled",setup(i){const e=s(1),a=l=>{console.log(l)};return(l,o)=>{const n=m("el-input-number");return p(),f(v,null,[t(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),min:1,max:10,"controls-position":"right",size:"large",onChange:a},null,8,["modelValue"]),t(n,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=u=>e.value=u),class:"mx-4",min:1,max:10,"controls-position":"right",onChange:a},null,8,["modelValue"]),t(n,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=u=>e.value=u),min:1,max:10,size:"small","controls-position":"right",onChange:a},null,8,["modelValue"])],64)}}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),O=d({__name:"custom",setup(i){const e=s(1);return(a,l)=>{const o=m("el-input-number"),n=m("el-icon"),u=m("el-space");return p(),c(u,{direction:"vertical"},{default:r(()=>[t(u,null,{default:r(()=>[t(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_)},null,8,["modelValue"]),t(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=_=>e.value=_)},{"decrease-icon":r(()=>[t(n,null,{default:r(()=>[t(b(V))]),_:1})]),"increase-icon":r(()=>[t(n,null,{default:r(()=>[t(b(g))]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,null,{default:r(()=>[t(o,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=_=>e.value=_),"controls-position":"right"},null,8,["modelValue"]),t(o,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=_=>e.value=_),"controls-position":"right"},{"decrease-icon":r(()=>[t(n,null,{default:r(()=>[t(b(y))]),_:1})]),"increase-icon":r(()=>[t(n,null,{default:r(()=>[t(b(x))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),B=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),U=d({__name:"disabled",setup(i){const e=s(1);return(a,l)=>{const o=m("el-input-number");return p(),c(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),disabled:!0},null,8,["modelValue"])}}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),z=d({__name:"precision",setup(i){const e=s(1);return(a,l)=>{const o=m("el-input-number");return p(),c(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),precision:2,step:.1,max:10},null,8,["modelValue","step"])}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),M=d({__name:"size",setup(i){const e=s(1),a=s(2),l=s(3);return(o,n)=>{const u=m("el-input-number");return p(),f(v,null,[t(u,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=_=>e.value=_),size:"large"},null,8,["modelValue"]),t(u,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=_=>a.value=_),class:"mx-4"},null,8,["modelValue"]),t(u,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=_=>l.value=_),size:"small"},null,8,["modelValue"])],64)}}}),E=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),C=d({__name:"step-strictly",setup(i){const e=s(2);return(a,l)=>{const o=m("el-input-number");return p(),c(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),step:2,"step-strictly":""},null,8,["modelValue"])}}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),T=d({__name:"steps",setup(i){const e=s(5);return(a,l)=>{const o=m("el-input-number");return p(),c(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),step:2},null,8,["modelValue"])}}}),A=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{w as _,k as a,B as b,N as c,q as d,E as e,F as f,A as g};