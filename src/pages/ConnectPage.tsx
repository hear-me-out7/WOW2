import { MapLocation } from '@/components/MapLocation';
import { ContactForm } from '@/components/ContactForm';
import { Facebook, Instagram } from 'lucide-react';

const ConnectPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-dark-bg to-black-bg py-16 md:py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading uppercase text-primary text-4xl md:text-6xl tracking-heading-lg text-center drop-shadow-glow">
            CONNECT WITH US
          </h1>
        </div>
      </section>

      {/* Wanna Be Social */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading uppercase text-primary text-3xl mb-8">
            WANNA BE SOCIAL?
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.facebook.com/wowoccupationaltherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Facebook"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110 shadow-lg">
                <Facebook className="text-black group-hover:text-white" size={32} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/wow_occupationaltherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Instagram"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110 shadow-lg">
                <Instagram className="text-black group-hover:text-white" size={32} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-dark-bg py-16 md:py-24 border-t-4 border-primary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading uppercase text-white text-3xl mb-4 text-center">
              CONTACT US
            </h2>
            <p className="text-white font-body text-lg mb-8 text-center">
              Drop us a line!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-heading uppercase text-foreground text-2xl mb-4">
                WOW ADHD
              </h3>
              <p className="text-foreground/80 font-body text-lg">
                1940 6 Avenue NW, Calgary, Alberta T2N 0W3, Canada
              </p>
            </div>
            <MapLocation
              lat={51.0577}
              lng={-114.0849}
              name="WOW ADHD Occupational Therapy"
              address="1940 6 Avenue NW, Calgary, AB T2N 0W3"
              className="h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;