var K=Object.defineProperty;var Q=(i,s,l)=>s in i?K(i,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[s]=l;var L=(i,s,l)=>(Q(i,typeof s!="symbol"?s+"":s,l),l);import{_ as Z,ae as ee,aT as te,bk as se,$ as ae,bv as ne,a0 as A,bw as re,ai as oe,aj as U,bx as ie,a1 as d,a2 as x,a6 as le,a5 as t,af as N,a4 as F,aN as ue,a9 as g,aD as R,by as H,bz as m,bA as ce,bB as fe,aH as de,aG as ge,bC as z,bD as G,av as ve}from"./entry.16c5462c.js";class pe{constructor(){L(this,"userAgent");if(!(navigator!=null&&navigator.userAgent))throw new Error("Navigator is not loaded.");this.userAgent=navigator.userAgent}}class he extends pe{constructor(){super();L(this,"os");this.os=this.detectOS()??"Unknown"}detectOS(){return this.userAgent.includes("Win")?"Windows":this.userAgent.includes("Mac")?"MacOS":this.userAgent.includes("Linux")?"Linux":this.userAgent.includes("Android")?"Android":this.userAgent.includes("like Mac")?"iOS":null}}const we=Z({__name:"Slide",props:{isFullScreen:{type:Boolean},childPage:{},parentPage:{},pagesLeft:{},pagesRight:{}},setup(i){const s=i,{isTouchScreen:l}=ee(),{emit:C,on:I,wait:D}=fe(),V=te(200),{resetMouseData:v}=se(),{isNavigationBlocked:S,isSiteLoaded:p,isSlidingPages:_,slidingDirectionName:W,isElementRevealed:P}=ae(V),[h,X,j]=ne(1e3),f=A(null),E=A(null),n=A(null),c=A(0),{isSwiping:Y,direction:q}=re(E);function w(e){return Array.isArray(e)?e[0]:e}function M(e,a){return Array.isArray(e)?e.find(({name:r})=>r===a)??null:e.name===a?e:null}async function B(e,a,r,o){if(!S.value){switch(e){case a:{if(!s.pagesLeft)return;c.value=-1;const u=s.pagesLeft[0];n.value=w(u);break}case r:{if(!s.pagesRight)return;c.value=1;const u=s.pagesRight[0];n.value=w(u);break}default:return}n.value&&(o(),await de().push({path:n.value.path}))}}const J=I("NAVIGATE_KEYPRESS",({key:e,altKey:a,metaKey:r})=>{if(f.value&&!(f.value.os==="MacOS"&&r&&(e==="ArrowLeft"||e==="ArrowRight"))){{if(f.value.os==="Windows"&&a&&(e==="ArrowLeft"||e==="ArrowRight"))return;if(f.value.os==="Linux"&&a&&(e==="ArrowLeft"||e==="ArrowRight"))return}B(e,"ArrowLeft","ArrowRight",J)}});return oe(()=>{f.value=new he,S.value=!1,_.value=!1,U(l,e=>{if(e){const a=U([Y,q],([r,o])=>{_.value||!r||!["left","right"].includes(o)||B(o,"right","left",a)})}},{immediate:!0})}),ie(async(e,a,r)=>{var O,T,$;S.value=!0;const[o,u]=[e.name,a.name];if(!n.value){const b=(O=s.pagesLeft)==null?void 0:O.map(y=>M(y,o)).filter(Boolean)[0],k=!b&&((T=s.pagesRight)==null?void 0:T.map(y=>M(y,o)).filter(Boolean)[0]);if(b)c.value=-1,n.value=w(b);else if(k)c.value=1,n.value=w(k);else return z.includes(o)&&G.includes(u)?(C("LAUNCH_START","app"),await D("LAUNCH_END")):z.includes(u)&&G.includes(o)&&(C("LAUNCH_START","landing"),await D("LAUNCH_END")),r()}W.value=n.value.name===(($=s.childPage)==null?void 0:$.name)?u:n.value.name,_.value=!0,X.value=new Date,await j(),r()}),(e,a)=>{const r=ge;return d(),x("div",{ref_key:"refSlide",ref:E,class:g(["relative flex h-full overflow-hidden",e.$style.container])},[le("div",{class:g(["lg:bg-none",[e.$style.slide,t(p)&&t(P)?"overflow-shadow-bottom":"overflow-shadow-disabled"]]),style:H({opacity:t(m)(1-t(h)),...t(n)&&{transform:`translateX(calc(${t(m)(t(h))*t(c)*-1} * var(--width-viewport)))`}}),onScroll:a[0]||(a[0]=(...o)=>t(v)&&t(v)(...o))},[t(p)?(d(),N(r,{key:0,class:g(["grid lg:h-full py-24 lg:py-0 lg:overflow-hidden",{"h-full pb-0 overflow-hidden":e.isFullScreen}])},{default:F(()=>[ue(e.$slots,"default")]),_:3},8,["class"])):R("",!0)],38),t(n)?(d(),x("div",{key:0,class:g(["absolute pointer-events-none select-none lg:bg-none",[e.$style.slide,t(p)&&t(P)?"overflow-shadow-bottom":"overflow-shadow-disabled"]]),style:H({opacity:t(m)(t(h)),transform:`translateX(calc(${t(m)(1-t(h))*t(c)} * var(--width-viewport)))`}),onScroll:a[1]||(a[1]=(...o)=>t(v)&&t(v)(...o))},[t(p)?(d(),N(r,{key:0,class:g(["grid lg:h-full py-24 lg:py-0 lg:overflow-hidden",{"h-full pb-0 overflow-hidden":t(n).isFullScreen}])},{default:F(()=>[(d(),N(ce(t(n).component)))]),_:1},8,["class"])):R("",!0)],38)):R("",!0)],2)}}}),Ae="_container_17rtg_1",me="_slide_17rtg_5",Se={container:Ae,slide:me},_e={$style:Se},Le=ve(we,[["__cssModules",_e]]);export{Le as _};
