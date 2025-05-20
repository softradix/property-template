"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, addDays } from 'date-fns';
import { CalendarIcon, MinusCircle, PlusCircle, Check } from 'lucide-react';
import { Property } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ReservationFormProps {
  property: Property;
}

export default function ReservationForm({ property }: ReservationFormProps) {
  const [date, setDate] = useState<Date[]>([new Date(), addDays(new Date(), 5)]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1500);
  };
  
  const nightCount = date.length === 2 
    ? Math.ceil(Math.abs((date[1].getTime() - date[0].getTime()) / (1000 * 60 * 60 * 24)))
    : 0;
  
  const subtotal = property.price * nightCount;
  const cleaningFee = Math.round(property.price * 0.15);
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;
  
  return (
    <form onSubmit={handleSubmit}>
      {isBooked ? (
        <div className="text-center py-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reservation Confirmed!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for booking with us. Check your email for confirmation details.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsBooked(false)}
          >
            Book Another Stay
          </Button>
        </div>
      ) : (
        <>
          {/* Check-in/Check-out dates */}
          <div className="space-y-2 mb-4">
            <label className="text-sm font-medium">Check In - Check Out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.length === 2 ? (
                    <>
                      {format(date[0], "MMM dd, yyyy")} - {format(date[1], "MMM dd, yyyy")}
                    </>
                  ) : (
                    <span>Select your stay dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  selected={date as any}
                  onSelect={setDate as any}
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Guests */}
          <div className="space-y-4 mb-6">
            <label className="text-sm font-medium">Guests</label>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Adults</span>
              <div className="flex items-center">
                <Button 
                  type="button"
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
                <span className="mx-3 w-6 text-center">{adults}</span>
                <Button 
                  type="button"
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => setAdults(Math.min(10, adults + 1))}
                  disabled={adults + children >= 10}
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Children</span>
              <div className="flex items-center">
                <Button 
                  type="button"
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  disabled={children <= 0}
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
                <span className="mx-3 w-6 text-center">{children}</span>
                <Button 
                  type="button"
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => setChildren(Math.min(10, children + 1))}
                  disabled={adults + children >= 10}
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Price Breakdown */}
          {nightCount > 0 && (
            <div className="space-y-3 border-t border-border pt-4 mb-6">
              <div className="flex justify-between">
                <span className="text-sm">
                  ${property.price} x {nightCount} nights
                </span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Cleaning fee</span>
                <span>${cleaningFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Service fee</span>
                <span>${serviceFee}</span>
              </div>
              <div className="flex justify-between font-semibold pt-3 border-t border-border">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={date.length !== 2 || isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Reserve'}
          </Button>
        </>
      )}
    </form>
  );
}