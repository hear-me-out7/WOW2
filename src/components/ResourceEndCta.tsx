import { Link } from 'react-router-dom';
import { Calendar, BookOpen, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResourceEndCta() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 my-12 border border-primary/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          These strategies are just the beginning. Get personalized support tailored to your child's unique needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Path A: Consultation */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Not Sure Where to Start?</h3>
          </div>

          <p className="text-gray-600 mb-6">
            Book a free consultation to discuss your child's challenges and get expert guidance on the best path forward.
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Free 15-minute intro call</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Personalized recommendations</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>No obligation to enroll</span>
            </li>
          </ul>

          <Button asChild className="w-full" size="lg">
            <Link to="/consultation">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Path B: Program */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 rounded-full p-3">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold">Ready to Dive In?</h3>
          </div>

          <p className="text-gray-600 mb-6">
            Enroll in the WOW Program today and start seeing real, lasting change in just 6 weeks.
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Structured 6-week program</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Evidence-based strategies</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>200+ families helped</span>
            </li>
          </ul>

          <Button asChild variant="outline" className="w-full" size="lg">
            <Link to="/program">
              Explore WOW Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-8 max-w-3xl mx-auto bg-white/50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              J
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 italic mb-2">
              "After just 3 weeks in the WOW Program, we saw dramatic improvements. My son went from daily meltdowns to completing homework independently. The strategies we learned have been life-changing for our entire family!"
            </p>
            <p className="text-sm font-semibold text-gray-900">
              - Jennifer, mother of two
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
