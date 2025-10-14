import { useState, useEffect } from 'react';
import { X, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      console.log('[PWA] App is already installed');
      return;
    }

    // Check if already dismissed
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      console.log('[PWA] Install prompt was previously dismissed');
      return;
    }

    // Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(userAgent);
    const android = /android/.test(userAgent);
    const isChrome = /chrome/.test(userAgent);
    const isMobile = ios || android;

    setIsIOS(ios);
    setIsAndroid(android);

    console.log('[PWA] Platform detected:', { ios, android, isChrome, isMobile });

    // Listen for the beforeinstallprompt event (Chrome, Edge, Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('[PWA] beforeinstallprompt event fired!');
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show prompt after 3 seconds for mobile users (or desktop Chrome users)
    const shouldShowPrompt = isMobile || isChrome;
    if (shouldShowPrompt) {
      console.log('[PWA] Will show install prompt in 3 seconds');
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      console.log('[PWA] Triggering native install prompt');
      try {
        // Show the install prompt
        await deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;

        console.log('[PWA] User choice:', choiceResult.outcome);

        if (choiceResult.outcome === 'accepted') {
          toast({
            title: "App Installing",
            description: "WOW ADHD is being added to your home screen!",
          });
        }

        // Clear the deferred prompt
        setDeferredPrompt(null);
        setShowPrompt(false);
        localStorage.setItem('pwa-install-dismissed', 'true');
      } catch (error) {
        console.error('[PWA] Install prompt error:', error);
      }
    } else {
      // Fallback: Show instructions
      console.log('[PWA] No deferred prompt available, showing fallback instructions');
      toast({
        title: "Install from Browser Menu",
        description: isAndroid
          ? "Tap the menu (⋮) and select 'Install app' or 'Add to Home screen'"
          : "Use your browser's menu to install this app",
        duration: 8000,
      });
    }
  };

  const handleDismiss = () => {
    console.log('[PWA] Install prompt dismissed by user');
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 md:bottom-4 left-4 right-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-br from-dark-bg via-dark-bg to-primary/5 border-2 border-primary/40 rounded-lg p-5 shadow-glow-lg max-w-md mx-auto backdrop-blur-sm">
        <button
          onClick={handleDismiss}
          aria-label="Dismiss install prompt"
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 animate-pulse">
            <Sparkles className="text-primary" size={24} />
          </div>

          <div className="flex-1">
            <h3 className="font-heading text-white text-xl mb-2">
              Install WOW ADHD App
            </h3>

            {isIOS ? (
              <>
                <p className="text-white/90 font-body text-sm mb-3 leading-relaxed">
                  To install: Tap the <span className="font-semibold">Share</span> button{' '}
                  <span className="inline-block mx-1">↗️</span> and select{' '}
                  <span className="font-semibold">"Add to Home Screen"</span>
                </p>
                <Button
                  onClick={handleDismiss}
                  variant="outline"
                  size="sm"
                  className="bg-primary/10 border-primary/30 text-white hover:bg-primary/20"
                >
                  Got it
                </Button>
              </>
            ) : (
              <>
                <p className="text-white/90 font-body text-sm mb-4 leading-relaxed">
                  Get quick access, work offline, and enjoy a better experience!
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleInstall}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
                  >
                    <Download size={16} className="mr-2" />
                    {deferredPrompt ? 'Install Now' : 'Show Install Instructions'}
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    Maybe Later
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
