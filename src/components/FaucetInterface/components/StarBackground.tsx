import React, { useEffect } from 'react';

export const StarBackground: React.FC = () => {
  useEffect(() => {
    // Create stars
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;

    // Clear existing stars
    starsContainer.innerHTML = '';

    // Create new stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Slightly smaller stars
      const size = Math.random() * 1.5 + 0.5;
      
      // Slower twinkle
      const duration = Math.random() * 5 + 3;
      
      star.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        --duration: ${duration}s;
      `;
      
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="stars-background" />
      <div className="stars-container" />
    </>
  );
};
