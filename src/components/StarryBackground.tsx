import { useEffect, useState } from 'react';

export const StarryBackground = () => {
  const [stars, setStars] = useState<Array<{id: number; x: number; y: number; size: number; delay: number}>>([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 50; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Gradient Sky Background */}
      <div className="absolute inset-0 gradient-sky opacity-80" />
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-glow" />
        </div>
      ))}
      
      {/* Floating Hearts */}
      <div className="absolute top-1/4 left-1/4 text-birthday-pink animate-float">
        <span className="text-2xl">💖</span>
      </div>
      <div className="absolute top-1/3 right-1/4 text-birthday-purple animate-float" style={{ animationDelay: '1s' }}>
        <span className="text-xl">💝</span>
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-birthday-yellow animate-float" style={{ animationDelay: '2s' }}>
        <span className="text-lg">✨</span>
      </div>
    </div>
  );
};