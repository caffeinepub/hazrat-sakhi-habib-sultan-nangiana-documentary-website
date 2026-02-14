import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSessionState } from '../hooks/useSessionState';

export default function SpiritualModeToggle() {
  const [isEnabled, setIsEnabled] = useSessionState('spiritual-mode', false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      // Using a placeholder for ambient audio - in production, replace with actual audio file
      audioRef.current.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
    }

    if (isEnabled && !isMuted) {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        setIsMuted(true);
      });
    } else {
      audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isEnabled, isMuted]);

  const toggleMode = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    if (newState) {
      setIsMuted(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      className={`transition-colors ${isEnabled ? 'text-gold' : 'text-foreground/70'}`}
      aria-label="Toggle Spiritual Mode"
      title="Spiritual Mode"
    >
      {isEnabled && !isMuted ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </Button>
  );
}
