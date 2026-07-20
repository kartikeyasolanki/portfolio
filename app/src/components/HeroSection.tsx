import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between w-full px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#experience" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Experience</a>
        <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Contact</a>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center relative z-20 pointer-events-none mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            HI, <span className="lowercase">I'm</span> KARTIKEYA
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[320px] sm:max-w-[400px] md:max-w-[480px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            Aspiring Data Scientist | Algorithmic Thinker
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20} className="pointer-events-auto shrink-0 ml-4">
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img src="/portrait.jpg" alt="Kartikeya Solanki" className="w-full h-auto object-cover pointer-events-none" />
        </Magnet>
      </FadeIn>
    </section>
  );
};
