import { Heart, Smile, Users, Shield, Sparkles, HandHeart } from 'lucide-react';
import { ResourceBreadcrumb } from '@/components/resources/ResourceBreadcrumb';
import { ResourceHero } from '@/components/resources/ResourceHero';
import { ResourceSection } from '@/components/resources/ResourceSection';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { ResourceCTA } from '@/components/resources/ResourceCTA';
import { PageTransition } from '@/components/PageTransition';

const SocialEmotionalPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black-bg">
        <ResourceBreadcrumb resourceTitle="Social Emotional Development" />

        <ResourceHero
          title="Social Emotional Development"
          icon={Heart}
          description="Building emotional intelligence, social skills, and resilience for children with ADHD"
        />

        {/* Introduction */}
        <ResourceSection bgColor="dark">
          <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
              The Emotional Experience of ADHD
            </h2>
            <p>
              Imagine feeling things more intensely than everyone around you. Excitement isn't just happiness—it's an explosion of joy that's hard to contain. Disappointment isn't just sadness—it feels like the end of the world. Frustration isn't just annoyance—it's rage that takes over your whole body before you even realize what's happening.
            </p>
            <p>
              This is often the emotional experience of children with ADHD. Emotional regulation—the ability to manage and respond to emotions in appropriate ways—is an executive function that develops slowly in ADHD. While a typically developing 10-year-old might handle disappointment with sighs and mild frustration, a 10-year-old with ADHD might experience that same disappointment with the intensity and response of a much younger child.
            </p>
            <p>
              This isn't manipulation or bad behavior. It's neurology. The ADHD brain processes emotions differently, experiences them more intensely, and has a harder time regulating them. Understanding this transforms how we respond to emotional outbursts, social struggles, and relationship challenges. Our children aren't choosing to have big feelings—they're doing their best to manage an emotional intensity most of us can't imagine.
            </p>
          </div>
        </ResourceSection>

        {/* Understanding Emotional Regulation */}
        <ResourceSection bgColor="black">
          <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
              Understanding Emotional Regulation in ADHD
            </h2>
            <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed">
              <p>
                Emotional regulation involves multiple skills that children with ADHD find challenging: recognizing emotions in themselves and others, understanding what triggered the emotion, pausing before reacting, choosing an appropriate response, and shifting out of intense emotional states.
              </p>
              <p>
                Research shows that emotional development in children with ADHD lags approximately 30% behind their peers. A 10-year-old with ADHD might have the emotional regulation skills of a typically developing 7-year-old. This gap helps explain why your intelligent, capable child might have meltdowns that seem disproportionate to the situation—their emotional brain is genuinely younger than their chronological age.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary my-6">
                <p className="text-primary font-semibold mb-2">Important to Remember:</p>
                <p className="italic">
                  Delayed emotional development doesn't mean your child won't catch up. With support, practice, and understanding, emotional regulation skills continue to develop. Your patient, empathetic support during emotional moments is actually teaching these skills, even when it doesn't feel like it.
                </p>
              </div>
              <p>
                The good news? Emotional regulation can be taught and strengthened. Occupational therapy focuses on the physical and sensory aspects of emotional regulation—teaching children to recognize their body's signals, use sensory strategies to calm down, and develop tools for managing intense emotions. Combined with understanding and support from caregivers, children can develop healthier emotional regulation over time.
              </p>
            </div>
          </div>
        </ResourceSection>

        {/* Building Emotional Intelligence */}
        <ResourceSection bgColor="dark" title="Building Emotional Intelligence">
          <div className="space-y-8">
            <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed">
              <p>
                Emotional intelligence—the ability to understand and manage emotions—is a foundational skill for success in life. Here's how to help your child develop emotional intelligence:
              </p>
            </div>

            <ResourceCard icon={Smile} title="Emotion Identification">
              <p className="mb-3">
                Many children with ADHD struggle to identify what they're feeling. Emotions might feel like an undifferentiated "bad" or "good" without nuance.
              </p>
              <div className="bg-black/30 p-4 rounded-lg mt-3">
                <p className="text-primary font-semibold mb-2">Strategies to Help:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Use emotion charts with faces showing different feelings</li>
                  <li>• Name your own emotions frequently: "I'm feeling frustrated because..."</li>
                  <li>• Practice emotion charades—act out feelings and guess them</li>
                  <li>• Read books and discuss characters' emotions</li>
                  <li>• Create an emotions wheel to explore nuanced feelings</li>
                  <li>• Help connect physical sensations to emotions (butterflies = nervous)</li>
                </ul>
              </div>
            </ResourceCard>

            <ResourceCard icon={Heart} title="Emotion Validation">
              <p className="mb-3">
                Before children can manage emotions, they need to know all emotions are okay to feel. Validation doesn't mean accepting all behaviors, but it means accepting all feelings.
              </p>
              <div className="bg-black/30 p-4 rounded-lg mt-3">
                <p className="text-primary font-semibold mb-2">Validating Language:</p>
                <ul className="space-y-2 text-sm">
                  <li>• "I can see you're really upset right now"</li>
                  <li>• "It makes sense that you're frustrated"</li>
                  <li>• "That would make me angry too"</li>
                  <li>• "Your feelings are important"</li>
                  <li>• "It's okay to feel sad about this"</li>
                </ul>
                <p className="mt-3 italic text-white/70">
                  Avoid: "Don't be upset," "It's not a big deal," "You're overreacting"—these invalidate feelings and make emotional regulation harder.
                </p>
              </div>
            </ResourceCard>

            <ResourceCard icon={Shield} title="Coping Strategies">
              <p className="mb-3">
                Once children can identify emotions, they need tools to manage them. Different strategies work for different children and different situations.
              </p>
              <div className="bg-black/30 p-4 rounded-lg mt-3">
                <p className="text-primary font-semibold mb-2">Teach a Toolbox of Strategies:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Deep breathing techniques</li>
                  <li>• Movement breaks (running, jumping, dancing)</li>
                  <li>• Sensory tools (stress ball, putty, weighted blanket)</li>
                  <li>• Talking to a trusted person</li>
                  <li>• Drawing or journaling feelings</li>
                  <li>• Taking a break in a quiet space</li>
                  <li>• Listening to music</li>
                  <li>• Progressive muscle relaxation</li>
                </ul>
                <p className="mt-3 text-white/80">
                  Practice these strategies during calm times, not just during meltdowns. Create a "calm-down kit" together with tools your child chooses.
                </p>
              </div>
            </ResourceCard>
          </div>
        </ResourceSection>

        {/* Social Skills Development */}
        <ResourceSection bgColor="black" title="Social Skills and Friendship">
          <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed mb-8">
            <p>
              Making and keeping friends can be one of the most challenging aspects of ADHD. The same symptoms that affect academics and behavior also impact social relationships—impulsivity leads to interrupting or invading personal space, inattention means missing social cues, hyperactivity can overwhelm quieter peers, and emotional intensity might come across as dramatic or immature.
            </p>
            <p>
              Yet friendships are crucial for children's well-being and development. Children with ADHD want friends just as much as any child—sometimes the very symptoms that make friendships difficult also make them crave social connection even more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-bg/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading text-primary text-xl mb-4">Common Social Challenges</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Interrupting:</strong> Impulsivity makes waiting to speak incredibly difficult</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Missing social cues:</strong> Inattention means not noticing facial expressions, body language, or tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Difficulty with turn-taking:</strong> Executive function challenges make sharing and waiting hard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Intense reactions:</strong> Emotional regulation challenges can make conflicts escalate quickly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Talking too much about interests:</strong> Hyperfocus and enthusiasm can monopolize conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Physical boundaries:</strong> Poor spatial awareness and impulsivity can lead to invading personal space</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-bg/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border-2 border-primary/20">
              <h3 className="font-heading text-primary text-xl mb-4">Supporting Social Success</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Structured playdates:</strong> Short, planned activities prevent boredom and provide structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Pre-teach social scripts:</strong> Practice greetings, sharing, and conflict resolution before social situations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Find activity-based friendships:</strong> Shared interests provide natural conversation topics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Debrief after social time:</strong> Discuss what went well and what was challenging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Role-play scenarios:</strong> Practice responses to common social situations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Celebrate social successes:</strong> Notice and praise when your child navigates social situations well</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 p-6 md:p-8 rounded-lg border-l-4 border-primary mt-8">
            <p className="text-primary font-semibold mb-2">Remember:</p>
            <p className="text-white/90">
              Not every child needs a large friend group. Some children with ADHD thrive with one or two close friends who understand them. Quality matters more than quantity when it comes to friendships.
            </p>
          </div>
        </ResourceSection>

        {/* Building Resilience */}
        <ResourceSection bgColor="dark" title="Building Resilience and Self-Esteem">
          <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed mb-8">
            <p>
              Children with ADHD hear a lot of negative feedback. "Sit still." "Pay attention." "Stop interrupting." "Why can't you just..." Over time, this constant correction can significantly impact self-esteem. Many children with ADHD develop a belief that they're "bad kids" or that something is fundamentally wrong with them.
            </p>
            <p>
              Building resilience—the ability to bounce back from challenges—is crucial. Resilient children see setbacks as temporary, believe they can improve with effort, and maintain hope even when things are hard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard icon={Sparkles} title="Focus on Strengths">
              <p>
                Intentionally notice and comment on your child's strengths. ADHD often comes with creativity, energy, enthusiasm, humor, and passion. Point these out regularly. Help your child see themselves as more than their challenges.
              </p>
            </ResourceCard>

            <ResourceCard icon={HandHeart} title="Unconditional Love">
              <p>
                Make sure your child knows your love isn't conditional on behavior or achievement. Say "I love you" often. Show physical affection. Let them know they're valued for who they are, not what they accomplish.
              </p>
            </ResourceCard>

            <ResourceCard icon={Users} title="Find Their People">
              <p>
                Help your child find communities where they belong—sports teams, art classes, drama clubs, gaming groups, or special interest communities. Belonging builds self-esteem and provides social support.
              </p>
            </ResourceCard>

            <ResourceCard title="Teach Growth Mindset">
              <p>
                Help your child understand that abilities grow with practice. Mistakes are learning opportunities. Instead of "I can't," encourage "I can't YET." Praise effort and strategies, not just outcomes.
              </p>
            </ResourceCard>

            <ResourceCard title="Celebrate Small Wins">
              <p>
                Don't wait for big achievements. Notice and celebrate the small daily victories—starting homework on time, managing frustration well, using a strategy successfully, being kind to a sibling.
              </p>
            </ResourceCard>

            <ResourceCard title="Model Self-Compassion">
              <p>
                Show your child how you handle your own mistakes with kindness. "I forgot that appointment. That's frustrating, but everyone forgets things sometimes. I'll put a reminder in my phone." This teaches self-compassion.
              </p>
            </ResourceCard>
          </div>
        </ResourceSection>

        {/* Family Support */}
        <ResourceSection bgColor="black">
          <div className="bg-gradient-to-b from-dark-bg to-black-bg p-8 md:p-12 rounded-xl border-2 border-primary/30 shadow-glow">
            <h2 className="font-heading uppercase text-primary text-2xl md:text-3xl tracking-heading mb-6">
              Family Dynamics and Sibling Relationships
            </h2>
            <div className="space-y-6 text-white/90 font-body text-lg leading-relaxed">
              <p>
                ADHD affects the whole family, not just the child with the diagnosis. Siblings might feel overlooked when their brother or sister with ADHD needs extra attention and support. Parents often feel exhausted from managing challenging behaviors while worrying about being fair to all their children.
              </p>
              <p>
                These feelings are valid and common. Acknowledge the impact on the whole family while also recognizing that every family member has different needs. "Fair" doesn't always mean "equal"—it means each person gets what they need to thrive.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary my-6">
                <p className="text-primary font-semibold mb-2">For Siblings:</p>
                <ul className="space-y-2">
                  <li>• Create one-on-one time with each child regularly</li>
                  <li>• Acknowledge siblings' feelings without making them feel guilty</li>
                  <li>• Help siblings understand ADHD without using it as an excuse</li>
                  <li>• Celebrate each child's unique strengths and interests</li>
                  <li>• Ensure siblings aren't taking on parental roles (like constant monitoring)</li>
                </ul>
              </div>
              <p>
                Remember to take care of yourself too. Parenting a child with ADHD is demanding. Seek support from other parents, take breaks when possible, and don't hesitate to ask for help. You can't pour from an empty cup.
              </p>
              <p className="text-primary font-semibold text-xl">
                With understanding, support, and the right strategies, children with ADHD can develop strong emotional regulation skills, meaningful friendships, and unshakable resilience.
              </p>
            </div>
          </div>
        </ResourceSection>

        <ResourceCTA />
      </div>
    </PageTransition>
  );
};

export default SocialEmotionalPage;
