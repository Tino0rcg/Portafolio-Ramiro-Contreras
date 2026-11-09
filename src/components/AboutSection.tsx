import React from 'react';
import { User, Briefcase, Award, Zap, ShieldCheck } from 'lucide-react';
import { personalInfo, experienceData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Bio & Core Values */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Sobre Mí & Filosofía</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ingeniería de software orientada a resolver problemas reales.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Zap className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-sm font-bold text-white mb-1">Rendimiento</h4>
              <p className="text-xs text-slate-400">
                Soluciones rápidas, bajo consumo de memoria y optimización web.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-indigo-400 mb-2" />
              <h4 className="text-sm font-bold text-white mb-1">Arquitectura Sólida</h4>
              <p className="text-xs text-slate-400">
                Arquitectura escalable, patrones de diseño y fácil mantenimiento.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Award className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-white mb-1">Resultados</h4>
              <p className="text-xs text-slate-400">
                Enfocado en resolver problemas reales para usuarios y negocios.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Experience Timeline & Quick Info */}
        <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Trayectoria & Experiencia</h3>
          </div>

          <div className="space-y-6 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-7 sm:pl-8">
                {/* Timeline Dot */}
                <span className="absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-900" />

                {exp.period && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-1 inline-block">
                    {exp.period}
                  </span>
                )}

                <h4 className="text-sm sm:text-base font-bold text-white">{exp.role}</h4>
                <p className="text-xs text-indigo-400 font-medium mb-1.5 sm:mb-2">
                  {exp.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
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
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 text-xs text-slate-400">
            <span>Ubicación: <strong className="text-slate-200">{personalInfo.location}</strong></span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <strong className="text-emerald-400">Disponible para proyectos</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
