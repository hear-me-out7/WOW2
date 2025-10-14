import { FileText, Brain, Users, Heart, Target } from 'lucide-react';
import { ResourceBreadcrumb } from '@/components/resources/ResourceBreadcrumb';
import { ResourceHero } from '@/components/resources/ResourceHero';
import { ResourceSection } from '@/components/resources/ResourceSection';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { PageTransition } from '@/components/PageTransition';
import ResourceStickyCtaSidebar from '@/components/ResourceStickyCtaSidebar';
import ResourceInlineCta from '@/components/ResourceInlineCta';
import ResourceEndCta from '@/components/ResourceEndCta';
import ResourceDownloadGate from '@/components/ResourceDownloadGate';
import RelatedResourcesUpsell from '@/components/RelatedResourcesUpsell';

const AdhdAndOtPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ResourceBreadcrumb resourceTitle="ADHD & Occupational Therapy" />

        <ResourceHero
          title="ADHD & Occupational Therapy"
          icon={FileText}
          description="Understanding how occupational therapy supports children with ADHD in developing the skills they need to thrive"
        />

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main Content */}
            <div>
              {/* Download Gate */}
              <ResourceDownloadGate
                resourceTitle="ADHD & OT Guide"
                resourceDescription="Get this comprehensive guide as a PDF for easy reference and sharing with your child's school team."
                magnetId="adhd-guide"
                className="mb-8"
              />

              {/* Introduction */}
              <ResourceSection bgColor="dark">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6">
              What is ADHD?
            </h2>
            <p>
              Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects how children think, learn, and interact with the world around them. It's not about a lack of intelligence or willpower—it's about differences in how the brain processes information and regulates attention, impulses, and activity levels.
            </p>
            <p>
              ADHD typically involves challenges in three main areas: inattention (difficulty focusing and staying on task), hyperactivity (excess physical movement and restlessness), and impulsivity (acting without thinking through consequences). However, every child with ADHD is unique, and these characteristics can look very different from one child to another.
            </p>
            <p>
              What many people don't realize is that ADHD also brings incredible strengths. Children with ADHD are often creative, energetic, passionate about their interests, and capable of thinking outside the box in remarkable ways. At WOW Occupational Therapy, we believe in building on these strengths while developing strategies to navigate the challenges.
            </p>
          </div>
        </ResourceSection>

        {/* How OT Helps */}
        <ResourceSection bgColor="black">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-white font-body text-lg leading-relaxed">
              <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading">
                How Occupational Therapy Helps
              </h2>
              <p>
                Occupational therapy takes a unique approach to supporting children with ADHD. While medication can help manage symptoms and other therapies focus on behavior or emotions, occupational therapy focuses on the practical, everyday skills children need to participate fully in life—at home, at school, with friends, and in the community.
              </p>
              <p>
                OT is all about "occupations"—not jobs, but the meaningful activities that occupy our time and give our lives purpose. For children, these occupations include getting dressed, completing homework, playing with friends, participating in sports, managing emotions during challenging moments, and developing independence in daily routines.
              </p>
              <p>
                Occupational therapists are experts in understanding how sensory processing, motor skills, executive functions, and environmental factors all work together to either support or challenge a child's success. We look at the whole child—their strengths, interests, challenges, environment, and goals—and create personalized strategies that actually work in real life.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border-2 border-primary/30">
              <h3 className="font-heading uppercase text-primary text-xl mb-4">
                Why Choose OT for ADHD?
              </h3>
              <ul className="space-y-3 text-foreground/80 font-body">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Develops practical, real-world strategies for daily challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Addresses sensory processing and regulation needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Builds executive function skills like planning and organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Strengthens motor skills and body awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Supports emotional regulation and social skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Focuses on strengths and builds confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </ResourceSection>

        {/* Inline CTA 1 */}
        <ResourceInlineCta
          variant="consultation"
          message="Wondering if OT is right for your child? Book a free consultation to discuss your child's unique needs and how we can help."
        />

        {/* Areas OT Addresses */}
        <ResourceSection bgColor="dark" title="Areas Occupational Therapy Addresses">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ResourceCard icon={Brain} title="Executive Functioning">
              <p>
                Executive functions are the mental skills we use to plan, organize, remember instructions, and manage our time and attention. Children with ADHD often struggle with these "brain management" skills. OTs help develop strategies for breaking down tasks, using visual supports, creating routines, and building organizational systems that work for each child's unique brain.
              </p>
            </ResourceCard>

            <ResourceCard icon={Users} title="School Participation">
              <p>
                School can be particularly challenging for children with ADHD—sitting still, following multi-step directions, staying organized, completing homework, and managing transitions throughout the day. OTs work on strategies for attention and focus, sensory tools to support classroom participation, organizational systems, and self-advocacy skills so children can ask for what they need.
              </p>
            </ResourceCard>

            <ResourceCard icon={Heart} title="Emotional Regulation">
              <p>
                ADHD doesn't just affect attention—it also impacts emotional regulation. Children with ADHD may experience bigger emotions, have difficulty calming down, or struggle with frustration tolerance. OT addresses the sensory and physical components of emotional regulation, teaching children to recognize their body's signals and use strategies like movement breaks, breathing techniques, and sensory tools to manage their emotions.
              </p>
            </ResourceCard>

            <ResourceCard icon={Target} title="Daily Living Skills">
              <p>
                Getting ready for school, completing bedtime routines, managing personal hygiene, keeping track of belongings—these daily tasks require attention, planning, and organization. OTs help children develop independence in these areas through task analysis, visual schedules, environmental modifications, and practice strategies that build confidence and capability.
              </p>
            </ResourceCard>
          </div>

          <div className="space-y-6 text-white font-body text-lg leading-relaxed mt-8">
            <h3 className="font-heading uppercase text-white text-xl">
              Social Participation
            </h3>
            <p>
              Making and keeping friends, reading social cues, managing the give-and-take of play, and participating in group activities can be difficult for children with ADHD. Impulsivity might lead to interrupting, hyperactivity can make it hard to engage in quiet activities with peers, and inattention might mean missing important social information. Occupational therapists help children develop social skills through guided play experiences, social stories, peer interaction practice, and strategies for managing the sensory and emotional aspects of social situations.
            </p>
          </div>
        </ResourceSection>

        {/* The WOW Approach */}
        <ResourceSection bgColor="black">
          <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 shadow-glow">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6 text-center">
              The WOW Approach
            </h2>
            <div className="space-y-6 text-white font-body text-lg leading-relaxed">
              <p>
                At WOW Occupational Therapy, we don't believe in "fixing" children with ADHD—because they're not broken! Instead, we're passionate about empowering kids to understand their unique brains, recognize their incredible strengths, and develop personalized strategies that help them shine.
              </p>
              <p>
                With over 20 years of combined experience working with children with ADHD, Lindsay and Erin have seen firsthand how the right support at the right time can transform a child's confidence and capability. We use a strengths-based, child-centered approach that respects each child's individuality while building the skills they need for success.
              </p>
              <p>
                Our therapy is highly interactive and engaging—because kids learn best when they're having fun and feel like they can be themselves. We create a safe space where children can practice new skills, make mistakes, learn from them, and celebrate victories (big and small). We also work closely with parents, providing guidance and strategies you can use at home to support your child's growth.
              </p>
              <p className="text-primary font-semibold text-xl">
                Every child with ADHD has the potential to thrive. Our job is to help unlock that potential.
              </p>
            </div>
          </div>
        </ResourceSection>

        {/* Inline CTA 2 */}
        <ResourceInlineCta
          variant="program"
          message="Ready for structured, long-term support? Our 6-week WOW Program has helped 200+ families see real transformation."
        />

        {/* When to Seek Help */}
        <ResourceSection bgColor="dark">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-white font-body text-lg leading-relaxed">
              <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading">
                When to Consider Occupational Therapy
              </h2>
              <p>
                You might consider occupational therapy for your child if they're experiencing challenges that are impacting their daily life, self-esteem, or ability to participate in activities they enjoy. This might look like:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Difficulty completing morning or bedtime routines independently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Struggles with homework, organization, or following through on tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Frequent emotional outbursts or difficulty calming down</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Challenges making or keeping friends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sensory sensitivities affecting daily activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Low self-esteem or reluctance to try new things</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 text-white font-body text-lg leading-relaxed">
              <h3 className="font-heading uppercase text-white text-xl">
                What to Expect
              </h3>
              <p>
                Occupational therapy for ADHD is collaborative, goal-focused, and individualized. We start by understanding your child's unique strengths, challenges, interests, and goals through assessment and conversation with both you and your child.
              </p>
              <p>
                From there, we create a personalized therapy plan that targets the specific areas where your child needs support. Therapy sessions are active and engaging—children learn through play, practice, and real-world activities that are meaningful to them.
              </p>
              <p>
                You'll receive regular updates on your child's progress, strategies to practice at home, and guidance on how to support their development. Our goal is to build skills and confidence that carry over into your child's everyday life, helping them succeed at home, school, and beyond.
              </p>
              <p>
                Most importantly, we partner with you and your child every step of the way, celebrating progress and adjusting our approach as your child grows and their needs evolve.
              </p>
            </div>
          </div>
        </ResourceSection>

              {/* Related Resources */}
              <RelatedResourcesUpsell
                resources={[
                  {
                    title: 'Executive Functioning Skills',
                    description: 'Learn strategies to help your child with planning, organization, and task management',
                    link: '/resources/executive-functioning',
                    icon: 'brain',
                  },
                  {
                    title: 'Sensory & Motor Development',
                    description: 'Understanding how sensory processing and motor skills impact daily activities',
                    link: '/resources/sensory-motor',
                    icon: 'target',
                  },
                  {
                    title: 'Social & Emotional Growth',
                    description: 'Building emotional regulation and social skills for better peer relationships',
                    link: '/resources/social-emotional',
                    icon: 'heart',
                  },
                ]}
                className="mb-8"
              />

              {/* End CTA */}
              <ResourceEndCta />
            </div>

            {/* Sticky Sidebar */}
            <ResourceStickyCtaSidebar />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdhdAndOtPage;
