import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'stickyHeaderDismissed';
const SCROLL_THRESHOLD = 400; // Show after scrolling 400px
const EXCLUDED_PATHS = ['/consultation', '/program', '/connect'];

export default function StickyHeaderCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user has dismissed this banner before
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Don't show on conversion pages
    if (EXCLUDED_PATHS.includes(location.pathname)) {
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsVisible(scrolled && !isDismissed);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  // Don't render if on excluded page
  if (EXCLUDED_PATHS.includes(location.pathname)) {
    return null;
  }

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 bg-primary text-primary-foreground shadow-lg animate-in slide-in-from-top duration-300"
      role="banner"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Calendar className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium sm:text-base">
              Ready to get started? Book your free consultation today!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="flex-shrink-0"
            >
              <Link to="/consultation">Book Now</Link>
            </Button>

            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
