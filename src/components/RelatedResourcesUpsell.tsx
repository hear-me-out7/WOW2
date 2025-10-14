import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RelatedResource {
  title: string;
  description: string;
  link: string;
  icon: 'brain' | 'heart' | 'target';
}

interface RelatedResourcesUpsellProps {
  resources: RelatedResource[];
  className?: string;
}

const iconMap = {
  brain: Brain,
  heart: Heart,
  target: Target,
};

export default function RelatedResourcesUpsell({
  resources,
  className = '',
}: RelatedResourcesUpsellProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Want More Strategies?
        </h2>
        <p className="text-gray-600">
          Check out these related resources for additional support
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource, index) => {
          const Icon = iconMap[resource.icon];

          return (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {resource.description}
              </p>

              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-primary group-hover:gap-2 transition-all"
              >
                <Link to={resource.link}>
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Button asChild variant="outline" size="lg">
          <Link to="/resources">
            View All Resources
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
