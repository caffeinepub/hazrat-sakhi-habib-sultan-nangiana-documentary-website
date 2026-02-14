import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function StorytellingSection() {
  return (
    <section id="storytelling" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
                Why We Are Nangiana
              </h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            <Card className="storytelling-card glass-card border-2 border-gold/30 shadow-2xl shadow-gold/10 overflow-hidden group hover:border-gold/50 transition-all duration-500">
              <CardContent className="p-8 md:p-12 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-gold" />
                    </div>
                  </div>

                  <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                    <p className="text-xl md:text-2xl text-gold/90 font-serif italic text-center mb-8">
                      A name born from reverence, respect, and the power of words that carried divine authority.
                    </p>

                    <p>
                      The story of how the Nangiana clan received its name is woven into the fabric of local
                      folklore and spiritual tradition. It is said that Hazrat Sakhi Habib Sultan Nangiana
                      possessed a rare gift—his words carried an extraordinary spiritual authority, a power that
                      seemed to transcend the ordinary realm of human speech.
                    </p>

                    <p>
                      When he spoke, people listened not just with their ears, but with their hearts and souls.
                      His pronouncements, whether in matters of justice, spiritual guidance, or community affairs,
                      were received with the utmost respect and reverence. There was a weight to his words, a
                      sense that they were imbued with divine wisdom and blessing.
                    </p>

                    <div className="bg-gold/5 border-l-4 border-gold p-6 rounded-r-lg my-8">
                      <p className="text-gold/90 italic text-lg">
                        "His words were like arrows of truth—swift, precise, and impossible to ignore. When he
                        spoke, even the most hardened hearts would soften, and the most complex disputes would
                        find resolution."
                      </p>
                      <p className="text-foreground/60 text-sm mt-2">— Community Oral Tradition</p>
                    </div>

                    <p>
                      In the cultural context of Punjab, the cobra (Naang in the local language) has long been
                      a symbol of power, mystery, and command. Just as a cobra's presence demands immediate
                      attention and respect, so too did the words of Hazrat Sakhi Habib Sultan command the
                      attention of all who heard them. The comparison was not meant to invoke fear, but rather
                      to acknowledge the profound impact and authority of his speech.
                    </p>

                    <p>
                      According to tradition, people began to say that his words struck with the precision and
                      impact of a cobra's strike—not to harm, but to awaken, to transform, and to guide. This
                      symbolic comparison became so deeply associated with him that it eventually gave rise to
                      the clan name: Nangiana, derived from "Naang" (cobra).
                    </p>

                    <p>
                      The name Nangiana thus became a badge of honor, a reminder of the spiritual authority and
                      wisdom that defined their ancestor. It signified a lineage connected to a man whose words
                      could change hearts, resolve conflicts, and bring people closer to the path of righteousness.
                      To be called Nangiana was to be associated with truth, justice, and spiritual power.
                    </p>

                    <p className="text-xl text-gold/90 font-serif text-center mt-8 pt-8 border-t border-gold/20">
                      Today, the Nangiana community carries this name with pride, understanding that it represents
                      not just a family lineage, but a spiritual legacy—a commitment to uphold the values of their
                      revered ancestor and to speak truth with the same authority and compassion that he embodied.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
