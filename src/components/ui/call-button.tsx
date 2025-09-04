import { Phone } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./button";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";

interface CallButtonProps extends VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  showIcon?: boolean;
  className?: string;
}

export const CallButton = ({ 
  children = "Call Now", 
  showIcon = true, 
  className = "",
  variant = "default",
  size = "default"
}: CallButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, use tel: link
      window.location.href = "tel:+19253894584";
    } else {
      // On desktop, try multiple fallbacks
      try {
        // Try opening system's default calling app
        window.open("tel:+19253894584", "_self");
      } catch (error) {
        // Fallback to copying number to clipboard and showing alert
        navigator.clipboard.writeText("(925) 389-4584").then(() => {
          alert("Phone number (925) 389-4584 copied to clipboard!");
        }).catch(() => {
          alert("Please call (925) 389-4584");
        });
      }
    }
  };

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href="tel:+19253894584" onClick={handleClick}>
        {showIcon && <Phone className="h-4 w-4" />}
        {children}
      </a>
    </Button>
  );
};