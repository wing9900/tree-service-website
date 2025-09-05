import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function GlobalWidgetLoader() {
  useEffect(() => {
    // ✅ Prevent duplicate script injection
    if (!document.querySelector("#gohighlevel-widget-script")) {
      const script = document.createElement("script");
      script.id = "gohighlevel-widget-script";
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", "68b7c42cb832cc195dbea55a");
      script.async = true;
      document.body.appendChild(script);
    }

    // ✅ Inject CSS fix for mobile repositioning
    if (!document.querySelector("#gohighlevel-widget-style")) {
      const style = document.createElement("style");
      style.id = "gohighlevel-widget-style";
      style.innerHTML = `
        @media screen and (max-width: 768px) {
          .hl-widget-container,
          iframe[src*="leadconnectorhq"],
          #GHL_widget,
          [id^="GHL"] {
            right: 20px !important;
            bottom: 100px !important;
            z-index: 9999 !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalWidgetLoader />
    <App />
  </>
);
