import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
}

const generateConfetti = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
    backgroundColor: [
      '#a855f7',  // Purple
      '#ec4899',  // Pink
      '#8b5cf6',  // Indigo
      '#d946ef'   // Fuchsia
    ][Math.floor(Math.random() * 4)]
  }));
}

export const Confetti: React.FC<ConfettiProps> = ({ active }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    animationDelay: string;
    backgroundColor: string;
  }>>([]);

  useEffect(() => {
    if (active) {
      setParticles(generateConfetti(50));
      const timer = setTimeout(() => {
        setParticles([]);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [active]);

  if (!active && particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 animate-confetti rounded-sm"
          style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            backgroundColor: particle.backgroundColor,
            top: '-20px'
          }}
        />
      ))}
    </div>
  );
};