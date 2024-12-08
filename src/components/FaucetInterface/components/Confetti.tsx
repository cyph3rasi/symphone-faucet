import React, { useCallback, useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

interface ConfettiProps {
  active: boolean;
}

export const Confetti: React.FC<ConfettiProps> = ({ active }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [particles, setParticles] = useState(200);

  const handleResize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (active) {
      setParticles(200);
      const timer = setInterval(() => {
        setParticles((prev) => Math.max(0, prev - 10));
      }, 100);

      return () => clearInterval(timer);
    }
  }, [active]);

  if (!active) return null;

  return (
    <ReactConfetti
      width={size.width}
      height={size.height}
      numberOfPieces={particles}
      recycle={false}
      colors={['#a855f7', '#ec4899', '#8b5cf6', '#d946ef']}
      gravity={0.2}
      tweenDuration={4000}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};