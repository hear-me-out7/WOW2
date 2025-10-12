import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) return;

    // Check if already dismissed
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) return;

    // Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(userAgent);
    const android = /android/.test(userAgent);

    setIsIOS(ios);
    setIsAndroid(android);

    // Show prompt after 3 seconds
    const timer = setTimeout(() => {
      if (ios || android) {
        setShowPrompt(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 md:bottom-4 left-4 right-4 z-50 animate-fade-in">
      <div className="bg-dark-bg border-2 border-primary/30 rounded-lg p-4 shadow-glow-lg max-w-md mx-auto">
        <button
          onClick={handleDismiss}
          aria-label="Dismiss install prompt"
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Download className="text-primary" size={20} />
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading text-white text-lg mb-1">
              Install WOW ADHD
            </h3>
            <p className="text-white/80 font-body text-sm mb-3">
              {isIOS && 'Tap the share button and select "Add to Home Screen"'}
              {isAndroid && 'Tap the menu button and select "Install app"'}
            </p>
            
            <Button
              onClick={handleDismiss}
              variant="outline"
              size="sm"
              className="bg-primary/10 border-primary/30 text-white hover:bg-primary/20"
            >
              Got it
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
