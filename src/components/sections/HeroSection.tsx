import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Award, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-tree-service.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional tree service crew trimming trees with safety equipment in suburban neighborhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <div className="trust-badge bg-white/10 backdrop-blur-sm text-white border-white/20">
              <Shield className="h-4 w-4" />
              <span>Licensed & Insured</span>
            </div>
            <div className="trust-badge bg-white/10 backdrop-blur-sm text-white border-white/20">
              <Award className="h-4 w-4" />
              <span>ISA Certified Arborists</span>
            </div>
            <div className="trust-badge bg-white/10 backdrop-blur-sm text-white border-white/20">
              <Star className="h-4 w-4" />
              <span>5-Star Rated</span>
            </div>
            <div className="trust-badge bg-white/10 backdrop-blur-sm text-white border-white/20">
              <Clock className="h-4 w-4" />
              <span>24/7 Emergency</span>
            </div>
          </div>

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
              <a href="tel:{{PHONE}}">
                <Phone className="h-6 w-6" />
                Call Now: {"{{PHONE}}"}
              </a>
            </Button>
            <Button variant="hero" size="xl" className="text-lg" asChild>
              <a href="/contact">
                <Calendar className="h-6 w-6" />
                Get Free Estimate
              </a>
            </Button>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">Same Day</div>
              <div className="text-white/90">Emergency Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">Free</div>
              <div className="text-white/90">Estimates & Consultations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-white/90">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="text-center">
          <div className="text-sm mb-2">Scroll to learn more</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;