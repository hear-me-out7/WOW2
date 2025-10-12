import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Brain, Users, Heart, Star } from 'lucide-react';
import heroKids from '@/assets/hero-kids.jpg';

const Index = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The WOW Program has been transformative for our family. Our son has gained so much confidence and his executive function skills have improved dramatically.',
      rating: 5,
    },
    {
      name: 'Michael T.',
      text: 'Lindsay and Erin are amazing! They truly understand ADHD and know how to connect with kids. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      text: 'The consultation was incredibly helpful. We learned practical strategies that we could implement immediately at home.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black-bg">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-dark-bg via-black-bg to-dark-bg py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img 
            src={heroKids}
            alt="Diverse group of confident children aged 6-12 with ADHD showing success and joy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-bg/40 via-black-bg/50 to-black-bg/90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading uppercase text-primary text-5xl md:text-7xl tracking-heading-lg mb-6 drop-shadow-glow animate-fade-in">
              EMPOWERING KIDS WITH ADHD
            </h1>
            <p className="text-white font-body text-xl md:text-2xl mb-8 leading-relaxed">
              Revolutionary occupational therapy helping children understand their challenges and develop personalized strategies to ignite learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8 py-6 uppercase font-heading shadow-glow">
                <Link to="/program">Explore The WOW Program</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 uppercase font-heading">
                <Link to="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About WOW OT */}
      <section className="bg-black-bg py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading uppercase text-primary text-3xl md:text-5xl tracking-heading-lg mb-8">
              WOW OCCUPATIONAL THERAPY
            </h2>
            <div className="space-y-6 text-white/90 font-body text-lg md:text-xl leading-relaxed">
              <p>
                We're Lindsay and Erin, two passionate occupational therapists dedicated to helping children with ADHD discover their unique strengths and develop the skills they need to thrive.
              </p>
              <p>
                Our mission is simple: <span className="text-primary font-semibold">empower kids to understand their ADHD</span> and give them practical, personalized strategies that work in real life—at school, at home, and with friends.
              </p>
              <p>
                What makes us different? We don't just treat symptoms. We teach kids <span className="text-primary font-semibold">how to advocate for themselves</span>, build genuine confidence, and turn their challenges into opportunities for growth.
              </p>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 uppercase font-heading">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About ADHD */}
      <section className="bg-dark-bg py-16 md:py-24 border-y-4 border-primary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl tracking-heading-lg text-center mb-12">
              UNDERSTANDING ADHD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <Card className="bg-black-bg/50 border-2 border-primary/20 hover:border-primary/40 transition-all h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-primary text-xl mb-3">Executive Function</h3>
                  <p className="text-white/80 font-body">
                    Planning, organization, and time management skills
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black-bg/50 border-2 border-primary/20 hover:border-primary/40 transition-all h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-primary text-xl mb-3">Social Skills</h3>
                  <p className="text-white/80 font-body">
                    Building relationships and emotional regulation
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black-bg/50 border-2 border-primary/20 hover:border-primary/40 transition-all h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-primary text-xl mb-3">Self-Confidence</h3>
                  <p className="text-white/80 font-body">
                    Empowering kids to believe in themselves
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-black-bg py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl tracking-heading-lg text-center mb-12">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            <Card className="bg-dark-bg/50 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="font-heading uppercase text-primary text-2xl mb-4">
                  The WOW Program
                </h3>
                <p className="text-white font-body mb-4 leading-relaxed flex-grow">
                  A 6-week interactive program designed for children with ADHD. Build confidence, develop strategies, and learn with peers.
                </p>
                <p className="text-primary font-heading text-3xl mb-4">$1500</p>
                <Button asChild className="w-full bg-primary hover:bg-primary-hover uppercase">
                  <Link to="/program">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-bg/50 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="font-heading uppercase text-primary text-2xl mb-4">
                  Virtual Consultation
                </h3>
                <p className="text-white font-body mb-4 leading-relaxed flex-grow">
                  0.75hr consultation with 2 OTs, plus a comprehensive summary document with strategies and resources.
                </p>
                <p className="text-primary font-heading text-3xl mb-4">$200</p>
                <Button asChild className="w-full bg-primary hover:bg-primary-hover uppercase">
                  <Link to="/consultation">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark-bg py-16 md:py-24 border-t-4 border-primary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl tracking-heading-lg text-center mb-12">
            WHAT PARENTS SAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black-bg/50 border-2 border-primary/20 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-white font-body italic mb-4 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  <p className="text-primary font-heading">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black-bg py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-white font-body text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how WOW occupational therapy can transform your child's life
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-lg px-10 py-6 uppercase font-heading shadow-glow-lg">
            <Link to="/connect">CONTACT US NOW</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;