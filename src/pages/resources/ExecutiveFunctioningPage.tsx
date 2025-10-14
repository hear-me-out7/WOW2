import { BookOpen, ListChecks, Calendar, FolderKanban, Brain, Eye, Gauge, Shuffle } from 'lucide-react';
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

const ExecutiveFunctioningPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ResourceBreadcrumb resourceTitle="Executive Functioning" />

        <ResourceHero
          title="Executive Functioning"
          icon={BookOpen}
          description="Strategies to improve planning, organization, time management, and other essential brain management skills"
        />

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main Content */}
            <div>
              {/* Download Gate */}
              <ResourceDownloadGate
                resourceTitle="Executive Function Strategies Guide"
                resourceDescription="Download this comprehensive guide with practical strategies for improving planning, organization, and time management skills."
                magnetId="executive-function-tips"
                className="mb-8"
              />

        {/* Introduction */}
        <ResourceSection bgColor="dark">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6">
              What is Executive Functioning?
            </h2>
            <p>
              Think of executive functions as the "CEO" of your child's brain—the management system that helps them plan, organize, remember, and complete tasks. These mental skills allow us to set goals, make plans, follow through on those plans, manage our time, control our impulses, and adjust when things don't go as expected.
            </p>
            <p>
              Executive functions develop gradually throughout childhood and into early adulthood, but children with ADHD often experience significant delays in this development—sometimes lagging several years behind their peers. This isn't about intelligence or effort; it's about how the ADHD brain develops and processes information.
            </p>
            <p>
              The good news? Executive function skills can be taught, practiced, and strengthened. With the right strategies, supports, and understanding, children with ADHD can develop these crucial skills and learn to work with their unique brain wiring rather than against it.
            </p>
          </div>
        </ResourceSection>

        {/* ADHD Connection */}
        <ResourceSection bgColor="black">
          <div className="bg-card p-8 md:p-12 rounded-xl border-2 border-primary/30">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
              ADHD and Executive Function Challenges
            </h2>
            <div className="space-y-6 text-foreground font-body text-lg leading-relaxed">
              <p>
                Executive function challenges are at the core of ADHD. While many people think ADHD is primarily about attention, it's really about managing attention, emotions, actions, and time. Children with ADHD know what they need to do—the challenge is actually doing it when they need to do it.
              </p>
              <p>
                This can look like starting homework but never finishing it, forgetting to turn in completed assignments, struggling to get ready for school on time despite reminders, having difficulty keeping track of belongings, or becoming overwhelmed by multi-step tasks. These aren't choices or laziness—they're the result of executive function differences in the brain.
              </p>
              <p>
                Understanding that these challenges are neurological, not behavioral, helps us approach them with empathy and develop strategies that actually support how the ADHD brain works best.
              </p>
            </div>
          </div>
        </ResourceSection>

        {/* Inline CTA 1 */}
        <ResourceInlineCta
          variant="consultation"
          message="Struggling with executive function challenges? Let's create a personalized plan to help your child develop these crucial skills."
        />

        {/* The 8 Executive Functions */}
        <ResourceSection bgColor="dark" title="The 8 Key Executive Function Skills">
          <div className="space-y-4 mb-8 text-white font-body text-lg">
            <p>
              Research identifies eight core executive function skills that work together to help us navigate daily life. Let's explore each one and how occupational therapy can help strengthen these skills in children with ADHD.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ResourceCard icon={ListChecks} title="1. Task Initiation" highlight>
              <p className="mb-3">
                <strong>What it is:</strong> The ability to begin a task without excessive procrastination. This means moving from thinking about doing something to actually starting it.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Children with ADHD often struggle with getting started, especially on tasks that aren't immediately interesting or rewarding. They might need multiple reminders, seem unmotivated, or get "stuck" before beginning.
              </p>
              <p>
                <strong>Strategies that help:</strong> Break tasks into smaller first steps, use timers or countdowns to create urgency, establish consistent start routines, provide immediate rewards for starting, reduce distractions before beginning, and practice "just start for 5 minutes" techniques.
              </p>
            </ResourceCard>

            <ResourceCard icon={FolderKanban} title="2. Planning & Prioritization">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to create a roadmap to reach a goal and decide what's most important to do first.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Planning multiple steps ahead is challenging. Everything might feel equally important (or equally unimportant), making it hard to know where to start or what order to do things in.
              </p>
              <p>
                <strong>Strategies that help:</strong> Use visual planning tools like checklists and flowcharts, teach backward planning (start with the end goal), practice categorizing tasks by importance, use color-coding systems, break long-term projects into weekly mini-goals, and provide planning templates.
              </p>
            </ResourceCard>

            <ResourceCard icon={FolderKanban} title="3. Organization">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to arrange information, materials, and spaces in systematic ways.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Keeping track of belongings, papers, and information is difficult. Backpacks become "black holes," desks are cluttered, and important items get lost regularly.
              </p>
              <p>
                <strong>Strategies that help:</strong> Implement simple organizational systems with clear homes for everything, use clear bins and labels, establish packing/unpacking routines, minimize the amount of stuff to organize, use accordion folders with color tabs, take photos of organized spaces as reminders, and schedule regular "reset" times.
              </p>
            </ResourceCard>

            <ResourceCard icon={Calendar} title="4. Time Management">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to estimate how long tasks take, manage time effectively, and meet deadlines.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Children with ADHD often have "time blindness"—difficulty sensing how much time has passed or how much time they need. Five minutes and fifty minutes can feel the same.
              </p>
              <p>
                <strong>Strategies that help:</strong> Make time visible with visual timers and clocks, practice time estimation and then check accuracy, build in buffer time for everything, use alarms and reminders, create time awareness through activities like "beat the timer" games, and establish consistent daily rhythms.
              </p>
            </ResourceCard>

            <ResourceCard icon={Brain} title="5. Working Memory">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to hold information in mind while using it to complete a task.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Keeping multi-step directions in mind, remembering what you went to get, or holding the first part of a math problem in your head while solving the second part can all be challenging.
              </p>
              <p>
                <strong>Strategies that help:</strong> Write everything down immediately, use visual reminders and posted instructions, break directions into single steps, repeat back what was heard, use memory strategies like chunking and visualization, minimize multitasking, and create external memory supports like checklists and cheat sheets.
              </p>
            </ResourceCard>

            <ResourceCard icon={Eye} title="6. Self-Monitoring">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to observe and evaluate your own performance and behavior.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> It's hard to notice when you're off-task, speaking too loudly, invading someone's personal space, or not following expectations—not because of not caring, but because of reduced self-awareness in the moment.
              </p>
              <p>
                <strong>Strategies that help:</strong> Use self-monitoring checklists, practice checking in with "How am I doing?" prompts, video recording for feedback, create visual cues in the environment, use apps with self-tracking features, and establish check-in routines throughout tasks.
              </p>
            </ResourceCard>

            <ResourceCard icon={Gauge} title="7. Impulse Control">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to think before acting and resist urges or temptations.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Acting or speaking without thinking through consequences is common. The thought and action happen almost simultaneously, leading to interrupting, grabbing things, or making impulsive decisions.
              </p>
              <p>
                <strong>Strategies that help:</strong> Teach "stop and think" scripts, use physical strategies like sitting on hands or counting to three, role-play situations and practice responses, implement reward systems for impulse control, remove temptations from the environment, and practice delay strategies like "wait 10 seconds before answering."
              </p>
            </ResourceCard>

            <ResourceCard icon={Shuffle} title="8. Cognitive Flexibility">
              <p className="mb-3">
                <strong>What it is:</strong> The ability to adjust to change, see things from different perspectives, and revise plans when needed.
              </p>
              <p className="mb-3">
                <strong>How ADHD affects it:</strong> Transitions are hard. When plans change unexpectedly or something doesn't work, it can lead to frustration, meltdowns, or rigid insistence on the original plan.
              </p>
              <p>
                <strong>Strategies that help:</strong> Prepare for transitions with warnings and timers, teach flexibility language like "Plan B," practice problem-solving with "what if" scenarios, validate frustration while modeling flexibility, use visual schedules that can be adjusted, and celebrate successful adaptations.
              </p>
            </ResourceCard>
          </div>
        </ResourceSection>

        {/* Inline CTA 2 */}
        <ResourceInlineCta
          variant="program"
          message="Our WOW Program provides structured support for building executive function skills that last a lifetime."
        />

        {/* Practical Strategies */}
        <ResourceSection bgColor="black" title="Practical Strategies for Home">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed">
            <p>
              Supporting executive function development at home doesn't require expensive tools or complicated systems. Here are practical strategies families can implement right away:
            </p>

            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading uppercase text-primary text-xl mb-4">
                Create Predictable Routines
              </h3>
              <p className="text-foreground">
                Routines reduce the executive function load by making activities automatic. Create visual routine charts for morning, after-school, and bedtime. Practice these routines consistently until they become habits. The more automatic the routine, the less executive function it requires.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading uppercase text-primary text-xl mb-4">
                Use Visual Supports
              </h3>
              <p className="text-foreground">
                Make abstract concepts concrete. Use visual schedules, checklists, step-by-step pictorial instructions, and color-coding systems. Visual supports reduce the working memory load and provide external organization when internal organization is challenging.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading uppercase text-primary text-xl mb-4">
                Build in External Structure
              </h3>
              <p className="text-foreground">
                Since internal structure is developing, provide external structure. This includes physical organization systems, timers and alarms, consistent spaces for specific activities, and clear expectations posted where they can be seen.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading uppercase text-primary text-xl mb-4">
                Practice Skills During Calm Times
              </h3>
              <p className="text-foreground">
                Executive function skills are best learned when stress is low. Practice planning, organizing, and problem-solving during calm moments, not in the heat of the moment when these skills are most challenged.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading uppercase text-primary text-xl mb-4">
                Celebrate Effort and Progress
              </h3>
              <p className="text-foreground">
                Executive function development takes time. Celebrate small wins—starting a task on time, remembering to bring home materials, successfully using a new strategy. Recognition and positive feedback strengthen these developing skills.
              </p>
            </div>
          </div>
        </ResourceSection>

        {/* Working with OT */}
        <ResourceSection bgColor="dark">
          <div className="bg-gradient-to-b from-black-bg to-dark-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 shadow-glow">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6 text-center">
              How Occupational Therapy Helps
            </h2>
            <div className="space-y-6 text-white font-body text-lg leading-relaxed">
              <p>
                Occupational therapists are experts in breaking down complex tasks, identifying which executive function skills are needed for different activities, and creating individualized strategies that work with your child's unique brain.
              </p>
              <p>
                In OT sessions, children practice executive function skills through engaging, meaningful activities. We might work on planning skills by creating a step-by-step plan for building a LEGO project, develop organization skills through games that require sorting and categorizing, or strengthen working memory through cooking activities that require following multi-step directions.
              </p>
              <p>
                The key is that we make it meaningful and fun. Children learn best when they're engaged and enjoying themselves. We also work closely with parents to develop home strategies that support executive function development in daily routines and activities.
              </p>
              <p className="text-primary font-semibold text-xl">
                Executive function challenges don't have to hold your child back. With the right support and strategies, these skills can grow stronger every day.
              </p>
            </div>
          </div>
        </ResourceSection>

              {/* Related Resources */}
              <RelatedResourcesUpsell
                resources={[
                  {
                    title: 'ADHD & Occupational Therapy',
                    description: 'Understanding how OT supports children with ADHD in developing essential life skills',
                    link: '/resources/adhd-and-ot',
                    icon: 'brain',
                  },
                  {
                    title: 'Tips & Tricks for Daily Success',
                    description: 'Quick, practical strategies you can implement today to support your child',
                    link: '/resources/tips-and-tricks',
                    icon: 'target',
                  },
                  {
                    title: 'Social & Emotional Growth',
                    description: 'Building self-regulation and emotional awareness for better daily functioning',
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

export default ExecutiveFunctioningPage;
