import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  highlight?: boolean;
  className?: string;
}

export const ResourceCard = ({
  icon: Icon,
  title,
  children,
  highlight = false,
  className
}: ResourceCardProps) => {
  return (
    <div
      className={cn(
        'bg-card p-6 md:p-8 rounded-xl border-2 transition-all',
        highlight
          ? 'border-primary/40 shadow-glow hover:border-primary/60'
          : 'border-primary/20 hover:border-primary/30',
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Icon className="text-primary" size={24} />
        </div>
      )}
      <h3 className="font-heading uppercase text-primary text-xl mb-3">
        {title}
      </h3>
      <div className="text-foreground font-body leading-relaxed">
        {children}
      </div>
    </div>
  );
};
