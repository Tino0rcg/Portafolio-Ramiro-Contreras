import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Navigation bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
