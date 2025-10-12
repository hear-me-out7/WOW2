import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import wowLogo from '@/assets/wow_logo.webp';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'wOw OT' },
    { to: '/program', label: 'The WOW Program' },
    { to: '/consultation', label: 'Consultation' },
    { to: '/team', label: 'Meet the Team' },
    { to: '/resources', label: 'Resources' },
    { to: '/connect', label: 'Connect with us' },
  ];

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={wowLogo} 
            alt="WOW Occupational Therapy" 
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button 
              className="text-white p-2 hover:bg-white/10 transition-colors rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dark-bg border-l border-primary/30 w-[300px]">
            <nav className="flex flex-col gap-4 mt-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-body text-white text-lg uppercase tracking-wide hover:text-primary transition-colors py-2 text-center border-b border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};