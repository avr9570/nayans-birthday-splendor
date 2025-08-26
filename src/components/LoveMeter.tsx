import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const LoveMeter = () => {
  const [loveLevel, setLoveLevel] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const chargeLoveMeter = () => {
    if (isCharging) return;
    
    setIsCharging(true);
    setShowMessage(false);
    
    const interval = setInterval(() => {
      setLoveLevel(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCharging(false);
          setShowMessage(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const resetMeter = () => {
    setLoveLevel(0);
    setShowMessage(false);
  };

  return (
    <Card className="p-6 shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gradient-love mb-4">💕 Love Meter 💕</h3>
        
        {/* Love Meter Display */}
        <div className="mb-6">
          <div className="relative w-full h-8 bg-muted rounded-full overflow-hidden border-2 border-primary/30">
            <div 
              className="h-full bg-gradient-love transition-all duration-300 ease-out relative"
              style={{ width: `${loveLevel}%` }}
            >
              <div className="absolute inset-0 animate-sparkle opacity-30 bg-white/20" />
            </div>
          </div>
          <p className="mt-2 text-lg font-semibold text-foreground">
            {loveLevel}% Full of Love! 💖
          </p>
        </div>

        {/* Heart Icons */}
        <div className="flex justify-center mb-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i}
              className={`text-2xl transition-all duration-300 ${
                loveLevel > i * 20 ? 'text-birthday-pink animate-heart-beat' : 'text-muted-foreground'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              💖
            </span>
          ))}
        </div>

        {/* Action Button */}
        {!showMessage ? (
          <Button 
            onClick={chargeLoveMeter}
            disabled={isCharging}
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-2 px-6 rounded-full shadow-cute"
          >
            {isCharging ? 'Charging Love... 💕' : 'Fill with Love! 💖'}
          </Button>
        ) : (
          <div className="animate-bounce-in">
            <p className="text-lg text-foreground mb-4">
              Love Meter is FULL! 🥰<br/>
              Just like my heart when I think of you! 💕
            </p>
            <Button 
              onClick={resetMeter}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
            >
              Reset & Fill Again! 💖
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};