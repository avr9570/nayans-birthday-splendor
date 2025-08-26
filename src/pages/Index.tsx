import { useState, useEffect } from 'react';
import { StarryBackground } from '@/components/StarryBackground';
import { FloatingBalloons } from '@/components/FloatingBalloons';
import { SparkleEffect } from '@/components/SparkleEffect';
import { BirthdayHero } from '@/components/BirthdayHero';
import { BirthdayGame } from '@/components/BirthdayGame';
import { PhotoGallery } from '@/components/PhotoGallery';
import { LoveMeter } from '@/components/LoveMeter';
import { DrawingCanvas } from '@/components/DrawingCanvas';
import { BirthdayAudio } from '@/components/BirthdayAudio';

const Index = () => {
  const [showSparkles, setShowSparkles] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    // Welcome sparkles on load
    setTimeout(() => {
      setShowSparkles(true);
    }, 1000);
  }, []);

  const handleGameComplete = () => {
    setGameCompleted(true);
    setShowSparkles(true);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-cute">
      {/* Background Elements */}
      <StarryBackground />
      <FloatingBalloons />
      <SparkleEffect trigger={showSparkles} />
      <BirthdayAudio />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <BirthdayHero />
        
        {/* Interactive Games Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-love text-center mb-8">
            🎮 Let's Play Together! 🎮
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BirthdayGame onGameComplete={handleGameComplete} />
            <LoveMeter />
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-12">
          <PhotoGallery />
        </section>

        {/* Drawing Canvas */}
        <section className="mb-12">
          <DrawingCanvas />
        </section>

        {/* Final Love Message */}
        {gameCompleted && (
          <section className="text-center animate-bounce-in">
            <div className="bg-gradient-love p-8 rounded-2xl shadow-glow max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                💕 My Promise to You 💕
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Even though I missed wishing you at the exact stroke of midnight,
                my love for you never sleeps. You are the most precious person in my life,
                and I promise to make every day feel like your birthday! 🎂✨
                <br/><br/>
                Happy Birthday, my beautiful Nayan! 
                May this year bring you all the happiness you deserve! 💖
              </p>
              <div className="mt-6 text-4xl animate-heart-beat">
                🎉💖🎂💝🌟
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
