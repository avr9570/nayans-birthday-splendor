import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BalloonGameProps {
  onGameComplete: () => void;
}

export const BirthdayGame = ({ onGameComplete }: BalloonGameProps) => {
  const [balloons, setBalloons] = useState<Array<{id: number; popped: boolean; color: string}>>([]);
  const [poppedCount, setPoppedCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    const colors = ['bg-birthday-pink', 'bg-birthday-purple', 'bg-birthday-yellow', 'bg-birthday-blue', 'bg-birthday-green'];
    const balloonArray = [];
    
    for (let i = 0; i < 12; i++) {
      balloonArray.push({
        id: i,
        popped: false,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setBalloons(balloonArray);
  }, []);

  const popBalloon = (id: number) => {
    if (!gameStarted) return;
    
    setBalloons(prev => prev.map(balloon => 
      balloon.id === id ? { ...balloon, popped: true } : balloon
    ));
    
    const newPoppedCount = poppedCount + 1;
    setPoppedCount(newPoppedCount);
    
    if (newPoppedCount === 12) {
      setGameCompleted(true);
      setTimeout(() => {
        onGameComplete();
      }, 1000);
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  if (gameCompleted) {
    return (
      <Card className="p-8 text-center shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20">
        <div className="animate-bounce-in">
          <h3 className="text-2xl font-bold text-gradient-love mb-4">🎉 Amazing! 🎉</h3>
          <p className="text-lg text-foreground mb-4">
            You popped all the balloons! Just like how you make my heart pop with joy! 💕
          </p>
          <div className="text-6xl animate-heart-beat">💖</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gradient-love mb-2">🎈 Pop the Balloons! 🎈</h3>
        <p className="text-foreground mb-4">
          {!gameStarted 
            ? "Let's play a fun game together! Pop all the balloons to reveal something special 💕"
            : `Balloons popped: ${poppedCount}/12`
          }
        </p>
        
        {!gameStarted && (
          <Button 
            onClick={startGame}
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-3 px-6 rounded-full shadow-cute animate-heart-beat"
          >
            Start the Fun! 🎮
          </Button>
        )}
      </div>

      {gameStarted && (
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {balloons.map((balloon) => (
            <button
              key={balloon.id}
              onClick={() => popBalloon(balloon.id)}
              disabled={balloon.popped}
              className={`relative h-16 w-12 mx-auto transition-all duration-300 transform hover:scale-110 ${
                balloon.popped ? 'opacity-0 scale-0' : 'animate-float'
              }`}
              style={{ animationDelay: `${balloon.id * 0.1}s` }}
            >
              {!balloon.popped && (
                <>
                  <div className={`w-full h-full ${balloon.color} rounded-full shadow-cute relative`}>
                    <div className="absolute top-full left-1/2 w-px h-4 bg-gray-400 transform -translate-x-1/2" />
                  </div>
                </>
              )}
              {balloon.popped && (
                <div className="absolute inset-0 flex items-center justify-center text-2xl animate-bounce-in">
                  💥
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </Card>
  );
};