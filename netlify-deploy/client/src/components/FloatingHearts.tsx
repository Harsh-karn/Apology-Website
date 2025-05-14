import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  color: string;
}

const FloatingHearts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heartsRef = useRef<FloatingHeart[]>([]);
  const nextHeartIdRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const heartColors = [
    '#F8BBD0', // light pink
    '#E91E63', // pink
    '#FF4081', // accent pink
    '#D81B60', // dark pink
    '#F06292'  // medium pink
  ];

  const createHeart = () => {
    // Only create hearts if document has focus and container exists
    if (!document.hasFocus() || !containerRef.current) return;
    
    const newHeart: FloatingHeart = {
      id: nextHeartIdRef.current++,
      x: Math.random() * 100, // percentage across the screen
      size: Math.random() * 20 + 10, // between 10px and 30px
      duration: Math.random() * 3 + 3, // between 3 and 6 seconds
      color: heartColors[Math.floor(Math.random() * heartColors.length)]
    };
    
    heartsRef.current = [...heartsRef.current, newHeart];
    
    // Remove hearts after animation completes to prevent memory leaks
    setTimeout(() => {
      heartsRef.current = heartsRef.current.filter(heart => heart.id !== newHeart.id);
    }, newHeart.duration * 1000);
  };

  useEffect(() => {
    // Start creating hearts
    intervalRef.current = setInterval(createHeart, 300);
    
    // Clean up
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="heart-container"
      aria-hidden="true"
    >
      {heartsRef.current.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          initial={{ 
            x: `${heart.x}vw`, 
            y: '100vh', 
            scale: 0.5, 
            opacity: 0 
          }}
          animate={{ 
            y: '-50vh', 
            scale: 1.2, 
            rotate: 20, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{ 
            duration: heart.duration, 
            ease: 'easeOut' 
          }}
          style={{ color: heart.color }}
        >
          <Heart size={heart.size} fill={heart.color} stroke="none" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
