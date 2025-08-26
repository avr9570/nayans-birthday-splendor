import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export const BirthdayAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play birthday music when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Auto-play prevented by browser');
        }
      }
    };

    if (isLoaded) {
      playAudio();
    }
  }, [isLoaded]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-30">
      <audio
        ref={audioRef}
        loop
        onLoadedData={() => setIsLoaded(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Using a free birthday song - you can replace with your preferred audio */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
      </audio>
      
      <Button
        onClick={toggleAudio}
        size="sm"
        className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-full p-3 shadow-glow animate-bounce-in"
        title={isPlaying ? "Pause birthday music" : "Play birthday music"}
      >
        {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      </Button>
      
      {isPlaying && (
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-birthday-green rounded-full animate-heart-beat" />
      )}
    </div>
  );
};