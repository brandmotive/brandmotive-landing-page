import { useRef } from 'react';
import { Filter, Target, Database, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const MarketingHighlight = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    const features = [
        { icon: Filter, title: "High-Ticket Funnels", text: "Landing pages engineered to filter for qualified, high-net-worth leads." },
        { icon: Target, title: "Algorithmic Targeting", text: "Precision Meta & Google campaigns targeting specific demographics (e.g., Doctors, Loan Seekers)." },
        { icon: Database, title: "The Unified Loop", text: "Ad data flows directly into your custom CRM, giving you real-time ROI tracking." }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // Simple animation
        tl.from(contentRef.current, { x: 50, opacity: 0, duration: 0.8, ease: "power3.out" });
        tl.from(".mark-feature", { x: 20, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.4");

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="marketing" className="py-24 bg-brand-gray border-t border-brand-navy/5 relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Visual (Funnel/Graph Graphic) */}
                <div className="order-2 md:order-1 relative h-[500px] bg-white rounded-2xl border border-brand-navy/10 overflow-hidden flex items-center justify-center shadow-lg">
                    {/* Animated Elements */}
                    <div className="absolute inset-0 bg-brand-teal/5 blur-3xl -z-10 rounded-full" />

                    <div className="relative w-full max-w-sm space-y-4">
                        {/* Simulating Funnel items */}
                        {[100, 80, 60].map((w, i) => (
                            <div key={i} className="bg-white border border-brand-navy/10 rounded-lg p-4 shadow-sm flex items-center justify-between" style={{ width: `${w}%`, marginLeft: 'auto', marginRight: 'auto' }}>
                                <div className="h-2 w-24 bg-brand-navy/10 rounded" />
                                <div className="text-xs font-mono text-brand-teal font-bold">{10000 / (i + 1)}+</div>
                            </div>
                        ))}

                        {/* Connection Lines */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-navy/10 -z-10" />

                        {/* Result Card */}
                        <div className="bg-brand-navy text-white p-6 rounded-xl shadow-xl mt-8 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-brand-teal uppercase tracking-widest mb-1">ROI</p>
                                    <h4 className="text-3xl font-bold text-white">450%</h4>
                                </div>
                                <div className="h-10 w-24 flex items-end gap-1">
                                    <div className="h-4 bg-brand-teal w-[30%]" />
                                    <div className="h-6 bg-brand-teal w-[30%]" />
                                    <div className="h-full bg-brand-teal w-[30%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div ref={contentRef} className="order-1 md:order-2 relative z-10">
                    <div className="inline-flex items-center gap-2 text-brand-orange font-mono text-sm tracking-widest mb-4">
                        <span className="w-8 h-[1px] bg-brand-orange"></span>
                        GROWTH ENGINEERING
                    </div>
                    <h2 className="mark-title text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6 leading-tight">
                        Acquisition Systems, <br />Not Just <span className="text-brand-orange">'Ads'</span>.
                    </h2>
                    <p className="mark-title text-lg text-brand-navy/70 mb-12 max-w-lg leading-relaxed">
                        Because we build the software, we can integrate marketing deeply into your operations.
                    </p>

                    <div className="space-y-8">
                        {features.map((item, index) => (
                            <div key={index} className="mark-feature flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-gray border border-brand-navy/10 flex items-center justify-center group-hover:border-brand-orange/50 transition-colors shadow-sm">
                                    <item.icon className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="text-brand-navy font-bold mb-1 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                                    <p className="text-brand-navy/60 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mark-feature mt-10 p-6 bg-white border-l-4 border-brand-orange rounded-r-lg shadow-sm">
                        <p className="text-brand-navy font-medium italic">
                            "The Loop: Ad Data <ArrowRight className="inline w-4 h-4 mx-1 text-brand-orange" /> CRM <ArrowRight className="inline w-4 h-4 mx-1 text-brand-orange" /> High-Value Patient"
                        </p>
                        <div className="mt-2 flex items-baseline gap-2">
                            <p className="text-brand-orange font-mono text-lg font-bold">4.2x</p>
                            <p className="text-xs text-brand-navy/50 uppercase tracking-widest">Efficiency Increase</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingHighlight;
