import AnimatedSection from '../AnimatedSection';
import { BookOpen, Scale, Heart, Sparkles } from 'lucide-react';

const timelineItems = [
  {
    icon: Sparkles,
    title: 'Early Life',
    description: 'Born into a devout family in Punjab, showing signs of spiritual wisdom from a young age. His early years were marked by an insatiable thirst for Islamic knowledge and a natural inclination toward prayer and contemplation.',
  },
  {
    icon: BookOpen,
    title: 'Spiritual Journey',
    description: 'Dedicated years to studying the Quran, Hadith, and Islamic jurisprudence under renowned scholars. His spiritual journey took him through rigorous training in both the outer sciences of Islam and the inner dimensions of faith.',
  },
  {
    icon: Scale,
    title: 'Role as Islamic Judge',
    description: 'Appointed as Qazi, serving the community with unwavering justice and wisdom. His court became renowned throughout the region for its fairness, compassion, and adherence to Islamic principles.',
  },
  {
    icon: Heart,
    title: 'Dedication to Adal & Taqwa',
    description: 'Embodied the principles of justice (adal) and God-consciousness (taqwa) in every aspect of life. His personal conduct set the standard for the community, demonstrating that true piety is reflected in both worship and worldly affairs.',
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 md:py-32 relative bg-emerald-950/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
              Spiritual Journey
            </h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {timelineItems.map((item, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="relative"
                >
                  <div className="glass-card p-6 md:p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gold mb-3">
                          {item.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
