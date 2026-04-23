import{u as h,a as x,r as g,j as e,L as f}from"./index-B2qnIJtg.js";import{t as u}from"./team-BhPvuV26.js";import{S as b}from"./SEO-BqpykSab.js";import{k as r}from"./image_map-t3oo7ht4.js";function N(){const{id:o}=h(),l=x(),t=u.find(i=>i.id===o);if(g.useEffect(()=>{window.scrollTo(0,0)},[]),!t)return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl mb-4",children:"Member Not Found"}),e.jsx(f,{to:"/team",className:"text-gold hover:underline",children:"Return to Team"})]})});const n=t.name.split(" "),m=n[0],c=n.slice(1).join(" ");return e.jsxs("div",{className:"team-member-page",children:[e.jsx(b,{title:`${t.name} - AfroFilms Team`,description:`Learn more about ${t.name}, ${t.role} at AfroFilms International.`}),e.jsxs("div",{className:"container team-member-container",children:[e.jsx(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"back-nav-wrapper",children:e.jsxs("button",{onClick:()=>l(-1),className:"back-link group flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[e.jsx("span",{className:"text-2xl group-hover:-translate-x-1 transition-transform",children:"←"}),e.jsx("span",{className:"uppercase tracking-widest text-sm font-bold",children:"Back to Team"})]})}),e.jsxs("div",{className:"content-grid",children:[e.jsx(r.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},className:"image-column",children:e.jsxs("div",{className:"image-wrapper glass-panel",children:[t.image?e.jsx("img",{src:`/uploads/${t.image}`,alt:t.name,className:"w-full h-auto"}):e.jsx("div",{className:"w-full h-full bg-[#1a1a1a] flex items-center justify-center",children:e.jsx("span",{className:"text-6xl text-gray-700 font-heading",children:t.name.charAt(0)})}),e.jsx("div",{className:"overlay"})]})}),e.jsxs(r.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.4},className:"info-column",children:[e.jsxs("h1",{className:"name-heading",children:[e.jsx("span",{className:"text-white font-medium",children:m}),e.jsx("span",{className:"text-gold font-light",children:c})]}),e.jsx("div",{className:"h-1 w-24 bg-gold mb-8"}),e.jsx("h2",{className:"text-xl uppercase tracking-widest text-gray-400 mb-8",children:t.role}),e.jsx("div",{className:"bio-content",children:Array.isArray(t.bio)?t.bio.map((i,d)=>e.jsx("p",{children:i.split(" ").map((a,s)=>{if(a.startsWith("http")||a.startsWith("www")){const p=a.startsWith("www")?`https://${a}`:a;return e.jsxs("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"text-gold hover:underline break-all",children:[a," "]},s)}return e.jsxs("span",{children:[a," "]},s)})},d)):e.jsx("p",{children:t.bio})}),e.jsxs("div",{className:"socials mt-12 flex gap-4",children:[e.jsx("button",{className:"px-6 py-2 border border-gray-700 rounded-full hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider",children:"LinkedIn"}),e.jsx("button",{className:"px-6 py-2 border border-gray-700 rounded-full hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider",children:"IMDb"})]})]})]})]}),e.jsx("style",{children:`
                .team-member-page {
                    min-height: 100vh;
                    background: #050505;
                    color: white;
                }
                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .image-column {
                        position: relative;
                        top: 0;
                        margin-bottom: 2rem;
                    }
                    .image-wrapper {
                        max-height: 50vh !important;
                    }
                }
                @media (min-width: 1025px) {
                    .image-column {
                        position: sticky;
                        top: 120px;
                    }
                }
                .image-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 450px; /* Constrain width */
                    max-height: 75vh; /* Constrain height to viewport */
                    margin: 0 auto; /* Center horizontally */
                    border-radius: 4px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #000;
                }
                .image-wrapper img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                .name-heading {
                    font-family: var(--font-heading);
                    font-size: clamp(2.5rem, 5vw, 5rem);
                    line-height: 1.1;
                    word-break: break-word;
                    hyphens: auto;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 1.5rem;
                }
                .name-heading span {
                    display: block;
                }
                .text-white { color: #fff; }
                .text-gold { color: var(--color-primary); }
                .font-medium { font-weight: 500; }
                .font-light { font-weight: 300; }
                
                .bio-content p {
                    margin-bottom: 1.5rem;
                    font-size: 1.125rem;
                    color: #d1d5db;
                    line-height: 1.7;
                }
                .bio-content p:last-child {
                    margin-bottom: 0;
                }
                .team-member-container {
                    padding-top: 150px;
                    padding-bottom: 80px;
                }
                .back-nav-wrapper {
                    margin-bottom: 3rem;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #9ca3af;
                    font-weight: 600;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .back-link:hover {
                    color: #fff;
                }
                .glass-panel {
                    background: rgba(255,255,255,0.02);
                    backdrop-filter: blur(10px);
                }
            `})]})}export{N as default};
