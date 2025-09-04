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
  const telLink = "tel:+19253894584";

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a 
        href={telLink}
        onClick={(e) => {
          console.log("CallButton clicked!", telLink);
          console.log("Event:", e);
          // Let the browser handle the tel: link naturally
        }}
      >
        {showIcon && <Phone className="h-4 w-4" />}
        {children}
      </a>
    </Button>
  );
};