import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "Product Engineering", href: "#engineering" },
        { label: "Growth Systems", href: "#marketing" },
        { label: "Case Study", href: "#work" },
        { label: "Our Stack", href: "#tech" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-brand-navy/10 py-4 shadow-sm"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-heading font-bold text-brand-navy tracking-tighter">
                    Brand<span className="text-brand-teal">Motive</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-brand-navy/70 hover:text-brand-teal transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 px-6 py-2 bg-brand-orange text-white border border-brand-orange rounded-full font-medium text-sm hover:bg-brand-orange/90 transition-all duration-300 shadow-md"
                    >
                        Executive Briefing
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-navy"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-navy/10 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium text-brand-navy/80 hover:text-brand-teal"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
