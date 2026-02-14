import AnimatedSection from '../AnimatedSection';
import { MapPin, Users, BookOpen, Heart } from 'lucide-react';
import { useCountUpOnView } from '../../hooks/useCountUpOnView';

const counters = [
  {
    icon: Users,
    end: 12,
    label: 'Generations Inspired',
    suffix: '+',
  },
  {
    icon: BookOpen,
    end: 500,
    label: 'Years of Spiritual Influence',
    suffix: '+',
  },
  {
    icon: Heart,
    end: 1000,
    label: 'Families Connected',
    suffix: '+',
  },
];

function Counter({ end, label, suffix, icon: Icon }: typeof counters[0]) {
  const { ref, count } = useCountUpOnView(end, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-gold" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
        {Math.round(count)}{suffix}
      </div>
      <div className="text-foreground/70 text-sm md:text-base">{label}</div>
    </div>
  );
}

export default function ShrineLegacySection() {
  return (
    <section id="shrine-legacy" className="py-20 md:py-32 relative bg-emerald-950/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
              Shrine & Legacy
            </h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Shrine Description */}
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
                    The Sacred Resting Place
                  </h3>
                  <p className="text-foreground/70">Dharema, Sargodha, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  In the peaceful village of Dharema, near the ancient Kirana Hills in Sargodha district, lies
                  the final resting place of Hazrat Sakhi Habib Sultan Nangiana. His shrine has become a
                  spiritual center, drawing devotees and descendants from across the region who seek blessings
                  and spiritual connection.
                </p>

                <p>
                  The shrine is more than a memorial—it is a living testament to his enduring influence. Families
                  of the Nangiana community gather here to pay their respects, to pray, and to remember the
                  teachings that have shaped their identity for generations. The atmosphere is one of profound
                  peace and reverence, a place where the spiritual presence of this great soul can still be felt.
                </p>

                <p>
                  Visitors to the shrine often speak of experiencing a deep sense of tranquility and spiritual
                  renewal. The site has become a place of pilgrimage, where people come not only to honor the
                  memory of Hazrat Sakhi Habib Sultan but also to seek guidance in their own spiritual journeys.
                  The shrine stands as a beacon of faith, reminding all who visit of the timeless values of
                  justice, compassion, and devotion to Allah.
                </p>

                <p>
                  The Nangiana family continues to maintain the shrine with great care and devotion, ensuring
                  that it remains a welcoming space for all who wish to connect with this rich spiritual heritage.
                  Annual gatherings and commemorations bring together community members, strengthening the bonds
                  that unite them and renewing their commitment to the principles their ancestor championed.
                </p>
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {counters.map((counter, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="glass-card p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
                    <Counter {...counter} />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Legacy Statement */}
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-serif italic">
                  "The legacy of Hazrat Sakhi Habib Sultan Nangiana lives on in every act of kindness, every
                  prayer offered with sincerity, and every moment of justice upheld by his descendants. His
                  light continues to guide the Nangiana community toward righteousness and spiritual excellence."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
