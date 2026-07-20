import React from 'react';
import { FadeIn } from './FadeIn';

const educationData = [
  {
    title: "Indian Institute of Technology Madras (Jul 2026 – Aug 2030)",
    subtitle: "B.Sc. Data Science and Applications",
    desc: "Core Tracks: Python Programming, Statistical Modeling, Algorithmic Design, Data Engineering, Mathematical Foundations"
  },
  {
    title: "Competitive Examination Portfolio",
    items: [
      "JEE Advanced — Gateway to IITs, multi-layered conceptual synthesis",
      "JEE Mains — 1.2M+ candidates, high-tier performance in PCM",
      "BITSAT — 150 questions/3hrs, high-velocity adaptive exam",
      "VITEEE — Broad-spectrum scientific literacy validation",
      "ISI Entrance — Advanced mathematical proof, combinatorial reasoning",
      "NDA Written — Tri-services defense academy qualification"
    ]
  },
  {
    title: "Olympiad Scholastic Honors",
    items: [
      "🥇 Gold — UIEO (Unified International English Olympiad) | State Rank 2",
      "🥈 Silver — STEM Innovation Olympiad (SilverZone) | State Rank 5",
      "🥈 Silver — SKGKO (Smart Kid GK Olympiad) | State Rank 7",
      "🥉 Bronze — IRAO (International Reasoning & Aptitude) | State Rank 35"
    ]
  },
  {
    title: "Global Adaptability & Discipline",
    items: [
      "9-Language Matrix: Native/Bilingual (English, Hindi, Punjabi) + Elementary (French, German, Arabic, Urdu, Tamil, Sinhala) across 4 countries",
      "ITF Taekwon-Do — Green-1 Belt Certified, structured grading, daily discipline infrastructure",
      "Integrated Training: Combat + Cognitive Study + Acoustic Guitar + Harmonica"
    ]
  }
];

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <FadeIn delay={0.1} className="w-full flex justify-center mb-16 sm:mb-20">
          <h2 className="hero-heading font-black uppercase text-center leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
            Education
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-4xl">
          {educationData.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA]">
                <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">{exp.title}</h3>
                {exp.subtitle && (
                  <p className="font-medium text-lg sm:text-xl text-[#BBCCD7] mb-4">{exp.subtitle}</p>
                )}
                {exp.desc && (
                  <p className="font-light text-base sm:text-lg opacity-80 leading-relaxed">{exp.desc}</p>
                )}
                {exp.items && (
                  <ul className="flex flex-col gap-3 font-light text-base sm:text-lg opacity-80 leading-relaxed mt-4">
                    {exp.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#BBCCD7] mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
