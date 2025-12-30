'use client';

import { useEffect, useState } from 'react';

const christmasMessages = [
  "Merry Christmas! 🎄",
  "Season's Greetings ✨",
  "Joy to the World 🌟",
  "Happy Holidays! ❄️",
  "Peace on Earth 🕊️",
  "Warm Winter Wishes ☃️",
  "Festive Cheer to All! 🎁",
  "Magical Christmas Moments ⭐"
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % christmasMessages.length);
        setIsVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-christmas-night text-white">
      {/* Christmas background layers */}
      <div className="absolute inset-0 bg-christmas-layer-1" />
      <div className="absolute inset-0 bg-christmas-layer-2" />
      <div className="absolute inset-0 bg-christmas-layer-3" />
      
      {/* Snowflakes overlay */}
      <div className="absolute inset-0 bg-snowflakes" />
      
      {/* Decorative Christmas elements */}
      <div className="absolute top-8 left-8 text-6xl animate-sway">🎄</div>
      <div className="absolute top-12 right-12 text-5xl animate-twinkle">⭐</div>
      <div className="absolute bottom-20 left-16 text-4xl animate-sway-reverse">🎁</div>
      <div className="absolute bottom-32 right-20 text-5xl animate-twinkle-slow">❄️</div>
      <div className="absolute top-1/3 left-1/4 text-3xl animate-float">🔔</div>
      <div className="absolute top-2/3 right-1/3 text-3xl animate-float-reverse">🎅</div>
      
      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="christmas-glow mb-6">
          <h1 className="text-center text-[clamp(48px,8vw,96px)] font-bold tracking-tight mb-4 text-christmas-gold animate-shimmer">
            Merry Christmas
          </h1>
        </div>
        
        {/* Rotating Christmas messages */}
        <div className="mt-4 h-12 md:h-16 overflow-hidden flex items-center justify-center">
          <span
            className={`inline-block text-center text-[clamp(20px,4vw,40px)] font-light text-christmas-silver transition-all duration-[400ms] ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {christmasMessages[currentIndex]}
          </span>
        </div>
        
        {/* Festive subtitle */}
        <p className="mt-8 text-center text-lg md:text-xl text-white/80 max-w-2xl">
          Wishing you joy, peace, and happiness this holiday season
        </p>
      </main>
      
      {/* Decorative bottom ornaments */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 text-3xl z-20">
        <span className="animate-swing">🎄</span>
        <span className="animate-swing-delay-1">⭐</span>
        <span className="animate-swing-delay-2">🎁</span>
        <span className="animate-swing-delay-1">❄️</span>
        <span className="animate-swing">🔔</span>
      </div>
    </div>
  );
}

