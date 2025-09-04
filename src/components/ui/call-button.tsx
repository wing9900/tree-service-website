import { Phone } from "lucide-react";
import { ReactNode } from "react";

interface CallButtonProps {
  children?: ReactNode;
  showIcon?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent" | "cta";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

export const CallButton = ({ 
  children = "Call Now", 
  showIcon = true, 
  className = "",
  variant = "default",
  size = "default"
}: CallButtonProps) => {
  const phoneNumber = "(925) 389-4584";
  const telLink = "tel:+19253894584";

  // Map variant to CSS classes
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    cta: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg"
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    xl: "h-14 rounded-xl px-10 text-lg",
    icon: "h-10 w-10"
  };

  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  return (
    <a
      href={telLink}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      {children}
    </a>
  );
};