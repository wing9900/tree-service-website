import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Phone, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

interface PhoneModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phoneNumber: string;
  onCopy: () => Promise<boolean>;
}

export const PhoneModal = ({ open, onOpenChange, phoneNumber, onCopy }: PhoneModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call Our Business
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Dial this number to reach us:
            </p>
            <p className="text-3xl font-bold text-primary">{phoneNumber}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Number
                </>
              )}
            </Button>
            <Button
              variant="default"
              className="flex-1"
              asChild
            >
              <a href="tel:+19253894584">
                <Phone className="h-4 w-4" />
                Try Call Again
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};