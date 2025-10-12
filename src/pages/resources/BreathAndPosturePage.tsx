import { Wind, Armchair, Brain, Heart, Zap, Activity, Circle } from 'lucide-react';
import { ResourceBreadcrumb } from '@/components/resources/ResourceBreadcrumb';
import { ResourceHero } from '@/components/resources/ResourceHero';
import { ResourceSection } from '@/components/resources/ResourceSection';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { ResourceCTA } from '@/components/resources/ResourceCTA';
import { PageTransition } from '@/components/PageTransition';

const BreathAndPosturePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black-bg">
        <ResourceBreadcrumb resourceTitle="Breath & Posture" />

        <ResourceHero
          title="Breath & Posture"
          icon={Wind}
          description="Techniques for body awareness and self-regulation through breath and movement"
        />

        {/* Introduction */}
        <ResourceSection bgColor="dark">
          <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
              The Body-Brain Connection
            </h2>
            <p>
              Your body and brain are in constant communication. When your body is tense, your brain receives signals that something might be wrong, which can increase anxiety and make focus difficult. When your body is slouched and collapsed, your brain gets messages that you're tired or defeated, which affects energy and mood. When your breathing is rapid and shallow, your brain interprets this as stress or danger.
            </p>
            <p>
              But here's the remarkable part: this communication goes both ways. While emotions affect our bodies, we can also use our bodies to influence our emotions and mental states. This is powerful for children with ADHD, who often struggle with attention and emotional regulation. By teaching children to use their breath and body intentionally, we give them tools to calm down when overwhelmed, energize when sluggish, and focus when distracted.
            </p>
            <p>
              This isn't mystical or complicated—it's based on neuroscience. The way we hold our bodies and breathe directly affects our nervous system, which affects everything from heart rate and blood pressure to hormone levels and brain function. Let's explore how to use this body-brain connection to support children with ADHD.
            </p>
          </div>
        </ResourceSection>

        {/* Journey: Posture and Learning */}
        <ResourceSection bgColor="black">
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <Circle className="text-primary" size={48} />
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-heading">
                  1
                </div>
                <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
                  Posture and Learning
                </h2>
                <div className="space-y-4 text-white/90 font-body text-lg leading-relaxed">
                  <p>
                    Have you ever noticed that when your child is slumped over their homework, head resting on their arm, they seem even more unfocused? There's a physical reason for this. Posture significantly affects cognitive function, attention, and learning.
                  </p>
                  <p>
                    When we slouch or collapse, several things happen: breathing becomes shallow (less oxygen to the brain), blood flow can be compromised, core muscles aren't engaged (which affects stability and endurance), and visual alignment changes (making reading harder). All of this makes learning more difficult.
                  </p>
                  <p>
                    Good posture doesn't mean rigid "sit up straight!" commands that last five seconds. It means helping children develop the core strength and body awareness to maintain upright, alert postures naturally. It means providing seating and work surfaces at appropriate heights. It means building in movement breaks so children aren't expected to maintain any single posture for too long.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-black/30 p-6 rounded-lg">
                    <h4 className="text-primary font-semibold mb-3">Signs of Poor Postural Control:</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Constant slouching or slumping</li>
                      <li>• Head resting on arm or desk</li>
                      <li>• Hooking feet around chair legs</li>
                      <li>• W-sitting on floor</li>
                      <li>• Complaints of tiredness during seated work</li>
                      <li>• Difficulty maintaining positions</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <h4 className="text-primary font-semibold mb-3">Support Better Posture:</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Ensure feet reach floor or footrest</li>
                      <li>• Use wedge cushions for seating</li>
                      <li>• Try stability balls or wobble cushions</li>
                      <li>• Allow standing workspace options</li>
                      <li>• Build core strength through play</li>
                      <li>• Schedule frequent movement breaks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-primary/50"></div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-heading">
                  2
                </div>
                <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
                  Core Strength Matters
                </h2>
                <div className="space-y-4 text-white/90 font-body text-lg leading-relaxed">
                  <p>
                    Core strength isn't about six-pack abs—it's about the muscles of the trunk that stabilize our body and allow our limbs to move efficiently. Strong core muscles are essential for everything from sitting at a desk to handwriting to sports participation.
                  </p>
                  <p>
                    Many children with ADHD have weaker core strength due to less engagement in sustained physical activities. When the core is weak, children compensate by using furniture for support, adopting inefficient postures, and fatiguing quickly during seated activities. This directly impacts their ability to attend to learning tasks.
                  </p>
                  <p>
                    The good news? Core strength is built through play and movement, not boring exercises. Climbing, crawling, hanging from bars, animal walks, and active games all strengthen the core naturally. Occupational therapists can assess core strength and provide fun activities to build these essential muscles.
                  </p>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h5 className="text-primary font-semibold mb-2 text-center">Climbing Activities</h5>
                    <p className="text-white/80 text-sm text-center">Playground climbers, rock walls, tree climbing, ladder climbing</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h5 className="text-primary font-semibold mb-2 text-center">Animal Walks</h5>
                    <p className="text-white/80 text-sm text-center">Bear walk, crab walk, inchworm, wheelbarrow, frog jumps</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h5 className="text-primary font-semibold mb-2 text-center">Balance Challenges</h5>
                    <p className="text-white/80 text-sm text-center">Balance beams, yoga poses, one-leg activities, wobble boards</p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-primary/50"></div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-heading">
                  3
                </div>
                <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
                  The Power of Breath
                </h2>
                <div className="space-y-4 text-white/90 font-body text-lg leading-relaxed">
                  <p>
                    Breathing is the only function of the autonomic nervous system that we can consciously control. This makes it a powerful tool for regulation. When we're anxious or stressed, our breathing becomes rapid and shallow. When we're calm and focused, our breathing is slow and deep.
                  </p>
                  <p>
                    Children with ADHD often breathe shallowly, especially during challenging tasks. They might hold their breath when concentrating or breathe rapidly when anxious. Teaching breathing techniques gives them a concrete tool they can use anywhere, anytime to help regulate their nervous system.
                  </p>
                  <p>
                    The key is making breathing exercises fun and age-appropriate. Young children respond well to playful breathing activities—blowing bubbles, pretending to blow out birthday candles, or breathing like different animals. Older children can learn more structured techniques and understand how breathing affects their body and brain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ResourceSection>

        {/* Breathing Techniques */}
        <ResourceSection bgColor="dark" title="Breathing Techniques for Children">
          <div className="grid md:grid-cols-2 gap-6">
            <ResourceCard icon={Wind} title="Balloon Breaths" highlight>
              <p className="mb-3">
                <strong>How to do it:</strong> Pretend you're inflating a balloon. Breathe in deeply through your nose while spreading your arms wide. Slowly breathe out through your mouth while bringing your arms together, making a "ssss" sound like air leaving a balloon.
              </p>
              <p className="text-primary font-semibold text-sm">Best for: Calming down, bedtime, after frustration</p>
            </ResourceCard>

            <ResourceCard icon={Circle} title="Smell the Flower, Blow Out the Candle">
              <p className="mb-3">
                <strong>How to do it:</strong> Pretend you're smelling a beautiful flower. Breathe in slowly through your nose. Then pretend you're blowing out birthday candles. Breathe out slowly through your mouth. Repeat 5 times.
              </p>
              <p className="text-primary font-semibold text-sm">Best for: Transitioning to calm activities, before bed</p>
            </ResourceCard>

            <ResourceCard icon={Activity} title="Square Breathing">
              <p className="mb-3">
                <strong>How to do it:</strong> Trace a square with your finger. Breathe in for 4 counts (first side), hold for 4 counts (second side), breathe out for 4 counts (third side), hold for 4 counts (fourth side). Repeat 4 times.
              </p>
              <p className="text-primary font-semibold text-sm">Best for: Anxiety, before tests, when overwhelmed</p>
            </ResourceCard>

            <ResourceCard icon={Zap} title="Dragon Breaths">
              <p className="mb-3">
                <strong>How to do it:</strong> Breathe in deeply through your nose. Breathe out forcefully through your mouth like a dragon breathing fire, maybe even making a "whoosh" sound. This is both calming and energizing.
              </p>
              <p className="text-primary font-semibold text-sm">Best for: Releasing tension, transitioning between activities</p>
            </ResourceCard>

            <ResourceCard icon={Heart} title="Belly Breathing">
              <p className="mb-3">
                <strong>How to do it:</strong> Lie down or sit comfortably. Place a stuffed animal on your belly. Breathe in slowly through your nose, making the stuffed animal rise. Breathe out slowly through your mouth, making it fall. Watch it go up and down.
              </p>
              <p className="text-primary font-semibold text-sm">Best for: Bedtime, teaching diaphragmatic breathing</p>
            </ResourceCard>

            <ResourceCard icon={Brain} title="Counting Breaths">
              <p className="mb-3">
                <strong>How to do it:</strong> Breathe normally but count each exhale. When you get to 10, start over at 1. If your mind wanders, gently bring attention back and start over at 1. This builds both regulation and focus.
              </p>
              <p className="text-primary font-semibold text-sm">Best for: Older children, building focus, mindfulness practice</p>
            </ResourceCard>
          </div>

          <div className="bg-primary/10 p-6 md:p-8 rounded-lg border-l-4 border-primary mt-8">
            <p className="text-primary font-semibold mb-2">Practice Tip:</p>
            <p className="text-white/90">
              Breathing techniques work best when practiced regularly during calm times, not just during meltdowns. Make it part of your daily routine—morning breathing to start the day, breathing before bed, or breathing breaks between activities. The more children practice when calm, the more effective these techniques will be when they're upset.
            </p>
          </div>
        </ResourceSection>

        {/* Body Awareness Activities */}
        <ResourceSection bgColor="black" title="Building Body Awareness">
          <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed mb-8">
            <p>
              Body awareness—knowing where your body is in space and what it's doing—is essential for both motor skills and self-regulation. Children with strong body awareness can better recognize when they're tense, fidgety, or uncomfortable, allowing them to use strategies before emotions escalate.
            </p>
            <p>
              Many children with ADHD have reduced body awareness (poor interoception and proprioception). They might not notice when they're hungry, need the bathroom, or are getting overwhelmed until it's urgent. Building body awareness helps them tune in to their body's signals earlier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark-bg/50 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Yoga for Kids</h4>
              <p className="text-white/80 text-sm mb-3">
                Child-friendly yoga builds body awareness, strength, flexibility, and mindfulness. Make it playful with animal poses and storytelling. Many free kids' yoga videos are available online.
              </p>
              <p className="text-primary text-xs">Ages: 4+</p>
            </div>

            <div className="bg-dark-bg/50 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Progressive Muscle Relaxation</h4>
              <p className="text-white/80 text-sm mb-3">
                Tense and relax different muscle groups. "Squeeze your hands into tight fists... now let them go soft like cooked spaghetti." Work through the whole body. This teaches the difference between tense and relaxed.
              </p>
              <p className="text-primary text-xs">Ages: 6+</p>
            </div>

            <div className="bg-dark-bg/50 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Body Scan Meditation</h4>
              <p className="text-white/80 text-sm mb-3">
                Guide your child to notice each part of their body: "Notice your toes. Are they warm or cool? Relaxed or tense?" Move from toes to head. This builds interoceptive awareness.
              </p>
              <p className="text-primary text-xs">Ages: 7+</p>
            </div>

            <div className="bg-dark-bg/50 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Mindful Movement</h4>
              <p className="text-white/80 text-sm mb-3">
                Slow, intentional movements with attention to how they feel. Walk very slowly noticing each foot placement. Stretch slowly noticing how muscles feel. Move like you're underwater.
              </p>
              <p className="text-primary text-xs">Ages: 5+</p>
            </div>

            <div className="bg-dark-bg/50 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Mirror Games</h4>
              <p className="text-white/80 text-sm mb-3">
                Partner with your child and take turns being the leader. The other person mirrors their movements exactly. This builds body awareness and is also great for connection and fun.
              </p>
              <p className="text-primary text-xs">Ages: 4+</p>
            </div>

            <div className="bg-dark-bg/50 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading text-primary text-lg mb-3">Dance and Freeze</h4>
              <p className="text-white/80 text-sm mb-3">
                Play music and dance. When music stops, freeze in a pose and hold it. Notice how your body feels in that position. This builds body control and awareness while being fun and energizing.
              </p>
              <p className="text-primary text-xs">Ages: 3+</p>
            </div>
          </div>
        </ResourceSection>

        {/* Movement Breaks */}
        <ResourceSection bgColor="dark">
          <div className="bg-gradient-to-b from-black-bg to-dark-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 shadow-glow">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6 text-center">
              Creating a Movement-Friendly Environment
            </h2>
            <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed">
              <p>
                Children with ADHD need to move. Fighting this need creates frustration and exhaustion for everyone. Instead, build movement into the day intentionally. Movement breaks aren't rewards for sitting still—they're necessary brain breaks that allow children to maintain attention and regulation.
              </p>
              <p>
                Schedule movement breaks every 20-30 minutes during homework or other seated activities. This might look like 2 minutes of jumping jacks, a quick run around the house, some yoga poses, or wall push-ups. These short bursts of movement help reset attention and release built-up physical energy.
              </p>
              <p>
                Consider creating a movement-friendly learning space at home: a standing desk option, a wobble cushion on the chair, a small trampoline nearby, or space to pace while thinking. When children can move while learning, they often focus better, not worse.
              </p>
              <p className="text-primary font-semibold text-xl">
                Movement isn't the enemy of focus—for children with ADHD, movement often enables focus. By supporting their bodies' needs through breath, posture, and movement, we support their brains' ability to learn, regulate, and thrive.
              </p>
            </div>
          </div>
        </ResourceSection>

        <ResourceCTA />
      </div>
    </PageTransition>
  );
};

export default BreathAndPosturePage;
