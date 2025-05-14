import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { VolumeX, Volume2 } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioRef.current.loop = true;
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Play needs to be wrapped in a user-gesture event handler
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
          })
          .catch((error) => {
            console.error("Playback failed:", error);
            // Reset the play state if autoplay is blocked
            setIsPlaying(false);
          });
      }
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        className="rounded-full p-3 w-12 h-12 bg-white hover:bg-primary transition-all duration-300 shadow-lg flex items-center justify-center group"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="text-secondary text-xl group-hover:scale-110 transition-transform duration-200" />
        ) : (
          <VolumeX className="text-secondary text-xl group-hover:scale-110 transition-transform duration-200" />
        )}
      </Button>
    </div>
  );
};

export default AudioPlayer;
