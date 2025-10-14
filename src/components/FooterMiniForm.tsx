import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { api, type Lead } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const footerFormSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FooterForm = z.infer<typeof footerFormSchema>;

export default function FooterMiniForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FooterForm>({
    resolver: zodResolver(footerFormSchema),
  });

  const onSubmit = async (data: FooterForm) => {
    setIsSubmitting(true);
    try {
      await api.post<Lead>('/leads', {
        name: '', // Optional for footer form
        email: data.email,
        message: data.message,
        interestedIn: 'general',
        leadSource: 'footer_form',
      });

      toast({
        title: 'Message sent!',
        description: "We'll respond within 24 hours.",
      });

      reset();
    } catch (error) {
      // Error already handled by api client
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Quick Question?</h3>
      <p className="text-sm text-gray-600 mb-4">
        Send us a message and we'll get back to you soon.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Your message..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
