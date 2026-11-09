import React from 'react';
import { Cpu, Globe, Database, Terminal, Code, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Code className="w-3.5 h-3.5" />
          <span>Habilidades & Tecnologías</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Tecnologías & Herramientas
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 px-2 sm:px-0">
          Herramientas y tecnologías modernas con las que diseño y construyo sistemas robustos, seguros y escalables.
        </p>
      </div>

      {/* Grid of Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {skillsData.map((group, groupIdx) => (
          <div
            key={group.category}
            className="p-5 sm:p-7 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg"
          >
            {/* Group Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner shrink-0">
                {getCategoryIcon(groupIdx)}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {group.category}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 sm:pt-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 hover:bg-slate-800/70 hover:border-slate-700/80 transition-colors min-w-0"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 truncate" title={skill.name}>
                      {skill.name}
                    </span>
                  </div>
                  {skill.level && (
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-700/50 shrink-0">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
