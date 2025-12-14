import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
    return (
        <section id="contact" className="py-24 bg-brand-gray border-t border-brand-navy/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                        Scale Your Operations
                    </h2>
                    <p className="text-brand-navy/70 text-lg">
                        We take on a limited number of high-compliance projects per quarter.
                    </p>
                </div>

                <form className="bg-white border border-brand-navy/10 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy/80">Founder Name</label>
                            <input type="text" className="w-full bg-brand-gray/50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-teal/50 transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy/80">Company Name</label>
                            <input type="text" className="w-full bg-brand-gray/50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-teal/50 transition-colors" placeholder="Acme Inc." />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy/80">Years in Business</label>
                            <select className="w-full bg-brand-gray/50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-teal/50 transition-colors appearance-none">
                                <option>3+ Years</option>
                                <option>1-3 Years</option>
                                <option>0-1 Years</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy/80">Primary Need</label>
                            <select className="w-full bg-brand-gray/50 border border-brand-navy/10 rounded-lg px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-teal/50 transition-colors appearance-none">
                                <option>Build Platform (Tech)</option>
                                <option>Acquire Customers (Growth)</option>
                                <option>Both (Full Partner)</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-brand-orange text-white font-bold text-lg py-4 rounded-lg hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
                        Request Executive Briefing
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-brand-navy/50 text-xs mt-4">
                        Strict NDA will be signed before technical discovery.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
