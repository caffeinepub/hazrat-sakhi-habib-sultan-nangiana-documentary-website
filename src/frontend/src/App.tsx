import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
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

const queryClient = new QueryClient();

function AppContent() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
