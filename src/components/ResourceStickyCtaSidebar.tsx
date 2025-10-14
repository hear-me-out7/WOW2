import { Link } from 'react-router-dom';
import { Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResourceStickyCtaSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-6">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/30">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Find These Tips Helpful?</h3>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Get personalized strategies tailored to your child's unique needs.
          </p>

          <div className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <Link to="/consultation">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full" size="lg">
              <Link to="/program">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore WOW Program
              </Link>
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-sm font-semibold text-primary">
                200+
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                Families Helped
              </p>
              <p className="text-xs text-gray-600">
                95% satisfaction rate
              </p>
            </div>
          </div>

          <div className="text-xs text-gray-500 italic border-l-2 border-primary/30 pl-3 mt-3">
            "The strategies we learned have been life-changing for our family."
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">
            Quick Links:
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/team" className="text-primary hover:underline">
                Meet Our Team →
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-primary hover:underline">
                More Resources →
              </Link>
            </li>
            <li>
              <Link to="/connect" className="text-primary hover:underline">
                Contact Us →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
