import{r as n,j as e}from"./index-JAKolaCX.js";import{S as x}from"./SEO-DS9-lbCG.js";const s=[{src:"/uploads/2020/08/on-set.jpg",caption:"Directing the Scene",category:"On Set"},{src:"/uploads/about2.jpg",caption:"Cinematography in Progress",category:"On Set"},{src:"/uploads/2020/08/viewpoint.jpg",caption:"Setting up the Shot",category:"On Set"},{src:"/uploads/2020/08/viewpoint-ground.jpg",caption:"Low Angle Production",category:"On Set"},{src:"/uploads/2020/08/shiru_bomet.jpg",caption:"Location scouting in Bomet",category:"On Set"},{src:"/uploads/2020/08/kisumu-surgery.jpg",caption:"Documentary production in Kisumu",category:"On Set"},{src:"/uploads/2020/08/Action-Horizon.png",caption:"Action Horizon Production",category:"Action"},{src:"/uploads/slide3.jpg",caption:"Capturing Dynamic Stories",category:"Action"},{src:"/uploads/collective2.jpg",caption:"Collaborative Film Workshop",category:"Action"},{src:"/uploads/2020/08/ZIPPY-KIDS-MTONGANI2.jpg",caption:"Community Cinema Action",category:"Action"},{src:"/uploads/homepage.jpg",caption:"Behind the Lens",category:"Action"},{src:"/uploads/2020/08/benatronics-studio.jpeg",caption:"Studio Session Action",category:"Action"}],y=["All","On Set","Action"];function u(){const[a,c]=n.useState("All"),[t,i]=n.useState(null),o=a==="All"?s:s.filter(r=>r.category===a),g=r=>i(r),l=()=>i(null),p=()=>i(r=>(r-1+o.length)%o.length),m=()=>i(r=>(r+1)%o.length);return e.jsxs("div",{className:"gallery-page",children:[e.jsx(x,{title:"Gallery",description:"A visual journey through Afrofilms International — documentaries, productions, festivals, and community work across Africa."}),e.jsxs("div",{className:"gallery-bg",children:[e.jsx("div",{className:"gallery-bg-img",style:{backgroundImage:"url('/uploads/portfolioA.jpg')"}}),e.jsx("div",{className:"gallery-bg-overlay"})]}),e.jsxs("div",{className:"gallery-wrapper",children:[e.jsxs("header",{className:"gallery-header",children:[e.jsx("span",{className:"gallery-eyebrow",children:"Visual Stories"}),e.jsxs("h1",{className:"gallery-title",children:["Our ",e.jsx("span",{className:"gallery-gold",children:"Gallery"})]}),e.jsx("p",{className:"gallery-desc",children:"Moments from our documentaries, productions, festivals, and community work across Africa."})]}),e.jsx("div",{className:"gallery-filters",children:y.map(r=>e.jsx("button",{className:`gallery-filter-btn ${a===r?"active":""}`,onClick:()=>c(r),children:r},r))}),e.jsx("div",{className:"gallery-grid",children:o.map((r,d)=>e.jsxs("div",{className:"gallery-item",onClick:()=>g(d),children:[e.jsx("img",{src:r.src,alt:r.caption,loading:"lazy"}),e.jsxs("div",{className:"gallery-item-overlay",children:[e.jsx("span",{className:"gallery-item-category",children:r.category}),e.jsx("span",{className:"gallery-item-caption",children:r.caption}),e.jsx("span",{className:"gallery-zoom-icon",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),e.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]})})]})]},r.src))}),o.length===0&&e.jsx("div",{className:"gallery-empty",children:"No images in this category yet."})]}),t!==null&&e.jsxs("div",{className:"lightbox",onClick:l,children:[e.jsx("button",{className:"lightbox-close",onClick:l,children:"×"}),e.jsx("button",{className:"lightbox-nav lightbox-prev",onClick:r=>{r.stopPropagation(),p()},children:"‹"}),e.jsxs("div",{className:"lightbox-content",onClick:r=>r.stopPropagation(),children:[e.jsx("img",{src:o[t].src,alt:o[t].caption}),e.jsxs("div",{className:"lightbox-info",children:[e.jsx("span",{className:"lightbox-cat",children:o[t].category}),e.jsx("p",{className:"lightbox-cap",children:o[t].caption}),e.jsxs("span",{className:"lightbox-counter",children:[t+1," / ",o.length]})]})]}),e.jsx("button",{className:"lightbox-nav lightbox-next",onClick:r=>{r.stopPropagation(),m()},children:"›"})]}),e.jsx("style",{children:`
                .gallery-page {
                    min-height: 100vh;
                    background: #050505;
                    color: #fff;
                    position: relative;
                    overflow: hidden;
                }
                .gallery-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .gallery-bg-img {
                    position: absolute;
                    inset: -20px;
                    background-size: cover;
                    background-position: center;
                    filter: blur(4px) grayscale(60%);
                    opacity: 0.18;
                }
                .gallery-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.95) 100%);
                }
                .gallery-wrapper {
                    position: relative;
                    z-index: 10;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 9rem 2rem 6rem;
                }

                /* Header */
                .gallery-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .gallery-eyebrow {
                    display: inline-block;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                }
                .gallery-title {
                    font-family: var(--font-heading);
                    font-size: clamp(3rem, 6vw, 5rem);
                    text-transform: uppercase;
                    line-height: 1.05;
                    margin-bottom: 1.25rem;
                }
                .gallery-gold { color: var(--color-primary); }
                .gallery-desc {
                    color: rgba(255,255,255,0.55);
                    font-size: 1rem;
                    max-width: 550px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* Filters */
                .gallery-filters {
                    display: flex;
                    gap: 0.6rem;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-bottom: 3rem;
                }
                .gallery-filter-btn {
                    padding: 0.45rem 1.2rem;
                    border-radius: 100px;
                    border: 1px solid rgba(255,255,255,0.15);
                    background: transparent;
                    color: rgba(255,255,255,0.6);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    font-family: var(--font-sans);
                }
                .gallery-filter-btn:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                .gallery-filter-btn.active {
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    color: #000;
                    font-weight: 600;
                }

                /* Masonry-style Grid */
                .gallery-grid {
                    columns: 4;
                    column-gap: 0.75rem;
                }
                .gallery-item {
                    break-inside: avoid;
                    margin-bottom: 0.75rem;
                    position: relative;
                    cursor: pointer;
                    border-radius: 6px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .gallery-item img {
                    width: 100%;
                    display: block;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                .gallery-item-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 50%);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    padding: 1rem;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .gallery-item:hover img { transform: scale(1.06); }
                .gallery-item:hover .gallery-item-overlay { opacity: 1; }
                .gallery-item-category {
                    font-size: 0.65rem;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--color-primary);
                    margin-bottom: 0.3rem;
                    font-weight: 600;
                }
                .gallery-item-caption {
                    font-size: 0.85rem;
                    color: #fff;
                    font-weight: 500;
                    line-height: 1.3;
                }
                .gallery-zoom-icon {
                    position: absolute;
                    top: 0.75rem;
                    right: 0.75rem;
                    width: 34px;
                    height: 34px;
                    background: rgba(0,0,0,0.6);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    transition: background 0.2s;
                }
                .gallery-item:hover .gallery-zoom-icon {
                    background: var(--color-primary);
                    color: #000;
                }

                .gallery-empty {
                    text-align: center;
                    color: rgba(255,255,255,0.3);
                    padding: 4rem 0;
                    font-style: italic;
                }

                /* Lightbox */
                .lightbox {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.93);
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(8px);
                    animation: lb-in 0.2s ease;
                }
                @keyframes lb-in { from { opacity: 0; } to { opacity: 1; } }
                .lightbox-content {
                    max-width: 80vw;
                    max-height: 85vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .lightbox-content img {
                    max-width: 100%;
                    max-height: 72vh;
                    object-fit: contain;
                    border-radius: 4px;
                    box-shadow: 0 30px 80px rgba(0,0,0,0.7);
                }
                .lightbox-info {
                    margin-top: 1rem;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                }
                .lightbox-cat {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-primary);
                    font-weight: 600;
                }
                .lightbox-cap {
                    font-size: 1rem;
                    color: rgba(255,255,255,0.85);
                }
                .lightbox-counter {
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.35);
                }
                .lightbox-close {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    width: 40px;
                    height: 40px;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 50%;
                    color: #fff;
                    font-size: 1.4rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                    z-index: 10;
                }
                .lightbox-close:hover { background: rgba(255,255,255,0.2); }
                .lightbox-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 50px;
                    height: 50px;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 50%;
                    color: #fff;
                    font-size: 1.8rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    line-height: 1;
                }
                .lightbox-nav:hover {
                    background: var(--color-primary);
                    color: #000;
                    border-color: var(--color-primary);
                }
                .lightbox-prev { left: 1.5rem; }
                .lightbox-next { right: 1.5rem; }

                @media (max-width: 900px) {
                    .gallery-grid { columns: 2; }
                    .lightbox-content { max-width: 92vw; }
                    .lightbox-nav { display: none; }
                }
                @media (max-width: 600px) {
                    .gallery-grid { columns: 1; }
                    .gallery-wrapper { padding: 7rem 1rem 4rem; }
                }
            `})]})}export{u as default};
