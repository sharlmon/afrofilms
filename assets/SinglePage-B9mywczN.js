import{r as f,j as r}from"./index-JAKolaCX.js";import{f as w,c as S,i as B,p as R,v as K,a as q,d as J,b as Z,n as D,r as Q,e as ee,s as te,u as j,g as O,h as I,m as y,M as re,j as _,k as h,l as F}from"./image_map-Bcyey519.js";import{S as V}from"./SEO-DS9-lbCG.js";import se from"./About-D2ATBIl-.js";import ae from"./Works-BFeMe6Pd.js";import ne from"./Team-2m1g11tT.js";import ie from"./Collective-CIsCYa-m.js";import oe from"./Gallery-C9liElkC.js";import"./team-BCIQdSM-.js";function Y(e,t){let s;const a=()=>{const{currentTime:n}=t,i=(n===null?0:n.value)/100;s!==i&&e(i),s=i};return w.preUpdate(a,!0),()=>S(a)}function le(...e){const t=!Array.isArray(e[0]),s=t?0:-1,a=e[0+s],n=e[1+s],o=e[2+s],i=e[3+s],l=B(n,o,i);return t?l(a):l}const ce=50,A=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),de=()=>({time:0,x:A(),y:A()}),me={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function E(e,t,s,a){const n=s[t],{length:o,position:i}=me[t],l=n.current,d=s.time;n.current=e[`scroll${i}`],n.scrollLength=e[`scroll${o}`]-e[`client${o}`],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=R(0,n.scrollLength,n.current);const c=a-d;n.velocity=c>ce?0:K(n.current-l,c)}function pe(e,t,s){E(e,"x",t,s),E(e,"y",t,s),t.time=s}function ue(e,t){const s={x:0,y:0};let a=e;for(;a&&a!==t;)if(q(a))s.x+=a.offsetLeft,s.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const n=a.getBoundingClientRect();a=a.parentElement;const o=a.getBoundingClientRect();s.x+=n.left-o.left,s.y+=n.top-o.top}else if(a instanceof SVGGraphicsElement){const{x:n,y:o}=a.getBBox();s.x+=n,s.y+=o;let i=null,l=a.parentNode;for(;!i;)l.tagName==="svg"&&(i=l),l=a.parentNode;a=i}else break;return s}const z={start:0,center:.5,end:1};function T(e,t,s=0){let a=0;if(e in z&&(e=z[e]),typeof e=="string"){const n=parseFloat(e);e.endsWith("px")?a=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?a=n/100*document.documentElement.clientWidth:e.endsWith("vh")?a=n/100*document.documentElement.clientHeight:e=n}return typeof e=="number"&&(a=t*e),s+a}const fe=[0,0];function ge(e,t,s,a){let n=Array.isArray(e)?e:fe,o=0,i=0;return typeof e=="number"?n=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,z[e]?e:"0"]),o=T(n[0],s,a),i=T(n[1],t),o-i}const he={All:[[0,0],[1,1]]},xe={x:0,y:0};function be(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function ve(e,t,s){const{offset:a=he.All}=s,{target:n=e,axis:o="y"}=s,i=o==="y"?"height":"width",l=n!==e?ue(n,e):xe,d=n===e?{width:e.scrollWidth,height:e.scrollHeight}:be(n),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let p=!t[o].interpolate;const u=a.length;for(let m=0;m<u;m++){const g=ge(a[m],c[i],d[i],l[o]);!p&&g!==t[o].interpolatorOffsets[m]&&(p=!0),t[o].offset[m]=g}p&&(t[o].interpolate=B(t[o].offset,J(a),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=Z(0,1,t[o].interpolate(t[o].current))}function we(e,t=e,s){if(s.x.targetOffset=0,s.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)s.x.targetOffset+=a.offsetLeft,s.y.targetOffset+=a.offsetTop,a=a.offsetParent}s.x.targetLength=t===e?t.scrollWidth:t.clientWidth,s.y.targetLength=t===e?t.scrollHeight:t.clientHeight,s.x.containerLength=e.clientWidth,s.y.containerLength=e.clientHeight}function ye(e,t,s,a={}){return{measure:n=>{we(e,a.target,s),pe(e,s,n),(a.offset||a.target)&&ve(e,s,a)},notify:()=>t(s)}}const b=new WeakMap,L=new WeakMap,C=new WeakMap,H=new WeakMap,k=new WeakMap,P=e=>e===document.scrollingElement?window:e;function U(e,{container:t=document.scrollingElement,trackContentSize:s=!1,...a}={}){if(!t)return D;let n=C.get(t);n||(n=new Set,C.set(t,n));const o=de(),i=ye(t,e,o,a);if(n.add(i),!b.has(t)){const d=()=>{for(const m of n)m.measure(ee.timestamp);w.preUpdate(c)},c=()=>{for(const m of n)m.notify()},p=()=>w.read(d);b.set(t,p);const u=P(t);window.addEventListener("resize",p,{passive:!0}),t!==document.documentElement&&L.set(t,Q(t,p)),u.addEventListener("scroll",p,{passive:!0}),p()}if(s&&!k.has(t)){const d=b.get(t),c={width:t.scrollWidth,height:t.scrollHeight};H.set(t,c);const p=()=>{const m=t.scrollWidth,g=t.scrollHeight;(c.width!==m||c.height!==g)&&(d(),c.width=m,c.height=g)},u=w.read(p,!0);k.set(t,u)}const l=b.get(t);return w.read(l,!1,!0),()=>{S(l);const d=C.get(t);if(!d||(d.delete(i),d.size))return;const c=b.get(t);b.delete(t),c&&(P(t).removeEventListener("scroll",c),L.get(t)?.(),window.removeEventListener("resize",c));const p=k.get(t);p&&(S(p),k.delete(t)),H.delete(t)}}const W=new Map;function je(e){const t={value:0},s=U(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:s}}function G({source:e,container:t,...s}){const{axis:a}=s;e&&(t=e);const n=W.get(t)??new Map;W.set(t,n);const o=s.target??"self",i=n.get(o)??{},l=a+(s.offset??[]).join(",");return i[l]||(i[l]=!s.target&&te()?new ScrollTimeline({source:t,axis:a}):je({container:t,...s})),i[l]}function ke(e,t){const s=G(t);return e.attachTimeline({timeline:t.target?void 0:s,observe:a=>(a.pause(),Y(n=>{a.time=a.iterationDuration*n},s))})}function Ne(e){return e.length===2}function Se(e,t){return Ne(e)?U(s=>{e(s[t.axis].progress,s)},t):Y(e,G(t))}function _e(e,{axis:t="y",container:s=document.scrollingElement,...a}={}){if(!s)return D;const n={axis:t,container:s,...a};return typeof e=="function"?Se(e,n):ke(e,n)}const Ce=()=>({scrollX:y(0),scrollY:y(0),scrollXProgress:y(0),scrollYProgress:y(0)}),N=e=>e?!e.current:!1;function Fe({container:e,target:t,...s}={}){const a=j(Ce),n=f.useRef(null),o=f.useRef(!1),i=f.useCallback(()=>(n.current=_e((l,{x:d,y:c})=>{a.scrollX.set(d.current),a.scrollXProgress.set(d.progress),a.scrollY.set(c.current),a.scrollYProgress.set(c.progress)},{...s,container:e?.current||void 0,target:t?.current||void 0}),()=>{n.current?.()}),[e,t,JSON.stringify(s.offset)]);return O(()=>{if(o.current=!1,N(e)||N(t)){o.current=!0;return}else return i()},[i]),f.useEffect(()=>{if(o.current)return I(!N(e)),I(!N(t)),i()},[i]),a}function ze(e){const t=j(()=>y(e)),{isStatic:s}=f.useContext(re);if(s){const[,a]=f.useState(e);f.useEffect(()=>t.on("change",a),[])}return t}function X(e,t){const s=ze(t()),a=()=>s.set(t());return a(),O(()=>{const n=()=>w.preRender(a,!1,!0),o=e.map(i=>i.on("change",n));return()=>{o.forEach(i=>i()),S(a)}}),s}function Ie(e){_.current=[],e();const t=X(_.current,e);return _.current=void 0,t}function $(e,t,s,a){if(typeof e=="function")return Ie(e);if(s!==void 0&&!Array.isArray(s)&&typeof t!="function")return Ae(e,t,s,a);const i=typeof t=="function"?t:le(t,s,a);return Array.isArray(e)?M(e,i):M([e],([l])=>i(l))}function M(e,t){const s=j(()=>[]);return X(e,()=>{s.length=0;const a=e.length;for(let n=0;n<a;n++)s[n]=e[n].get();return t(s)})}function Ae(e,t,s,a){const n=j(()=>Object.keys(s)),o=j(()=>({}));for(const i of n)o[i]=$(e,t,s[i],a);return o}const Ee="/uploads/homepage.jpg";function Te(){return r.jsxs("div",{className:"hero-slideshow",children:[r.jsx(h.div,{initial:{opacity:0,scale:1.1},animate:{opacity:1,scale:1},transition:{duration:1.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url(${Ee})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:0}}),r.jsx("div",{className:"overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.4)",zIndex:1}})]})}function Le(){const e=[{src:"/uploads/2020/08/british-council.png",name:"British Council"},{id:"1415",name:"HIAS"},{id:"1416",name:"Maisha Film Lab"},{id:"1424",name:"Standard Chartered"},{id:"1443",name:"Safaricom"},{id:"1441",name:"TBWA"},{id:"1433",name:"Action Horizons"},{id:"1423",name:"Six Toes"},{id:"1427",name:"TFI"},{id:"1431",name:"USS"},{id:"1445",name:"Tope Mall Africa"},{src:"/uploads/new_clients/ford_justfilms_white.png",name:"Ford Foundation JustFilms",darkCard:!0},{src:"/uploads/new_clients/hotdocs_fund_white.png",name:"Hot Docs Blue Ice Docs Fund",darkCard:!0},{src:"/uploads/new_clients/ida_white.jpg",name:"IDA",darkCard:!0},{src:"/uploads/new_clients/inmaat_white.svg",name:"Inmaat Foundation",darkCard:!0},{src:"/uploads/new_clients/sundance_white.svg",name:"Sundance Institute",darkCard:!0},{src:"/uploads/new_clients/sunnyside_white.png",name:"Sunnyside Global Pitch",darkCard:!0},{src:"/uploads/new_clients/bbc.jpeg",name:"BBC"},{src:"/uploads/new_clients/facebook.png",name:"Facebook"},{src:"/uploads/new_clients/google.png",name:"Google"},{src:"/uploads/new_clients/jrs.png",name:"JRS"},{src:"/uploads/new_clients/tusk.jpeg",name:"TUSK"},{src:"/uploads/new_clients/universal.jpeg",name:"Universal Studios"},{src:"/uploads/new_clients/state_department.jpeg",name:"US State Department"},{src:"/uploads/new_clients/usaid.png",name:"USAID"},{src:"/uploads/new_clients/vice.png",name:"Vice"},{src:"/uploads/new_clients/olympic_channel.png",name:"Olympic Channel"}],t=[{src:"/uploads/new_festivals/hsdff_2025_white.png",name:"Hot Springs Documentary Film Festival 2025",darkCard:!0},{src:"/uploads/festivals/Athena-FilmFest-2018-logo-barnardlogo-transparent.png",name:"Athena Film Festival"},{src:"/uploads/new_festivals/dcdox_2025_white.png",name:"DC/DOX Film Festival 2025",darkCard:!0},{src:"/uploads/new_festivals/hd25_off_sel_white.png",name:"Hot Docs 2025",darkCard:!0},{src:"/uploads/new_festivals/hamburg_2025.png",name:"Afrikanisches Filmfestival Hamburg 2025",darkCard:!0,cover:!0},{src:"/uploads/new_festivals/am_fm_2025.png",name:"African Movie Festival in Manitoba 2025"},{src:"/uploads/new_festivals/nbo_white.png",name:"NBO Film Festival 2025",darkCard:!0},{src:"/uploads/new_festivals/siff_2025_white.svg",name:"SIFF DocFest 2025",darkCard:!0},{src:"/uploads/new_festivals/ziff_2025_4.png",name:"ZIFF Official Selection 2025"},{src:"/uploads/new_festivals/sheffield_white.png",name:"Sheffield DocFest MeetMarket 2024",darkCard:!0},{src:"/uploads/new_festivals/aff_pitch_2024_v2.png",name:"AFF Pitch Program 2024"},{src:"/uploads/new_festivals/tribeca_24.png",name:"Tribeca Film Festival 2024",darkCard:!0},{src:"/uploads/new_festivals/tribeca_25.svg",name:"Tribeca Film Festival 2025",darkCard:!0}],s=o=>o.map(i=>({name:i.name,src:i.src||(i.id&&F[i.id]?`/uploads/${F[i.id]}`:null),darkCard:i.darkCard||!1,cover:i.cover||!1})).filter(i=>i.src),a=s(e),n=s(t);return r.jsx(r.Fragment,{children:r.jsxs(h.div,{className:"home-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[r.jsx(V,{title:"Home",description:"African Stories. Global Impact. Award-winning production house in Nairobi, Kenya."}),r.jsxs("section",{className:"hero",children:[r.jsx(Te,{}),r.jsx("div",{className:"hero-content container",style:{marginTop:"-18vh"},children:r.jsxs(h.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5,duration:.8},children:[r.jsxs("h1",{className:"hero-title",style:{fontSize:"clamp(1.4rem, 2.5vw, 2.2rem)",lineHeight:"1.4",textTransform:"uppercase",letterSpacing:"0.15em",maxWidth:"100%",margin:"0 auto",fontWeight:"400",whiteSpace:"nowrap"},children:["A FILM PRODUCTION COMPANY & COLLECTIVE",r.jsx("br",{}),r.jsx("span",{style:{fontSize:"0.9em",fontWeight:"300",letterSpacing:"0.1em",display:"block",marginTop:"0.8em",color:"rgba(255,255,255,0.7)",whiteSpace:"normal"},children:"BASED IN NAIROBI & KILIFI, KENYA"})]}),r.jsx("p",{className:"hero-subtitle",children:"Connect. Create. Captivate."}),r.jsx("div",{className:"hero-actions",children:r.jsx("button",{onClick:()=>document.getElementById("about")?.scrollIntoView({behavior:"smooth"}),className:"btn btn-primary",children:"ABOUT US"})})]})})]}),r.jsx("section",{className:"partners section-padding",children:r.jsxs("div",{className:"container",children:[r.jsx("span",{className:"partners-label",children:"Trusted By"}),r.jsx("h2",{className:"partners-heading",children:"Clients, Partners & Festivals"}),r.jsx("h3",{className:"partners-row-label",children:"Clients & Partners"}),r.jsx("div",{className:"partners-grid partners-grid-sm",children:a.filter(o=>!o.darkCard).map(({src:o,name:i,cover:l},d)=>r.jsx("div",{className:"partner-card partner-card-sm",children:r.jsx("img",{src:o,alt:i,style:l?{width:"100%",height:"100%",objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}:void 0})},d))}),r.jsx("h3",{className:"partners-row-label",style:{marginTop:"2rem"},children:"Festivals & Laurels"}),r.jsx("div",{className:"partners-grid partners-grid-sm partners-grid-dark",children:[...a.filter(o=>o.darkCard),...n].map(({src:o,name:i,cover:l},d)=>r.jsx("div",{className:"partner-card partner-card-sm partner-card-dark",children:r.jsx("img",{src:o,alt:i,style:l?{width:"100%",height:"100%",objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}:void 0})},d))})]})}),r.jsx("style",{children:`
                        /* Base Styles */
                        .hero {
                            position: relative;
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                        }
                        .hero-content {
                            position: relative;
                            z-index: 2;
                            text-align: center;
                            max-width: 900px;
                        }
                        .hero-subtitle {
                            color: var(--color-primary);
                            letter-spacing: 0.35em;
                            text-transform: uppercase;
                            font-size: 1.4rem;
                            display: block;
                            margin-top: 1.25rem;
                            margin-bottom: 2rem;
                            font-weight: 500;
                            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                        }
                        .hero-title {
                            font-size: clamp(3.5rem, 8vw, 6rem);
                            line-height: 1.1;
                            margin-bottom: 2.5rem;
                            font-family: var(--font-heading);
                            text-shadow: 0 4px 8px rgba(0,0,0,0.6);
                        }
                        .hero-actions {
                            display: flex;
                            gap: 1.5rem;
                            justify-content: center;
                        }





                        .btn {
                            padding: 1rem 2.5rem;
                            border-radius: 50px;
                            font-weight: 600;
                            transition: all 0.3s ease;
                            text-transform: uppercase;
                            letter-spacing: 0.05em;
                            font-size: 0.9rem;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                        }
                        .btn-primary {
                            background: var(--color-primary);
                            color: #000;
                            border: 2px solid var(--color-primary);
                        }
                        .btn-primary:hover {
                            background: transparent;
                            color: var(--color-primary);
                            transform: translateY(-3px);
                        }
                        .btn-outline {
                            border: 2px solid #fff;
                            color: #fff;
                            background: transparent;
                        }
                        .btn-outline:hover {
                            background: #fff;
                            color: #000;
                            transform: translateY(-3px);
                        }
                        
                        .section-header {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            margin-bottom: 3rem;
                            border-bottom: 1px solid var(--color-border);
                            padding-bottom: 2rem;
                        }
                        .btn-link {
                            color: #fff;
                            text-decoration: none;
                            text-transform: uppercase;
                            font-size: 0.8rem;
                            letter-spacing: 0.1em;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            transition: color 0.3s;
                        }
                        .btn-link:hover {
                            color: var(--color-primary);
                        }
                        .arrow {
                            transition: transform 0.3s;
                        }
                        .btn-link:hover .arrow {
                            transform: translateX(5px);
                        }

                        .partners {
                            background: #0a0a0a;
                            text-align: center;
                            padding: clamp(4rem, 8vw, 7rem) 0;
                        }
                        .partners-label {
                            display: block;
                            text-transform: uppercase;
                            letter-spacing: 0.2em;
                            font-size: 0.8rem;
                            color: var(--color-primary);
                            font-weight: 600;
                            margin-bottom: 0.75rem;
                        }
                        .partners-heading {
                            text-align: center;
                            margin-bottom: 3rem;
                            font-size: clamp(1.5rem, 3vw, 2.25rem);
                            color: #fff;
                        }
                        .partners-row-label {
                            text-align: center;
                            text-transform: uppercase;
                            letter-spacing: 0.15em;
                            font-size: 0.85rem;
                            color: var(--color-primary);
                            font-weight: 600;
                            margin-bottom: 1rem;
                            position: relative;
                        }
                        .partners-grid {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            gap: 0.5rem;
                            max-width: 1100px;
                            margin: 0 auto;
                            padding: 0 0.5rem;
                        }
                        .partners-grid-sm {
                            gap: 0.45rem;
                        }
                        .partners-grid-dark {
                            background: rgba(0,0,0,0.3);
                            border-radius: 10px;
                            padding: 0.75rem;
                            border: 1px solid rgba(255,255,255,0.06);
                        }
                        .partner-card {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 0.6rem 0.5rem;
                            background: rgba(255,255,255,0.95);
                            border-radius: 5px;
                            border: 1px solid rgba(0,0,0,0.08);
                            transition: all 0.3s ease;
                            width: 90px;
                            height: 60px;
                            flex-shrink: 0;
                        }
                        .partner-card-sm {
                            width: 82px;
                            height: 54px;
                            padding: 0.45rem;
                        }
                        .partner-card-dark {
                            background: #000;
                            border: 1px solid rgba(255,255,255,0.08);
                        }
                        .partner-card:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 5px 16px rgba(212, 175, 55, 0.18);
                            border-color: rgba(212, 175, 55, 0.35);
                        }
                        .partner-card img {
                            max-width: 90%;
                            max-height: 90%;
                            object-fit: contain;
                            transition: transform 0.3s ease;
                        }
                        .partner-card:hover img {
                            transform: scale(1.1);
                        }
                        .center-text {
                            text-align: center;
                            margin-bottom: 4rem;
                        }
                        
                        .text-stroke {
                            -webkit-text-stroke: 1px #fff;
                            color: transparent; 
                        }
                        .flex-row-between {
                            display: flex;
                            justify-content: space-between;
                        }

                        /* Mobile Responsiveness */
                        @media (max-width: 768px) {
                            .hero {
                                height: 85vh;
                                min-height: 500px;
                            }
                            .hero-content {
                                padding: 0 1rem;
                            }
                            .hero-title {
                                font-size: 2rem !important;
                                line-height: 1.3 !important;
                                margin-bottom: 2rem;
                            }
                            .hero-actions {
                                flex-direction: column;
                                gap: 1rem;
                            }
                            .btn {
                                padding: 0.875rem 2rem;
                                font-size: 0.85rem;
                                width: 100%;
                                max-width: 280px;
                            }
                            .glassmorphism {
                                padding: 1.5rem;
                                border-radius: 12px;
                            }
                            .about-text p {
                                font-size: 1rem;
                                line-height: 1.7;
                            }
                            .section-title {
                                font-size: 1.75rem;
                                margin-bottom: 1.5rem;
                            }
                            .partners-grid {
                                gap: 0.4rem;
                            }
                            .partner-card, .partner-card-sm {
                                width: 68px;
                                height: 46px;
                            }
                            .partners-heading {
                                margin-bottom: 2rem;
                            }
                        }

                        @media (max-width: 480px) {
                            .hero {
                                height: 80vh;
                            }
                            .hero-title {
                                font-size: 1.75rem !important;
                            }
                            .partners-grid {
                                gap: 0.35rem;
                            }
                            .partner-card, .partner-card-sm {
                                width: 58px;
                                height: 40px;
                            }
                        }
                    `})]})})}function He(){const e=`/uploads/${F[1236]}`,t=500,[s,a]=f.useState({name:"",email:"",message:""}),[n,o]=f.useState(""),[i,l]=f.useState(""),d=u=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u),c=u=>{const{name:m,value:g}=u.target;m==="message"&&g.length>t||(m==="email"&&(g&&!d(g)?l("Please enter a valid email address"):l("")),a({...s,[m]:g}))},p=async u=>{if(u.preventDefault(),!d(s.email)){l("Please enter a valid email address");return}o("sending");try{(await fetch("https://formsubmit.co/ajax/admin@afrofilmsinternational.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:s.name,email:s.email,message:s.message,_subject:"New Contact from AfroFilms Website"})})).ok?(o("success"),a({name:"",email:"",message:""})):o("error")}catch{o("error")}};return r.jsxs("div",{className:"contact-page",children:[r.jsx(V,{title:"Contact",description:"Get in touch with AfroFilms International. Based in Nairobi, Kenya. We execute creative projects from Script to Screen."}),r.jsxs("section",{className:"contact-hero",children:[r.jsx("div",{className:"hero-bg",style:{backgroundImage:e?`url(${e})`:"none"}}),r.jsx("div",{className:"hero-overlay"}),r.jsxs("div",{className:"container hero-content center",children:[r.jsx("span",{className:"section-subtitle text-gold",children:"Get In Touch"}),r.jsx("h1",{className:"hero-title",children:"Start Your Project"})]})]}),r.jsx("section",{className:"contact-content section-padding",children:r.jsxs("div",{className:"container relative z-10",children:[r.jsxs("div",{className:"contact-hub-grid",children:[r.jsxs("div",{className:"hub-card glass group",children:[r.jsx("div",{className:"card-icon",children:"📍"}),r.jsx("h3",{className:"card-title",children:"Visit Us"}),r.jsx("div",{className:"card-body",children:r.jsxs("p",{children:["Bekim House, Level 1",r.jsx("br",{}),"Nairobi, Kenya"]})}),r.jsxs("a",{href:"https://maps.app.goo.gl/eTxi7PMegZpt7aPs8",target:"_blank",rel:"noopener noreferrer",className:"card-link",children:["Get Directions ",r.jsx("span",{className:"arrow",children:"→"})]})]}),r.jsxs("div",{className:"hub-card glass group",children:[r.jsx("div",{className:"card-icon",children:"✉️"}),r.jsx("h3",{className:"card-title",children:"Email Us"}),r.jsxs("div",{className:"card-body",children:[r.jsx("p",{children:"For inquiries and collaborations:"}),r.jsx("a",{href:"mailto:admin@afrofilmsinternational.com",className:"highlight-link",children:"admin@afrofilmsinternational.com"})]}),r.jsxs("a",{href:"mailto:admin@afrofilmsinternational.com",className:"card-link",children:["Send Email ",r.jsx("span",{className:"arrow",children:"→"})]})]})]}),r.jsxs("div",{className:"contact-form-section",children:[r.jsx("h2",{className:"form-heading",children:"Send Us a Message"}),r.jsxs("form",{onSubmit:p,className:"contact-form",children:[r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:s.name,onChange:c,required:!0,className:"form-input"})}),r.jsxs("div",{className:"form-group",children:[r.jsx("input",{type:"email",name:"email",placeholder:"Your Email",value:s.email,onChange:c,required:!0,pattern:"[^\\s@]+@[^\\s@]+\\.[^\\s@]+",className:`form-input ${i?"input-error":""}`}),i&&r.jsx("span",{className:"field-error",children:i})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("textarea",{name:"message",placeholder:"Your Message",rows:"5",value:s.message,onChange:c,required:!0,maxLength:t,className:"form-input"}),r.jsxs("div",{className:"char-counter",children:[r.jsx("span",{className:s.message.length>=t?"at-limit":"",children:s.message.length})," / ",t]})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:n==="sending",children:n==="sending"?"Sending...":"Send Message"}),n==="success"&&r.jsx("p",{className:"form-status success",children:"Message sent successfully!"}),n==="error"&&r.jsx("p",{className:"form-status error",children:"Failed to send. Please try again."})]})]})]})}),r.jsx("style",{children:`
                .contact-hero {
                    position: relative;
                    height: 50vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: #111;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.5;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, #000);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }
                .hero-title {
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    margin-bottom: 0;
                }
                .section-subtitle {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .contact-content {
                    position: relative;
                    margin-top: -80px;
                    padding-bottom: 8rem;
                }

                .contact-hub-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .hub-card {
                    padding: 3rem 2rem;
                    background: rgba(10, 10, 10, 0.8);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.4s ease;
                }

                .hub-card:hover {
                    background: rgba(20, 20, 20, 0.9);
                    transform: translateY(-10px);
                    border-color: var(--color-primary);
                }

                .card-icon {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                    filter: grayscale(1);
                    transition: filter 0.3s;
                }
                .hub-card:hover .card-icon {
                    filter: grayscale(0);
                }

                .card-title {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-bottom: 1rem;
                    font-family: var(--font-heading);
                }

                .card-body {
                    margin-bottom: 2rem;
                    color: #aaa;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    flex-grow: 1;
                }

                .highlight-link {
                    color: #fff;
                    display: block;
                    margin-top: 0.5rem;
                    font-size: 1.1rem;
                    transition: color 0.3s;
                }
                .hub-card:hover .highlight-link {
                    color: var(--color-primary);
                }

                .card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.85rem;
                    color: var(--color-primary);
                    font-weight: 600;
                    padding-bottom: 2px;
                    border-bottom: 1px solid transparent;
                    transition: all 0.3s;
                }
                .card-link:hover {
                    opacity: 0.8;
                    border-bottom-color: var(--color-primary);
                }
                .arrow {
                    transition: transform 0.3s;
                }
                .card-link:hover .arrow {
                    transform: translateX(5px);
                }

                /* Contact Form */
                .contact-form-section {
                    max-width: 700px;
                    margin: 5rem auto 0;
                    padding: 3rem;
                    background: rgba(10, 10, 10, 0.8);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                }
                .form-heading {
                    text-align: center;
                    font-size: 2rem;
                    color: #fff;
                    font-family: var(--font-heading);
                    margin-bottom: 2rem;
                }
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-input {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 4px;
                    color: #fff;
                    font-size: 1rem;
                    transition: all 0.3s;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    background: rgba(255,255,255,0.08);
                }
                .form-input::placeholder {
                    color: #666;
                }
                textarea.form-input {
                    resize: vertical;
                    min-height: 120px;
                }
                .input-error {
                    border-color: #f87171 !important;
                }
                .field-error {
                    display: block;
                    color: #f87171;
                    font-size: 0.8rem;
                    margin-top: 0.4rem;
                    padding-left: 0.25rem;
                }
                .char-counter {
                    text-align: right;
                    font-size: 0.8rem;
                    color: #666;
                    margin-top: 0.4rem;
                    padding-right: 0.25rem;
                }
                .char-counter .at-limit {
                    color: #f87171;
                    font-weight: 600;
                }
                .submit-btn {
                    width: 100%;
                    padding: 1rem 2rem;
                    background: var(--color-primary);
                    color: #000;
                    border: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .submit-btn:hover {
                    background: #fff;
                }
                .submit-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .form-status {
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 0.95rem;
                }
                .form-status.success { color: #4ade80; }
                .form-status.error { color: #f87171; }

                @media (max-width: 768px) {
                    .contact-content {
                        margin-top: 0;
                        padding-top: 2rem;
                    }
                    .contact-hub-grid {
                        grid-template-columns: 1fr;
                    }
                    .hub-card {
                        padding: 2rem;
                    }
                    .contact-form-section {
                        padding: 2rem;
                        margin: 3rem 1rem 0;
                    }
                }
            `})]})}function x({id:e,children:t,direction:s="up",delay:a=0}){const n=f.useRef(null),{scrollYProgress:o}=Fe({target:n,offset:["start end","start 0.3"]});$(o,[0,1],[0,1]);const i={up:{y:80},down:{y:-60},left:{x:-80},right:{x:80},scale:{scale:.92},none:{}};return r.jsx("section",{id:e,ref:n,children:r.jsx(h.div,{initial:{opacity:0,...i[s]},whileInView:{opacity:1,y:0,x:0,scale:1},viewport:{once:!0,amount:.08},transition:{duration:.9,delay:a,ease:[.25,.46,.45,.94]},children:t})})}function v({variant:e="line"}){return e==="glow"?r.jsx("div",{className:"section-divider-wrap",children:r.jsx(h.div,{className:"divider-glow",initial:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.5},transition:{duration:1.2,ease:[.16,1,.3,1]}})}):e==="dots"?r.jsx("div",{className:"section-divider-wrap",children:r.jsxs(h.div,{className:"divider-dots",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})}):e==="fade"?r.jsx("div",{className:"section-divider-wrap",children:r.jsx(h.div,{className:"divider-fade-gradient",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1.5}})}):r.jsx("div",{className:"section-divider-wrap",children:r.jsx(h.div,{className:"divider-line",initial:{scaleX:0},whileInView:{scaleX:1},viewport:{once:!0,amount:.5},transition:{duration:1,ease:[.16,1,.3,1]}})})}function Ge(){return r.jsxs("div",{className:"single-page-layout",children:[r.jsx(x,{id:"home",direction:"none",children:r.jsx(Le,{})}),r.jsx(v,{variant:"glow"}),r.jsx(x,{id:"about",direction:"up",children:r.jsx(se,{})}),r.jsx(v,{variant:"dots"}),r.jsx(x,{id:"portfolio",direction:"left",children:r.jsx(ae,{})}),r.jsx(v,{variant:"fade"}),r.jsx(x,{id:"team",direction:"up",delay:.1,children:r.jsx(ne,{})}),r.jsx(v,{variant:"glow"}),r.jsx(x,{id:"collective",direction:"right",children:r.jsx(ie,{})}),r.jsx(v,{variant:"dots"}),r.jsx(x,{id:"gallery",direction:"up",children:r.jsx(oe,{})}),r.jsx(v,{variant:"fade"}),r.jsx(x,{id:"contact",direction:"up",delay:.1,children:r.jsx(He,{})}),r.jsx("style",{children:`
                .single-page-layout {
                    overflow: hidden;
                }

                /* ── Divider base ── */
                .section-divider-wrap {
                    padding: 3rem 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    z-index: 5;
                }

                /* Line divider */
                .divider-line {
                    width: 60%;
                    max-width: 600px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
                    transform-origin: center;
                }

                /* Glow divider */
                .divider-glow {
                    width: 50%;
                    max-width: 500px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
                    transform-origin: center;
                    box-shadow:
                        0 0 15px rgba(212, 175, 55, 0.3),
                        0 0 40px rgba(212, 175, 55, 0.15);
                }

                /* Dots divider */
                .divider-dots {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .divider-dots span {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--color-primary);
                    opacity: 0.5;
                }
                .divider-dots span:nth-child(2) {
                    width: 8px;
                    height: 8px;
                    opacity: 0.8;
                }

                /* Fade gradient divider */
                .divider-fade-gradient {
                    width: 100%;
                    height: 80px;
                    background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
                }
            `})]})}export{Ge as default};
