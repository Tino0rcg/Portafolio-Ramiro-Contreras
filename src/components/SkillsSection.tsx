import React, { useState } from 'react';
import { Cpu, Globe, Database, Terminal, Code, Check, ChevronDown } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

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

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(prev => (prev === skillName ? null : skillName));
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
        <p className="text-xs sm:text-sm text-indigo-400/90 mt-2 font-medium">
          💡 Haz clic en cualquier tecnología para expandir su aplicación práctica en proyectos.
        </p>
      </div>

      {/* Grid of Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-start">
        {skillsData.map((group, groupIdx) => (
          <div
            key={group.category}
            className="p-5 sm:p-7 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg"
          >
            {/* Group Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-5">
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

            {/* Skills List: Cortos y compactos en 2 columnas como estaban antes, expandibles al clic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 sm:pt-2">
              {group.skills.map((skill) => {
                const isExpanded = expandedSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    onClick={() => toggleSkill(skill.name)}
                    className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                      isExpanded
                        ? 'sm:col-span-2 bg-slate-800/90 border-indigo-500/70 shadow-lg shadow-indigo-500/10'
                        : 'bg-slate-800/40 border-slate-800/80 hover:bg-slate-800/70 hover:border-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <div className="flex items-center gap-2 min-w-0">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span
                          className={`text-xs sm:text-sm font-medium text-slate-200 ${
                            isExpanded ? 'break-words' : 'truncate'
                          }`}
                          title={skill.name}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {skill.level && (
                          <span
                            className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border shrink-0 whitespace-nowrap ${
                              skill.level === 'Especialidad'
                                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                                : 'bg-slate-900/80 text-slate-400 border-slate-700/50'
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
                            isExpanded ? 'rotate-180 text-indigo-400' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Contenido expandido con contexto de aplicación real */}
                    {isExpanded && skill.detail && (
                      <div className="mt-2.5 pt-2.5 border-t border-slate-700/60 animate-fade-in">
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {skill.detail}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
