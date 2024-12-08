import React from 'react';

export const AboutToken: React.FC = () => {
  return (
    <div className="bg-black/30 backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-green-500/20 h-full">
      <h2 className="text-xl font-bold mb-4 font-zen-dots text-green-300">About FREEPEPE Token</h2>
      
      <div className="space-y-6 text-gray-300">
        <p className="leading-relaxed">
          FREEPEPE is more than just another meme token – it's a statement of freedom in the digital asset space. Born from the spirit of decentralization and community empowerment, FREEPEPE represents the democratization of crypto culture.
        </p>

        <p className="leading-relaxed">
          What makes FREEPEPE unique is its commitment to being truly free – no presale, no team allocation, and no hidden fees. Every token is distributed fairly through our community faucet, ensuring equal opportunity for all participants.
        </p>

        <p className="leading-relaxed">
          In the spirit of the original Pepe meme, FREEPEPE embraces the fun and irreverent nature of crypto culture while maintaining a serious commitment to fairness and accessibility. It's a token by the people, for the people.
        </p>

        <p className="leading-relaxed">
          By claiming FREEPEPE tokens, you're not just getting free tokens – you're becoming part of a movement that believes in open access, community power, and the pure joy of participating in crypto culture without barriers.
        </p>
      </div>
    </div>
  );
};