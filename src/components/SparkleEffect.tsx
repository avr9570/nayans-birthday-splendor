import { useEffect, useState } from 'react';

interface SparkleProps {
  trigger?: boolean;
}

export const SparkleEffect = ({ trigger = false }: SparkleProps) => {
  const [sparkles, setSparkles] = useState<Array<{id: number; x: number; y: number; color: string; delay: number}>>([]);

  useEffect(() => {
    if (trigger) {
      const sparkleArray = [];
      const colors = ['sparkle-1', 'sparkle-2', 'sparkle-3', 'sparkle-4'];
      
      for (let i = 0; i < 20; i++) {
        sparkleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 1,
        });
      }
      
      setSparkles(sparkleArray);
      
      // Clear sparkles after animation
      setTimeout(() => setSparkles([]), 2000);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={`absolute animate-sparkle text-${sparkle.color}`}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};