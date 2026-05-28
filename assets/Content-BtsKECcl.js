import{u as N,j as t,N as k,L as w,r as c}from"./index-JAKolaCX.js";import{l as r,k as d}from"./image_map-Bcyey519.js";import{S}from"./SEO-DS9-lbCG.js";function z(a){if(!a)return"";let e=a.replace(/(https?:\/\/[^\/]+)?\/wp-content\/uploads\//g,"/uploads/");return e=e.replace(/\[vc_single_image[^\]]*image="(\d+)"[^\]]*\]/g,(i,o)=>r[o]?`<img src="/uploads/${r[o]}" alt="Image ${o}" class="content-image" />`:""),e=e.replace(/\[bezel_[^\]]*image="(\d+)"[^\]]*\]/g,(i,o)=>r[o]?`<img src="/uploads/${r[o]}" alt="Slide ${o}" class="content-image" />`:""),e=e.replace(/\[\/?[\w_-]+.*?\]/g,""),e}function I(a){if(!a)return null;let e=a.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);return e&&e[1]?e[1].replace(/(https?:\/\/[^\/]+)?\/wp-content\/uploads\//g,"/uploads/"):(e=a.match(/\[vc_single_image[^\]]*image="(\d+)"/),e&&e[1]&&r[e[1]]?`/uploads/${r[e[1]]}`:(e=a.match(/\[bezel_[^\]]*image="(\d+)"/),e&&e[1]&&r[e[1]]?`/uploads/${r[e[1]]}`:a.match(/\[vc_video/i)||a.match(/\[video/i)||a.match(/iframe/i)?`/uploads/${r[5482]}`:a.match(/\[vc_video/i)||a.match(/\[video/i)||a.match(/iframe/i)?`/uploads/${r[5482]}`:`/uploads/${r[5482]}`))}function _(a){return a?new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""}const $=a=>{const[e,i]=c.useState(null),[o,f]=c.useState(!0),[b,u]=c.useState(null);return c.useEffect(()=>{if(!a)return;async function y(){try{const n=await fetch("/content_manifest.json");if(!n.ok)throw new Error("Failed to load manifest");const m=(await n.json()).find(j=>j.slug===a);if(!m){u("Not found"),f(!1);return}const h=await fetch(m.path);if(!h.ok)throw new Error("Failed to load content text");const l=(await h.text()).split("---").slice(2).join("---");let s=I(l);s||(s=r[5482]?`/uploads/${r[5482]}`:null);let p=null,x=z(l);const v=/<img[^>]+src="([^">]+)"[^>]*>/,g=l.match(v);g?(p=g[1],x=l.replace(g[0],"")):s&&(p=s),i({...m,body:x,heroImage:s,posterImage:p})}catch(n){console.error(n),u(n.message)}finally{f(!1)}}y()},[a]),{data:e,loading:o,error:b}};function P(){const{slug:a}=N(),{data:e,loading:i,error:o}=$(a);return i?t.jsxs("div",{className:"center-loading",children:[t.jsx("div",{className:"loader"}),t.jsx("style",{children:`
                .center-loading { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #050505; }
                .loader { width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s infinite linear; }
                @keyframes spin { to { transform: rotate(360deg); } }
            `})]}):o?t.jsxs("div",{className:"container section-padding",children:["Error: ",o]}):e?t.jsxs("div",{className:"content-page",children:[t.jsx(S,{title:e.title,description:e.excerpt||e.title,image:e.heroImage}),t.jsxs("div",{className:"content-hero",children:[t.jsx("div",{className:"hero-bg",style:{backgroundImage:e.heroImage?`url(${e.heroImage})`:"none"}}),t.jsx("div",{className:"hero-overlay"}),t.jsxs("div",{className:"container hero-content animate-fade-in",children:[t.jsxs("div",{className:"meta-badge",children:[e.type==="post"?"Portfolio":"Page",e.date&&t.jsx("span",{className:"separator",children:"•"}),e.date&&_(e.date)]}),t.jsx(d.h1,{className:"hero-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:e.title})]})]}),t.jsxs("div",{className:"container content-layout",children:[t.jsxs("aside",{className:"content-sidebar",children:[t.jsxs("div",{className:"sticky-poster",children:[e.posterImage&&t.jsx(d.img,{src:e.posterImage,alt:e.title,className:"poster-img",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5}}),t.jsx("div",{className:"poster-reflection"})]}),t.jsxs(d.div,{className:"movie-details",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[t.jsx("h3",{className:"details-header",children:"Details"}),t.jsxs("div",{className:"details-grid",children:[e.director&&t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-label",children:"Director"}),t.jsx("span",{className:"detail-value",children:e.director})]}),e.genre&&t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-label",children:"Genre"}),t.jsx("span",{className:"detail-value",children:e.genre})]}),e.origin&&t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-label",children:"Origin"}),t.jsx("span",{className:"detail-value",children:e.origin})]}),e.cast&&t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-label",children:"Cast"}),t.jsx("span",{className:"detail-value",children:e.cast})]}),e.date&&t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-label",children:"Year"}),t.jsx("span",{className:"detail-value",children:new Date(e.date).getFullYear()})]})]})]})]}),t.jsxs("article",{className:"content-main",children:[t.jsx(d.div,{className:"content-body",dangerouslySetInnerHTML:{__html:e.body},initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.3}}),t.jsx("div",{className:"nav-footer",children:t.jsxs(w,{to:"/works",className:"back-link group",children:[t.jsx("span",{className:"arrow-circle",children:"←"}),t.jsx("span",{className:"link-text",children:"Back to Portfolio"})]})})]})]}),t.jsx("style",{children:`
                .content-page {
                    background: #050505;
                    min-height: 100vh;
                    padding-bottom: 8rem;
                    color: #fff;
                }
                
                /* Hero */
                .content-hero {
                    position: relative;
                    height: 60vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    margin-bottom: 6rem;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.4;
                    filter: blur(8px); /* Blur layout for hero */
                    transform: scale(1.1);
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 0%, #050505 100%);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    width: 100%;
                }
                
                .meta-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255,255,255,0.05);
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 2rem;
                }
                .separator { color: rgba(255,255,255,0.3); }

                .hero-title {
                    font-size: clamp(3rem, 7vw, 6rem);
                    line-height: 1;
                    font-family: var(--font-heading);
                    text-shadow: 0 20px 40px rgba(0,0,0,0.5);
                    margin-bottom: 1rem;
                }

                /* Layout Grid */
                .content-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr; /* Sidebar | Content */
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .content-layout {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    /* Specific mobile adjustments for our-land image if needed */
                }

                /* Sidebar / Poster */
                .content-sidebar {
                    position: relative;
                }
                .sticky-wrapper {
                    position: sticky;
                    top: 120px; /* Space for Navbar */
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                .poster-container {
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .poster-img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                /* Movie Details Box */
                .movie-details {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 2rem;
                    border-radius: 8px;
                }
                .details-header {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: #fff;
                    border-bottom: 1px solid var(--color-primary);
                    display: inline-block;
                    padding-bottom: 0.5rem;
                }
                .details-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .detail-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }
                .detail-label {
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    color: var(--color-text-muted);
                    letter-spacing: 0.1em;
                }
                .detail-value {
                    font-size: 1.1rem;
                    color: #fff;
                    font-weight: 500;
                }

                /* Main Content Area */
                .content-main {
                    padding-top: 1rem;
                }
                
                .content-body {
                    color: #d0d0d0;
                    font-size: 1.2rem;
                    line-height: 1.8;
                    font-weight: 300;
                }
                
                /* Typography & Elements */
                .content-body p {
                    margin-bottom: 2rem;
                }
                .content-body h2 {
                    font-size: 2.2rem;
                    color: #fff;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                    border-left: 3px solid var(--color-primary);
                    padding-left: 1.5rem;
                }
                .content-body h3 {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                }
                
                /* Buttons in Content */
                .content-body a {
                    color: var(--color-primary);
                    text-decoration: none;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
                    transition: all 0.3s ease;
                }
                .content-body a:not([style*="padding"]):hover {
                    border-bottom-color: var(--color-primary);
                    background: rgba(212, 175, 55, 0.1);
                    color: #fff;
                }

                /* Trailer Button Styling Override */
                .content-body a[style*="background"] {
                    display: inline-block !important;
                    background: transparent !important;
                    color: var(--color-primary) !important;
                    border: 1px solid var(--color-primary) !important;
                    padding: 1rem 2.5rem !important;
                    font-size: 0.9rem !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.15em !important;
                    transition: all 0.3s ease !important;
                    box-shadow: none !important;
                    margin-top: 1rem;
                }
                .content-body a[style*="background"]:hover {
                    background: var(--color-primary) !important;
                    color: #000 !important;
                    box-shadow: 0 0 30px rgba(212, 175, 55, 0.3) !important;
                    transform: translateY(-2px);
                }

                .content-body strong {
                    color: #fff;
                    font-weight: 600;
                }
                
                /* Blockquotes */
                .content-body blockquote {
                    position: relative;
                    margin: 3rem 0;
                    padding: 2rem;
                    background: rgba(255,255,255,0.03);
                    border-left: 2px solid var(--color-primary);
                    font-size: 1.3rem;
                    font-family: var(--font-heading);
                    font-style: italic;
                    color: rgba(255,255,255,0.9);
                }
                
                /* Image Clean up */
                /* Hide images in body loop if they were extracted but regex failed to remove */
                /* (Handled by JS extraction, but CSS safety net) */
                
                /* Footer Nav */
                .nav-footer {
                    margin-top: 5rem;
                    padding-top: 3rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    text-decoration: none;
                    color: var(--color-text-muted);
                    transition: color 0.3s;
                }
                .arrow-circle {
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .link-text {
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 0.1em;
                }
                .back-link:hover .arrow-circle {
                    border-color: var(--color-primary);
                    background: var(--color-primary);
                    color: #000;
                    transform: translateX(-5px);
                }
                .back-link:hover .link-text {
                    color: #fff;
                }
            `})]}):t.jsx(k,{to:"/404",replace:!0})}export{P as default};
