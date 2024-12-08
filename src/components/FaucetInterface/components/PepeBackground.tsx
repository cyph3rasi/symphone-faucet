import React, { useEffect } from 'react';

export const PepeBackground: React.FC = () => {
  useEffect(() => {
    // Create floating elements
    const floatingContainer = document.querySelector('.floating-container');
    if (!floatingContainer) return;

    // Clear existing elements
    floatingContainer.innerHTML = '';

    // Text options and emoji for floating elements
    const elements = [
      '$0', 'FREE',
      '🐸', '💚', '🎮', '🎯', '🎪' // Pepe emojis
    ];
    
    // Create floating elements
    for (let i = 0; i < 50; i++) {
      const floatingEl = document.createElement('div');
      floatingEl.className = 'floating-text';
      floatingEl.textContent = elements[Math.floor(Math.random() * elements.length)];
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Random size (bigger than stars for better visibility)
      const size = Math.random() * 20 + 15;
      
      // Slower float duration and delay
      const duration = Math.random() * 10 + 15;
      const delay = Math.random() * -20;
      
      floatingEl.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        font-size: ${size}px;
        --duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.5 + 0.1};
      `;
      
      floatingContainer.appendChild(floatingEl);
    }
  }, []);

  return (
    <>
      <div className="pepe-background" />
      <div className="floating-container" />
    </>
  );
};
