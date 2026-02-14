import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Figure from '../Figure';

const images = [
  {
    src: '/assets/uploads/images%20(5).jpeg',
    alt: 'Sacred shrine marker with inscriptions in Dharema, Sargodha',
    caption: 'The sacred shrine marker bearing inscriptions, a place of reverence and spiritual connection.',
  },
  {
    src: '/assets/uploads/images%20(4).jpeg',
    alt: 'Community members carrying ceremonial cloth at the shrine',
    caption: 'Community members honoring the legacy with traditional ceremonial practices.',
  },
  {
    src: '/assets/uploads/images%20(3).jpeg',
    alt: 'The shrine of Hazrat Sakhi Habib Sultan Nangiana in Dharema',
    caption: 'The blessed shrine in Dharema, Sargodha—a spiritual center for the Nangiana family and devotees.',
  },
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <section id="gallery" className="py-20 md:py-32 relative bg-emerald-950/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
              Sacred Gallery
            </h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              Visual glimpses of the shrine and the spiritual heritage of Hazrat Sakhi Habib Sultan Nangiana
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {images.map((image, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-gold/20"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:text-gold hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </Button>
            </DialogClose>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 z-50 text-white hover:text-gold hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="w-full h-full flex flex-col items-center justify-center p-16">
              <Figure
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                caption={images[currentIndex].caption}
                className="max-h-full"
              />
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 z-50 text-white hover:text-gold hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
