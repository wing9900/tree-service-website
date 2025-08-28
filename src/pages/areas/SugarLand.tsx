import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SugarLand = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-accent" />
                <h1 className="text-4xl lg:text-5xl font-bold">Sugar Land, TX</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Expert Arborist Services in Sugar Land, TX
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At [Tree Service Company Name], we provide top-tier tree services for the meticulously planned communities of Sugar Land. We recognize that homeowners here hold their properties to the highest standard, and we are committed to delivering tree care that meets and exceeds those expectations. Our certified arborists specialize in services from artful pruning to complex removals, always mindful of HOA guidelines and the pristine aesthetic that defines Sugar Land. We are your trusted partners in maintaining a beautiful, safe, and valuable landscape.
                </p>
                
                <p className="text-lg">
                  The health of the mature oaks and pecans that grace Sugar Land is paramount. Our team focuses on preservation through proactive health assessments and disease management, ensuring these magnificent trees continue to thrive. We understand the importance of a flawless appearance, and our work is performed with precision and a commitment to perfect cleanup, ensuring your property remains a standout in one of Texas's most beautiful suburbs.
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

export default SugarLand;