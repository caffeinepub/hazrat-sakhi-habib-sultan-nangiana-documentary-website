import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

export default function HeroSection() {
  const scrollToDocumentary = () => {
    const element = document.getElementById('documentary');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/uploads/images%20(3).jpeg)',
            filter: 'blur(8px) brightness(0.4)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/60 to-background" />
      </div>

      {/* Islamic Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/islamic-pattern-bg.dim_2400x1350.png)',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <AnimatedSection className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gold leading-tight">
              Hazrat Sakhi Habib Sultan Nangiana
            </h1>
            <p className="text-2xl md:text-3xl text-gold/80 font-serif italic">
              A Spiritual Light of Punjab
            </p>
          </div>

          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover the life, legacy, and spiritual teachings of a revered Islamic scholar and Qazi
            who shaped the Nangiana community of Punjab, Pakistan.
          </p>

          <Button
            size="lg"
            onClick={scrollToDocumentary}
            className="bg-gold hover:bg-gold/90 text-emerald-950 font-semibold text-lg px-8 py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30"
          >
            Read Documentary
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </AnimatedSection>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gold/50" />
      </div>
    </section>
  );
}
