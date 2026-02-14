import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface QuoteCardProps {
  text: string;
  author?: string;
}

interface QuoteCardsProps {
  quotes: QuoteCardProps[];
}

export default function QuoteCards({ quotes }: QuoteCardsProps) {
  return (
    <div className="space-y-6 my-12">
      {quotes.map((quote, index) => (
        <Card
          key={index}
          className="quote-card glass-card border-l-4 border-gold/50 shadow-lg shadow-gold/5 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300"
        >
          <CardContent className="p-6 md:p-8 relative">
            <div className="absolute top-4 left-4 opacity-10">
              <Quote className="w-12 h-12 text-gold" />
            </div>
            <div className="relative z-10 pl-8">
              <p className="text-lg md:text-xl text-gold/90 font-serif italic leading-relaxed mb-4">
                "{quote.text}"
              </p>
              {quote.author && (
                <p className="text-foreground/60 text-sm">— {quote.author}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
