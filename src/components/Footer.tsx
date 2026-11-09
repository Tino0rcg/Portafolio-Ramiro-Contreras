import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-white">
            {personalInfo.name !== 'Tu Nombre' ? personalInfo.name : 'Portafolio'}
          </span>
          <span className="text-xs text-slate-500">
            © {currentYear} • Todos los derechos reservados.
          </span>
        </div>

        {/* Center note */}
        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          <span>Diseñado y construido con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </p>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
          aria-label="Volver arriba"
        >
          <span>Subir</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
