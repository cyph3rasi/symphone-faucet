import React from 'react';

export const AboutToken: React.FC = () => {
  return (
    <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-purple-500/20 h-full">
      <h2 className="text-xl font-bold mb-4 font-zen-dots text-purple-300">About the Symphony Token</h2>
      
      <div className="space-y-6 text-gray-300">
        <p className="leading-relaxed">
          The Symphony Token is a unique cryptocurrency designed to harmonize the dynamics of the decentralized web. With a finite supply of 8.2 billion tokens, the Symphony Token embraces the principle of scarcity, imbuing each unit with a sense of reverence.
        </p>

        <p className="leading-relaxed">
          Notably, the Symphony Token does not permit any new minting or additional issuance. Its fixed supply stands as an immutable testament to the principles of digital integrity. This unwavering adherence to a closed-loop system is intended to inspire a profound sense of trust within the community.
        </p>

        <p className="leading-relaxed">
          Rather than hoarding wealth, the Symphony Token is generously distributed, gifted to those who seek to participate in the grand symphony of the decentralized realm. This spirit of abundance is a clarion call, inviting all to join the resonant chorus of progress and innovation.
        </p>

        <p className="leading-relaxed">
          Through this multifaceted design, the Symphony Token aspires to be more than mere currency - it is a reflection of the universal harmonies that underpin the digital landscape. As users engage with the token, they become conductors in the symphony of blockchain, weaving their unique melodies into the grand composition.
        </p>
      </div>
    </div>
  );
};