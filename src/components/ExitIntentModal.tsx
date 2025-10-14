import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const leadMagnetSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
});

type LeadMagnetForm = z.infer<typeof leadMagnetSchema>;

const STORAGE_KEY = 'exitIntentShown';
const EXIT_INTENT_DELAY = 1000; // Delay before showing (ms)

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadMagnetForm>({
    resolver: zodResolver(leadMagnetSchema),
  });

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem(STORAGE_KEY);
    if (shown) {
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page (common exit behavior)
      if (e.clientY <= 0 && !hasShown) {
        timeoutId = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem(STORAGE_KEY, 'true');
        }, EXIT_INTENT_DELAY);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const onSubmit = async (data: LeadMagnetForm) => {
    setIsSubmitting(true);
    try {
      await api.post('/lead-magnets/download', {
        name: data.name,
        email: data.email,
        magnet: 'adhd-guide',
      });

      toast({
        title: 'Success! Check your email',
        description: "We've sent your free ADHD guide to your inbox.",
      });

      setIsOpen(false);
    } catch (error) {
      // Error already handled by api client
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px]">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            Wait! Before you go...
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Download our <span className="font-semibold">free ADHD Parent Guide</span> with practical strategies you can use today.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-primary/5 p-4 rounded-lg my-4">
          <h4 className="font-semibold mb-2">What's inside:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>5 evidence-based strategies for managing ADHD behaviors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Daily routine templates that actually work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Sensory activities to help your child focus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Communication tips for school and home</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="exit-name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              {...register('name')}
              id="exit-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="exit-email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              {...register('email')}
              id="exit-email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Download Free Guide'}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
