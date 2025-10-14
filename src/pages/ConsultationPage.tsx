import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import { ConsultationBooking } from '@/components/ConsultationBooking';
import consultationVirtual from '@/assets/consultation-virtual.jpg';

const ConsultationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-dark-bg to-black-bg py-16 md:py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading uppercase text-primary text-4xl md:text-6xl tracking-heading-lg text-center drop-shadow-glow">
            CONSULTATION
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Image and Intro */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="font-heading uppercase text-primary text-3xl mb-6">
                  WANNA TALK ABOUT IT?
                </h2>
                <p className="text-foreground font-body text-lg leading-relaxed">
                  We offer consultations for parents navigating ADHD challenges. Our experienced occupational therapists provide personalized guidance, practical strategies, and ongoing support to help your family thrive.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-primary/30">
                <ImageWithSkeleton
                  src={consultationVirtual}
                  alt="Parent and occupational therapist in friendly virtual consultation discussing child's needs"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-card p-8 rounded-xl border-2 border-primary/20 mb-12">
              <h3 className="font-heading uppercase text-primary text-2xl mb-6">
                WHAT TO EXPECT
              </h3>
              <div className="space-y-4 text-foreground font-body">
                <p>
                  <strong className="text-primary">• Tailored Strategies:</strong> We provide practical strategies to manage ADHD-related difficulties effectively.
                </p>
                <p>
                  <strong className="text-primary">• Education and Resources:</strong> We provide valuable insights into ADHD, its impact, and effective coping mechanisms. We equip you with resources and information to make informed decisions.
                </p>
                <p>
                  <strong className="text-primary">• Family Support:</strong> ADHD doesn't just affect the child; it impacts the entire family. Our consultations address family dynamics, helping parents and siblings better understand and support the child with ADHD.
                </p>
                <p>
                  <strong className="text-primary">• Ongoing Guidance:</strong> Our support doesn't end with the consultation. We offer ongoing guidance and follow-up sessions to track progress and adjust strategies as needed.
                </p>
              </div>
            </div>

            {/* Booking Calendar */}
            <div className="bg-card p-8 rounded-xl border-2 border-primary/30 shadow-lg mb-12">
              <h3 className="font-heading uppercase text-primary text-2xl mb-6 text-center">
                BOOK YOUR CONSULTATION
              </h3>
              <div className="mb-6 text-center">
                <p className="text-foreground font-body text-lg mb-2">
                  0.75hr virtual consultation with 2 OTs
                </p>
                <p className="font-heading text-foreground text-4xl mb-2">$200</p>
                <p className="text-foreground/80 font-body text-sm">
                  Includes comprehensive summary document with strategies and resources
                </p>
              </div>
              <ConsultationBooking />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;