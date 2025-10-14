import { useState, useEffect } from 'react';
import { MapLocation } from '@/components/MapLocation';
import { Button } from '@/components/ui/button';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import { ProgramEnrollmentForm } from '@/components/ProgramEnrollmentForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { api } from '@/services/api';
import type { Program } from '@/services/api';
import programActivity from '@/assets/program-activity.jpg';

const ProgramPage = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [program, setProgram] = useState<Program | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Program details - hardcoded for now, will fetch from API
  const programDetails = {
    programId: 'wow-program-2025',
    name: 'The WOW Program',
    price: 1500,
    depositAmount: 300,
    installmentAmount: 200,
    installmentCount: 6,
    capacity: 12,
    currentEnrollment: 0,
  };

  useEffect(() => {
    // Fetch program details from backend
    const fetchProgram = async () => {
      try {
        const programs = await api.get<Program[]>('/programs?type=group');
        if (programs && programs.length > 0) {
          setProgram(programs[0]);
        }
      } catch (error) {
        console.error('Failed to fetch program:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgram();
  }, []);

  const spotsRemaining = program 
    ? program.capacity - program.currentEnrollment 
    : programDetails.capacity - programDetails.currentEnrollment;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-dark-bg to-black-bg py-16 md:py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading uppercase text-primary text-4xl md:text-6xl tracking-heading-lg text-center drop-shadow-glow">
            THE WOW PROGRAM
          </h1>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            {/* Left - Overview */}
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden border-2 border-primary/30">
                <ImageWithSkeleton
                  src={programActivity}
                  alt="Children working together in a group activity during WOW Program session"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              
              <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl tracking-heading-lg">
                Overview
              </h2>

              <div className="space-y-6 text-foreground font-body text-lg leading-relaxed">
                <p>
                  At WOW occupational therapy, we offer a revolutionary and HIGHLY interactive intervention for CHILDREN. Our unique team approach to child and family services helps children with ADHD understand their challenges and develop personalized strategies to ignite learning. Kids learn BEST when they feel like they can be themselves.
                </p>

                <p>
                  ADHD characteristics can often present as obstacles on the road to school and life success. As occupational therapists, our WHAT and HOW are all based on the child's goals and how they want to feel about themselves and what they love to learn in life.
                </p>

                <p>
                  Our WOW Program is designed to target the unique and individual needs of ADHD children to learn, build confidence in a peer environment, develop strategies for challenging and rewarding their executive function skills and learn play.
                </p>

                <p>
                  We are offering an ongoing therapy where kids can strengthen skills, build relationships and successfully prepare emotionally, socially, executively and motorically for their school and life.
                </p>
              </div>
            </div>

            {/* Right - Details */}
            <div className="space-y-8">
              <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl tracking-heading-lg">
                Details
              </h2>

              {/* Pricing Card */}
              <div className="bg-card p-8 rounded-xl border-2 border-primary/30 shadow-lg space-y-6">
                <div>
                  <p className="font-heading text-primary text-2xl mb-2">6-week WOW Program:</p>
                  <p className="font-heading text-foreground text-4xl md:text-5xl">$1500</p>
                  {spotsRemaining <= 5 && spotsRemaining > 0 && (
                    <p className="text-orange-500 font-body text-lg mt-2">
                      ⚠️ Only {spotsRemaining} spots remaining!
                    </p>
                  )}
                  {spotsRemaining === 0 && (
                    <p className="text-destructive font-body text-lg mt-2">
                      ❌ Program is full
                    </p>
                  )}
                  {spotsRemaining > 5 && (
                    <p className="text-primary font-body text-lg mt-2">
                      ✓ {spotsRemaining} spots available
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-foreground font-body">
                  <p className="text-lg">
                    <strong className="text-primary">Fall Term 2025:</strong><br />
                    Thursdays, September 10 - October 21, 2025
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Winter Term 2026:</strong><br />
                    Thursdays, January 8 - February 19, 2026
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Spring Term 2026:</strong><br />
                    Thursdays, April 2 - May 14, 2026
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Time:</strong><br />
                    5:30 - 6:30 PM
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Location:</strong><br />
                    West Hillhurst Community Association (WHCA)<br />
                    1940 6 Ave NW, Calgary, Alberta T2N 0W3
                  </p>
                </div>

                <div className="space-y-3 text-foreground font-body pt-4">
                  <p className="font-heading text-primary text-xl">Program Includes:</p>
                  <ul className="space-y-2 text-base list-disc list-inside">
                    <li>1 x personalized introductory document</li>
                    <li>6 x 60 min group sessions</li>
                    <li>1 x 45 min parent OT consultation</li>
                    <li>1 x OT summary document with strategies and resources</li>
                    <li>1 x $30 value pizza party for each child</li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-heading uppercase text-primary text-xl mb-4">Find Us Here:</h3>
                <MapLocation
                  lat={51.0577}
                  lng={-114.0849}
                  name="West Hillhurst Community Association"
                  address="1940 6 Ave NW, Calgary, AB T2N 0W3"
                  className="h-[300px]"
                />
              </div>

              {/* How to Get Started */}
              <div className="bg-card p-8 rounded-xl border-2 border-primary/30 shadow-lg space-y-4">
                <h3 className="font-heading uppercase text-primary text-2xl mb-4">How to Get Started</h3>
                <div className="space-y-3 text-foreground font-body">
                  <p className="text-lg">
                    <strong className="text-primary">Email us for inquiries:</strong><br />
                    <a href="mailto:wowoccupationaltherapy@gmail.com" className="hover:text-primary transition-colors">wowoccupationaltherapy@gmail.com</a>
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">Limited Spots Available</strong><br />
                    Small groups ensure personalized attention
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">First Come, First Serve</strong><br />
                    Register early to secure your child's spot
                  </p>
                  <p className="text-lg">
                    <strong className="text-primary">$300 Non-Refundable Deposit</strong><br />
                    Required to secure your spot in the program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-dark-bg py-16 md:py-24 border-y-4 border-primary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading uppercase text-white text-3xl md:text-5xl tracking-heading-lg text-center mb-12">
              What to Expect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Personalized Plan */}
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20 h-full flex flex-col">
                <h3 className="font-heading text-primary text-xl md:text-2xl mb-3">1. Personalized Plan</h3>
                <p className="text-foreground font-body leading-relaxed flex-grow">
                  We start with an initial parent intake to understand your child's unique needs, strengths, and goals. This helps us create a tailored approach for their success.
                </p>
              </div>

              {/* Dynamic Team Sessions */}
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20 h-full flex flex-col">
                <h3 className="font-heading text-primary text-xl md:text-2xl mb-3">2. Dynamic Team Sessions</h3>
                <p className="text-foreground font-body leading-relaxed flex-grow">
                  Interactive, engaging group sessions where kids learn through play, build connections with peers, and practice real-world strategies in a supportive environment.
                </p>
              </div>

              {/* Expert Therapists */}
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20 h-full flex flex-col">
                <h3 className="font-heading text-primary text-xl md:text-2xl mb-3">3. Guided By Expert Therapists</h3>
                <p className="text-foreground font-body leading-relaxed flex-grow">
                  Led by Lindsay and Erin, each with over 20 years of pediatric occupational therapy experience, specializing in ADHD and executive function development.
                </p>
              </div>

              {/* Ongoing Communication */}
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20 h-full flex flex-col">
                <h3 className="font-heading text-primary text-xl md:text-2xl mb-3">4. Ongoing Communication & Progress Reporting</h3>
                <p className="text-foreground font-body leading-relaxed flex-grow">
                  Weekly progress reports keep you informed about your child's development, breakthroughs, and areas of focus throughout the program.
                </p>
              </div>

              {/* Parent Consultation */}
              <div className="bg-card p-6 rounded-lg border-2 border-primary/20 md:col-span-2 h-full flex flex-col">
                <h3 className="font-heading text-primary text-xl md:text-2xl mb-3">5. Parent Summary Consultation</h3>
                <p className="text-foreground font-body leading-relaxed flex-grow">
                  At the program's end, we provide a comprehensive consultation summarizing your child's progress, strategies that work best for them, and actionable recommendations for continued success at home and school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-black-bg to-dark-bg py-16 md:py-24 border-t-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white font-body text-lg mb-8">
            {spotsRemaining > 0 
              ? 'Secure your child\'s spot in the program today!' 
              : 'Join our waitlist for the next session'}
          </p>
          {spotsRemaining > 0 ? (
            <Button 
              onClick={() => setIsEnrollmentOpen(true)}
              className="bg-primary hover:bg-primary-hover text-lg px-8 py-6 uppercase font-heading"
            >
              ENROLL NOW
            </Button>
          ) : (
            <Button asChild className="bg-primary hover:bg-primary-hover text-lg px-8 py-6 uppercase font-heading">
              <a href="mailto:wowoccupationaltherapy@gmail.com">JOIN WAITLIST</a>
            </Button>
          )}
        </div>
      </section>

      {/* Enrollment Dialog */}
      <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-primary text-2xl">
              Enroll in The WOW Program
            </DialogTitle>
            <DialogDescription>
              Complete the form below to enroll in our 6-week WOW Program. We'll contact you within 24 hours to confirm your enrollment and answer any questions.
            </DialogDescription>
          </DialogHeader>
          <ProgramEnrollmentForm
            programId={program?.programId || programDetails.programId}
            programName={program?.name || programDetails.name}
            programPrice={program?.price || programDetails.price}
            depositAmount={programDetails.depositAmount}
            installmentAmount={programDetails.installmentAmount}
            installmentCount={programDetails.installmentCount}
            onEnrollmentComplete={() => {
              setIsEnrollmentOpen(false);
              // Refresh program data to update spots remaining
              window.location.reload();
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProgramPage;