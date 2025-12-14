import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, Search, Lightbulb, Cog, TrendingUp, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const GrowthJourney = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const travelerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const traveler = travelerRef.current;
            const container = containerRef.current;
            if (!traveler || !container) return;

            const travelerStartRect = traveler.getBoundingClientRect();

            // Select all markers (excluding the start point if it's treated separately, 
            // but here we want to visit them all. The reference had a specific 'box' that moved.
            // We will move 'traveler' to visit 'markers'.
            const markers = gsap.utils.toArray<HTMLElement>('.journey-marker');

            const points = markers.map((marker) => {
                // We need to calculate position relative to the initial position of the traveler
                // However, getBoundingClientRect is viewport relative. 
                // We must ensure calculations happen when the layout is stable.
                const r = marker.getBoundingClientRect();

                // Calculate delta from traveler's STARTING position to marker's CENTER
                // Note: The reference logic assumes the 'box' moves from its initial CSS position.
                // We need to make sure we measure this BEFORE the animation starts shifting things.
                // ScrollTrigger will refreshing might affect this if not careful, but 
                // usually calculating in the context callback is fine.

                return {
                    x: r.left + r.width / 2 - (travelerStartRect.left + travelerStartRect.width / 2),
                    y: r.top + r.height / 2 - (travelerStartRect.top + travelerStartRect.height / 2),
                };
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top', // Start when container hits top of viewport
                    end: 'bottom bottom', // End when container bottom hits bottom
                    scrub: 1,
                    pin: false, // We won't pin the whole container, just let the traveler move through it?
                    // Actually, for a long scroll path, usually the element moves while we scroll.
                    // The reference has .main { height: 300vh }, so it's a long scroll area.
                },
            });

            tl.to(traveler, {
                motionPath: {
                    path: points,
                    curviness: 1.5,
                    autoRotate: true,
                },
                ease: 'none',
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-brand-gray overflow-hidden py-20">

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#003087 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto h-full relative">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-brand-navy text-center mb-20 sticky top-10 z-20">
                    Our Proven Growth Path
                </h2>

                {/* The Traveler (Moving Object) */}
                {/* We position it initially near the top center or wherever the first step effectively starts */}
                <div
                    ref={travelerRef}
                    className="absolute z-30 top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/50"
                >
                    <TrendingUp className="text-white w-8 h-8" />
                </div>


                {/* Markers / Waypoints */}
                {/* 1. Discovery */}
                <div className="journey-marker absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-4 h-4 bg-brand-teal rounded-full mb-2 shadow-[0_0_15px_rgba(31,169,150,0.5)]"></div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-navy/10 w-64 absolute top-8">
                        <Search className="w-6 h-6 text-brand-teal mb-2 mx-auto" />
                        <h3 className="font-bold text-brand-navy">1. Discovery</h3>
                        <p className="text-sm text-brand-navy/70">Analyze current infrastructure and gaps.</p>
                    </div>
                </div>

                {/* 2. Strategy */}
                <div className="journey-marker absolute top-[30%] left-[20%] md:left-[25%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-4 h-4 bg-brand-teal rounded-full mb-2 shadow-[0_0_15px_rgba(31,169,150,0.5)]"></div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-navy/10 w-64 absolute top-8">
                        <Lightbulb className="w-6 h-6 text-brand-teal mb-2 mx-auto" />
                        <h3 className="font-bold text-brand-navy">2. Strategy</h3>
                        <p className="text-sm text-brand-navy/70">Design a custom roadmap for growth.</p>
                    </div>
                </div>

                {/* 3. Implementation */}
                <div className="journey-marker absolute top-[50%] right-[20%] md:right-[25%] translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-4 h-4 bg-brand-teal rounded-full mb-2 shadow-[0_0_15px_rgba(31,169,150,0.5)]"></div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-navy/10 w-64 absolute top-8">
                        <Cog className="w-6 h-6 text-brand-teal mb-2 mx-auto" />
                        <h3 className="font-bold text-brand-navy">3. Implementation</h3>
                        <p className="text-sm text-brand-navy/70">Execute with engineering precision.</p>
                    </div>
                </div>

                {/* 4. Optimization */}
                <div className="journey-marker absolute top-[70%] left-[20%] md:left-[25%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-4 h-4 bg-brand-teal rounded-full mb-2 shadow-[0_0_15px_rgba(31,169,150,0.5)]"></div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-navy/10 w-64 absolute top-8">
                        <CheckCircle2 className="w-6 h-6 text-brand-teal mb-2 mx-auto" />
                        <h3 className="font-bold text-brand-navy">4. Optimization</h3>
                        <p className="text-sm text-brand-navy/70">Continuous refinement & tuning.</p>
                    </div>
                </div>

                {/* 5. Success */}
                <div className="journey-marker absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-6 h-6 bg-brand-orange rounded-full mb-2 shadow-[0_0_20px_rgba(250,190,97,0.6)] animate-pulse"></div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-orange/20 w-72 absolute top-8">
                        <Trophy className="w-8 h-8 text-brand-orange mb-2 mx-auto" />
                        <h3 className="font-bold text-xl text-brand-navy">5. Validation</h3>
                        <p className="text-sm text-brand-navy/70">Measurable ROI and market dominance.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GrowthJourney;
