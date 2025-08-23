import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to services section header if navigating to services hash
    if (location.pathname === "/" && location.hash === "#services") {
      setTimeout(() => {
        const servicesElement = document.getElementById("services");
        if (servicesElement) {
          const headerElement = servicesElement.querySelector("h2");
          if (headerElement) {
            const headerRect = headerElement.getBoundingClientRect();
            const absoluteTop = window.pageYOffset + headerRect.top;
            window.scrollTo({ top: absoluteTop - 100, behavior: "smooth" });
          }
        }
      }, 100);
      return;
    }
    
    // Scroll to top for all other page navigation
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
