import { useState } from 'react';
import { Button } from '@/components/ui/button';
import lindsayHeadshot from '@/assets/lindsay-headshot.webp';
import erinHeadshot from '@/assets/erin-headshot.webp';

const TeamPage = () => {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  const teamMembers = [
    {
      id: 'lindsay',
      name: 'Lindsay',
      title: 'Passionate about Potential',
      image: lindsayHeadshot,
      shortBio: 'A seasoned pediatric Occupational Therapist with 20 years dedicated to making a difference in the lives of children. With a vibrant and adventurous spirit, Lindsay brings infectious energy and playful touches to breaking down barriers.',
      fullBio: `Introducing Lindsay, a seasoned pediatric Occupational Therapist with an impressive 20-year journey dedicated to making a difference in the lives of children. With a vibrant and adventurous spirit, Lindsay has navigated through the diverse landscape of schools, leaving a trail of joy and success with every step.

Lindsay's professional passion spans across all age groups, from the delightful preschoolers to the dynamic high school crowd, and includes learners of all abilities, including those with complex needs. Her infectious energy brings a playful touch to the serious business of breaking down barriers and solving challenges.

Driven by a deep passion for empowering children with ADHD, Lindsay is committed to sprinkling joy, fostering a sense of belonging, and charting a path towards success for every child. Witnessing the unmistakable spark in a child's eye when they conquer new challenges is what fuels Lindsay's dedication to creating impactful therapeutic experiences. Because every child, no matter their challenges, deserves that feeling of accomplishment.

At WOW, we're not here to change kids – they're already rockstars! Instead, we're all about empowering each child to recognize their strengths and navigate their unique path. Think of it like having a toolbox full of super cool tools. Together, we'll explore strategies and tweak tasks and environments to ensure success. It's not about fixing, it's about unleashing potential!

Embark on an adventure with WOW, where laughter, learning, and countless "WOW" moments await. At WOW, you can trust that your child will be empowered to shine and showcase their true awesomeness to the world.`,
    },
    {
      id: 'erin',
      name: 'Erin',
      title: 'The Warrior of Advocacy',
      image: erinHeadshot,
      shortBio: 'A seasoned occupational therapist with over two decades of unwavering dedication to helping children soar to new heights. A true guardian of strengths who guides children to unlock their potential.',
      fullBio: `Introducing Erin, a seasoned occupational therapist with over two decades of unwavering dedication to helping children soar to new heights. Erin is a true guardian of strengths, who guides children to unlock their potential and proudly advocate for themselves in a world where every step is an adventure waiting to be conquered. She's not just an occupational therapist; she's a compass that helps children navigate the landscapes of challenges and rewards that life presents.

Erin's experience spans across children of various abilities and diagnoses, and she's here to break down the barriers that often surround ADHD. Erin knows firsthand the towering obstacles that children with ADHD face, the toll these challenges take on their self-esteem, and the uncharted territories that families traverse in search of effective support.

Erin's dedication extends beyond the therapy room. She's not just here to teach skills; she's here to empower young adventurers with the tools to conquer their everyday battles and revel in their victories. Erin envisions a world where children with ADHD rise above their challenges, not just surviving, but thriving with unshakable confidence.

So, if you're ready to set forth on a journey where success is the destination, guided by a trailblazer who's seen it all, Erin is your guiding star. At WOW occupational therapy, children not only dream but conquer, and families find the unwavering support they've been seeking.`,
    },
  ];

  return (
    <div className="min-h-screen bg-black-bg">
      {/* Header */}
      <section className="bg-gradient-to-b from-dark-bg to-black-bg py-16 md:py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading uppercase text-primary text-4xl md:text-6xl tracking-heading-lg text-center drop-shadow-glow">
            MEET THE TEAM
          </h1>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-black-bg py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-dark-bg/50 backdrop-blur-sm p-8 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(80,200,120,0.6)] hover:border-primary-hover group cursor-pointer">
                  <img 
                    src={member.image}
                    alt={`Professional headshot of ${member.name}, Occupational Therapist`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h2 className="font-heading uppercase text-primary text-2xl text-center mb-2">
                  {member.name}
                </h2>
                <p className="font-body text-white/70 text-center mb-4">{member.title}</p>

                <p className="font-body text-white leading-relaxed mb-4">
                  {expandedBio === member.id ? member.fullBio : member.shortBio}
                </p>

                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => setExpandedBio(expandedBio === member.id ? null : member.id)}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    {expandedBio === member.id ? 'Show Less' : 'Read More'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;