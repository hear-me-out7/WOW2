import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { RefreshCw } from 'lucide-react';

export const UpdateNotification = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Check for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available
                toast({
                  title: "Update Available",
                  description: "A new version is ready. Refresh to update.",
                  action: (
                    <button
                      onClick={() => window.location.reload()}
                      className="flex items-center gap-2 px-3 py-2 bg-primary hover:bg-primary/90 text-white rounded-md text-sm font-body transition-colors"
                      aria-label="Refresh to update"
                    >
                      <RefreshCw size={16} />
                      Refresh
                    </button>
                  ),
                  duration: 10000,
                });
              }
            });
          }
        });
      });
    }
  }, [toast]);

  return null;
};
