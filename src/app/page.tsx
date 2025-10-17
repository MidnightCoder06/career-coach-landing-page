import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import CTASection from "@/components/sections/CTASection";
import BreakIntoTechSection from "@/components/sections/BreakIntoTechSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="problem">
          <ProblemSection />
        </section>
        <section id="solution">
          <SolutionSection />
        </section>
        <CTASection />
        <PortfolioSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}