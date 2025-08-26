import { useEffect, useState } from 'react';

export const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState<Array<{id: number; color: string; delay: number; x: number}>>([]);

  useEffect(() => {
    const colors = ['bg-birthday-pink', 'bg-birthday-purple', 'bg-birthday-yellow', 'bg-birthday-blue', 'bg-birthday-green'];
    const balloonArray = [];
    
    for (let i = 0; i < 15; i++) {
      balloonArray.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        x: Math.random() * 90 + 5, // 5% to 95% to keep balloons on screen
      });
    }
    
    setBalloons(balloonArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-balloon-rise"
          style={{
            left: `${balloon.x}%`,
            animationDelay: `${balloon.delay}s`,
          }}
        >
          {/* Balloon */}
          <div className={`w-8 h-10 ${balloon.color} rounded-full shadow-cute relative`}>
            {/* Balloon String */}
            <div className="absolute top-full left-1/2 w-px h-16 bg-gray-400 transform -translate-x-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};