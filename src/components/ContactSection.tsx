import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          ¿Tienes una idea o proyecto en mente?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 px-2 sm:px-0">
          Conversemos directamente a través de WhatsApp, correo electrónico o LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* WhatsApp Card */}
        {personalInfo.whatsapp && (
          <a
            href={`https://wa.me/${personalInfo.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all group hover:scale-[1.02] shadow-lg"
          >
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Respuesta Rápida</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">WhatsApp</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                Chat directo e instantáneo para evaluar requerimientos, dudas técnicas o coordinar una reunión.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 pt-4 border-t border-slate-800/80">
              <span>Iniciar chat</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        )}

        {/* Email Card */}
        <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-lg group">
          <div>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Correo Electrónico</span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">Email</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 font-mono truncate" title={personalInfo.email}>
              {personalInfo.email}
            </p>
          </div>
          <div className="space-y-2 pt-4 border-t border-slate-800/80">
            <div className="flex flex-col xs:flex-row gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30 text-center"
              >
                <span>Escribir correo</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700/60 shrink-0"
                title="Copiar correo"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* LinkedIn Card */}
        {personalInfo.linkedin && (
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all group hover:scale-[1.02] shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Red Profesional</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-400 mb-4">
                Conectemos en LinkedIn para explorar oportunidades, proyectos conjuntos y networking.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 pt-4 border-t border-slate-800/80">
              <span>Ver perfil</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        )}
      </div>
    </section>
  );
};
