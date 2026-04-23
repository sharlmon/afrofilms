import{j as e}from"./index-B2qnIJtg.js";import{S as r}from"./SEO-BqpykSab.js";const a=[{icon:"⚡",title:"Pre-Production",items:["Research","Fixing","Scripting","Brand Strategy"]},{icon:"🎥",title:"Production",items:["Directing","Cinematography","Line Producing","Sound Recording","Live Events"]},{icon:"💻",title:"Post-Production",items:["Editing","Graphics & VFX","Animation","Music Scoring","Color Grading"]}],n=[{id:"01",title:"The Terrace Kilifi",desc:"An artist-led Community Art Space and Residency along the Kilifi Creek. We provided a space for artists to create, collaborate, and showcase their work in a serene environment.",link:"https://www.terracekilifi.com",linkText:"Visit The Terrace",image:"/uploads/terrace.jpg"},{id:"02",title:"The Kilifi Creek Festival",desc:"A Film and Arts festival across 7 venues along the Kilifi Creek. Celebrating African storytelling and culture through cinema, music, and art.",link:"https://www.kilificreekfestival.com",linkText:"Visit Festival",image:"/uploads/festival.jpg",hoverImage:"/uploads/festival1.jpg"},{id:"03",title:"Refugee Girls Training",desc:"A storytelling Workshop for teenage refugee girls. As partners of 'I'll Tell You My Story', we focus on giving them the tools to tell their own stories with dignity and power.",link:"https://www.illtellyoumystory.com",linkText:"Visit Initiative",image:"/uploads/mystory.jpg"}];function d(){return e.jsxs("div",{className:"collective-page",children:[e.jsx(r,{title:"The Collective",description:"AfroFilms International — a collective of storytellers. Our expertise in production, community initiatives, and creative partnerships driving African storytelling."}),e.jsxs("div",{className:"coll-page-bg-container",children:[e.jsx("div",{className:"coll-page-bg-image"}),e.jsx("div",{className:"coll-page-bg-overlay"})]}),e.jsxs("div",{className:"coll-content-wrapper",children:[e.jsx("section",{className:"coll-hero",children:e.jsxs("div",{className:"container coll-hero-inner",children:[e.jsx("span",{className:"coll-label",children:"Who We Are"}),e.jsxs("h1",{className:"coll-hero-title",children:["The ",e.jsx("span",{className:"gold",children:"Collective."})]}),e.jsxs("p",{className:"coll-hero-lead",children:["Afrofilms extends beyond production. We build community and strengthen the industry through bold, long-term initiatives. From training and mentorship to creating spaces for artists to develop and collaborate, we invest in people as much as projects - expanding access, opportunity, ",e.jsx("br",{className:"hidden md:block"})," and sustainable creative growth."]})]})}),e.jsx("section",{className:"coll-community",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"coll-section-head",children:[e.jsx("span",{className:"coll-label",children:"Giving Back"}),e.jsxs("h2",{className:"coll-section-title",children:["Community & ",e.jsx("span",{className:"gold",children:"Industry."})]}),e.jsx("p",{className:"coll-section-desc",children:"Afrofilms engages in various community and industry projects including an Arts Space and Residency, a Film Festival and a refugee girls training program."})]}),e.jsxs("div",{className:"coll-timeline",children:[e.jsx("div",{className:"coll-timeline-line"}),n.map((l,i)=>e.jsxs("div",{className:`coll-tl-item ${i%2===1?"reverse":""}`,children:[e.jsx("div",{className:"coll-tl-number",children:l.id}),e.jsxs("div",{className:"coll-tl-content",children:[e.jsxs("span",{className:"coll-label",children:["Initiative ",l.id]}),e.jsx("h3",{className:"coll-tl-title",children:l.title}),e.jsx("p",{className:"coll-tl-desc",children:l.desc}),l.link&&e.jsxs("a",{href:l.link,target:"_blank",rel:"noopener noreferrer",className:"coll-tl-link",children:[l.linkText," ",e.jsx("span",{className:"arrow",children:"→"})]})]}),e.jsx("div",{className:"coll-tl-img-wrap",children:l.image?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"coll-tl-img",style:{backgroundImage:`url(${l.image})`}}),l.hoverImage&&e.jsx("div",{className:"coll-tl-img coll-tl-img-hover",style:{backgroundImage:`url(${l.hoverImage})`}}),e.jsx("div",{className:"coll-tl-img-overlay"})]}):e.jsx("div",{className:"coll-tl-img-placeholder",children:e.jsx("span",{children:"🎬"})})})]},i))]})]})}),e.jsx("div",{className:"coll-divider",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"coll-divider-line"})})}),e.jsx("section",{className:"coll-services",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"coll-section-head",children:[e.jsx("span",{className:"coll-label",children:"Our Expertise"}),e.jsxs("h2",{className:"coll-section-title",children:["What We ",e.jsx("span",{className:"gold",children:"Do."})]})]}),e.jsx("div",{className:"coll-cards",children:a.map((l,i)=>e.jsxs("div",{className:"coll-card",style:{animationDelay:`${i*.12}s`},children:[e.jsx("div",{className:"coll-card-icon",children:l.icon}),e.jsx("h3",{className:"coll-card-title",children:l.title}),e.jsx("ul",{className:"coll-card-list",children:l.items.map((t,o)=>e.jsx("li",{children:t},o))})]},i))})]})}),e.jsx("section",{className:"coll-cta",children:e.jsxs("div",{className:"container coll-cta-inner",children:[e.jsx("h3",{className:"coll-cta-title",children:"Be Part of the Story."}),e.jsx("button",{onClick:()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),className:"coll-cta-btn",children:"Get Involved"})]})})]}),e.jsx("style",{children:`
                /* ══════════════════════════════
                   PAGE WRAPPER
                   ══════════════════════════════ */
                .collective-page {
                    background: #050505;
                    color: #fff;
                    min-height: 100vh;
                    position: relative;
                    overflow: hidden;
                }

                .coll-page-bg-container {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .coll-page-bg-image {
                    position: absolute;
                    inset: -20px;
                    background-image: url('/uploads/collectiveA.jpg');
                    background-size: cover;
                    background-position: center;
                    filter: blur(3px);
                }
                .coll-page-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.55);
                    z-index: 1;
                }
                .coll-content-wrapper {
                    position: relative;
                    z-index: 10;
                }

                .gold { color: var(--color-primary); }

                .coll-label {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.8rem;
                    display: block;
                    margin-bottom: 0.75rem;
                }

                /* ══════════════════════════════
                   HERO
                   ══════════════════════════════ */
                .coll-hero {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    padding: 8rem 0 6rem;
                }
                .coll-hero-inner {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .coll-hero-title {
                    font-size: clamp(3.5rem, 7vw, 6rem);
                    font-family: var(--font-heading);
                    line-height: 1;
                    margin-bottom: 1.5rem;
                }
                .coll-hero-lead {
                    font-size: 1.15rem;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.8;
                    max-width: 650px;
                    margin: 0 auto;
                }

                /* ══════════════════════════════
                   SERVICES SECTION
                   ══════════════════════════════ */
                .coll-services {
                    padding: 6rem 0;
                    position: relative;
                }
                .coll-section-head {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .coll-section-title {
                    font-size: clamp(2.5rem, 4vw, 4rem);
                    font-family: var(--font-heading);
                    line-height: 1.1;
                    margin-bottom: 1rem;
                }
                .coll-section-desc {
                    font-size: 1.15rem;
                    color: rgba(255,255,255,0.65);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .coll-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .coll-card {
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px;
                    padding: 2.5rem;
                    transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
                    animation: fadeUp 0.6s ease both;
                }
                .coll-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--color-primary);
                    background: rgba(255,255,255,0.05);
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .coll-card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                .coll-card-title {
                    font-size: 1.4rem;
                    font-family: var(--font-heading);
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .coll-card-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .coll-card-list li {
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.75rem;
                    padding-left: 1.2rem;
                    position: relative;
                    font-size: 1rem;
                }
                .coll-card-list li::before {
                    content: '•';
                    color: var(--color-primary);
                    position: absolute;
                    left: 0;
                }

                /* ══════════════════════════════
                   DIVIDER
                   ══════════════════════════════ */
                .coll-divider {
                    padding: 0;
                }
                .coll-divider-line {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
                    opacity: 0.4;
                }

                /* ══════════════════════════════
                   COMMUNITY / TIMELINE
                   ══════════════════════════════ */
                .coll-community {
                    padding: 6rem 0 4rem;
                }
                .coll-timeline {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 12rem;
                }
                .coll-timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
                    transform: translateX(-50%);
                    z-index: 1;
                }

                .coll-tl-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }
                .coll-tl-item.reverse {
                    flex-direction: row-reverse;
                }
                .coll-tl-item.reverse .coll-tl-content {
                    text-align: right;
                }

                .coll-tl-number {
                    position: absolute;
                    top: -3rem;
                    font-size: 12rem;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    color: rgba(255,255,255,0.025);
                    z-index: -1;
                    line-height: 1;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: color 0.5s ease;
                    pointer-events: none;
                }
                .coll-tl-item:hover .coll-tl-number {
                    color: rgba(212,175,55,0.08);
                }

                .coll-tl-content {
                    width: 44%;
                    padding: 2.5rem;
                    background: rgba(5,5,5,0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 6px;
                    transition: transform 0.45s ease, border-color 0.45s ease;
                }
                .coll-tl-item:hover .coll-tl-content {
                    transform: translateY(-8px);
                    border-color: var(--color-primary);
                }

                .coll-tl-title {
                    font-size: 2rem;
                    line-height: 1.15;
                    margin-bottom: 1.25rem;
                    font-family: var(--font-heading);
                }
                .coll-tl-desc {
                    color: #aaa;
                    line-height: 1.7;
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                }
                .coll-tl-link {
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.85rem;
                    border-bottom: 1px solid rgba(255,255,255,0.25);
                    padding-bottom: 3px;
                    transition: all 0.3s;
                }
                .coll-tl-link:hover {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                }

                .coll-tl-img-wrap {
                    width: 44%;
                    height: 380px;
                    position: relative;
                    border-radius: 6px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.08);
                }
                .coll-tl-img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.7s cubic-bezier(0.2,0.8,0.2,1);
                    filter: grayscale(20%);
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .coll-tl-img-hover {
                    opacity: 0;
                    z-index: 1;
                    transition: opacity 0.5s ease, transform 0.7s cubic-bezier(0.2,0.8,0.2,1);
                }
                .coll-tl-item:hover .coll-tl-img {
                    transform: scale(1.08);
                    filter: grayscale(0%);
                }
                .coll-tl-item:hover .coll-tl-img-hover {
                    opacity: 1;
                }
                .coll-tl-img-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.3);
                    transition: background 0.5s;
                    z-index: 2;
                }
                .coll-tl-item:hover .coll-tl-img-overlay {
                    background: rgba(0,0,0,0);
                }
                .coll-tl-img-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.02);
                    font-size: 4rem;
                }

                /* ══════════════════════════════
                   CTA
                   ══════════════════════════════ */
                .coll-cta {
                    padding: 6rem 0 8rem;
                }
                .coll-cta-inner {
                    text-align: center;
                }
                .coll-cta-title {
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    font-family: var(--font-heading);
                    margin-bottom: 2rem;
                }
                .coll-cta-btn {
                    display: inline-block;
                    padding: 1rem 3rem;
                    background: var(--color-primary);
                    color: #000;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                .coll-cta-btn:hover {
                    background: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(212,175,55,0.3);
                }

                /* ══════════════════════════════
                   MOBILE
                   ══════════════════════════════ */
                @media (max-width: 900px) {
                    .coll-hero { min-height: 60vh; padding: 6rem 0 4rem; }
                    .coll-services, .coll-community { padding: 4rem 0; }

                    .coll-timeline { gap: 6rem; }
                    .coll-timeline-line {
                        left: 16px;
                        transform: none;
                    }
                    .coll-tl-item,
                    .coll-tl-item.reverse {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1.5rem;
                        padding-left: 2.5rem;
                    }
                    .coll-tl-content,
                    .coll-tl-item.reverse .coll-tl-content {
                        width: 100%;
                        text-align: left;
                        padding: 2rem;
                    }
                    .coll-tl-img-wrap {
                        width: 100%;
                        height: 250px;
                    }
                    .coll-tl-number {
                        left: 0.5rem;
                        top: -3rem;
                        font-size: 7rem;
                        transform: none;
                        opacity: 0.4;
                    }
                }
            `})]})}export{d as default};
