import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideCTA?: boolean;
}

const Layout = ({ children, hideCTA = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer hideCTA={hideCTA} />
      
      {/* Chatbot Widget */}
      <script 
        src="https://widgets.leadconnectorhq.com/loader.js"  
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="68b7c42cb832cc195dbea55a"   
      />
    </div>
  );
};

export default Layout;