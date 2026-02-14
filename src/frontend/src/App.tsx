import { useEffect } from 'react';
import StickyNav from './components/StickyNav';
import HeroSection from './components/sections/HeroSection';
import DocumentarySection from './components/sections/DocumentarySection';
import TimelineSection from './components/sections/TimelineSection';
import ReflectionSection from './components/sections/ReflectionSection';
import ShrineLegacySection from './components/sections/ShrineLegacySection';
import StorytellingSection from './components/sections/StorytellingSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  useEffect(() => {
    // Ensure dark theme is applied
    document.documentElement.classList.add('dark');
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <main>
        <HeroSection />
        <DocumentarySection />
        <TimelineSection />
        <ReflectionSection />
        <ShrineLegacySection />
        <StorytellingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
