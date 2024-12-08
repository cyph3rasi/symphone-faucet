import React, { useEffect, useState } from 'react';
import { useWallet } from './hooks/useWallet';
import { useFaucet } from './hooks/useFaucet';
import { ClaimInterface } from './components/ClaimInterface';
import { Instructions } from './components/Instructions';
import { TokenSetup } from './components/TokenSetup';

const FaucetInterface = () => {
  const { account, loading: walletLoading, error: walletError, connectWallet } = useWallet();
  const { 
    loading: faucetLoading, 
    error: faucetError, 
    success, 
    showConfetti, 
    claimTokens, 
    handleClaimAgain 
  } = useFaucet();

  // Custom confetti implementation using canvas
  useEffect(() => {
    if (showConfetti) {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '100';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      const particles = [];
      let animationFrame;

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Create particles
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          velocity: 2 + Math.random() * 2,
          radius: 4 + Math.random() * 4,
          color: `hsl(${Math.random() * 360}, 70%, 50%)`
        });
      }

      // Animation loop
      const animate = () => {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          particle.y += particle.velocity;

          // Reset particle if it goes off screen
          if (particle.y > canvas.height + particle.radius) {
            particles.splice(index, 1);
          }
        });

        // Stop animation when all particles are off screen
        if (particles.length > 0) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          document.body.removeChild(canvas);
        }
      };

      animate();

      // Cleanup
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, [showConfetti]);

  return (
    <>
      <div className="min-h-screen py-12 px-4 relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ClaimInterface 
            account={account}
            loading={walletLoading || faucetLoading}
            error={walletError || faucetError}
            success={success}
            onConnect={connectWallet}
            onClaim={claimTokens}
            onClaimAgain={handleClaimAgain}
          />
          <Instructions />
          <TokenSetup />
        </div>
      </div>
    </>
  );
};

export default FaucetInterface;