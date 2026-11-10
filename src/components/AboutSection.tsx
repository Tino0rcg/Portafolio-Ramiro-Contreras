import React from 'react';
import {
  User,
  Briefcase,
  Layers,
  Code2,
  GitBranch,
  Bot,
  Server,
  CheckCircle2,
  MapPin,
  Laptop,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { personalInfo, experienceData, competenciasData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const competencyIcons = [
    {
      icon: Layers,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Code2,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Bot,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: Server,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: GitBranch,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <User className="w-3.5 h-3.5" />
          <span>Sobre Mí</span>
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ingeniero Informático & Ingeniero de Software{' '}
          <span className="text-slate-500 font-normal hidden sm:inline">|</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
            Ingeniería de Soluciones & Transformación Digital
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mt-3">
          Diseño, desarrollo e implementación de soluciones tecnológicas para empresas.
        </p>
      </div>

      {/* Grid: Bio (Left) & Proyectos Destacados (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Unified Bio Narrative */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="space-y-4 text-slate-300 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-normal">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Proyectos Destacados Timeline & Quick Info */}
        <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Proyectos Destacados</h3>
          </div>

          <div className="space-y-6 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-7 sm:pl-8">
                {/* Timeline Dot */}
                <span className="absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-900" />

                <h4 className="text-sm sm:text-base font-bold text-white">{exp.organization}</h4>
                <p className="text-xs text-indigo-400 font-medium mb-1">
                  {exp.role}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-400 border border-slate-700/60 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Info Box */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <strong className="text-slate-200">{personalInfo.location}</strong>
              </span>

              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <Laptop className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.workMode || 'Remoto / Híbrido'}</span>
              </span>
            </div>

            {personalInfo.education && (
              <div className="flex items-center gap-2 text-slate-300 pt-2 border-t border-slate-800/60">
                <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="leading-snug">
                  <strong className="text-white font-medium">Estudios:</strong>{' '}
                  {personalInfo.education}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm pt-2 border-t border-slate-800/60">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">
                {personalInfo.availability || 'Disponible para oportunidades profesionales y proyectos tecnológicos.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Competencias Profesionales */}
      <div className="mt-14 pt-12 border-t border-slate-800/80">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Competencias Profesionales
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Áreas clave de especialización, arquitectura y entrega de valor tecnológico.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {competenciasData.map((comp, idx) => {
            const config = competencyIcons[idx] || competencyIcons[0];
            const IconComponent = config.icon;
            const isFullWidth = idx === 4;

            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900/80 group ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${config.bg} ${config.color} shrink-0`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {comp.title}
                  </h4>
                </div>

                <ul
                  className={
                    isFullWidth
                      ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300'
                      : 'space-y-2.5 text-xs sm:text-sm text-slate-300'
                  }
                >
                  {comp.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-slate-300/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
