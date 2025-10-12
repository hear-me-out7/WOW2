import { LucideIcon } from 'lucide-react';

interface ResourceHeroProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const ResourceHero = ({ title, icon: Icon, description }: ResourceHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-dark-bg to-black-bg py-12 md:py-16 border-b-4 border-primary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Icon className="text-primary" size={48} />
          </div>
          <h1 className="font-heading uppercase text-primary text-4xl md:text-5xl tracking-heading-lg mb-4 drop-shadow-glow">
            {title}
          </h1>
          <p className="text-white/90 font-body text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
