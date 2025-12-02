import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-[#392D44] text-white z-50 shadow-lg border-t border-[#61338A]"
      style={{ height: '50px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 text-sm flex-1 min-w-0">
          <span className="text-base">🍪</span>
          <span className="truncate">
            We use cookies to enhance your browsing experience. By continuing to use this site, you consent to our use of cookies.
          </span>
          <Link 
            to="/privacy-policy" 
            className="text-[#D4AF37] hover:text-[#E8D5FF] underline whitespace-nowrap ml-2"
          >
            Learn more
          </Link>
        </div>
        <div className="flex items-center gap-3 ml-4">
          <button
            onClick={handleDecline}
            className="text-sm px-4 py-1.5 text-white/80 hover:text-white transition-colors whitespace-nowrap"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-sm px-4 py-1.5 bg-[#61338A] hover:bg-[#7a4ba3] text-white rounded transition-colors whitespace-nowrap font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

