import { useState } from 'react';

export const usePhoneCall = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const phoneNumber = '(925) 389-4584';
  const telLink = 'tel:+19253894584';

  const handleCall = () => {
    // Try the tel: link first
    const link = document.createElement('a');
    link.href = telLink;
    link.click();
    
    // Fallback: show modal after a short delay if tel: link doesn't work
    setTimeout(() => {
      // Check if the page is still focused (tel: link didn't work)
      if (document.hasFocus()) {
        setShowPhoneModal(true);
      }
    }, 500);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    }
  };

  return {
    handleCall,
    copyToClipboard,
    phoneNumber,
    showPhoneModal,
    setShowPhoneModal
  };
};