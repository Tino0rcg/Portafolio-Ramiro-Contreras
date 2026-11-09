import React from 'react';
import { ExternalLink, ArrowRight, Eye, Monitor, Globe, Wrench } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  onOpenTour?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, onOpenTour: _onOpenTour }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Globe className="w-3.5 h-3.5 text-cyan-400" />;
      case 'software':
        return <Monitor className="w-3.5 h-3.5 text-indigo-400" />;
      default:
        return <Wrench className="w-3.5 h-3.5 text-purple-400" />;
    }
  };

  const isAppWithLive = (project.category === 'software' || !!project.demoCredentials) && !!project.liveUrl;

  return (
    <div className="group flex flex-col bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail Banner */}
      <div 
        onClick={() => onOpenDetails(project)}
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 cursor-pointer flex items-center justify-center"
      >
        {project.isLogo ? (
          <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#0b0f19] relative overflow-hidden">
            {/* Ambient neon radial glow */}
            <div className={`absolute inset-0 opacity-25 bg-gradient-to-br ${project.accentColor || 'from-indigo-600 to-cyan-600'} blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
            
            {/* Dot grid pattern for high-tech aesthetic */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

            {/* Logo wrapper */}
            {project.logoBg === 'bg-white' ? (
              <div className="relative z-10 px-5 py-3 rounded-2xl bg-white shadow-xl shadow-cyan-950/40 border border-white/90 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-16 sm:h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="max-h-24 sm:max-h-28 max-w-[70%] object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
          </>
        )}

        {/* Type Badge & Custom Highlight Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-md min-w-0">
            {getCategoryIcon(project.category)}
            <span className="truncate max-w-[125px] xs:max-w-[170px] sm:max-w-none">{project.projectType}</span>
          </div>
          {project.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-white border border-white/20 backdrop-blur-md shadow-sm shrink-0">
              {project.badge}
            </span>
          )}
        </div>

        {/* Quick View Button overlay on hover / touch */}
        <div className="absolute bottom-3 right-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(project);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium text-white bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 shadow cursor-pointer transition-transform hover:scale-105"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Detalles</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 cursor-pointer transition-colors mb-2 line-clamp-1"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 sm:px-2 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium bg-slate-800/40 text-slate-400 border border-slate-800">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80">
          {isAppWithLive ? (
            /* Sole single button for apps as requested */
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Entrar a la Aplicación en Vivo de ${project.title}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-95 text-center"
              title="Entrar a la aplicación en vivo con tour guiado"
            >
              <span>🚀 Entrar a la Aplicación en Vivo</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
            </a>
          ) : (
            <div className="flex items-center justify-between gap-2 w-full">
              <button
                onClick={() => onOpenDetails(project)}
                className="inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                <span>Conocer más</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo de ${project.title}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all hover:scale-105"
                  title="Ver sitio web"
                >
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                  <span>Web</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
