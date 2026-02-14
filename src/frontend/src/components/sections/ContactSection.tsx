import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitVisitorMessage } from '../../hooks/useSubmitVisitorMessage';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const { mutate: submitMessage, isPending, isSuccess, isError } = useSubmitVisitorMessage();

  const validateForm = () => {
    const newErrors: { name?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    submitMessage(
      { name: name.trim(), message: message.trim() },
      {
        onSuccess: () => {
          // Keep the form values for user reference
          setTimeout(() => {
            setName('');
            setMessage('');
          }, 3000);
        },
      }
    );
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
                Share Your Thoughts
              </h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4" />
              <p className="text-foreground/70">
                Leave a message of respect, share your connection to this legacy, or simply express your thoughts
              </p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold/20">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                    Message Received
                  </h3>
                  <p className="text-foreground/80 mb-8">
                    Thank you for sharing your thoughts. Your message has been preserved with respect and gratitude.
                  </p>
                  <Button
                    onClick={() => {
                      setName('');
                      setMessage('');
                      window.location.reload();
                    }}
                    variant="outline"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/90">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Enter your name"
                      className={`bg-background/50 border-gold/20 focus:border-gold/50 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      disabled={isPending}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/90">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share your thoughts, memories, or reflections..."
                      rows={6}
                      className={`bg-background/50 border-gold/20 focus:border-gold/50 resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      disabled={isPending}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {isError && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-red-500 text-sm">
                        Failed to submit your message. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gold hover:bg-gold/90 text-emerald-950 font-semibold text-lg py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
