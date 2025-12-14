import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AudienceFilter from '../components/AudienceFilter';
import EngineeringHighlight from '../components/EngineeringHighlight';
import MarketingHighlight from '../components/MarketingHighlight';
import CaseStudy from '../components/CaseStudy';
import IndustryCards from '../components/IndustryCards';
import TechStack from '../components/TechStack';
import ContactForm from '../components/ContactForm';
import GrowthJourney from '../components/GrowthJourney';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="bg-brand-gray min-h-screen">
            <Navbar />
            <main>
                <HeroSection />
                <AudienceFilter />
                <EngineeringHighlight />
                <MarketingHighlight />
                <GrowthJourney />
                <CaseStudy />
                <IndustryCards />
                <TechStack />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
