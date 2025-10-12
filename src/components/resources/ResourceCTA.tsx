import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const ResourceCTA = () => {
  return (
    <section className="bg-gradient-to-b from-black-bg to-dark-bg py-16 md:py-24 border-t-4 border-primary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white font-body text-lg md:text-xl mb-8 leading-relaxed">
            Discover how WOW Occupational Therapy can help your child unlock their full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-hover text-lg px-8 py-6 uppercase font-heading shadow-glow"
            >
              <Link to="/program">Explore The WOW Program</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 uppercase font-heading"
            >
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
