import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, BookOpen, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/program', icon: Calendar, label: 'Program' },
    { to: '/team', icon: Users, label: 'Team' },
    { to: '/resources', icon: BookOpen, label: 'Resources' },
    { to: '/connect', icon: Mail, label: 'Connect' },
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-dark-bg/95 backdrop-blur-md border-t border-primary/30 md:hidden z-40 pb-safe"
      aria-label="Mobile navigation"
    >
      <div className="flex justify-around items-center py-2 safe-bottom">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg active:scale-95",
                isActive 
                  ? "text-primary scale-105" 
                  : "text-gray-400 hover:text-white"
              )}
            >
              <Icon size={20} className={isActive ? "drop-shadow-glow" : ""} />
              <span className="text-xs font-body">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};