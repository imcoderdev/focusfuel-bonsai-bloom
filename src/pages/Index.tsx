import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import AITaskPlannerDemo from "@/components/AITaskPlannerDemo"
import GamificationSection from "@/components/GamificationSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import TechStackSection from "@/components/TechStackSection"
import FooterSection from "@/components/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AITaskPlannerDemo />
      <GamificationSection />
      <TestimonialsSection />
      <TechStackSection />
      <FooterSection />
    </div>
  );
};

export default Index;
