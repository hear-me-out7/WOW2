import { Link } from 'react-router-dom';
import FooterMiniForm from '@/components/FooterMiniForm';

export const Footer = () => {
  return (
    <footer className="bg-black-bg border-t border-white/10 py-12 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About WOW Therapy</h3>
            <p className="text-white/70 text-sm mb-4">
              Helping families thrive with evidence-based occupational therapy for ADHD and related challenges.
            </p>
            <div className="text-white/70 text-sm">
              <p>1940 6 Avenue NW</p>
              <p>Calgary, Alberta T2N 0W3</p>
              <p>Canada</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-white/70 hover:text-white transition-colors">
                  WOW Program
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-white/70 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/70 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <FooterMiniForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <div className="font-body text-white/70 text-sm">
            © {new Date().getFullYear()} WOW ADHD Occupational Therapy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};