import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from "lucide-react";

const Footer = ({ hideCTA = false }: { hideCTA?: boolean }) => {
  const serviceLinks = [
    { name: "Tree Trimming & Pruning", href: "/services/tree-trimming" },
    { name: "Tree Removal", href: "/services/tree-removal" },
    { name: "Stump Grinding", href: "/services/stump-grinding" },
    { name: "Emergency Storm Response", href: "/services/emergency" },
    { name: "Land & Lot Clearing", href: "/services/land-clearing" },
    { name: "Health and Disease Management", href: "/services/health-management" },
  ];

  const serviceAreas = [
    { name: "Houston", href: "/areas/houston" },
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
      {!hideCTA && (
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
      )}

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
              
              {/* Social Media Links */}
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <div className="text-sm font-semibold mb-3">Follow Us</div>
                <div className="flex gap-3">
                  <a href="{{FACEBOOK_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="{{INSTAGRAM_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297l-.272-.272-.408.816c-.272.544-.816.816-1.36.816-.544 0-1.088-.272-1.36-.816L.907 14.419c-.272-.544-.272-1.088 0-1.632l.816-1.632c.272-.544.816-.816 1.36-.816.544 0 1.088.272 1.36.816l.408.816.272-.272c.878-.807 2.029-1.297 3.326-1.297 2.594 0 4.623 2.029 4.623 4.623s-2.029 4.623-4.623 4.623zm7.347-1.297l-.408-.816-.272.272c-.878.807-2.029 1.297-3.326 1.297-2.594 0-4.623-2.029-4.623-4.623s2.029-4.623 4.623-4.623c1.297 0 2.448.49 3.326 1.297l.272.272.408-.816c.272-.544.816-.816 1.36-.816.544 0 1.088.272 1.36.816l.816 1.632c.272.544.272 1.088 0 1.632l-.816 1.632c-.272.544-.816.816-1.36.816-.544 0-1.088-.272-1.36-.816z"/>
                    </svg>
                  </a>
                  <a href="{{TWITTER_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="{{LINKEDIN_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="{{YELP_URL}}" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Yelp">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.111 18.226c-.141.969-2.119 1.482-3.413 1.482-4.091 0-7.703-2.508-7.703-6.566 0-1.191.207-2.313.582-3.371.133-.374.279-.742.436-1.104C8.55 6.374 6.474 4.953 3.907 4.953c-1.296 0-3.274.513-3.415 1.482C.351 7.404.911 8.378 1.733 8.378c.411 0 .789-.154 1.094-.426.291-.259.666-.518 1.124-.518.426 0 .816.232 1.079.637.275.422.42.926.42 1.456 0 .684-.244 1.31-.69 1.759-.48.482-1.146.744-1.834.744-.688 0-1.354-.262-1.834-.744-.446-.449-.69-1.075-.69-1.759 0-.53.145-1.034.42-1.456.263-.405.653-.637 1.079-.637.458 0 .833.259 1.124.518.305.272.683.426 1.094.426.822 0 1.382-.974 1.241-1.943C3.219 4.466 1.241 3.953-.053 3.953S-3.327 4.466-3.468 5.435c-.141.969.419 1.943 1.241 1.943.411 0 .789-.154 1.094-.426.291-.259.666-.518 1.124-.518.426 0 .816.232 1.079.637.275.422.42.926.42 1.456 0 .684-.244 1.31-.69 1.759-.48.482-1.146.744-1.834.744-.688 0-1.354-.262-1.834-.744-.446-.449-.69-1.075-.69-1.759 0-.53.145-1.034.42-1.456.263-.405.653-.637 1.079-.637.458 0 .833.259 1.124.518.305.272.683.426 1.094.426.822 0 1.382-.974 1.241-1.943"/>
                    </svg>
                  </a>
                </div>
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