
const TechStack = () => {
    const stack = [
        {
            category: "Core Backend",
            tools: ["Java Spring Boot", "Express.js", "Python"]
        },
        {
            category: "DevOps & Cloud",
            tools: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub"]
        },
        {
            category: "Frontend",
            tools: ["React.js", "Next.js", "Redux"]
        }
    ];

    return (
        <section id="tech" className="py-24 bg-white border-t border-brand-navy/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
                            The Enterprise Stack
                        </h2>
                        <p className="text-brand-navy/70 text-lg leading-relaxed mb-8">
                            We don't compromise on tools. We use the same battle-tested infrastructure that powers the world's largest financial and healthcare institutions.
                        </p>
                        <div className="inline-block p-4 bg-brand-gray rounded-lg border border-brand-navy/10">
                            <p className="text-brand-teal font-mono text-sm">
                                <span className="text-brand-navy/50">Security_Level:</span> BANK_GRADE_A+
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {stack.map((group, index) => (
                            <div key={index} className="bg-brand-gray border border-brand-navy/10 rounded-xl p-6 hover:border-brand-teal/30 transition-colors shadow-sm">
                                <h3 className="text-brand-navy font-bold mb-4 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.tools.map((tool, i) => (
                                        <span key={i} className="px-3 py-1 bg-white rounded text-brand-navy/70 text-sm font-mono border border-brand-navy/10 hover:text-brand-navy hover:border-brand-navy/30 transition-all cursor-default shadow-sm">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
