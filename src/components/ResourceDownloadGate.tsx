import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
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
import { api } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

interface ResourceDownloadGateProps {
  resourceTitle: string;
  resourceDescription?: string;
  magnetId?: 'adhd-guide' | 'sensory-checklist' | 'executive-function-tips' | 'breathing-exercises';
  className?: string;
}

const downloadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
});

type DownloadForm = z.infer<typeof downloadSchema>;

export default function ResourceDownloadGate({
  resourceTitle,
  resourceDescription = 'Download this guide as a PDF for easy reference',
  magnetId = 'adhd-guide',
  className = '',
}: ResourceDownloadGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DownloadForm>({
    resolver: zodResolver(downloadSchema),
  });

  const onSubmit = async (data: DownloadForm) => {
    setIsSubmitting(true);
    try {
      await api.post('/lead-magnets/download', {
        name: data.name,
        email: data.email,
        magnet: magnetId,
      });

      toast({
        title: 'Success! Check your email',
        description: `We've sent ${resourceTitle} to your inbox.`,
      });

      reset();
      setIsOpen(false);
    } catch (error) {
      // Error already handled by api client
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className={`bg-gradient-to-r from-primary/10 to-purple-100 rounded-lg p-6 border-2 border-primary/30 ${className}`}
      >
        <div className="flex items-start gap-4">
          <div className="bg-primary rounded-full p-3 flex-shrink-0">
            <FileText className="h-6 w-6 text-white" />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2">
              Download This Guide as PDF
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {resourceDescription}
            </p>

            <Button onClick={() => setIsOpen(true)} className="gap-2">
              <Download className="h-4 w-4" />
              Get Free PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Download {resourceTitle}</DialogTitle>
            <DialogDescription>
              Enter your email and we'll send you the PDF guide immediately.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label htmlFor="download-name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                {...register('name')}
                id="download-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="download-email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                {...register('email')}
                id="download-email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-gray-600">
                <strong>What you'll get:</strong>
              </p>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>✓ Instant PDF delivery to your inbox</li>
                <li>✓ Helpful tips and strategies</li>
                <li>✓ No spam, unsubscribe anytime</li>
              </ul>
            </div>

            <div className="flex gap-3 justify-end pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Me the PDF'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
