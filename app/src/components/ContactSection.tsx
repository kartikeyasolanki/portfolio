import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const contacts = [
  {
    label: "Email",
    value: "kartikeya.k.solanki@gmail.com",
    href: "mailto:kartikeya.k.solanki@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kartikeyasolanki",
    href: "https://linkedin.com/in/kartikeyasolanki",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/kartikeyasolanki",
    href: "https://github.com/kartikeyasolanki",
    icon: Github,
  },
  {
    label: "Phone",
    value: "+91 9029482158",
    href: "tel:+919029482158",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Dera Bassi, Punjab, India",
    icon: MapPin,
  }
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        <FadeIn delay={0.1} className="w-full flex justify-center mb-6 sm:mb-10">
          <h2 className="hero-heading font-black uppercase text-center leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}>
            Get in Touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <p className="text-[#D7E2EA] text-center font-light max-w-md mx-auto mb-16" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Open to internships, research collaborations, and technical opportunities.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            
            const content = (
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#D7E2EA]/50 transition-colors flex items-center gap-5 h-full">
                <div className="bg-[#2A2A2A] p-3 rounded-full shrink-0">
                  <Icon className="w-6 h-6 text-[#D7E2EA]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[#D7E2EA] font-medium text-sm opacity-60 mb-1">{contact.label}</span>
                  <span className="text-[#D7E2EA] font-medium text-base sm:text-lg truncate">{contact.value}</span>
                </div>
              </div>
            );

            return (
              <FadeIn key={i} delay={0.3 + i * 0.1} className={i === 4 ? "md:col-span-2" : ""}>
                {contact.href ? (
                  <a href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel="noreferrer" className="block h-full w-full">
                    {content}
                  </a>
                ) : (
                  <div className="h-full w-full">
                    {content}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
