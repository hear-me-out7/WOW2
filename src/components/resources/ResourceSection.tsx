import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResourceSectionProps {
  title?: string;
  children: ReactNode;
  bgColor?: 'black' | 'dark' | 'primary';
  className?: string;
}

export const ResourceSection = ({
  title,
  children,
  bgColor = 'black',
  className
}: ResourceSectionProps) => {
  const bgClasses = {
    black: 'bg-black-bg',
    dark: 'bg-dark-bg',
    primary: 'bg-gradient-to-b from-black-bg to-dark-bg',
  };

  const titleColorClasses = {
    black: 'text-white',
    dark: 'text-white',
    primary: 'text-primary',
  };

  return (
    <section className={cn(bgClasses[bgColor], 'py-12 md:py-16', className)}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {title && (
            <h2 className={cn("font-heading uppercase text-2xl md:text-3xl tracking-heading mb-8", titleColorClasses[bgColor])}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
