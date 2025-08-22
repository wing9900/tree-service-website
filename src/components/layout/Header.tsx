import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Calendar, MapPin } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navigationItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Services",
    href: "#services"
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
              <a href="tel:{{PHONE}}" className="hover:underline">
                {"{{PHONE}}"}
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
            <Link to="/" className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-primary">
                {"{{COMPANY_NAME}}"}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}>
                  {item.name}
                </Link>)}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="cta" size="sm" asChild>
                <a href="tel:{{PHONE}}">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="cta" size="sm" asChild>
                <Link to="/contact">
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
                  {navigationItems.map(item => <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}>
                      {item.name}
                    </Link>)}
                  
                  <div className="pt-4 border-t space-y-3">
                    <Button variant="cta" className="w-full" asChild>
                      <a href="tel:{{PHONE}}">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="cta" className="w-full" asChild>
                      <Link to="/contact">
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
          <Button variant="cta" className="flex-1 rounded-none h-14" asChild>
            <a href="tel:{{PHONE}}">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button variant="cta" className="flex-1 rounded-none h-14" asChild>
            <Link to="/contact">
              <Calendar className="h-5 w-5" />
              Get Quote
            </Link>
          </Button>
        </div>
      </div>
    </>;
};
export default Header;