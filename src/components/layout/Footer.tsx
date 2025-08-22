import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from "lucide-react";

const Footer = () => {
  const serviceLinks = [
    { name: "Tree Trimming & Pruning", href: "/services/tree-trimming" },
    { name: "Tree Removal", href: "/services/tree-removal" },
    { name: "Stump Grinding", href: "/services/stump-grinding" },
    { name: "Emergency Storm Response", href: "/services/emergency" },
    { name: "Land & Lot Clearing", href: "/services/land-clearing" },
    { name: "Landscaping Services", href: "/services/landscaping" },
  ];

  const serviceAreas = [
    { name: "Katy", href: "/areas/katy" },
    { name: "Sugar Land", href: "/areas/sugar-land" },
    { name: "Richmond", href: "/areas/richmond" },
    { name: "Rosenberg", href: "/areas/rosenberg" },
    { name: "Fulshear", href: "/areas/fulshear" },
    { name: "Cypress", href: "/areas/cypress" },
    { name: "Pasadena", href: "/areas/pasadena" },
    { name: "Baytown", href: "/areas/baytown" },
    { name: "Pearland", href: "/areas/pearland" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container-custom section-padding-sm">
          <div className="text-center">
            <h2 className="text-section-title mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get your free, no-obligation estimate today. Our certified arborists are standing by to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a href="tel:{{PHONE}}">
                  <Phone className="h-5 w-5" />
                  Call {"{{PHONE}}"}
                </a>
              </Button>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">{"{{COMPANY_NAME}}"}</div>
            <p className="text-primary-foreground/80 mb-6">
              Professional tree services with over 15 years of experience. Licensed, insured, and dedicated to keeping your property safe and beautiful.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                <span>ISA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4" />
                <span>5-Star Rated</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:{{PHONE}}" className="hover:underline">
                  {"{{PHONE}}"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:{{EMAIL}}" className="hover:underline">
                  {"{{EMAIL}}"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{"{{ADDRESS_LINE}}, {{CITY}}, {{STATE}} {{ZIP}}"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{"{{HOURS}}"}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/service-areas"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-block mt-2"
            >
              View All Areas →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Emergency Services</h4>
              <p className="text-sm text-primary-foreground/80 mb-3">
                24/7 emergency storm response available
              </p>
              <Button variant="cta" size="sm" asChild>
                <a href="tel:{{PHONE}}">Emergency Call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 {"{{COMPANY_NAME}}"}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/60 hover:text-primary-foreground">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;