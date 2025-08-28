import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Houston = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-accent" />
                <h1 className="text-4xl lg:text-5xl font-bold">Houston, TX</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Your Trusted Tree & Landscaping Experts in Houston, TX
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At [Tree Service Company Name], we are proud to serve the vast and diverse Houston community with a full range of professional tree care solutions. From the historic live oaks of the Museum District to the tall pines of Memorial, we have a deep knowledge of Houston's unique urban forest. Our certified arborists are equipped to handle any project—from technical tree removals in tight urban spaces to comprehensive health management for your most treasured trees. We are committed to making Houston's neighborhoods safer and more beautiful through reliable service that understands our city.
                </p>
                
                <p className="text-lg">
                  Houston's climate presents unique challenges, from the threat of hurricanes and tropical storms to intense summer heat and sudden flooding. Our team is specifically trained to prepare and protect your trees against these threats, focusing on structural pruning for wind resistance and proactive health care to ensure resilience. We bring ISA-standard expertise and a commitment to protecting your property to every project, ensuring your landscape remains a source of pride and safety, no matter what the Gulf Coast weather brings.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <a href="tel:{{PHONE}}">
                    <Phone className="h-5 w-5 mr-2" />
                    Get Free Estimate
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Houston;