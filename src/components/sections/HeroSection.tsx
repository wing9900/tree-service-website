import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
const heroImage = "/lovable-uploads/f60dd1ab-5124-4ac2-ba31-ad13e87c46b8.png";
const licensedInsuredBadge = "/lovable-uploads/b6487ebe-02dc-4ea5-b3fe-aa797a7b37d1.png";
const isaArbortistBadge = "/lovable-uploads/9399cb6f-2ffd-4ab1-b2c8-5019766af479.png";
const fiveStarBadge = "/lovable-uploads/be0e589b-9094-4e4f-8107-10a3c354efc0.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Beautiful landscaped yard with mature tree and professional garden design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-slide-up">
            Professional Tree Services in{" "}
            <span className="text-orange-400">{"{{CITY}}, {{STATE}}"}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Expert tree trimming, removal, and emergency services. 
            <span className="block mt-2 font-semibold">
              Same-day estimates • Free consultations • 15+ years experience
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button variant="cta" size="xl" className="text-lg" asChild>
              <a href="tel:+19253894584">
                <Phone className="h-6 w-6" />
                Call Now
              </a>
            </Button>
            <Button variant="cta" size="xl" className="text-lg" asChild>
              <a href="/contact">
                <Calendar className="h-6 w-6" />
                Get Free Estimate
              </a>
            </Button>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <img src={licensedInsuredBadge} alt="Licensed & Insured certification badge" className="w-20 h-20 mx-auto mb-4 rounded-lg object-contain" />
              <div className="text-lg font-bold text-white mb-1">Licensed & Insured</div>
              <div className="text-white/90 text-sm">Full coverage protection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <img src={isaArbortistBadge} alt="ISA Certified Arborist badge" className="w-20 h-20 mx-auto mb-4 rounded-lg object-contain" />
              <div className="text-lg font-bold text-white mb-1">ISA Certified Arborist</div>
              <div className="text-white/90 text-sm">Professionally trained experts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <img src={fiveStarBadge} alt="5-star rating badge" className="w-20 h-20 mx-auto mb-4 rounded-lg object-contain" />
              <div className="text-lg font-bold text-white mb-1">5-Star Rated</div>
              <div className="text-white/90 text-sm">Customer satisfaction guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;