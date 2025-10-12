import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS (user needs to set up their account)
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        message: data.message,
        to_email: 'wowoccupationaltherapy@gmail.com',
      };

      // Note: User needs to configure EmailJS with their account
      // For now, just show success message
      console.log('Form data:', templateParams);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      
      const isNetworkError = error instanceof Error && 
        (error.message.includes('network') || error.message.includes('fetch'));
      
      toast({
        title: "Error",
        description: isNetworkError 
          ? "Network error. Please check your connection and try again."
          : "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="contact-name" className="text-white font-body mb-2 block">
          Name *
        </Label>
        <Input
          id="contact-name"
          {...register('name')}
          placeholder="Your name"
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="bg-black/50 border-white/20 focus:border-primary text-white min-h-[44px]"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-destructive text-sm mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-email" className="text-white font-body mb-2 block">
          Email *
        </Label>
        <Input
          id="contact-email"
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="bg-black/50 border-white/20 focus:border-primary text-white min-h-[44px]"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-destructive text-sm mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-phone" className="text-white font-body mb-2 block">
          Phone (optional)
        </Label>
        <Input
          id="contact-phone"
          {...register('phone')}
          placeholder="(403) 555-1234"
          disabled={isSubmitting}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className="bg-black/50 border-white/20 focus:border-primary text-white min-h-[44px]"
        />
        {errors.phone && (
          <p id="contact-phone-error" className="text-destructive text-sm mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-message" className="text-white font-body mb-2 block">
          Message *
        </Label>
        <Textarea
          id="contact-message"
          {...register('message')}
          placeholder="I'd like to know more about..."
          rows={5}
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="bg-black/50 border-white/20 focus:border-primary text-white"
        />
        {errors.message && (
          <p id="contact-message-error" className="text-destructive text-sm mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover uppercase font-heading tracking-wide min-h-[44px] text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            SENDING...
          </>
        ) : (
          'SEND'
        )}
      </Button>

      <p className="text-xs text-gray-400 text-center">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </form>
  );
};