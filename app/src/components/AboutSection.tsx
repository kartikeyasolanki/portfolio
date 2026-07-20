import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]">
      {/* Decorative Corners */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-10 left-5 sm:left-10 w-12 sm:w-16">
        <img src="/corner-1.svg" alt="" className="w-full h-auto opacity-50" />
      </FadeIn>
      <FadeIn delay={0.15} duration={0.9} x={-80} y={0} className="absolute bottom-10 left-5 sm:left-10 w-12 sm:w-16">
        <img src="/corner-2.svg" alt="" className="w-full h-auto opacity-50" />
      </FadeIn>
      <FadeIn delay={0.25} duration={0.9} x={80} y={0} className="absolute top-10 right-5 sm:right-10 w-12 sm:w-16">
        <img src="/corner-3.svg" alt="" className="w-full h-auto opacity-50" />
      </FadeIn>
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-10 right-5 sm:right-10 w-12 sm:w-16">
        <img src="/corner-4.svg" alt="" className="w-full h-auto opacity-50" />
      </FadeIn>

      <div className="flex flex-col items-center w-full z-10 max-w-[1200px]">
        <FadeIn delay={0} y={40} className="w-full flex justify-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About Me
          </h2>
        </FadeIn>

        <div className="w-full max-w-[720px] mx-auto text-center mb-16 sm:mb-20 md:mb-24">
          <AnimatedText 
            text="Analytically rigorous Data Science undergraduate at IIT Madras, architecting a deep computational foundation across Python programming, statistical modeling, algorithmic logic design, and digital workflow automation. Validated quantitative acumen through elite performance across India's most demanding entrance architectures — JEE Advanced, JEE Mains, BITSAT, VITEEE, ISI Entrance, and NDA Written Qualification. Cultivated rare cross-cultural operational intelligence through formative exposure across four international countries, commanding a nine-language linguistic framework driving contextual adaptability. Positioned to deliver immediate analytical depth to technical teams, data pipelines, and research initiatives."
            className="text-[#D7E2EA] font-medium leading-relaxed" 
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }} 
          />
        </div>

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
