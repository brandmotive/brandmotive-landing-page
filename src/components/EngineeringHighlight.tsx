import { useRef } from 'react';
import { Shield, Server, GitMerge } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EngineeringHighlight = () => {
    const sectionRef = useRef(null);

    const features = [
        { icon: Server, title: "Secure Backend Architecture", text: "Spring Boot (Java) & Express.js ensure type-safety, speed, and massive concurrency." },
        { icon: Shield, title: "Auto-Scaling Infrastructure", text: "Docker & Kubernetes orchestration means your CRM handles 100 or 1 million users automatically." },
        { icon: GitMerge, title: "Zero-Downtime Updates", text: "Automated Jenkins CI/CD pipelines allow us to deploy new features without stopping your business." }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        tl.from(".eng-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
            .from(".eng-feature", { y: 30, opacity: 0, stagger: 0.2, duration: 0.6, ease: "power3.out" }, "-=0.4");
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="engineering" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Grid (Light Theme) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="order-2 md:order-1 relative z-10">
                    <div className="inline-flex items-center gap-2 text-brand-teal font-mono text-sm tracking-widest mb-4">
                        <span className="w-8 h-[1px] bg-brand-teal"></span>
                        PRODUCT ENGINEERING
                    </div>
                    <h2 className="eng-title text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6 leading-tight">
                        Built for <span className="text-brand-teal">Compliance</span> <br />& Scale.
                    </h2>
                    <p className="eng-title text-lg text-brand-navy/70 mb-12 max-w-lg leading-relaxed">
                        High-value industries cannot afford downtime or data leaks. We build with the same tools used by Fortune 500 banks.
                    </p>

                    <div className="space-y-8">
                        {features.map((item, index) => (
                            <div key={index} className="eng-feature flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-gray border border-brand-navy/10 flex items-center justify-center group-hover:border-brand-teal/50 transition-colors shadow-sm">
                                    <item.icon className="w-6 h-6 text-brand-teal" />
                                </div>
                                <div>
                                    <h3 className="text-brand-navy font-bold mb-1 group-hover:text-brand-teal transition-colors">{item.title}</h3>
                                    <p className="text-brand-navy/60 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual (Abstract Code/Server Graphic) */}
                <div className="order-1 md:order-2 relative h-[500px] bg-brand-gray/30 rounded-2xl border border-brand-navy/5 overflow-hidden flex items-center justify-center shadow-inner">
                    <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,transparent)]" />

                    {/* Floating Code Snippet Card */}
                    <div className="relative z-10 bg-white p-6 rounded-xl border border-brand-navy/10 shadow-xl max-w-sm transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="space-y-2 font-mono text-xs text-brand-navy/80">
                            <p><span className="text-purple-600">@Service</span></p>
                            <p><span className="text-blue-600">public class</span> <span className="text-yellow-600">SecureTransaction</span> {'{'}</p>
                            <p className="pl-4"><span className="text-purple-600">@Transactional</span></p>
                            <p className="pl-4"><span className="text-blue-600">public void</span> <span className="text-yellow-600">process</span>() {'{'}</p>
                            <p className="pl-8 text-gray-400">// Bank-grade logic here</p>
                            <p className="pl-4">{'}'}</p>
                            <p>{'}'}</p>
                        </div>
                        <div className="w-2 h-4 bg-brand-teal animate-pulse mt-1 inline-block" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EngineeringHighlight;
