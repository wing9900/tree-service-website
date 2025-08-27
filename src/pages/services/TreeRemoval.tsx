import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Axe, Shield, Settings, FileText, Recycle, Phone, Calendar } from "lucide-react";

const TreeRemoval = () => {
  const services = [
    {
      title: "Technical Removal Specialists",
      description: "Advanced rigging experts who can safely dismantle trees piece by piece, carefully lowering each section with zero impact on your home, fences, or landscaping.",
      icon: Shield
    },
    {
      title: "Crane Service for Tree Removal", 
      description: "For massive trees or those that have fallen on structures, crane-assisted removal provides the safest and most efficient solution with skilled operators.",
      icon: Settings
    },
    {
      title: "Insurance Claim Support",
      description: "Extensive experience working with insurance companies, providing prompt professional documentation and assessment to help streamline your claim.",
      icon: FileText
    },
    {
      title: "Environmentally Responsible Disposal",
      description: "Complete cleanup with all limbs, logs, and debris chipped and hauled away. We recycle 100% of our green waste into valuable mulch right here in Houston.",
      icon: Recycle
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-form-steel/10 to-form-charcoal/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-form-steel/10 rounded-full">
                <Axe className="h-12 w-12 text-form-steel" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional Tree Removal in Houston | Adhering to ANSI Z133 Safety Standards
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Safe and efficient tree removal throughout Houston, Katy, Sugar Land, and all of Harris County. Operations executed in full compliance with ANSI Z133 safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a href="tel:{{PHONE}}">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Estimate
                </a>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Removal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                While our goal is always to preserve healthy trees, removal is often the only responsible choice to protect your home and family. A dead, diseased, or storm-damaged tree is a significant threat, especially in the Greater Houston area where severe weather can strike with little warning. Tree removal is the most hazardous aspect of arboriculture and demands qualified, insured professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Houston Tree Care Experts specializes in safe and efficient tree removal throughout Houston, Katy, Sugar Land, and all of Harris County. Our operations are meticulously planned and executed in full compliance with ANSI Z133 safety standards, the industry's benchmark for safety, ensuring your project is completed without incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Specialized Tree Removal Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We possess the advanced equipment and technical expertise to handle any tree removal, from tight urban spaces to expansive suburban lots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="hover-lift animate-fade-in bg-form-steel/5 border-l-4 border-l-form-steel" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">A Culture of Safety for Houston Homeowners</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every member of our team is thoroughly trained in ANSI Z133 safety protocols. We conduct a detailed job site safety analysis before any work begins to identify all potential hazards. This unwavering commitment to safety protects our crew, your family, and your property.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default TreeRemoval;