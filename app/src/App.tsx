import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#BBCCD7] selection:text-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}

export default App;
