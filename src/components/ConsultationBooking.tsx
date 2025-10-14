import { useState, useEffect } from 'react';
import { format, parseISO, isSameDay } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Calendar, Clock } from 'lucide-react';
import { api } from '@/services/api';
import type { AvailabilitySlot, Appointment } from '@/services/api';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface ConsultationBookingProps {
  onBookingComplete?: (appointment: Appointment) => void;
}

export const ConsultationBooking = ({ onBookingComplete }: ConsultationBookingProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<AvailabilitySlot | null>(null);
  const [availableSlots, setAvailableSlots] = useState<AvailabilitySlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  // Fetch available slots when date is selected
  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots([]);
      return;
    }

    const fetchAvailability = async () => {
      setIsLoadingSlots(true);
      setSelectedSlot(null);
      
      try {
        const dateStr = format(selectedDate, 'yyyy-MM-dd');
        const slots = await api.get<AvailabilitySlot[]>(
          `/appointments/availability?date=${dateStr}&type=consultation`
        );
        setAvailableSlots(slots || []);
      } catch (error) {
        console.error('Failed to fetch availability:', error);
        setAvailableSlots([]);
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchAvailability();
  }, [selectedDate]);

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedSlot || !selectedDate) {
      toast({
        title: 'Error',
        description: 'Please select a date and time slot',
        variant: 'destructive',
      });
      return;
    }

    setIsBooking(true);

    try {
      const appointment = await api.post<Appointment>('/appointments/book', {
        type: 'consultation',
        startTime: selectedSlot.start,
        endTime: selectedSlot.end,
        clientName: data.name,
        clientEmail: data.email,
        clientPhone: data.phone || '',
        notes: data.notes || '',
      });

      toast({
        title: 'Booking Confirmed!',
        description: `Your consultation is scheduled for ${format(parseISO(selectedSlot.start), 'PPP p')}`,
      });

      reset();
      setSelectedDate(undefined);
      setSelectedSlot(null);

      if (onBookingComplete) {
        onBookingComplete(appointment);
      }
    } catch (error) {
      console.error('Booking error:', error);
      // Error toast is shown by API client
    } finally {
      setIsBooking(false);
    }
  };

  // Disable past dates
  const disabledDays = [
    { before: new Date() },
  ];

  return (
    <div className="space-y-8">
      {/* Step 1: Select Date */}
      <div>
        <h3 className="font-heading text-primary text-xl mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Step 1: Select a Date
        </h3>
        <div className="bg-card rounded-lg p-6 border-2 border-primary/20">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={disabledDays}
            className="mx-auto"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center text-foreground",
              caption_label: "text-sm font-medium",
              nav: "space-x-1 flex items-center",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-primary/10 rounded-md",
              day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "text-muted-foreground opacity-50",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
          />
        </div>
      </div>

      {/* Step 2: Select Time Slot */}
      {selectedDate && (
        <div>
          <h3 className="font-heading text-primary text-xl mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Step 2: Select a Time
          </h3>
          <div className="bg-card rounded-lg p-6 border-2 border-primary/20">
            {isLoadingSlots ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {availableSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-3 rounded-lg border-2 transition-all font-body ${
                      selectedSlot === slot
                        ? 'bg-primary text-white border-primary'
                        : 'bg-background border-primary/30 hover:border-primary hover:bg-primary/10'
                    }`}
                  >
                    {format(parseISO(slot.start), 'h:mm a')}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No available slots for this date. Please select another date.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Your Information */}
      {selectedSlot && (
        <div>
          <h3 className="font-heading text-primary text-xl mb-4">
            Step 3: Your Information
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-lg p-6 border-2 border-primary/20 space-y-4">
            <div className="bg-primary/10 p-4 rounded-lg mb-4">
              <p className="text-sm font-body">
                <strong>Selected:</strong> {format(selectedDate!, 'EEEE, MMMM d, yyyy')} at {format(parseISO(selectedSlot.start), 'h:mm a')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="booking-name">Name *</Label>
                <Input
                  id="booking-name"
                  {...register('name')}
                  disabled={isBooking}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="booking-email">Email *</Label>
                <Input
                  id="booking-email"
                  type="email"
                  {...register('email')}
                  disabled={isBooking}
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="booking-phone">Phone (optional)</Label>
              <Input
                id="booking-phone"
                type="tel"
                {...register('phone')}
                disabled={isBooking}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="booking-notes">Notes (optional)</Label>
              <Textarea
                id="booking-notes"
                {...register('notes')}
                disabled={isBooking}
                rows={3}
                className="mt-1"
                placeholder="Anything we should know before the consultation?"
              />
            </div>

            <Button
              type="submit"
              disabled={isBooking}
              className="w-full bg-primary hover:bg-primary-hover uppercase font-heading text-lg py-6"
            >
              {isBooking ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  BOOKING...
                </>
              ) : (
                'CONFIRM BOOKING'
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
