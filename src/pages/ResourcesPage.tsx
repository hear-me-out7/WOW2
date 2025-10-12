import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, Activity, Wind, Heart, Lightbulb } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ResourceDownloadForm from '@/components/ResourceDownloadForm';

const ResourcesPage = () => {
  const resources = [
    {
      title: 'ADHD & OT',
      icon: FileText,
      description: 'Understanding how occupational therapy supports children with ADHD',
      link: '/resources/adhd-and-ot',
    },
    {
      title: 'Executive Functioning',
      icon: BookOpen,
      description: 'Strategies to improve planning, organization, and time management',
      link: '/resources/executive-functioning',
    },
    {
      title: 'Sensory Motor',
      icon: Activity,
      description: 'Activities to support sensory processing and motor development',
      link: '/resources/sensory-motor',
    },
    {
      title: 'Breath & Posture',
      icon: Wind,
      description: 'Techniques for body awareness and self-regulation',
      link: '/resources/breath-and-posture',
    },
    {
      title: 'Social Emotional',
      icon: Heart,
      description: 'Building emotional intelligence and social skills',
      link: '/resources/social-emotional',
    },
    {
      title: 'Tips & Tricks',
      icon: Lightbulb,
      description: 'Practical daily strategies for parents and caregivers',
      link: '/resources/tips-and-tricks',
    },
  ];

  const faqs = [
    {
      question: 'What is occupational therapy for ADHD?',
      answer: 'Occupational therapy for ADHD focuses on helping children develop the skills they need for daily activities, including self-regulation, executive function, social interaction, and motor skills. Our therapists work with children to create personalized strategies that support their unique strengths and challenges.',
    },
    {
      question: 'How long does the WOW Program last?',
      answer: 'The WOW Program runs for 6 weeks, with one 60-minute group session per week. The program includes an initial parent consultation, weekly sessions, and a follow-up consultation to discuss progress and next steps.',
    },
    {
      question: 'What age group is the program designed for?',
      answer: 'Our WOW Program is designed for children with ADHD, typically between ages 6-12. We create small groups based on age and developmental level to ensure the best peer interactions and learning experiences.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We provide detailed receipts that you can submit to your insurance provider for reimbursement. Many extended health insurance plans cover occupational therapy services. We recommend checking with your insurance provider about your specific coverage.',
    },
    {
      question: 'Can I observe the sessions?',
      answer: 'We find that children engage best when parents are not in the therapy space. However, we provide regular updates and include parent consultations at the beginning and end of the program to ensure you\'re informed about your child\'s progress and strategies being used.',
    },
    {
      question: 'What if my child misses a session?',
      answer: 'We understand that life happens! Please contact us as soon as possible if your child needs to miss a session. While we cannot offer make-up sessions for group programs, we can provide you with materials and strategies to practice at home.',
    },
  ];

  return (
    <div className="min-h-screen bg-black-bg">
      {/* Header */}
      <section className="bg-gradient-to-b from-dark-bg to-black-bg py-16 md:py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading uppercase text-primary text-4xl md:text-6xl tracking-heading-lg text-center drop-shadow-glow">
            RESOURCES
          </h1>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="bg-black-bg py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-bg/50 backdrop-blur-sm p-8 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 h-full flex flex-col"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading uppercase text-primary text-xl mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-white/70 font-body mb-4 flex-grow">
                    {resource.description}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary-hover text-white uppercase font-body"
                  >
                    <Link to={resource.link}>Read More</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Resource Download */}
      <section className="bg-black-bg py-16 md:py-24 border-t-4 border-primary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ResourceDownloadForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-dark-bg py-16 md:py-24 border-t-4 border-primary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading uppercase text-primary text-3xl md:text-4xl text-center mb-12">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black-bg/50 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="font-body text-white text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-white/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;