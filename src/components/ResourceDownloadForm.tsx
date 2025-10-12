import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileDown, CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

type FormData = z.infer<typeof formSchema>;

const ResourceDownloadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/downloads/reflexes-adhd-handout.pdf';
      link.download = 'ADHD-Reflexes-WOW-Handout.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Download error:', error);
      
      toast({
        title: "Download Failed",
        description: "Unable to download the PDF. Please try again or contact us for assistance.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-dark-bg/80 backdrop-blur-sm p-8 rounded-xl border-2 border-primary/30 text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-heading uppercase text-primary text-2xl mb-2">Success!</h3>
        <p className="text-white/90 font-body text-lg">
          Your download should start automatically. Check your downloads folder!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-dark-bg/80 backdrop-blur-sm p-8 rounded-xl border-2 border-primary/30">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <FileDown className="text-primary" size={32} />
        </div>
        <div>
          <h3 className="font-heading uppercase text-primary text-2xl">
            Free ADHD Resource
          </h3>
          <p className="text-white/70 font-body">
            ADHD - Being Hung Up on Reflexes
          </p>
        </div>
      </div>

      <p className="text-white/90 font-body mb-6 leading-relaxed">
        Discover the connection between primitive reflexes and ADHD symptoms. Learn practical strategies to support your child's development and success.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="resource-name" className="text-white font-body mb-2 block">
            Name *
          </Label>
          <Input
            id="resource-name"
            {...register('name')}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "resource-name-error" : undefined}
            className="bg-black-bg/50 border-primary/30 text-white font-body focus:border-primary min-h-[44px]"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="resource-name-error" className="text-red-400 text-sm mt-1 font-body" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="resource-email" className="text-white font-body mb-2 block">
            Email *
          </Label>
          <Input
            id="resource-email"
            type="email"
            {...register('email')}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "resource-email-error" : undefined}
            className="bg-black-bg/50 border-primary/30 text-white font-body focus:border-primary min-h-[44px]"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p id="resource-email-error" className="text-red-400 text-sm mt-1 font-body" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase text-lg min-h-[44px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Download Free Resource'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ResourceDownloadForm;
