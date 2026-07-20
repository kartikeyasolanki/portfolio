import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(" ");
  let totalChars = 0;
  words.forEach(w => totalChars += w.length);
  
  let charCount = 0;

  return (
    <p ref={containerRef} className={className + " flex flex-wrap justify-center"} style={style}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] relative inline-flex">
          {word.split("").map((char, j) => {
            const start = charCount / totalChars;
            charCount++;
            const end = start + (1 / totalChars);
            
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            
            return (
              <span key={j} className="relative">
                <span className="opacity-0">{char}</span>
                <motion.span
                  className="absolute left-0 top-0 text-[#D7E2EA]"
                  style={{ opacity }}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
};
