import React, { useEffect } from 'react';

export const PepeBackground: React.FC = () => {
  useEffect(() => {
    // Create floating elements
    const floatingContainer = document.querySelector('.floating-container');
    if (!floatingContainer) return;

    // Clear existing elements
    floatingContainer.innerHTML = '';

    // Text options for floating elements
    const texts = ['$0', 'FREE'];
    
    // Create floating elements
    for (let i = 0; i < 50; i++) {
      const floatingEl = document.createElement('div');
      floatingEl.className = 'floating-text';
      floatingEl.textContent = texts[Math.floor(Math.random() * texts.length)];
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Random size (bigger than stars for better visibility)
      const size = Math.random() * 20 + 15;
      
      // Random float duration and delay
      const duration = Math.random() * 8 + 5;
      const delay = Math.random() * -10;
      
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
