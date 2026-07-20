import React from 'react';
import { FadeIn } from './FadeIn';

const skillsData = [
  {
    num: "01",
    title: "Computational & Data Engineering",
    items: [
      "Python — Core Syntax, OOP, Scripting, Library Integration",
      "Statistical Analysis — Probability Modeling, Inferential Statistics, EDA",
      "Data Modeling — Advanced Excel, Tabular Architecture, Feature Engineering",
      "Algorithmic Problem Solving — Complexity Analysis, Recursive Logic, DP",
      "Data Engineering — Wrangling, Cleansing, Transformation, ML/BI Prep"
    ]
  },
  {
    num: "02",
    title: "Architecture & Systems Automation",
    items: [
      "Digital Workflow Automation — End-to-End Process Optimization, Task Sequencing",
      "Generative AI Frameworks — Prompt Engineering, AI Tool Integration, Output Calibration",
      "Structural Logic Design — System-Level Architecture Mapping, Decision Trees",
      "Computational Thinking — Abstraction Layering, Decomposition, Modular Design",
      "Mathematical Foundations — Linear Algebra, Multivariable Calculus, Discrete Math, Optimization"
    ]
  },
  {
    num: "03",
    title: "Executive Leadership & Strategy",
    items: [
      "Cross-Cultural Intelligence — 4 Countries, 9 Languages, Contextual Adaptability",
      "Competitive Examination Mastery — JEE Advanced, BITSAT, ISI, NDA, Olympiads",
      "Disciplined Execution Infrastructure — Daily Cognitive/Physical Training Integration",
      "Technical Communication — English Olympiad Gold, Linguistic Precision, Comprehension Synthesis",
      "Strategic Problem Solving — Multi-Domain Synthesis, Applied STEM Innovation"
    ]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn delay={0.1} className="w-full">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Core Competencies
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {skillsData.map((category, i) => (
            <FadeIn 
              key={category.num} 
              delay={i * 0.1}
              className={`flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 py-8 sm:py-10 md:py-12 ${i !== 0 ? 'border-t border-[rgba(12,12,12,0.15)]' : ''}`}
            >
              <div className="md:w-1/3 shrink-0 flex items-start">
                <span className="text-[#0C0C0C] font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                  {category.num}
                </span>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <h3 className="text-[#0C0C0C] font-medium uppercase mb-4" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {category.title}
                </h3>
                <ul className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 flex flex-col gap-2" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-gray-400 select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
