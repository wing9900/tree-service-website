import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Calendar, MapPin } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => {
    // If we have a hash in the URL, only hash-based navigation should be active
    if (location.hash) {
      return path === `/${location.hash}`;
    }
    // If no hash, check normal path matching
    if (path.startsWith('/#')) {
      return false; // Hash-based paths are not active when there's no hash
    }
    return location.pathname === path;
  };
  const navigationItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Services",
    href: "/#services"
  }, {
    name: "Gallery",
    href: "/gallery"
  }, {
    name: "Areas We Serve",
    href: "/service-areas"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+19253894584" className="hover:underline">
                (925) 389-4584
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{"{{CITY}}, {{STATE}}"}</span>
            </div>
            <div className="text-xs">
              Licensed & Insured • Emergency Services Available 24/7
            </div>
          </div>
          <div className="ml-auto">
            
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3"
              onClick={(e) => {
                // If already on home page, scroll to top
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <div className="text-2xl font-bold text-primary">
                {"{{COMPANY_NAME}}"}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(item => {
                if (item.href === "/#services") {
                  return (
                    <button 
                      key={item.name} 
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== '/') {
                          navigate('/#services');
                        } else {
                          const servicesElement = document.getElementById('services');
                          if (servicesElement) {
                            const headerElement = servicesElement.querySelector("h2");
                            if (headerElement) {
                              const headerRect = headerElement.getBoundingClientRect();
                              const absoluteTop = window.pageYOffset + headerRect.top;
                              window.scrollTo({ top: absoluteTop - 100, behavior: "smooth" });
                            }
                          }
                        }
                      }}
                      className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    onClick={(e) => {
                      // If already on this page, scroll to top
                      if (location.pathname === item.href) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <CallButton variant="cta" size="sm">
                <Phone className="h-4 w-4" />
                Call Now
              </CallButton>
              <Button variant="cta" size="sm" asChild>
                <Link 
                  to="/contact"
                  onClick={(e) => {
                    // If already on contact page, scroll to top
                    if (location.pathname === '/contact') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-300">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map(item => {
                    if (item.href === "/#services") {
                      return (
                        <button 
                          key={item.name} 
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            if (location.pathname !== '/') {
                              navigate('/#services');
                            } else {
                              const servicesElement = document.getElementById('services');
                              if (servicesElement) {
                                const headerElement = servicesElement.querySelector("h2");
                                if (headerElement) {
                                  const headerRect = headerElement.getBoundingClientRect();
                                  const absoluteTop = window.pageYOffset + headerRect.top;
                                  window.scrollTo({ top: absoluteTop - 100, behavior: "smooth" });
                                }
                              }
                            }
                          }}
                          className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}
                        >
                          {item.name}
                        </button>
                      );
                    }
                    return (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        onClick={(e) => {
                          setIsOpen(false);
                          // If already on this page, scroll to top
                          if (location.pathname === item.href) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }} 
                        className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  <div className="pt-4 border-t space-y-3">
                    <CallButton variant="cta" className="w-full">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </CallButton>
                    <Button variant="cta" className="w-full" asChild>
                      <Link 
                        to="/contact"
                        onClick={(e) => {
                          setIsOpen(false);
                          // If already on contact page, scroll to top
                          if (location.pathname === '/contact') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                      >
                        <Calendar className="h-4 w-4" />
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Sticky CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-strong">
        <div className="flex">
          <CallButton variant="cta" className="flex-1 rounded-none h-14">
            <Phone className="h-5 w-5" />
            Call Now
          </CallButton>
          <Button variant="cta" className="flex-1 rounded-none h-14" asChild>
            <Link 
              to="/contact"
              onClick={(e) => {
                // If already on contact page, scroll to top
                if (location.pathname === '/contact') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Calendar className="h-5 w-5" />
              Get Quote
            </Link>
          </Button>
        </div>
      </div>
    </>;
};
export default Header;