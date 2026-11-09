import React from 'react';
import { ArrowDown, Mail, Terminal, Globe, Cpu, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-indigo-600/30 blur-[130px] rounded-full absolute -top-20 -left-20 animate-pulse" />
        <div className="w-[450px] h-[450px] bg-purple-600/25 blur-[140px] rounded-full absolute -bottom-20 -right-20" />
        <div className="w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Engineering Role Badge & Availability Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Ingeniero Informático</span>
          </div>

          {personalInfo.availableForHire && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-inner shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Disponible para Proyectos & Consultoría</span>
            </div>
          )}
        </div>

        {/* Main Title & Role */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Creando soluciones de{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Software
          </span>{' '}
          y experiencias{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Web
          </span>
        </h1>

        {/* Tagline / Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
          {personalInfo.tagline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#proyectos"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Ver Proyectos</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Contactar Conmigo</span>
          </a>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center justify-center gap-5 text-slate-400 mb-14">
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 hover:scale-110 transition-all shadow"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 hover:scale-110 transition-all shadow"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          {personalInfo.whatsapp && (
            <a
              href={`https://wa.me/${personalInfo.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 hover:scale-110 transition-all shadow"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          )}
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 hover:scale-110 transition-all shadow"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Key Competence Highlights / Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Globe className="w-6 h-6 text-cyan-400" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Ingeniería Web</h4>
              <p className="text-xs text-slate-400">Páginas y Aplicaciones Rápidas</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Cpu className="w-6 h-6 text-indigo-400" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Sistemas & SaaS</h4>
              <p className="text-xs text-slate-400">Gestión de Procesos y Operación</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Terminal className="w-6 h-6 text-purple-400" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Automatización con IA</h4>
              <p className="text-xs text-slate-400">Procesos Automáticos y Reportes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
