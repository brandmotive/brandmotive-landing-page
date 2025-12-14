

const IndustryCards = () => {
    const cards = [
        {
            title: "Fintech & NBFCs",
            tag: "High Security",
            desc: "Loan Origination Systems (LOS) & Borrower Acquisition.",
            color: "text-brand-teal",
            bg: "bg-brand-teal/10",
            border: "border-brand-teal/20"
        },
        {
            title: "Healthcare",
            tag: "High Compliance",
            desc: "Hospital Management Systems & Patient Flow Optimization.",
            color: "text-brand-teal",
            bg: "bg-brand-teal/10",
            border: "border-brand-teal/20"
        },
        {
            title: "Logistics",
            tag: "High Complexity",
            desc: "Fleet Tracking Microservices & Supply Chain Dashboards.",
            color: "text-brand-teal",
            bg: "bg-brand-teal/10",
            border: "border-brand-teal/20"
        },
    ];

    return (
        <section id="industries" className="py-24 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
                        Sectors We Serve
                    </h2>
                    <p className="text-brand-navy/70 max-w-2xl mx-auto">
                        We specialize in industries where data integrity is non-negotiable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="group relative p-8 bg-white border border-brand-navy/10 rounded-2xl hover:border-brand-teal/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-4 ${card.color} ${card.bg} ${card.border} border`}>
                                {card.tag}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">{card.title}</h3>
                            <p className="text-brand-navy/60 leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryCards;
