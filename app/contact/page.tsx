"use client";

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Send, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions or need assistance? We're here to help you find your perfect stay.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Whether you have a question about our properties,
                pricing, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <ContactInfoCard 
                  icon={<MapPin className="h-6 w-6" />}
                  title="Our Office"
                  content="123 Rental Street, Property City, PC 12345"
                />
                <ContactInfoCard 
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                />
                <ContactInfoCard 
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  content="info@stayscape.com"
                />
                <ContactInfoCard 
                  icon={<Clock className="h-6 w-6" />}
                  title="Business Hours"
                  content="Monday - Friday: 9AM - 6PM EST"
                />
              </div>
              
              <div className="relative h-60 rounded-xl overflow-hidden mt-8">
                <Image
                  src="https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg"
                  alt="StayScape office location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {formStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setFormStatus('idle')}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Property Inquiry" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm interested in learning more about property #1234..." 
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="animate-spin mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M16 12h6"></path>
                            </svg>
                          </span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our rental properties and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqCard
              question="How do I book a property?"
              answer="You can book directly through our website. Browse available properties, select your check-in and check-out dates, and follow the booking instructions. You'll receive confirmation via email once your booking is complete."
            />
            <FaqCard
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our trusted payment gateway."
            />
            <FaqCard
              question="What is your cancellation policy?"
              answer="Our cancellation policy varies by property. Generally, cancellations made at least 30 days before check-in receive a full refund. Please check the specific property listing for details."
            />
            <FaqCard
              question="How can I contact my host?"
              answer="After your booking is confirmed, you'll receive contact information for your host. You can also message them directly through our platform."
            />
            <FaqCard
              question="Are pets allowed in the properties?"
              answer="Pet policies vary by property. Look for the 'Pet Friendly' tag in the property amenities or check with us directly before booking."
            />
            <FaqCard
              question="What's included in the rental price?"
              answer="The rental price typically includes the accommodation, basic utilities, and amenities listed in the property description. Additional services may be available for an extra fee."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
}) {
  return (
    <div className="flex items-start">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className={cn(
        "bg-card border border-border rounded-xl p-5 cursor-pointer transition-all",
        isOpen ? "shadow-md" : "hover:shadow-sm"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{question}</h3>
        <Button 
          variant="ghost" 
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <span className={`transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
        </Button>
      </div>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "mt-4 max-h-40" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}