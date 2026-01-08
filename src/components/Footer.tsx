
const Footer = () => {
    return (
        <footer className="bg-brand-navy py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="block">
                        <img src="/logo.png" alt="Brandmotive" className="h-8 w-auto brightness-0 invert" />
                    </div>

                    <p className="text-gray-400 text-sm">
                        © 2025 Brandmotive. Engineering Growth for the Enterprise.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
