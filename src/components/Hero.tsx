import React from 'react';
import { ArrowDown, ExternalLink, Mail, Terminal, Globe, Cpu, MessageCircle, Layers, GraduationCap } from 'lucide-react';
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
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Ingeniero en Informática — Universidad de Las Américas</span>
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

        {/* Nombre: Ramiro Contreras Gonzalez */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.12]">
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Qué haces / Especialidad */}
        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6">
          Ingeniería de Soluciones Tecnológicas & Software Empresarial
        </p>

        {/* Descripción breve de tu enfoque / Qué tipo de soluciones desarrollas */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0">
          {personalInfo.tagline}
        </p>

        {/* Call to Actions Principales: Ver Proyectos & LinkedIn */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-md sm:max-w-none mx-auto">
          {/* Botón para ver proyectos */}
          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
          >
            <Layers className="w-4 h-4 text-white" />
            <span>Ver Proyectos</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Botón LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-[#0A66C2] hover:bg-[#084e96] border border-blue-400/30 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 fill-current text-white shrink-0" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Canales de Contacto Directo */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 mb-10 sm:mb-14">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            title={`Enviar correo a ${personalInfo.email}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 transition-all text-xs font-medium"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>{personalInfo.email}</span>
          </a>

          {personalInfo.whatsapp && (
            <a
              href={`https://wa.me/${personalInfo.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Contactar por WhatsApp"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 transition-all text-xs font-medium"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          )}

          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="Ver perfil de GitHub"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Key Competence Highlights / Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-start sm:justify-center gap-3 p-3.5 sm:p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Globe className="w-6 h-6 text-cyan-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Plataformas SaaS & Gestión</h4>
              <p className="text-xs text-slate-400">Control Operativo y Trazabilidad</p>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-3 p-3.5 sm:p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Cpu className="w-6 h-6 text-indigo-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Ingeniería Web & Cloud</h4>
              <p className="text-xs text-slate-400">Next.js, PostgreSQL y APIs</p>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-3 p-3.5 sm:p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <Terminal className="w-6 h-6 text-purple-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Inteligencia Artificial</h4>
              <p className="text-xs text-slate-400">OpenAI, Claude, DeepSeek & Ollama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
