import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Home from './Home';
import About from './About';
import Works from './Works';
import Team from './Team';
import Collective from './Collective';
import Press from './Press';
import Contact from './Contact';

/* ─── Animated section wrapper ─── */
function ScrollSection({ id, children, direction = 'up', delay = 0 }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start 0.3'],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const variants = {
        up: { y: 80 },
        down: { y: -60 },
        left: { x: -80 },
        right: { x: 80 },
        scale: { scale: 0.92 },
        none: {},
    };

    return (
        <section id={id} ref={ref}>
            <motion.div
                initial={{ opacity: 0, ...variants[direction] }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                    duration: 0.9,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </section>
    );
}

/* ─── Decorative divider between sections ─── */
function SectionDivider({ variant = 'line' }) {
    if (variant === 'glow') {
        return (
            <div className="section-divider-wrap">
                <motion.div
                    className="divider-glow"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className="section-divider-wrap">
                <motion.div
                    className="divider-dots"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span></span><span></span><span></span>
                </motion.div>
            </div>
        );
    }

    if (variant === 'fade') {
        return (
            <div className="section-divider-wrap">
                <motion.div
                    className="divider-fade-gradient"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                />
            </div>
        );
    }

    return (
        <div className="section-divider-wrap">
            <motion.div
                className="divider-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    );
}

export default function SinglePage() {
    return (
        <div className="single-page-layout">
            <ScrollSection id="home" direction="none">
                <Home />
            </ScrollSection>

            <SectionDivider variant="glow" />

            <ScrollSection id="about" direction="up">
                <About />
            </ScrollSection>

            <SectionDivider variant="dots" />

            <ScrollSection id="portfolio" direction="left">
                <Works />
            </ScrollSection>

            <SectionDivider variant="fade" />

            <ScrollSection id="team" direction="up" delay={0.1}>
                <Team />
            </ScrollSection>

            <SectionDivider variant="glow" />

            <ScrollSection id="collective" direction="right">
                <Collective />
            </ScrollSection>

            <SectionDivider variant="dots" />

            <ScrollSection id="press" direction="up">
                <Press />
            </ScrollSection>

            <SectionDivider variant="fade" />

            <ScrollSection id="contact" direction="up" delay={0.1}>
                <Contact />
            </ScrollSection>

            <style>{`
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
            `}</style>
        </div>
    );
}
