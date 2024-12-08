'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  rotation: number;
  xVel: number;
  yVel: number;
  rotationVel: number;
  size: number;
  color: string;
  opacity: number;
}

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Confetti particles
    const particles: Particle[] = [];
    const colors = ['#FF69B4', '#9B6EF3', '#4FA3F7', '#70E000', '#F7D300'];

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = -20 - Math.random() * 100; // Start above the viewport
      particles.push({
        x,
        y,
        rotation: Math.random() * 360,
        xVel: (Math.random() - 0.5) * 8,
        yVel: Math.random() * 3 + 2,
        rotationVel: (Math.random() - 0.5) * 8,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
      });
    }

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.xVel;
        particle.y += particle.yVel;
        particle.rotation += particle.rotationVel;
        particle.yVel += 0.1; // Gravity
        particle.opacity -= 0.005; // Fade out

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        ctx.restore();

        // Remove particles that are out of view or fully transparent
        if (particle.y > canvas.height + 50 || particle.opacity <= 0) {
          particles.splice(index, 1);
        }
      });

      // Stop animation when all particles are gone
      if (particles.length > 0) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default Confetti;
