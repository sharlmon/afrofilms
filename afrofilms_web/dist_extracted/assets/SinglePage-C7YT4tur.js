import{r as u,j as r}from"./index-B2qnIJtg.js";import{f as y,c as S,i as P,p as G,v as K,a as q,d as Z,b as J,n as D,r as Q,e as ee,s as te,u as w,g as V,h as C,m as j,M as re,j as F,k as h,l as z}from"./image_map-t3oo7ht4.js";import{S as Y}from"./SEO-BqpykSab.js";import se from"./About-DVprN32Q.js";import ne from"./Works-DCGwTssR.js";import ie from"./Team-Brn-cJqR.js";import ae from"./Collective-C1cZxmfL.js";import oe from"./Press-Bi2kfsYa.js";import"./team-BhPvuV26.js";function _(e,t){let s;const n=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;s!==a&&e(a),s=a};return y.preUpdate(n,!0),()=>S(n)}function le(...e){const t=!Array.isArray(e[0]),s=t?0:-1,n=e[0+s],i=e[1+s],o=e[2+s],a=e[3+s],l=P(i,o,a);return t?l(n):l}const ce=50,A=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),de=()=>({time:0,x:A(),y:A()}),me={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function I(e,t,s,n){const i=s[t],{length:o,position:a}=me[t],l=i.current,m=s.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=G(0,i.scrollLength,i.current);const c=n-m;i.velocity=c>ce?0:K(i.current-l,c)}function pe(e,t,s){I(e,"x",t,s),I(e,"y",t,s),t.time=s}function fe(e,t){const s={x:0,y:0};let n=e;for(;n&&n!==t;)if(q(n))s.x+=n.offsetLeft,s.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const i=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();s.x+=i.left-o.left,s.y+=i.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:i,y:o}=n.getBBox();s.x+=i,s.y+=o;let a=null,l=n.parentNode;for(;!a;)l.tagName==="svg"&&(a=l),l=n.parentNode;n=a}else break;return s}const E={start:0,center:.5,end:1};function T(e,t,s=0){let n=0;if(e in E&&(e=E[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?n=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?n=i/100*document.documentElement.clientWidth:e.endsWith("vh")?n=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(n=t*e),s+n}const ue=[0,0];function ge(e,t,s,n){let i=Array.isArray(e)?e:ue,o=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,E[e]?e:"0"]),o=T(i[0],s,n),a=T(i[1],t),o-a}const he={All:[[0,0],[1,1]]},xe={x:0,y:0};function be(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function ve(e,t,s){const{offset:n=he.All}=s,{target:i=e,axis:o="y"}=s,a=o==="y"?"height":"width",l=i!==e?fe(i,e):xe,m=i===e?{width:e.scrollWidth,height:e.scrollHeight}:be(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let p=!t[o].interpolate;const f=n.length;for(let d=0;d<f;d++){const g=ge(n[d],c[a],m[a],l[o]);!p&&g!==t[o].interpolatorOffsets[d]&&(p=!0),t[o].offset[d]=g}p&&(t[o].interpolate=P(t[o].offset,Z(n),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=J(0,1,t[o].interpolate(t[o].current))}function ye(e,t=e,s){if(s.x.targetOffset=0,s.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)s.x.targetOffset+=n.offsetLeft,s.y.targetOffset+=n.offsetTop,n=n.offsetParent}s.x.targetLength=t===e?t.scrollWidth:t.clientWidth,s.y.targetLength=t===e?t.scrollHeight:t.clientHeight,s.x.containerLength=e.clientWidth,s.y.containerLength=e.clientHeight}function je(e,t,s,n={}){return{measure:i=>{ye(e,n.target,s),pe(e,s,i),(n.offset||n.target)&&ve(e,s,n)},notify:()=>t(s)}}const b=new WeakMap,M=new WeakMap,L=new WeakMap,O=new WeakMap,N=new WeakMap,H=e=>e===document.scrollingElement?window:e;function U(e,{container:t=document.scrollingElement,trackContentSize:s=!1,...n}={}){if(!t)return D;let i=L.get(t);i||(i=new Set,L.set(t,i));const o=de(),a=je(t,e,o,n);if(i.add(a),!b.has(t)){const m=()=>{for(const d of i)d.measure(ee.timestamp);y.preUpdate(c)},c=()=>{for(const d of i)d.notify()},p=()=>y.read(m);b.set(t,p);const f=H(t);window.addEventListener("resize",p,{passive:!0}),t!==document.documentElement&&M.set(t,Q(t,p)),f.addEventListener("scroll",p,{passive:!0}),p()}if(s&&!N.has(t)){const m=b.get(t),c={width:t.scrollWidth,height:t.scrollHeight};O.set(t,c);const p=()=>{const d=t.scrollWidth,g=t.scrollHeight;(c.width!==d||c.height!==g)&&(m(),c.width=d,c.height=g)},f=y.read(p,!0);N.set(t,f)}const l=b.get(t);return y.read(l,!1,!0),()=>{S(l);const m=L.get(t);if(!m||(m.delete(a),m.size))return;const c=b.get(t);b.delete(t),c&&(H(t).removeEventListener("scroll",c),M.get(t)?.(),window.removeEventListener("resize",c));const p=N.get(t);p&&(S(p),N.delete(t)),O.delete(t)}}const W=new Map;function we(e){const t={value:0},s=U(n=>{t.value=n[e.axis].progress*100},e);return{currentTime:t,cancel:s}}function X({source:e,container:t,...s}){const{axis:n}=s;e&&(t=e);const i=W.get(t)??new Map;W.set(t,i);const o=s.target??"self",a=i.get(o)??{},l=n+(s.offset??[]).join(",");return a[l]||(a[l]=!s.target&&te()?new ScrollTimeline({source:t,axis:n}):we({container:t,...s})),a[l]}function Ne(e,t){const s=X(t);return e.attachTimeline({timeline:t.target?void 0:s,observe:n=>(n.pause(),_(i=>{n.time=n.iterationDuration*i},s))})}function ke(e){return e.length===2}function Se(e,t){return ke(e)?U(s=>{e(s[t.axis].progress,s)},t):_(e,X(t))}function Fe(e,{axis:t="y",container:s=document.scrollingElement,...n}={}){if(!s)return D;const i={axis:t,container:s,...n};return typeof e=="function"?Se(e,i):Ne(e,i)}const Le=()=>({scrollX:j(0),scrollY:j(0),scrollXProgress:j(0),scrollYProgress:j(0)}),k=e=>e?!e.current:!1;function ze({container:e,target:t,...s}={}){const n=w(Le),i=u.useRef(null),o=u.useRef(!1),a=u.useCallback(()=>(i.current=Fe((l,{x:m,y:c})=>{n.scrollX.set(m.current),n.scrollXProgress.set(m.progress),n.scrollY.set(c.current),n.scrollYProgress.set(c.progress)},{...s,container:e?.current||void 0,target:t?.current||void 0}),()=>{i.current?.()}),[e,t,JSON.stringify(s.offset)]);return V(()=>{if(o.current=!1,k(e)||k(t)){o.current=!0;return}else return a()},[a]),u.useEffect(()=>{if(o.current)return C(!k(e)),C(!k(t)),a()},[a]),n}function Ee(e){const t=w(()=>j(e)),{isStatic:s}=u.useContext(re);if(s){const[,n]=u.useState(e);u.useEffect(()=>t.on("change",n),[])}return t}function R(e,t){const s=Ee(t()),n=()=>s.set(t());return n(),V(()=>{const i=()=>y.preRender(n,!1,!0),o=e.map(a=>a.on("change",i));return()=>{o.forEach(a=>a()),S(n)}}),s}function Ce(e){F.current=[],e();const t=R(F.current,e);return F.current=void 0,t}function $(e,t,s,n){if(typeof e=="function")return Ce(e);if(s!==void 0&&!Array.isArray(s)&&typeof t!="function")return Ae(e,t,s,n);const a=typeof t=="function"?t:le(t,s,n);return Array.isArray(e)?B(e,a):B([e],([l])=>a(l))}function B(e,t){const s=w(()=>[]);return R(e,()=>{s.length=0;const n=e.length;for(let i=0;i<n;i++)s[i]=e[i].get();return t(s)})}function Ae(e,t,s,n){const i=w(()=>Object.keys(s)),o=w(()=>({}));for(const a of i)o[a]=$(e,t,s[a],n);return o}const Ie="/uploads/homepage.jpg";function Te(){return r.jsxs("div",{className:"hero-slideshow",children:[r.jsx(h.div,{initial:{opacity:0,scale:1.1},animate:{opacity:1,scale:1},transition:{duration:1.5},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url(${Ie})`,backgroundSize:"cover",backgroundPosition:"center",zIndex:0}}),r.jsx("div",{className:"overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.4)",zIndex:1}})]})}function Me(){const e=[{src:"/uploads/2020/08/british-council.png",name:"British Council"},{id:"1415",name:"HIAS"},{id:"1416",name:"Maisha Film Lab"},{id:"1424",name:"Standard Chartered"},{id:"1443",name:"Safaricom"},{id:"1441",name:"TBWA"},{id:"1414",name:"Cocolili"},{id:"1418",name:"mLab"},{id:"1439",name:"Talking Film"},{id:"1449",name:"Radio Film"},{id:"1433",name:"Action Horizons"},{id:"1423",name:"Six Toes"},{id:"1427",name:"TFI"},{id:"1431",name:"USS"},{id:"1445",name:"Tope Mall Africa"}],t=[{src:"/uploads/festivals/2025-HSDFF-LAURELS--BLK.png",name:"Hot Springs Documentary Film Festival 2025"},{src:"/uploads/festivals/Athena-FilmFest-2018-logo-barnardlogo-transparent.png",name:"Athena Film Festival"},{src:"/uploads/festivals/DCDOX-Mini-Laurel-2025-Black.png",name:"DC/DOX Film Festival 2025"},{src:"/uploads/festivals/HD25_OFF_SEL_BLACK.png",name:"Hot Docs 2025"},{src:"/uploads/festivals/Laurel-2025.png",name:"Afrikanisches Filmfestival Hamburg 2025"},{src:"/uploads/festivals/Laurel_AM-FM-LAUREL-1.png",name:"African Movie Festival in Manitoba 2025"},{src:"/uploads/festivals/Laurels---Black.png",name:"NBO Film Festival 2025"},{src:"/uploads/festivals/SIFF_2025DocFest_Laurel_OfficialSelection_Black.png",name:"SIFF DocFest 2025"},{src:"/uploads/festivals/ZIFF-2025_OFFICIAL-SELECTION-LAUREL-1.png",name:"ZIFF Official Selection 2025"}],s=o=>o.map(a=>({name:a.name,src:a.src||(a.id&&z[a.id]?`/uploads/${z[a.id]}`:null)})).filter(a=>a.src),n=s(e),i=s(t);return r.jsx(r.Fragment,{children:r.jsxs(h.div,{className:"home-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[r.jsx(Y,{title:"Home",description:"African Stories. Global Impact. Award-winning production house in Nairobi, Kenya."}),r.jsxs("section",{className:"hero",children:[r.jsx(Te,{}),r.jsx("div",{className:"hero-content container",children:r.jsxs(h.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5,duration:.8},children:[r.jsxs("h1",{className:"hero-title",style:{fontSize:"clamp(0.9rem, 1.5vw, 1.2rem)",lineHeight:"1.4",textTransform:"uppercase",letterSpacing:"0.15em",maxWidth:"800px",margin:"0 auto",fontWeight:"400"},children:["A FILM PRODUCTION COMPANY AND COLLECTIVE",r.jsx("br",{}),r.jsx("span",{style:{fontSize:"0.8em",fontWeight:"300",letterSpacing:"0.1em",display:"block",marginTop:"0.8em",color:"rgba(255,255,255,0.7)"},children:"BASED IN NAIROBI & KILIFI, KENYA"})]}),r.jsx("p",{className:"hero-subtitle",children:"Connect. Create. Captivate."}),r.jsx("div",{className:"hero-actions",children:r.jsx("button",{onClick:()=>document.getElementById("about")?.scrollIntoView({behavior:"smooth"}),className:"btn btn-primary",children:"ABOUT US"})})]})})]}),r.jsx("section",{className:"partners section-padding",children:r.jsxs("div",{className:"container",children:[r.jsx("span",{className:"partners-label",children:"Trusted By"}),r.jsx("h2",{className:"partners-heading",children:"Our Clients & Partners"}),r.jsx("h3",{className:"partners-row-label",children:"Clients"}),r.jsx("div",{className:"partners-grid",children:n.map(({src:o,name:a},l)=>r.jsx("div",{className:"partner-card",children:r.jsx("img",{src:o,alt:a})},l))}),r.jsx("h3",{className:"partners-row-label",style:{marginTop:"2rem"},children:"Festivals"}),r.jsx("div",{className:"partners-grid",children:i.map(({src:o,name:a},l)=>r.jsx("div",{className:"partner-card",children:r.jsx("img",{src:o,alt:a})},l))})]})}),r.jsx("style",{children:`
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
                            font-size: 1.1rem;
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
                            display: grid;
                            grid-template-columns: repeat(8, 1fr);
                            gap: 0.75rem;
                            max-width: 1100px;
                            margin: 0 auto;
                            padding: 0 0.5rem;
                        }
                        .partner-card {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 0.75rem 0.5rem;
                            background: rgba(255,255,255, 0.95);
                            border-radius: 6px;
                            border: 1px solid rgba(255,255,255,0.1);
                            transition: all 0.35s ease;
                            aspect-ratio: 1;
                        }
                        .partner-card:hover {
                            transform: translateY(-3px);
                            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.15);
                            border-color: rgba(212, 175, 55, 0.3);
                        }
                        .partner-card img {
                            max-width: 90%;
                            max-height: 90%;
                            object-fit: contain;
                            transition: transform 0.3s ease;
                        }
                        .partner-card:hover img {
                            transform: scale(1.08);
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
                                grid-template-columns: repeat(4, 1fr);
                                gap: 0.6rem;
                            }
                            .partner-card {
                                padding: 0.6rem 0.5rem;
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
                                grid-template-columns: repeat(3, 1fr);
                                gap: 0.5rem;
                            }
                            .partner-card {
                                padding: 0.5rem;
                            }
                        }
                    `})]})})}function Oe(){const e=`/uploads/${z[1236]}`,t=500,[s,n]=u.useState({name:"",email:"",message:""}),[i,o]=u.useState(""),[a,l]=u.useState(""),m=f=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f),c=f=>{const{name:d,value:g}=f.target;d==="message"&&g.length>t||(d==="email"&&(g&&!m(g)?l("Please enter a valid email address"):l("")),n({...s,[d]:g}))},p=async f=>{if(f.preventDefault(),!m(s.email)){l("Please enter a valid email address");return}o("sending");try{(await fetch("https://formsubmit.co/ajax/admin@afrofilmsinternational.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:s.name,email:s.email,message:s.message,_subject:"New Contact from AfroFilms Website"})})).ok?(o("success"),n({name:"",email:"",message:""})):o("error")}catch{o("error")}};return r.jsxs("div",{className:"contact-page",children:[r.jsx(Y,{title:"Contact",description:"Get in touch with AfroFilms International. Based in Nairobi, Kenya. We execute creative projects from Script to Screen."}),r.jsxs("section",{className:"contact-hero",children:[r.jsx("div",{className:"hero-bg",style:{backgroundImage:e?`url(${e})`:"none"}}),r.jsx("div",{className:"hero-overlay"}),r.jsxs("div",{className:"container hero-content center",children:[r.jsx("span",{className:"section-subtitle text-gold",children:"Get In Touch"}),r.jsx("h1",{className:"hero-title",children:"Start Your Project"})]})]}),r.jsx("section",{className:"contact-content section-padding",children:r.jsxs("div",{className:"container relative z-10",children:[r.jsxs("div",{className:"contact-hub-grid",children:[r.jsxs("div",{className:"hub-card glass group",children:[r.jsx("div",{className:"card-icon",children:"📍"}),r.jsx("h3",{className:"card-title",children:"Visit Us"}),r.jsx("div",{className:"card-body",children:r.jsxs("p",{children:["Bekim House, Level 1",r.jsx("br",{}),"Nairobi, Kenya"]})}),r.jsxs("a",{href:"https://maps.app.goo.gl/eTxi7PMegZpt7aPs8",target:"_blank",rel:"noopener noreferrer",className:"card-link",children:["Get Directions ",r.jsx("span",{className:"arrow",children:"→"})]})]}),r.jsxs("div",{className:"hub-card glass group",children:[r.jsx("div",{className:"card-icon",children:"✉️"}),r.jsx("h3",{className:"card-title",children:"Email Us"}),r.jsxs("div",{className:"card-body",children:[r.jsx("p",{children:"For inquiries and collaborations:"}),r.jsx("a",{href:"mailto:admin@afrofilmsinternational.com",className:"highlight-link",children:"admin@afrofilmsinternational.com"})]}),r.jsxs("a",{href:"mailto:admin@afrofilmsinternational.com",className:"card-link",children:["Send Email ",r.jsx("span",{className:"arrow",children:"→"})]})]})]}),r.jsxs("div",{className:"contact-form-section",children:[r.jsx("h2",{className:"form-heading",children:"Send Us a Message"}),r.jsxs("form",{onSubmit:p,className:"contact-form",children:[r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:s.name,onChange:c,required:!0,className:"form-input"})}),r.jsxs("div",{className:"form-group",children:[r.jsx("input",{type:"email",name:"email",placeholder:"Your Email",value:s.email,onChange:c,required:!0,pattern:"[^\\s@]+@[^\\s@]+\\.[^\\s@]+",className:`form-input ${a?"input-error":""}`}),a&&r.jsx("span",{className:"field-error",children:a})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("textarea",{name:"message",placeholder:"Your Message",rows:"5",value:s.message,onChange:c,required:!0,maxLength:t,className:"form-input"}),r.jsxs("div",{className:"char-counter",children:[r.jsx("span",{className:s.message.length>=t?"at-limit":"",children:s.message.length})," / ",t]})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:i==="sending",children:i==="sending"?"Sending...":"Send Message"}),i==="success"&&r.jsx("p",{className:"form-status success",children:"Message sent successfully!"}),i==="error"&&r.jsx("p",{className:"form-status error",children:"Failed to send. Please try again."})]})]})]})}),r.jsx("style",{children:`
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
            `})]})}function x({id:e,children:t,direction:s="up",delay:n=0}){const i=u.useRef(null),{scrollYProgress:o}=ze({target:i,offset:["start end","start 0.3"]});$(o,[0,1],[0,1]);const a={up:{y:80},down:{y:-60},left:{x:-80},right:{x:80},scale:{scale:.92},none:{}};return r.jsx("section",{id:e,ref:i,children:r.jsx(h.div,{initial:{opacity:0,...a[s]},whileInView:{opacity:1,y:0,x:0,scale:1},viewport:{once:!0,amount:.08},transition:{duration:.9,delay:n,ease:[.25,.46,.45,.94]},children:t})})}function v({variant:e="line"}){return e==="glow"?r.jsx("div",{className:"section-divider-wrap",children:r.jsx(h.div,{className:"divider-glow",initial:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0,amount:.5},transition:{duration:1.2,ease:[.16,1,.3,1]}})}):e==="dots"?r.jsx("div",{className:"section-divider-wrap",children:r.jsxs(h.div,{className:"divider-dots",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8},children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})}):e==="fade"?r.jsx("div",{className:"section-divider-wrap",children:r.jsx(h.div,{className:"divider-fade-gradient",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1.5}})}):r.jsx("div",{className:"section-divider-wrap",children:r.jsx(h.div,{className:"divider-line",initial:{scaleX:0},whileInView:{scaleX:1},viewport:{once:!0,amount:.5},transition:{duration:1,ease:[.16,1,.3,1]}})})}function Xe(){return r.jsxs("div",{className:"single-page-layout",children:[r.jsx(x,{id:"home",direction:"none",children:r.jsx(Me,{})}),r.jsx(v,{variant:"glow"}),r.jsx(x,{id:"about",direction:"up",children:r.jsx(se,{})}),r.jsx(v,{variant:"dots"}),r.jsx(x,{id:"portfolio",direction:"left",children:r.jsx(ne,{})}),r.jsx(v,{variant:"fade"}),r.jsx(x,{id:"team",direction:"up",delay:.1,children:r.jsx(ie,{})}),r.jsx(v,{variant:"glow"}),r.jsx(x,{id:"collective",direction:"right",children:r.jsx(ae,{})}),r.jsx(v,{variant:"dots"}),r.jsx(x,{id:"press",direction:"up",children:r.jsx(oe,{})}),r.jsx(v,{variant:"fade"}),r.jsx(x,{id:"contact",direction:"up",delay:.1,children:r.jsx(Oe,{})}),r.jsx("style",{children:`
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
            `})]})}export{Xe as default};
