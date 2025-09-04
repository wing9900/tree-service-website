import { Button, ButtonProps } from "./button";
import { Phone } from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { PhoneModal } from "./phone-modal";
import { ReactNode } from "react";

interface CallButtonProps extends Omit<ButtonProps, 'onClick' | 'asChild'> {
  children?: ReactNode;
  showIcon?: boolean;
}

export const CallButton = ({ 
  children = "Call Now", 
  showIcon = true, 
  className,
  ...props 
}: CallButtonProps) => {
  const { handleCall, copyToClipboard, phoneNumber, showPhoneModal, setShowPhoneModal } = usePhoneCall();

  return (
    <>
      <Button
        onClick={handleCall}
        className={className}
        {...props}
      >
        {showIcon && <Phone className="h-4 w-4" />}
        {children}
      </Button>
      
      <PhoneModal
        open={showPhoneModal}
        onOpenChange={setShowPhoneModal}
        phoneNumber={phoneNumber}
        onCopy={copyToClipboard}
      />
    </>
  );
};