import { Link } from 'react-router-dom';
import { Calendar, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceInlineCtaProps {
  variant?: 'consultation' | 'program' | 'contact';
  message?: string;
  className?: string;
}

export default function ResourceInlineCta({
  variant = 'consultation',
  message,
  className = '',
}: ResourceInlineCtaProps) {
  const variants = {
    consultation: {
      icon: Calendar,
      title: 'Struggling with these challenges?',
      defaultMessage:
        "Let's create a personalized plan for your child. Book a free consultation to discuss strategies tailored to your family's needs.",
      buttonText: 'Book Free Consultation',
      link: '/consultation',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
    },
    program: {
      icon: BookOpen,
      title: 'Ready for lasting change?',
      defaultMessage:
        'Our 6-week WOW Program provides structured, evidence-based support that creates real transformation for families like yours.',
      buttonText: 'Explore WOW Program',
      link: '/program',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600',
    },
    contact: {
      icon: MessageCircle,
      title: 'Have questions?',
      defaultMessage:
        "We're here to help! Reach out with any questions about these strategies or how we can support your family.",
      buttonText: 'Contact Us',
      link: '/connect',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-lg p-6 my-8 ${className}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`${config.iconColor} bg-white rounded-full p-3 flex-shrink-0`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">{config.title}</h4>
          <p className="text-gray-700 text-sm mb-4">
            {message || config.defaultMessage}
          </p>

          <Button asChild size="sm" className="mt-2">
            <Link to={config.link}>{config.buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
