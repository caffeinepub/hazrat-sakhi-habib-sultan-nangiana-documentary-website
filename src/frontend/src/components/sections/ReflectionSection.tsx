import AnimatedSection from '../AnimatedSection';
import { Heart } from 'lucide-react';

export default function ReflectionSection() {
  return (
    <section id="reflection" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="spiritual-reflection-box glass-card p-8 md:p-12 rounded-3xl border-2 border-gold/30 shadow-2xl shadow-gold/10 relative overflow-hidden">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/20 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/20 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20 rounded-br-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-gold" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold text-center mb-8">
                  A Test of Faith: Sabr and Tawakkul
                </h2>

                <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                  <p>
                    Among the many trials that tested the faith of Hazrat Sakhi Habib Sultan Nangiana, none was
                    more profound than the passing of his beloved children. The loss of a child is a pain that
                    transcends words, a grief that can shake even the strongest of hearts. Yet, in the face of
                    such immeasurable sorrow, he demonstrated the true meaning of sabr (patience) and tawakkul
                    (trust in Allah's will).
                  </p>

                  <p className="text-gold/90 font-serif italic text-xl text-center py-4">
                    "Among those who left this world in their innocence was Mitha Masoom, a soul pure and beloved."
                  </p>

                  <p>
                    The passing of Mitha Masoom and other children was a moment that could have broken a lesser
                    man, but Hazrat Sakhi Habib Sultan turned to Allah with even greater devotion. He understood
                    that every soul belongs to Allah, and that our time in this world is but a test. His response
                    to this tragedy became a lesson for all who witnessed it—a testament to the power of faith in
                    the face of unimaginable loss.
                  </p>

                  <p>
                    In Islamic teachings, sabr is not merely passive acceptance; it is an active, conscious choice
                    to remain steadfast in faith despite hardship. It is the recognition that Allah's wisdom
                    surpasses our understanding, and that every trial carries within it the seeds of spiritual
                    growth. Hazrat Sakhi Habib Sultan embodied this principle, finding solace in prayer and in the
                    knowledge that his children were now in the care of the Most Merciful.
                  </p>

                  <p>
                    Tawakkul, the complete trust in Allah's plan, was equally evident in his response. He did not
                    question why such a tragedy had befallen him, nor did he allow grief to distance him from his
                    duties to his community. Instead, he channeled his pain into deeper worship and greater service,
                    becoming an even more compassionate guide for those who sought his counsel.
                  </p>

                  <div className="bg-gold/5 border-l-4 border-gold p-6 rounded-r-lg my-8">
                    <p className="text-gold/90 italic">
                      "Indeed, we belong to Allah, and indeed to Him we will return." (Quran 2:156)
                    </p>
                  </div>

                  <p>
                    The legacy of this profound patience and trust continues to inspire the Nangiana community.
                    It serves as a reminder that faith is not tested in moments of ease, but in times of hardship.
                    The way Hazrat Sakhi Habib Sultan faced the loss of his children—with dignity, grace, and
                    unwavering belief—remains a guiding light for all who face their own trials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
