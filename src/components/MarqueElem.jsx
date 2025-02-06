import React from 'react';
import { motion } from 'framer-motion';

const logoUrls = [
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f423487a2a26cb480df66f_BBC.svg",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f423487a2a26cb480df61e_Apple%20TV.svg",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f59f9775bd0b0b43e6dc50_MLS-NEW.png",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f5e975e9c168d0980af549_NYR-NEW.png",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f5a26175bd0b0b43e97cef_Knicks-NEW.png",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f423487a2a26cb480df6c8_verizon.svg",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f5eae43944ec082bed8b9c_Sleeper-NEW.png",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/67434aefd0f8bd0ef800673c_Popeyes.png",
  "https://cdn.prod.website-files.com/66f423487a2a26cb480df602/66f5eb53e9c168d0980c8327_RBC-NEW.png"
];

const MarqueElem = () => {
  return (
    <div className="overflow-hidden w-[50%] bg-gray-100 py-4">
      <motion.div
        className="flex w-full"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {[...logoUrls, ...logoUrls].map((src, index) => (
          <div key={index} className="min-w-max mx-8">
            <img src={src} alt={`logo-${index}`} className="h-16 w-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueElem;
