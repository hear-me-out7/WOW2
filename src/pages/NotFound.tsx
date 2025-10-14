import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
            <AlertCircle className="text-primary" size={64} />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="font-heading uppercase text-primary text-8xl md:text-9xl tracking-heading-lg mb-4 drop-shadow-glow">
          404
        </h1>
        
        {/* Message */}
        <h2 className="font-heading uppercase text-white text-2xl md:text-3xl mb-4">
          PAGE NOT FOUND
        </h2>
        
        <p className="text-white/80 font-body text-lg md:text-xl mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* CTA */}
        <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8 py-6 uppercase font-heading shadow-glow">
          <Link to="/">
            <Home className="mr-2" size={20} />
            RETURN TO HOME
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
