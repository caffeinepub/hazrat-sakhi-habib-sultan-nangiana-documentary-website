import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'nangiana-documentary';

  return (
    <footer className="relative py-12 md:py-16 border-t border-gold/20 bg-emerald-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gold mb-4">
                About This Documentary
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                A digital archive preserving the life, teachings, and legacy of Hazrat Sakhi Habib Sultan Nangiana,
                a revered Islamic scholar and spiritual guide of Punjab, Pakistan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => document.getElementById('documentary')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground/70 hover:text-gold transition-colors"
                  >
                    Documentary
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground/70 hover:text-gold transition-colors"
                  >
                    Timeline
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground/70 hover:text-gold transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground/70 hover:text-gold transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gold mb-4">
                Connect
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                Share this documentary with your community
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  aria-label="Facebook"
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gold/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
              <p>
                © {currentYear} Nangiana Family Documentary. All rights reserved.
              </p>
              <p className="flex items-center gap-2">
                Built with <Heart className="w-4 h-4 text-gold fill-gold" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
