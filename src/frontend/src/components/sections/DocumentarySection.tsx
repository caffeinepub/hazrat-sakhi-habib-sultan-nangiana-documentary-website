import AnimatedSection from '../AnimatedSection';
import QuoteCards from '../QuoteCards';

export default function DocumentarySection() {
  return (
    <section id="documentary" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
                The Life & Legacy
              </h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <div className="documentary-content">
                <p className="drop-cap text-lg md:text-xl leading-relaxed text-foreground/90">
                  In the heart of Punjab, Pakistan, near the ancient Kirana Hills in the village of Dharema, Sargodha,
                  lived a man whose spiritual presence and unwavering dedication to Islamic principles would shape
                  generations to come. Hazrat Sakhi Habib Sultan Nangiana was not merely a scholar or judge; he was
                  a beacon of divine light, a living embodiment of faith, justice, and compassion.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  Born into a time when the region sought guidance and moral leadership, Hazrat Sakhi Habib Sultan
                  answered the call with profound devotion. His life was marked by an extraordinary commitment to
                  namaz (prayer) and taleem (Islamic education), which he considered the twin pillars of a righteous
                  life. From the earliest hours of dawn to the quiet moments before sleep, his days were structured
                  around worship, study, and service to his community.
                </p>

                <QuoteCards
                  quotes={[
                    {
                      text: "His words carried the weight of divine wisdom, and his presence brought peace to troubled hearts.",
                      author: "Community Elders"
                    }
                  ]}
                />

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mt-12 mb-6">
                  The Role of Qazi: Justice with Compassion
                </h3>

                <p className="text-lg leading-relaxed text-foreground/90">
                  As a Qazi (Islamic judge), Hazrat Sakhi Habib Sultan held a position of immense responsibility.
                  In an era where disputes could tear communities apart, he served as the arbiter of justice,
                  applying the principles of Shariah with both wisdom and mercy. His judgments were renowned for
                  their fairness, rooted deeply in the concepts of adal (justice) and taqwa (God-consciousness).
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  People traveled from distant villages to seek his counsel, knowing that his decisions were not
                  influenced by wealth, status, or personal gain. He treated the poorest farmer with the same
                  respect as the wealthiest landowner, embodying the Islamic principle that all are equal before
                  Allah. His court was a place where truth prevailed, and where reconciliation was always preferred
                  over conflict.
                </p>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mt-12 mb-6">
                  Dedication to Namaz and Taleem
                </h3>

                <p className="text-lg leading-relaxed text-foreground/90">
                  The spiritual foundation of Hazrat Sakhi Habib Sultan's life was his unwavering dedication to
                  namaz. He never missed a single prayer, and his devotion inspired countless others to strengthen
                  their own connection with Allah. His mosque became a center of spiritual learning, where young
                  and old gathered to study the Quran, Hadith, and Islamic jurisprudence.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  His approach to taleem was holistic—he believed that Islamic education should nurture not just
                  the mind, but also the heart and soul. Students who learned under his guidance were taught to
                  embody Islamic values in every aspect of their lives, from their interactions with family to
                  their conduct in business and community affairs.
                </p>

                <QuoteCards
                  quotes={[
                    {
                      text: "Knowledge without action is like a tree without fruit. Learn, practice, and teach—this is the path of the righteous.",
                      author: "Hazrat Sakhi Habib Sultan Nangiana"
                    }
                  ]}
                />

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mt-12 mb-6">
                  Settlement Near Kirana Hills
                </h3>

                <p className="text-lg leading-relaxed text-foreground/90">
                  The choice to settle near the Kirana Hills in Dharema was both practical and symbolic. The area,
                  with its rugged beauty and serene landscape, provided a peaceful environment conducive to
                  contemplation and worship. Here, Hazrat Sakhi Habib Sultan established not just a home, but a
                  spiritual sanctuary—a place where seekers of truth could find guidance and solace.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  The community that grew around him became known for its strong Islamic values and close-knit
                  bonds. Families supported one another, disputes were resolved amicably, and the teachings of
                  Islam were lived out in daily practice. This settlement became the heart of what would later
                  be known as the Nangiana community, a lineage proud of its spiritual heritage.
                </p>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mt-12 mb-6">
                  Influence on the Nangiana Community
                </h3>

                <p className="text-lg leading-relaxed text-foreground/90">
                  The influence of Hazrat Sakhi Habib Sultan on the Nangiana community cannot be overstated. His
                  teachings created a culture of piety, learning, and mutual respect that has endured for
                  generations. The values he instilled—honesty, compassion, justice, and devotion to Allah—became
                  the defining characteristics of the Nangiana people.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  Even today, descendants of those who knew him carry forward his legacy, striving to uphold the
                  principles he championed. His life serves as a reminder that true leadership is not about power
                  or prestige, but about service, sacrifice, and an unwavering commitment to the path of
                  righteousness.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
