import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ResourceBreadcrumbProps {
  resourceTitle: string;
}

export const ResourceBreadcrumb = ({ resourceTitle }: ResourceBreadcrumbProps) => {
  return (
    <nav className="container mx-auto px-4 lg:px-8 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm font-body">
        <li>
          <Link
            to="/resources"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            Resources
          </Link>
        </li>
        <li>
          <ChevronRight className="text-white/50" size={16} />
        </li>
        <li className="text-foreground/70">{resourceTitle}</li>
      </ol>
    </nav>
  );
};
