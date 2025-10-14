import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api, type Lead } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const quickContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type QuickContactForm = z.infer<typeof quickContactSchema>;

export default function FloatingActionButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuickContactForm>({
    resolver: zodResolver(quickContactSchema),
  });

  const onSubmit = async (data: QuickContactForm) => {
    setIsSubmitting(true);
    try {
      await api.post<Lead>('/leads', {
        name: data.name,
        email: data.email,
        message: data.message,
        interestedIn: 'general',
        leadSource: 'floating_action_button',
      });

      toast({
        title: 'Message sent!',
        description: "We'll get back to you within 24 hours.",
      });

      reset();
      setIsContactOpen(false);
      setIsMenuOpen(false);
    } catch (error) {
      // Error already handled by api client
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = '(780) 555-0123'; // TODO: Replace with actual number

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        {/* Menu Options - appear when open */}
        {isMenuOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Button
              asChild
              className="shadow-lg hover:shadow-xl transition-shadow"
              size="lg"
            >
              <Link
                to="/consultation"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>

            <Button
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="shadow-lg hover:shadow-xl transition-shadow"
              size="lg"
              variant="secondary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask a Question
            </Button>

            <Button
              asChild
              className="shadow-lg hover:shadow-xl transition-shadow"
              size="lg"
              variant="outline"
            >
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Us: {phoneNumber}
              </a>
            </Button>
          </div>
        )}

        {/* Main FAB Button */}
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size="lg"
          className={`h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all ${
            !isMenuOpen && 'animate-pulse'
          }`}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Quick Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Quick Question?</DialogTitle>
            <DialogDescription>
              Send us a message and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="How can we help you?"
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex gap-3 justify-end pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
