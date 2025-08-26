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
        {/* Happy Birthday melody */}
        <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg" />
        <source src="https://file-examples.com/storage/fe86a1ba8d258d2b0a071d7/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg" />
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