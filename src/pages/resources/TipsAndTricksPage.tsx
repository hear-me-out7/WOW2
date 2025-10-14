import { Lightbulb, Sun, BookOpen, Home, Heart, Moon, Sparkles, Target } from 'lucide-react';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TipsAndTricksPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ResourceBreadcrumb resourceTitle="Tips & Tricks" />

        <ResourceHero
          title="Tips & Tricks"
          icon={Lightbulb}
          description="Practical daily strategies for parents and caregivers to support children with ADHD"
        />

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main Content */}
            <div>
              {/* Download Gate */}
              <ResourceDownloadGate
                resourceTitle="Daily Tips & Tricks Handbook"
                resourceDescription="Download our comprehensive guide with practical strategies for managing daily routines and challenges."
                magnetId="tips-and-tricks-guide"
                className="mb-8"
              />

        {/* Introduction */}
        <ResourceSection bgColor="dark">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6">
              Practical Strategies for Everyday Success
            </h2>
            <p>
              Parenting a child with ADHD comes with unique joys and challenges. The strategies that work for other children might not work for yours, and what worked yesterday might not work today. That's completely normal—and you're not alone in feeling like you're constantly problem-solving.
            </p>
            <p>
              This resource is filled with practical, tried-and-true strategies that occupational therapists and parents have found helpful for managing daily routines, challenging behaviors, and transitions. Not every strategy will work for every child, and that's okay. Try different approaches, adapt them to fit your family, and celebrate what works.
            </p>
            <p>
              Remember: Small changes can make big differences. You don't need to implement everything at once. Start with one area that's causing the most stress, try a few strategies, and build from there.
            </p>
          </div>
        </ResourceSection>

        {/* Quick Reference Cards */}
        <ResourceSection bgColor="black" title="Quick Reference Guide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-card p-4 rounded-lg border border-primary/30 text-center">
              <Sun className="text-primary mx-auto mb-2" size={32} />
              <p className="font-heading text-primary text-sm uppercase">Morning Routines</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/30 text-center">
              <BookOpen className="text-primary mx-auto mb-2" size={32} />
              <p className="font-heading text-primary text-sm uppercase">School & Homework</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/30 text-center">
              <Home className="text-primary mx-auto mb-2" size={32} />
              <p className="font-heading text-primary text-sm uppercase">Home Organization</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/30 text-center">
              <Moon className="text-primary mx-auto mb-2" size={32} />
              <p className="font-heading text-primary text-sm uppercase">Bedtime Routines</p>
            </div>
          </div>
        </ResourceSection>

        {/* Inline CTA 1 */}
        <ResourceInlineCta
          variant="consultation"
          message="Feeling overwhelmed by daily challenges? Let's discuss personalized strategies that fit your family's unique needs."
        />

        {/* Detailed Tips & Tricks */}
        <ResourceSection bgColor="dark" title="Detailed Strategies">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="morning"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <Sun className="text-primary" size={24} />
                  <span>Morning Routine Strategies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  Mornings can be chaotic, especially when executive function challenges make it hard to remember steps, manage time, and transition smoothly. Here's how to make mornings easier:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Create a Visual Morning Checklist</h4>
                    <p>
                      Use pictures or words (depending on reading level) to show each step: wake up, use bathroom, brush teeth, get dressed, eat breakfast, pack backpack, put on shoes. Let your child check off or move a magnet as they complete each step. This provides external structure and a sense of accomplishment.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Prepare the Night Before</h4>
                    <p>
                      Reduce morning decisions by preparing as much as possible the night before. Lay out clothes (let your child choose the night before to avoid morning arguments), pack the backpack, prepare lunch or lunch money, and place everything needed by the door. This reduces the executive function load when energy and focus are lowest.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Use Timers for Transitions</h4>
                    <p>
                      Time blindness makes it hard to gauge how long things take. Use visual timers (Time Timer is popular) to show how much time is left before leaving. Give warnings: "Timer shows 10 minutes until we leave," "5 minutes left," "2 minutes—shoes on now!"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Build in Buffer Time</h4>
                    <p>
                      Things always take longer than expected with ADHD. Plan for delays. If school starts at 8:30 and it takes 15 minutes to get there, aim to leave by 8:00 instead of 8:10. This buffer reduces stress when inevitable surprises happen.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Create a Morning Music Playlist</h4>
                    <p>
                      Music provides time structure and can energize or calm depending on what's needed. Create a playlist that matches your morning timeline—when the music ends, it's time to go. This makes time more concrete.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="homework"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-primary" size={24} />
                  <span>Homework & School Success</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  Homework time doesn't have to be a battle. These strategies can help make after-school and homework routines more successful:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Schedule a Movement Break First</h4>
                    <p>
                      After sitting all day at school, children need to move before settling into more seated work. Allow 20-30 minutes of physical activity right after school—running outside, jumping on a trampoline, riding a bike. This helps regulate their sensory and nervous systems for better focus later.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Create a Consistent Homework Time and Space</h4>
                    <p>
                      Establish a regular time for homework (after snack and movement break works well). Create a dedicated homework space that's relatively quiet and free from visual distractions. Some children work better with background music or white noise—experiment to find what helps your child focus.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Break It Down</h4>
                    <p>
                      Large assignments feel overwhelming. Help your child break homework into smaller chunks. "Let's do three math problems, then take a 2-minute break." Use timers—work for 15 minutes, break for 5 minutes. This makes homework feel more manageable and maintains focus better than long stretches.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Use Fidgets and Movement</h4>
                    <p>
                      Fidget tools (stress balls, putty, fidget cubes) can help maintain focus by providing sensory input. Consider a wobble cushion or exercise ball to sit on, or allow standing at a counter. Movement helps many children with ADHD focus better, not worse.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Communicate with Teachers</h4>
                    <p>
                      If homework consistently takes much longer than assigned or causes significant stress, communicate with your child's teacher. Modified homework, extended time, or alternative demonstrations of learning might be appropriate accommodations.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="organization"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <Home className="text-primary" size={24} />
                  <span>Organization at Home</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  Organization doesn't come naturally to children with ADHD, but the right systems can make a huge difference:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Everything Needs a Home</h4>
                    <p>
                      Assign a specific, consistent place for everything—backpack, shoes, jacket, homework folder, library books. Use hooks at your child's height, labeled bins, and picture labels if helpful. When everything has a home, it's easier to find things and put them away.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Use Clear Bins and Labels</h4>
                    <p>
                      Visual organization works better than closed containers. Use clear bins so your child can see what's inside without opening everything. Label with pictures and words. Color-coding can help too—all school stuff in blue bins, all sports equipment in red bins.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Simplify the Backpack</h4>
                    <p>
                      Backpacks become black holes easily. Use a single accordion folder with color-coded tabs for different subjects instead of multiple folders. Designate one pocket for "to turn in" and one for "to keep at home." Clean out the backpack together weekly.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Create a Launch Pad</h4>
                    <p>
                      Designate one area near the door as the "launch pad" where everything needed for the next day goes—backpack, shoes, jacket, library books, sports equipment. This reduces morning scrambling and forgotten items.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Photograph Organized Spaces</h4>
                    <p>
                      Take photos of drawers, desks, and shelves when they're organized. Post these photos nearby as reminders of what "organized" looks like. This provides a visual model when cleaning up.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="emotions"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <Heart className="text-primary" size={24} />
                  <span>Managing Big Emotions</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  Emotional regulation challenges are part of ADHD. These strategies can help children manage intense emotions:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Create a Calm-Down Kit</h4>
                    <p>
                      Fill a box with sensory tools that help your child calm down: stress ball, putty, fidget toys, calming glitter jar, noise-canceling headphones, favorite stuffed animal, picture of calm place. Practice using these tools during calm times so they're familiar during big emotions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Teach the Zone of Regulation</h4>
                    <p>
                      Help your child identify their emotional state using colors: blue (sad/tired), green (calm/ready to learn), yellow (frustrated/anxious), red (angry/out of control). Practice identifying zones throughout the day and strategies for each zone.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Validate First, Problem-Solve Later</h4>
                    <p>
                      When emotions are big, problem-solving doesn't work. First, validate the emotion: "I can see you're really frustrated right now." Wait until they're calmer to discuss solutions. This helps your child feel understood and teaches that all emotions are okay, even if all behaviors aren't.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Practice Deep Breathing Together</h4>
                    <p>
                      Teach breathing techniques during calm times: balloon breaths (breathe in big, breathe out slow like deflating a balloon), smell the flower/blow out the candle, or square breathing (in for 4, hold for 4, out for 4, hold for 4). Make it playful and practice regularly.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Offer Movement for Regulation</h4>
                    <p>
                      Movement is regulating. When emotions escalate, offer physical outlets: jump on trampoline, do wall push-ups, go for a walk, punch a pillow, do yoga poses. Movement helps discharge intense energy and reset the nervous system.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="screen-time"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <Target className="text-primary" size={24} />
                  <span>Screen Time Management</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  Screen time transitions are particularly challenging with ADHD. The high stimulation makes it hard to stop:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Use Visual Timers</h4>
                    <p>
                      Set a visual timer where your child can see it during screen time. Give warnings: "10 minutes left," "5 minutes," "2 minutes—find a stopping point." This prepares the brain for transition.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Plan What's Next</h4>
                    <p>
                      Before screens turn off, tell your child what's happening next. "When the timer goes off, we're going to have snack and then play outside." Knowing what's next reduces resistance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Earn Screen Time</h4>
                    <p>
                      Make screen time contingent on completing responsibilities first: homework done, chores complete, then screen time. This builds motivation and creates natural limits.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Offer Transition Activities</h4>
                    <p>
                      Plan an engaging activity immediately after screens to help with the transition: go outside together, do a craft, play a game. This makes stopping screens less disappointing.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="bedtime"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <Moon className="text-primary" size={24} />
                  <span>Bedtime Routine Strategies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  Sleep is crucial for ADHD symptom management, yet bedtime is often challenging. These strategies promote better sleep:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Consistent Bedtime Routine</h4>
                    <p>
                      Create and follow the same bedtime routine every night: bath, pajamas, brush teeth, story, song, bed. Consistency cues the body that sleep is coming. Use a visual checklist to help your child remember the steps.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Wind Down Time</h4>
                    <p>
                      Start calming activities 30-60 minutes before bedtime. No screens during this time—the blue light interferes with melatonin production. Instead: quiet play, coloring, reading, puzzles, or calming music.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Optimize the Sleep Environment</h4>
                    <p>
                      Cool, dark, quiet rooms promote sleep. Use blackout curtains, white noise if helpful, comfortable bedding. Some children need weighted blankets or compression pajamas for calming sensory input.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Address Worries</h4>
                    <p>
                      Bedtime often brings worries. Create a "worry time" earlier in the evening where your child can talk about concerns. Keep a worry journal by the bed—write worries down to deal with tomorrow. This helps the mind let go at bedtime.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Be Patient with Medication Timing</h4>
                    <p>
                      If your child takes stimulant medication, work with your doctor on timing. Sometimes medication wearing off causes evening challenges. Some children benefit from a small afternoon dose, while others need medication-free evenings.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="strengths"
              className="bg-card border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="font-heading text-primary text-xl text-left hover:text-primary-hover">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-primary" size={24} />
                  <span>Building on Strengths</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/90 leading-relaxed pt-4 space-y-4">
                <p>
                  ADHD comes with challenges, but also remarkable strengths. Nurture these gifts:
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Celebrate Creativity</h4>
                    <p>
                      Children with ADHD often think outside the box and see unique solutions. Encourage creative pursuits, welcome unconventional ideas, and value imagination. These creative strengths are assets.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Channel Their Energy</h4>
                    <p>
                      High energy isn't bad—it just needs positive outlets. Sports, dance, martial arts, drama, or active hobbies provide healthy channels for that energy while building skills and confidence.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Support Hyperfocus</h4>
                    <p>
                      When children with ADHD are interested in something, they can hyperfocus intensely. Support their passions—these areas of strength build confidence that transfers to other areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Notice What's Going Well</h4>
                    <p>
                      It's easy to focus on challenges. Intentionally notice and comment on what your child does well: "I noticed you started your homework right away today," "You were really patient with your brother," "I love your creative solution to that problem!"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Advocate for Your Child</h4>
                    <p>
                      Teach your child to understand their ADHD, recognize their strengths and challenges, and ask for what they need. Model positive self-advocacy. Help them see ADHD as a difference, not a deficit.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ResourceSection>

        {/* Inline CTA 2 */}
        <ResourceInlineCta
          variant="program"
          message="Ready for comprehensive support? The WOW Program provides structure, strategies, and community to help your family thrive."
        />

        {/* Remember */}
        <ResourceSection bgColor="black">
          <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 shadow-glow">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6 text-center">
              Remember
            </h2>
            <div className="space-y-4 text-white font-body text-lg leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                You don't have to implement everything perfectly. Start small, be patient with yourself and your child, and celebrate the small wins.
              </p>
              <p>
                ADHD parenting is a marathon, not a sprint. Some days will be harder than others, and that's okay. You're doing an amazing job, even on the tough days.
              </p>
              <p className="text-primary font-semibold text-xl">
                Your child is lucky to have you advocating for them, learning strategies to help, and loving them unconditionally.
              </p>
            </div>
          </div>
        </ResourceSection>

              {/* Related Resources */}
              <RelatedResourcesUpsell
                resources={[
                  {
                    title: 'ADHD & Occupational Therapy',
                    description: 'Understanding the foundations of OT support for ADHD',
                    link: '/resources/adhd-and-ot',
                    icon: 'brain',
                  },
                  {
                    title: 'Executive Functioning Skills',
                    description: 'Deep dive into planning, organization, and time management strategies',
                    link: '/resources/executive-functioning',
                    icon: 'brain',
                  },
                  {
                    title: 'Social & Emotional Growth',
                    description: 'Supporting emotional regulation and building resilience',
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

export default TipsAndTricksPage;
