import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import pippoNormal from '@/assets/pippo-normal.png';
import pippoSorry from '@/assets/pippo-sorry.png';

export const BirthdayHero = () => {
  const [showSorryMessage, setShowSorryMessage] = useState(false);
  const [currentPippo, setCurrentPippo] = useState(pippoNormal);

  const handleSorryClick = () => {
    setShowSorryMessage(true);
    setCurrentPippo(pippoSorry);
  };

  return (
    <div className="text-center mb-12">
      {/* Main Birthday Message */}
      <div className="mb-8 animate-bounce-in">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient-love mb-4 animate-heart-beat">
          Happy Birthday
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Nayan! 🎉
        </h2>
        
        {/* Animated Pippo */}
        <div className="flex justify-center mb-6">
          <img 
            src={currentPippo}
            alt="Cute Pippo"
            className="w-32 h-32 md:w-48 md:h-48 animate-float shadow-glow rounded-full"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
          My dearest Nayan, today is all about celebrating the amazing person you are! 
          You bring so much joy and love into my life every single day 💕
        </p>
      </div>

      {/* Sorry Message Section */}
      {!showSorryMessage ? (
        <Card className="p-6 shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20 max-w-lg mx-auto">
          <p className="text-lg text-foreground mb-4">
            But first... I have something to tell you... 😅
          </p>
          <Button 
            onClick={handleSorryClick}
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-3 px-6 rounded-full shadow-cute animate-heart-beat"
          >
            Click here 👆
          </Button>
        </Card>
      ) : (
        <Card className="p-8 shadow-cute bg-card/90 backdrop-blur-sm border-2 border-primary/20 max-w-2xl mx-auto animate-bounce-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-birthday-pink mb-4">
                I'm Sorry! 😭💔
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                I'm so sorry I couldn't wish you exactly at 12 AM... 
                I was fast asleep and missed that magical moment! 😴<br/><br/>
                
                But you know what? Every moment with you is magical, 
                and my love for you doesn't depend on the clock! 💕<br/><br/>
                
                I hope this little website makes up for it... 🥺
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};