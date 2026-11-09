import React, { useEffect, useState } from 'react';
import { X, Sparkles, MousePointerClick, RefreshCw } from 'lucide-react';
import type { Project } from '../types';
import { OnlineDeskSimulator } from './simulator/OnlineDeskSimulator';
import { IcsaSimulator } from './simulator/IcsaSimulator';

interface InteractiveTourModalProps {
  project: Project | null;
  onClose: () => void;
}

export const InteractiveTourModal: React.FC<InteractiveTourModalProps> = ({ project, onClose }) => {
  const [iframeLoading, setIframeLoading] = useState(true);

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

  // Determine if we have a rich native simulator for this project
  const isOnlineDesk = project.id === 'onlinedesk-gestion-requerimientos';
  const isIcsa = project.id === 'software-gestion-operativa-icsa';
  const hasNativeSimulator = isOnlineDesk || isIcsa;

  // If no native simulator and no tourUrl, do not render
  if (!hasNativeSimulator && !project.tourUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl h-[92vh] max-h-[880px] bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col">
        {/* Top Header Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 text-indigo-300 border border-indigo-500/40 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span>{hasNativeSimulator ? 'Demostración Guiada Nativa' : 'Tour Interactivo'}</span>
            </div>
            <div className="truncate hidden sm:block">
              <span className="text-sm font-semibold text-white truncate block">
                {project.title}
              </span>
              {project.tourTitle && (
                <span className="text-xs text-slate-400 truncate block">
                  {project.tourTitle}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-[11px] text-indigo-300">
              <MousePointerClick className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactúa libremente con cada módulo</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
              aria-label="Cerrar tour"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Workspace Container */}
        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden flex flex-col">
          {isOnlineDesk ? (
            <OnlineDeskSimulator />
          ) : isIcsa ? (
            <IcsaSimulator />
          ) : project.tourUrl ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 z-10 text-slate-400">
                  <RefreshCw className="w-8 h-8 animate-spin text-indigo-500" />
                  <p className="text-xs font-medium">Cargando experiencia interactiva...</p>
                </div>
              )}
              <iframe
                key={project.id}
                src={project.tourUrl}
                title={project.tourTitle || `Tour Interactivo de ${project.title}`}
                className="w-full h-full border-0"
                loading="lazy"
                allow="clipboard-write; fullscreen"
                allowFullScreen
                onLoad={() => setIframeLoading(false)}
              />
            </div>
          ) : null}
        </div>

        {/* Bottom Status / Guidance Bar */}
        <div className="px-3 sm:px-6 py-2 sm:py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
          <p className="truncate text-[11px] sm:text-xs">
            <span className="hidden sm:inline">
              <strong className="text-slate-200">🛡️ Entorno Aislado:</strong> Esta experiencia interactiva simula los módulos y lógica real de tu software sin tocar bases de datos de producción.
            </span>
            <span className="sm:hidden text-slate-300">
              🛡️ Entorno Demostrativo Interactivo
            </span>
          </p>
          <button
            onClick={onClose}
            className="px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
          >
            Finalizar recorrido
          </button>
        </div>
      </div>
    </div>
  );
};
