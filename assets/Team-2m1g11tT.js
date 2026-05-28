import{j as e,L as t}from"./index-JAKolaCX.js";import{t as r}from"./team-BCIQdSM-.js";import{S as o}from"./SEO-DS9-lbCG.js";import{k as i}from"./image_map-Bcyey519.js";function m(){return e.jsxs("div",{className:"team-page",children:[e.jsx(o,{title:"Our Team",description:"Meet the creative visionaries behind AfroFilms International."}),e.jsxs("div",{className:"team-bg-container",children:[e.jsx("div",{className:"team-bg-image"}),e.jsx("div",{className:"team-bg-overlay"})]}),e.jsx("div",{className:"team-content-wrapper",children:e.jsxs("div",{className:"container pt-24 pb-20",children:[e.jsx("div",{className:"section-header center mb-16 text-center",children:e.jsx("h1",{className:"page-title text-5xl md:text-7xl font-heading mb-4 text-white",children:"TEAM"})}),e.jsx("div",{className:"team-grid",children:r.map(a=>e.jsx(t,{to:`/team/${a.id}`,children:e.jsxs(i.div,{className:"team-card glass group",layoutId:`card-${a.id}`,whileHover:{y:-10},children:[e.jsx("div",{className:"member-image-wrapper",children:e.jsx(i.div,{className:"member-image",layoutId:`image-${a.id}`,children:a.image?e.jsx("img",{src:a.image.startsWith("/uploads/")?a.image:`/uploads/${a.image}`,alt:a.name,loading:"lazy",decoding:"async",width:"180",height:"180",style:{objectPosition:a.name==="Steve Ruiyi"?"top center":"center"}}):e.jsx("div",{className:"placeholder-avatar"})})}),e.jsxs("div",{className:"member-info",children:[e.jsx(i.h3,{className:"text-2xl text-white font-medium mb-2",layoutId:`name-${a.id}`,children:a.name}),e.jsx(i.span,{className:"member-role text-gold tracking-widest text-sm uppercase font-bold",layoutId:`role-${a.id}`,children:a.role})]})]})},a.id))})]})}),e.jsx("style",{children:`
                .team-page {
                    min-height: 100vh;
                    background: #000;
                    position: relative;
                    overflow: hidden;
                }
                .team-bg-container {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .team-bg-image {
                    position: absolute;
                    inset: -20px;
                    background-image: url('/uploads/teamA.jpg');
                    background-size: cover;
                    background-position: center;
                    filter: blur(3px);
                }
                .team-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.55);
                    z-index: 1;
                }
                .team-content-wrapper {
                    position: relative;
                    z-index: 10;
                }
                
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                @media (max-width: 900px) {
                    .team-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 600px) {
                    .team-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                .team-card {
                    padding: 1rem;
                    text-align: left;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 8px;
                    cursor: pointer;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .member-image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4 / 5;
                    margin: 0 auto;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #111;
                }
                
                .member-image {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                
                .member-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%);
                    transition: all 0.6s ease;
                }
                
                .team-card:hover .member-image {
                    transform: scale(1.05);
                }
                
                .team-card:hover .member-image img {
                    filter: grayscale(0%);
                }
                
                .team-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: var(--color-primary);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                
                .member-info {
                    padding-top: 1rem;
                }
                
                .member-role {
                    color: var(--color-primary);
                    display: block;
                    margin-top: 0.5rem;
                }
                
                .placeholder-avatar {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg, #111, #222);
                }
            `})]})}export{m as default};
