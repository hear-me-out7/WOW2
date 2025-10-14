import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Check } from 'lucide-react';
import { api } from '@/services/api';
import type { Enrollment } from '@/services/api';

const enrollmentSchema = z.object({
  parentName: z.string().min(2, 'Parent name is required'),
  parentEmail: z.string().email('Invalid email'),
  parentPhone: z.string().min(10, 'Phone number is required'),
  childName: z.string().min(2, 'Child name is required'),
  childAge: z.string().min(1, 'Child age is required'),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms',
  }),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

interface ProgramEnrollmentFormProps {
  programId: string;
  programName: string;
  programPrice: number;
  depositAmount: number;
  installmentAmount: number;
  installmentCount: number;
  onEnrollmentComplete?: (enrollment: Enrollment) => void;
}

export const ProgramEnrollmentForm = ({
  programId,
  programName,
  programPrice,
  depositAmount,
  installmentAmount,
  installmentCount,
  onEnrollmentComplete,
}: ProgramEnrollmentFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true);

    try {
      const enrollment = await api.post<Enrollment>('/programs/enroll', {
        programId,
        parentName: data.parentName,
        parentEmail: data.parentEmail,
        parentPhone: data.parentPhone,
        childName: data.childName,
        childAge: parseInt(data.childAge),
      });

      toast({
        title: 'Enrollment Submitted!',
        description: `You'll receive an email with payment instructions for the $${depositAmount} deposit.`,
      });

      if (onEnrollmentComplete) {
        onEnrollmentComplete(enrollment);
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      // Error toast shown by API client
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-primary/10 p-6 rounded-lg">
        <h3 className="font-heading text-primary text-xl mb-4">
          Enroll in {programName}
        </h3>
        <div className="space-y-2 text-foreground font-body">
          <p><strong>Total Investment:</strong> ${programPrice}</p>
          <p><strong>Deposit:</strong> ${depositAmount} (due at enrollment)</p>
          {installmentCount > 0 && (
            <p>
              <strong>Monthly Installments:</strong> ${installmentAmount} × {installmentCount} payments
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-4">
            * Deposit is non-refundable. Payment link will be sent via email.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h4 className="font-heading text-primary text-lg">Parent/Guardian Information</h4>
          
          <div>
            <Label htmlFor="parent-name">Name *</Label>
            <Input
              id="parent-name"
              {...register('parentName')}
              disabled={isSubmitting}
              className="mt-1"
            />
            {errors.parentName && (
              <p className="text-destructive text-sm mt-1">{errors.parentName.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parent-email">Email *</Label>
              <Input
                id="parent-email"
                type="email"
                {...register('parentEmail')}
                disabled={isSubmitting}
                className="mt-1"
              />
              {errors.parentEmail && (
                <p className="text-destructive text-sm mt-1">{errors.parentEmail.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="parent-phone">Phone *</Label>
              <Input
                id="parent-phone"
                type="tel"
                {...register('parentPhone')}
                disabled={isSubmitting}
                className="mt-1"
                placeholder="(403) 555-1234"
              />
              {errors.parentPhone && (
                <p className="text-destructive text-sm mt-1">{errors.parentPhone.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading text-primary text-lg">Child Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="child-name">Child's Name *</Label>
              <Input
                id="child-name"
                {...register('childName')}
                disabled={isSubmitting}
                className="mt-1"
              />
              {errors.childName && (
                <p className="text-destructive text-sm mt-1">{errors.childName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="child-age">Child's Age *</Label>
              <Input
                id="child-age"
                type="number"
                {...register('childAge')}
                disabled={isSubmitting}
                className="mt-1"
                min="6"
                max="12"
              />
              {errors.childAge && (
                <p className="text-destructive text-sm mt-1">{errors.childAge.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="terms"
            {...register('terms')}
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 rounded border-gray-300"
          />
          <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
            I accept the terms and conditions. I understand the $${depositAmount} deposit is non-refundable and secures my child's spot in the program. *
          </Label>
        </div>
        {errors.terms && (
          <p className="text-destructive text-sm">{errors.terms.message}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-hover uppercase font-heading text-lg py-6"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              SUBMITTING...
            </>
          ) : (
            <>
              <Check className="mr-2 h-5 w-5" />
              ENROLL NOW
            </>
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          After enrollment, you'll receive a payment link via email to complete your ${depositAmount} deposit.
        </p>
      </form>
    </div>
  );
};
