import { ArrowUpRight, BarChart3, Users } from 'lucide-react';

const CaseStudy = () => {
    return (
        <section id="work" className="py-24 bg-brand-gray border-t border-brand-navy/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-xs font-mono tracking-wide mb-4">
                        LIVE DEPLOYMENT
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                        Proven Impact: Healthcare
                    </h2>
                    <p className="text-brand-navy/70 max-w-2xl mx-auto">
                        How we transformed a regional hospital into a digital powerhouse.
                    </p>
                </div>

                {/* Case Study Card */}
                <div className="bg-white border border-brand-navy/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                    <div className="grid md:grid-cols-2">
                        {/* Text Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-between">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-navy mb-2">Multi-Specialty Hospital</h3>
                                    <p className="text-brand-navy/60 text-sm">Operational 3+ Years • 200+ Beds</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-brand-gray p-6 rounded-xl border border-brand-navy/5">
                                        <p className="text-brand-navy/50 text-xs font-mono mb-2 uppercase">Challenge</p>
                                        <p className="text-brand-navy/80">Manual paper records and stagnant patient growth. Disconnected marketing efforts.</p>
                                    </div>
                                    <div className="bg-brand-orange/10 p-6 rounded-xl border border-brand-orange/20">
                                        <p className="text-brand-orange text-xs font-mono mb-2 uppercase">Solution</p>
                                        <p className="text-brand-navy font-medium">Microservices-based Hospital CRM + Local Patient Acquisition Funnel.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-3xl font-bold text-brand-navy">100%</h4>
                                        <p className="text-brand-navy/60 text-sm">Digital Operations</p>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-brand-orange">+40%</h4>
                                        <p className="text-brand-navy/60 text-sm">Appointments</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-brand-navy/10">
                                <a href="#" className="inline-flex items-center text-brand-navy font-bold hover:text-brand-orange transition-colors">
                                    Read Full Case Study <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Visual Content (Dashboard Mockup) */}
                        <div className="bg-brand-gray/50 p-8 md:p-12 relative flex items-center justify-center min-h-[400px] border-l border-brand-navy/5">
                            {/* Abstract Dashboard UI */}
                            <div className="relative w-full aspect-video bg-white border border-brand-navy/10 rounded-lg shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Header */}
                                <div className="h-10 bg-brand-gray border-b border-brand-navy/5 flex items-center px-4 gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>
                                    <div className="h-4 w-32 bg-brand-navy/5 rounded-full" />
                                </div>
                                {/* Body */}
                                <div className="p-4 grid grid-cols-3 gap-4 h-full">
                                    {/* Sidebar */}
                                    <div className="col-span-1 space-y-2">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="h-8 bg-brand-navy/5 rounded w-full" />
                                        ))}
                                    </div>
                                    {/* Main */}
                                    <div className="col-span-2 space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex-1 h-24 bg-brand-orange/10 border border-brand-orange/20 rounded p-3">
                                                <Users className="w-6 h-6 text-brand-orange mb-2" />
                                                <div className="h-2 w-12 bg-brand-orange/30 rounded" />
                                            </div>
                                            <div className="flex-1 h-24 bg-brand-teal/10 border border-brand-teal/20 rounded p-3">
                                                <BarChart3 className="w-6 h-6 text-brand-teal mb-2" />
                                                <div className="h-2 w-12 bg-brand-teal/30 rounded" />
                                            </div>
                                        </div>
                                        <div className="h-40 bg-brand-navy/5 rounded border border-brand-navy/5 flex items-end justify-between p-4 gap-2">
                                            {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                                                <div key={i} className="w-full bg-brand-orange/60 rounded-t hover:bg-brand-orange transition-colors" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
