import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, ShieldAlert, Sparkles, KeyRound, Copy, Check, Rocket } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenTour?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenTour }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 my-auto">
        {/* Header Preview Image */}
        <div className="relative h-44 sm:h-64 md:h-72 w-full overflow-hidden bg-slate-950 shrink-0 flex items-center justify-center">
          {project.isLogo ? (
            <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#0b0f19] relative overflow-hidden">
              <div className={`absolute inset-0 opacity-25 bg-gradient-to-br ${project.accentColor || 'from-indigo-600 to-cyan-600'} blur-3xl`} />
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />

              {project.logoBg === 'bg-white' ? (
                <div className="relative z-10 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white shadow-2xl border border-white/90">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-16 sm:h-24 md:h-28 w-auto object-contain"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-24 sm:max-h-36 md:max-h-40 max-w-[80%] object-contain relative z-10 drop-shadow-2xl"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
            </>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 cursor-pointer shadow-lg z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
              {project.projectType}
            </span>
            {project.badge && (
              <span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30 backdrop-blur-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Demo Credentials & Live App Access Banner */}
          {project.demoCredentials && project.demoCredentials.length > 0 && (
            <div className="space-y-4 p-5 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-slate-900/90 to-purple-950/50 border border-indigo-500/40 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                    <KeyRound className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">
                        Acceso a la Aplicación en Vivo & Cuentas Demo
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Multirrol
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Prueba los diferentes paneles y permisos de la aplicación real. La pantalla de login incluye botones de acceso rápido con 1 solo clic.
                    </p>
                  </div>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>🚀 Entrar a la Aplicación en Vivo</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                {project.demoCredentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-colors flex flex-col justify-between gap-2.5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-indigo-300">{cred.role}</span>
                      </div>
                      {cred.description && (
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {cred.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs font-mono">
                      <div className="flex items-center justify-between gap-2 bg-slate-950/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
                        <span className="text-slate-300 truncate text-[11px]" title={cred.email}>
                          {cred.email}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(cred.email, `${cred.email}-email`)}
                          className="text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                          title="Copiar correo"
                        >
                          {copiedKey === `${cred.email}-email` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      {cred.password && (
                        <div className="flex items-center justify-between gap-2 bg-slate-950/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 truncate text-[11px]" title={cred.password}>
                            {cred.password}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(cred.password!, `${cred.email}-pass`)}
                            className="text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                            title="Copiar contraseña"
                          >
                            {copiedKey === `${cred.email}-pass` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights / Puntos Clave */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Módulos & Funcionalidades Principales
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges Superados */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 bg-slate-900/70 p-5 rounded-xl border border-indigo-900/50">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Retos Técnicos de Ingeniería Superados
              </h4>
              <div className="space-y-3 pt-1">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <h5 className="text-xs font-bold text-indigo-300 flex items-center gap-1.5 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 mb-1.5">
                      <strong className="text-slate-300 font-medium">Desafío: </strong>
                      {item.challenge}
                    </p>
                    <p className="text-xs text-slate-300">
                      <strong className="text-emerald-400 font-medium">Solución técnica: </strong>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              Stack Tecnológico
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              Cerrar ventana
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              {onOpenTour && (
                <button
                  type="button"
                  onClick={() => onOpenTour(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition-all hover:scale-105 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>Ver Tour Guiado</span>
                </button>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-600/30 transition-all hover:scale-105 text-center"
                >
                  <Rocket className="w-4 h-4 text-cyan-200" />
                  <span>{project.demoCredentials || project.category === 'software' ? '🚀 Entrar a la Aplicación en Vivo' : 'Ver Sitio Web'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
