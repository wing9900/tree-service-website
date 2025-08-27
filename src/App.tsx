import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import TreeTrimming from "./pages/services/TreeTrimming";
import TreeRemoval from "./pages/services/TreeRemoval";
import StumpGrinding from "./pages/services/StumpGrinding";
import Emergency from "./pages/services/Emergency";
import LandClearing from "./pages/services/LandClearing";
import HealthManagement from "./pages/services/HealthManagement";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle services section scrolling
    if (location.pathname === "/" && location.hash === "#services") {
      const servicesElement = document.getElementById("services");
      if (servicesElement) {
        const headerElement = servicesElement.querySelector("h2");
        if (headerElement) {
          const headerRect = headerElement.getBoundingClientRect();
          const absoluteTop = window.pageYOffset + headerRect.top;
          window.scrollTo({ top: absoluteTop - 100, behavior: "smooth" });
        }
      }
      return;
    }
    
    // Scroll to top for all other page navigation (cross-page only)
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
