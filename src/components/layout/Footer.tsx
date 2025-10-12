import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black-bg border-t border-white/10 py-8 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="font-body text-gray-400 text-sm">
            © {new Date().getFullYear()} WOW ADHD Occupational Therapy. All rights reserved.
          </div>
          <div className="font-body text-gray-500 text-xs">
            1940 6 Avenue NW, Calgary, Alberta T2N 0W3, Canada
          </div>
        </div>
      </div>
    </footer>
  );
};