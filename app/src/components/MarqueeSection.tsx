import React, { useRef, useEffect } from 'react';

const techStack = [
  "Python", "NumPy", "Pandas", "PyTorch", "TensorFlow", "SQL", "Git", "Linux", "LaTeX", "Matplotlib", "Scikit-learn", "Jupyter", "VS Code", "Docker", "REST APIs", "FastAPI", "Numba", "Polars", "DuckDB"
];

const achievements = [
  "JEE Advanced", "JEE Mains", "BITSAT", "VITEEE", "ISI Entrance", "NDA Written", "UIEO Gold (State Rank 2)", "STEM Olympiad Silver (State Rank 5)", "SKGKO Silver (State Rank 7)", "IRAO Bronze (State Rank 35)", "ITF Taekwon-Do Green-1 Belt", "IIT Madras Admit", "English", "Hindi", "Punjabi", "French", "German", "Arabic", "Urdu", "Tamil", "Sinhala"
];

// Tripled arrays
const row1 = [...techStack, ...techStack, ...techStack];
const row2 = [...achievements, ...achievements, ...achievements];

const Badge = ({ text }: { text: string }) => (
  <div className="bg-[#1A1A1A] border border-[#2A2A2A] px-6 py-3 rounded-full text-sm sm:text-base font-medium text-[#D7E2EA] whitespace-nowrap flex-shrink-0">
    {text}
  </div>
);

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      // Using window.scrollY and section offset
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      
      row1Ref.current.style.transform = `translate3d(calc(-50% + ${scrollOffset}px), 0, 0)`;
      row2Ref.current.style.transform = `translate3d(${-scrollOffset}px, 0, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1 (moves RIGHT) - So we need to start it with some negative margin or offset so it doesn't show blank on the left */}
        <div className="relative w-full overflow-visible">
          <div 
            ref={row1Ref} 
            className="flex gap-3 sm:gap-4 w-max"
            style={{ willChange: 'transform' }}
          >
            {row1.map((item, i) => <Badge key={`r1-${i}`} text={item} />)}
          </div>
        </div>

        {/* Row 2 (moves LEFT) */}
        <div className="relative w-full overflow-visible">
          <div 
            ref={row2Ref} 
            className="flex gap-3 sm:gap-4 w-max"
            style={{ willChange: 'transform' }}
          >
            {row2.map((item, i) => <Badge key={`r2-${i}`} text={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
