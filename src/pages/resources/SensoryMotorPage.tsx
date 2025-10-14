import { Activity, Eye, Ear, Hand, Wind, Move, Zap, Target, Waves } from 'lucide-react';
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

const SensoryMotorPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ResourceBreadcrumb resourceTitle="Sensory Motor" />

        <ResourceHero
          title="Sensory Motor Development"
          icon={Activity}
          description="Activities to support sensory processing and motor development for children with ADHD"
        />

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main Content */}
            <div>
              {/* Download Gate */}
              <ResourceDownloadGate
                resourceTitle="Sensory & Motor Activities Guide"
                resourceDescription="Download our comprehensive sensory checklist and activity guide to support your child's sensory processing needs."
                magnetId="sensory-checklist"
                className="mb-8"
              />

        {/* Introduction */}
        <ResourceSection bgColor="dark">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed">
            <h2 className="font-heading uppercase text-white text-2xl md:text-3xl tracking-heading mb-6">
              Understanding Sensory Processing
            </h2>
            <p>
              We often think of five senses—sight, hearing, touch, taste, and smell—but our bodies actually have eight sensory systems that constantly send information to our brains about what's happening in and around us. For children with ADHD, sensory processing differences are incredibly common and significantly impact attention, regulation, and behavior.
            </p>
            <p>
              Some children with ADHD are sensory seekers—they crave intense sensory input like crashing, jumping, loud noises, or strong tastes. Other children are sensory avoiders—they find certain textures, sounds, lights, or movements overwhelming or uncomfortable. Many children have a mix of seeking and avoiding across different sensory systems.
            </p>
            <p>
              Understanding your child's unique sensory profile helps you provide the right sensory input to support regulation, attention, and participation in daily activities. Occupational therapists are experts in assessing sensory processing and creating individualized sensory strategies—often called a "sensory diet"—that meet your child's specific needs.
            </p>
          </div>
        </ResourceSection>

        {/* The 8 Sensory Systems */}
        <ResourceSection bgColor="black" title="The 8 Sensory Systems">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ResourceCard icon={Eye} title="Visual (Sight)">
              <p>
                Processing what we see. Children with ADHD may be distracted by visual clutter, struggle to filter out irrelevant visual information, or seek visual stimulation through fidgeting or moving objects.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Reduce visual clutter in workspaces, use highlighters to emphasize important information, provide fidget tools for visual seeking, consider colored overlays for reading.
              </p>
            </ResourceCard>

            <ResourceCard icon={Ear} title="Auditory (Hearing)">
              <p>
                Processing sounds. Some children are distracted by every noise, while others seek sound through humming, making noises, or needing background music.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Use noise-canceling headphones, provide white noise or calming music, create quiet workspaces, allow humming or quiet singing during activities.
              </p>
            </ResourceCard>

            <ResourceCard icon={Hand} title="Tactile (Touch)">
              <p>
                Processing touch sensations. Children may seek touch through constant touching, rough play, or prefer soft textures. Others avoid touch and resist messy activities or certain clothing.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Provide fidget tools, use weighted blankets, offer deep pressure through hugs or compression clothing, respect touch sensitivities, prepare for touch experiences.
              </p>
            </ResourceCard>

            <ResourceCard icon={Waves} title="Vestibular (Movement)">
              <p>
                Processing movement and balance through the inner ear. This system tells us where our head is in space and helps us stay balanced. Many children with ADHD are vestibular seekers—they need to move!
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Allow movement breaks, provide rocking or swinging, use wobble cushions or exercise balls, incorporate movement into learning, avoid forcing stillness.
              </p>
            </ResourceCard>

            <ResourceCard icon={Move} title="Proprioception (Body Awareness)">
              <p>
                Processing information from muscles and joints about where our body is and how much force we're using. Proprioception is organizing and calming to the nervous system.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Provide heavy work activities (pushing, pulling, carrying), use weighted items, encourage resistance activities, incorporate animal walks, allow chewing gum.
              </p>
            </ResourceCard>

            <ResourceCard icon={Wind} title="Interoception (Internal Sensations)">
              <p>
                Processing signals from inside our body—hunger, thirst, need for bathroom, temperature, heart rate, emotions. Many children with ADHD struggle to recognize these internal signals.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Teach body awareness, use visual charts for sensations, schedule regular bathroom and snack breaks, practice mindfulness activities, validate what the body is feeling.
              </p>
            </ResourceCard>

            <ResourceCard icon={Target} title="Gustatory (Taste)">
              <p>
                Processing tastes. Some children are "picky eaters" due to sensory sensitivities, while others seek intense flavors or crave crunchy, chewy textures.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Respect food preferences while gently expanding, offer crunchy or chewy snacks for seeking, provide oral motor tools, avoid battles over food.
              </p>
            </ResourceCard>

            <ResourceCard icon={Zap} title="Olfactory (Smell)">
              <p>
                Processing smells. Strong smells can be alerting or calming depending on the scent and the child. Some children are sensitive to smells others don't notice.
              </p>
              <p className="mt-2 text-primary font-semibold">Strategies:</p>
              <p className="text-sm mt-1">
                Use calming scents like lavender for relaxation, avoid strong perfumes or cleaners if sensitive, use peppermint for alertness, respect scent sensitivities.
              </p>
            </ResourceCard>
          </div>
        </ResourceSection>

        {/* Inline CTA 1 */}
        <ResourceInlineCta
          variant="consultation"
          message="Need help understanding your child's sensory profile? Book a consultation to create a personalized sensory plan."
        />

        {/* Signs of Sensory Challenges */}
        <ResourceSection bgColor="dark">
          <div className="bg-card p-8 md:p-12 rounded-xl border-2 border-primary/30">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
              Signs of Sensory Processing Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground font-body leading-relaxed">
              <div>
                <h3 className="text-primary font-heading text-xl mb-3">Sensory Seeking Behaviors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Constantly moving, jumping, crashing, spinning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Touching everything, seeking physical contact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Making noises, humming, or needing loud volume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Chewing on non-food items (clothing, pencils)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Seeking intense flavors or crunchy foods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>High pain tolerance or doesn't notice injuries</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-heading text-xl mb-3">Sensory Avoiding Behaviors</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Avoids messy play, refuses to touch certain textures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Covers ears frequently, bothered by sounds others tolerate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Dislikes tags in clothing or certain fabric textures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Avoids swinging, climbing, or movement activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Limited food preferences due to texture or taste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Bothered by bright lights or busy visual environments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ResourceSection>

        {/* Calming vs Alerting */}
        <ResourceSection bgColor="black" title="Sensory Strategies: Calming vs. Alerting">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed mb-8">
            <p>
              Different sensory input affects our nervous system in different ways. Some sensory experiences are calming and organizing, while others are alerting and energizing. Understanding this helps you provide the right sensory input at the right time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/30">
              <h3 className="font-heading text-primary text-2xl mb-4">Calming Sensory Input</h3>
              <p className="text-foreground mb-4">Use these when your child needs to calm down, focus, or prepare for quiet activities:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Deep pressure (hugs, weighted blanket, compression clothing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Slow, rhythmic movement (rocking, slow swinging)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Heavy work (pushing, pulling, carrying heavy items)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Soft lighting, calm colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quiet sounds, white noise, nature sounds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Chewing gum or chewy tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lavender or vanilla scents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Warm baths</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border-2 border-primary/30">
              <h3 className="font-heading text-primary text-2xl mb-4">Alerting Sensory Input</h3>
              <p className="text-foreground mb-4">Use these when your child needs to wake up, increase attention, or get energized:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fast, unpredictable movement (jumping, spinning)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Light touch (tickling, feather touch)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Bright lights, busy visual patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Loud or varied sounds, upbeat music</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sour or spicy flavors, crunchy foods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Peppermint or citrus scents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cold temperatures (cold water, ice)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Novel or unexpected experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </ResourceSection>

        {/* Inline CTA 2 */}
        <ResourceInlineCta
          variant="program"
          message="Ready for comprehensive sensory support? The WOW Program includes personalized sensory strategies and motor skill development."
        />

        {/* Motor Skills */}
        <ResourceSection bgColor="dark" title="Motor Skills Development">
          <div className="space-y-6 text-white font-body text-lg leading-relaxed mb-8">
            <p>
              Motor skills—how we move our bodies and use our hands—are closely connected to sensory processing. Children with ADHD may have delays or differences in motor skill development that affect their ability to participate in physical activities, handwriting, self-care tasks, and play.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ResourceCard title="Gross Motor Skills">
              <p className="mb-3">
                Large muscle movements like running, jumping, climbing, and balance. These skills affect physical activities, sports participation, and even classroom behaviors (children who struggle with gross motor skills may appear clumsy or overly active).
              </p>
              <p className="text-primary font-semibold mb-2">Activities to Build Skills:</p>
              <ul className="space-y-1 text-sm">
                <li>• Obstacle courses, animal walks</li>
                <li>• Ball games (throwing, catching, kicking)</li>
                <li>• Playground equipment (swings, climbers)</li>
                <li>• Swimming, biking, skating</li>
                <li>• Dance, martial arts, yoga</li>
                <li>• Jumping games, hopscotch, jumping rope</li>
              </ul>
            </ResourceCard>

            <ResourceCard title="Fine Motor Skills">
              <p className="mb-3">
                Small muscle movements of the hands and fingers for tasks like writing, buttoning, cutting with scissors, and using utensils. Fine motor difficulties can make handwriting frustrating and slow.
              </p>
              <p className="text-primary font-semibold mb-2">Activities to Build Skills:</p>
              <ul className="space-y-1 text-sm">
                <li>• Playdough, clay manipulation</li>
                <li>• LEGOs, building toys, puzzles</li>
                <li>• Beading, lacing activities</li>
                <li>• Cutting practice (play dough, paper)</li>
                <li>• Drawing, coloring, painting</li>
                <li>• Board games with small pieces</li>
              </ul>
            </ResourceCard>
          </div>
        </ResourceSection>

        {/* Activities for Home */}
        <ResourceSection bgColor="black" title="Sensory Activities for Home">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Heavy Work Activities</h4>
              <ul className="text-foreground/80 text-sm space-y-1">
                <li>• Carry laundry basket or groceries</li>
                <li>• Push/pull heavy furniture with you</li>
                <li>• Animal walks (bear, crab, wheelbarrow)</li>
                <li>• Wall push-ups</li>
                <li>• Carry weighted backpack</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Calming Activities</h4>
              <ul className="text-foreground/80 text-sm space-y-1">
                <li>• Weighted blanket time</li>
                <li>• Slow rocking or swinging</li>
                <li>• Deep pressure massage</li>
                <li>• Quiet reading in cozy space</li>
                <li>• Listening to calm music</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Alerting Activities</h4>
              <ul className="text-foreground/80 text-sm space-y-1">
                <li>• Jumping on trampoline</li>
                <li>• Fast dancing to music</li>
                <li>• Cold water splash on face</li>
                <li>• Crunchy snack</li>
                <li>• Quick outdoor run</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Oral Motor Activities</h4>
              <ul className="text-foreground/80 text-sm space-y-1">
                <li>• Blow bubbles or pinwheels</li>
                <li>• Drink thick smoothie through straw</li>
                <li>• Chew gum</li>
                <li>• Use chewy tubes or necklaces</li>
                <li>• Whistle or harmonica</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Proprioceptive Input</h4>
              <ul className="text-foreground/80 text-sm space-y-1">
                <li>• Sandwich squeeze (couch cushions)</li>
                <li>• Pillow crashes</li>
                <li>• Tug-of-war games</li>
                <li>• Carrying heavy items</li>
                <li>• Resistive activities (therapy bands)</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Vestibular Input</h4>
              <ul className="text-foreground/80 text-sm space-y-1">
                <li>• Swinging (linear, predictable)</li>
                <li>• Rocking chair or rocking horse</li>
                <li>• Spinning in office chair (monitor for dizziness)</li>
                <li>• Rolling down hills</li>
                <li>• Balance beam walking</li>
              </ul>
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
                Occupational therapists are specially trained in sensory processing and motor development. We can assess your child's unique sensory profile, identify which sensory systems are seeking or avoiding, and create a personalized "sensory diet"—a plan of sensory activities throughout the day that helps your child stay regulated and focused.
              </p>
              <p>
                In OT sessions, we provide therapeutic sensory experiences in a safe, controlled environment. We might use swings, climbing equipment, therapy balls, weighted items, tactile materials, and movement activities to help your child's nervous system learn to process and respond to sensory input more effectively.
              </p>
              <p>
                Most importantly, we teach you how to recognize your child's sensory needs and provide the right sensory input at home, school, and in the community. Understanding sensory processing transforms challenging behaviors into opportunities for support and regulation.
              </p>
              <p className="text-primary font-semibold text-xl">
                When children receive the sensory input their bodies crave, everything else becomes easier—attention, behavior, learning, and emotional regulation.
              </p>
            </div>
          </div>
        </ResourceSection>

              {/* Related Resources */}
              <RelatedResourcesUpsell
                resources={[
                  {
                    title: 'ADHD & Occupational Therapy',
                    description: 'How OT helps children with ADHD develop regulation and attention skills',
                    link: '/resources/adhd-and-ot',
                    icon: 'brain',
                  },
                  {
                    title: 'Breath & Posture',
                    description: 'Using breath work and body positioning to support regulation and focus',
                    link: '/resources/breath-and-posture',
                    icon: 'heart',
                  },
                  {
                    title: 'Social & Emotional Growth',
                    description: 'Building emotional awareness and self-regulation skills',
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

export default SensoryMotorPage;
