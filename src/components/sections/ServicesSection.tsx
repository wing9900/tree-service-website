import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TreePine, Zap, Stethoscope, Axe, TreeDeciduous, Construction, Cog } from "lucide-react";
const treeTrimmingImg = "/lovable-uploads/07703b17-ad7c-42e2-a727-4057abe7dd4d.png";
const treeRemovalImg = "/lovable-uploads/802ad6a4-82a4-43eb-9e60-79801d59f56e.png";
const stumpGrindingImg = "/lovable-uploads/87ea87c4-add1-4853-84ee-abb9073b13fc.png";
const healthManagementImg = "/lovable-uploads/36151a3f-4e2e-4504-959e-8fcd51f78514.png";
const emergencyServiceImg = "/lovable-uploads/b13aa126-a0ea-4c35-8017-163108994333.png";
const landClearingImg = "/lovable-uploads/0ed1b619-8b61-460d-b942-7a6166059bb9.png";
const ServicesSection = () => {
  const services = [{
    title: "Tree Trimming & Pruning",
    description: "Professional pruning to maintain tree health, safety, and aesthetics. Our certified arborists ensure proper technique.",
    icon: TreeDeciduous,
    image: treeTrimmingImg,
    link: "/services/tree-trimming",
    features: ["Crown Cleaning", "Crown Thinning", "Hazardous Branch Removal", "Crown Reduction"]
  }, {
    title: "Tree Removal",
    description: "Safe, efficient tree removal using advanced equipment. Complete cleanup and stump grinding available.",
    icon: Axe,
    image: treeRemovalImg,
    link: "/services/tree-removal",
    features: ["Crane services", "Complete cleanup", "Stump grinding", "Permit assistance"]
  }, {
    title: "Stump Grinding",
    description: "Professional stump removal to reclaim your yard space. All debris removed and area restored.",
    icon: Cog,
    image: stumpGrindingImg,
    link: "/services/stump-grinding",
    features: ["Below-ground grinding", "Debris removal", "Soil restoration", "Seeding available"]
  }, {
    title: "Emergency Storm Response",
    description: "24/7 emergency services for storm damage. Rapid response to secure your property and remove hazards.",
    icon: Zap,
    image: emergencyServiceImg,
    link: "/services/emergency",
    features: ["24/7 availability", "Insurance claims", "Hazard removal", "Property protection"]
  }, {
    title: "Land & Lot Clearing",
    description: "Complete land clearing for construction, development, or property maintenance projects.",
    icon: Construction,
    image: landClearingImg,
    link: "/services/land-clearing",
    features: ["Site preparation", "Selective clearing", "Debris removal", "Grading available"]
  }, {
    title: "Health and Disease Management",
    description: "Comprehensive tree health assessments and disease management to keep your trees thriving and healthy.",
    icon: Stethoscope,
    image: healthManagementImg,
    link: "/services/health-management",
    features: ["Tree Health and Risk Assessments", "Pest and Disease Diagnosis and Treatment", "Fertilization and Soil Management", "Root Zone Management"]
  }];
  return <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">Complete Tree Care Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From routine maintenance to emergency response, we provide comprehensive tree care services 
            throughout {"{{SERVICE_AREAS}}"} with professional expertise and reliable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => <Card key={service.title} className="hover-lift animate-fade-in group overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative overflow-hidden">
                <img src={service.image} alt={`${service.title} service demonstration`} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <service.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-card-title">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map(feature => <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>)}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Quote for Your Project?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Every property is unique. Our certified arborists will assess your specific needs 
            and provide a detailed, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:{{PHONE}}">
                Call for Immediate Service
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;