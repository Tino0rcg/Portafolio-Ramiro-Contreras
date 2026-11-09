import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const featuredProjectsMeta: Record<
  string,
  { shortTitle: string; problemSolutionResult: string; technologiesText: string; browserUrl: string }
> = {
  'onlinedesk-gestion-requerimientos': {
    shortTitle: 'OnlineDesk — Plataforma SaaS en Tiempo Real',
    problemSolutionResult: 'Requerimientos desordenados · Tablero Kanban y SLA · Trazabilidad y PDF por correo',
    technologiesText: 'Next.js · TypeScript · Supabase Realtime · IA · PDF',
    browserUrl: 'gesti-n-de-requerimientos-app.vercel.app',
  },
  'software-gestion-operativa-icsa': {
    shortTitle: 'ICSA — Gestión de Órdenes en Terreno',
    problemSolutionResult: 'Uso de papel y demoras · Órdenes digitales y firmas táctiles · Actas e informes en PDF',
    technologiesText: 'Next.js 15 · PostgreSQL · Firmas en Pantalla · PDF',
    browserUrl: 'icsa-operaciones.vercel.app',
  },
  'web-online-system': {
    shortTitle: 'ONLINE System — Web con IA Autónoma',
    problemSolutionResult: 'Posicionamiento web lento · Automatización con API Gemini · Contenido técnico y SEO continuo',
    technologiesText: 'Next.js 15 · API Google Gemini · Tailwind CSS · SEO',
    browserUrl: 'onlinesystem.cl',
  },
  'web-colectivo-oft': {
    shortTitle: 'Colectivo OFT — Estudio & Arquitectura',
    problemSolutionResult: 'Presentación estática · Portafolio editorial interactivo y video · Catálogo de proyectos',
    technologiesText: 'Next.js · React · Video Streaming · Optimización WebP',
    browserUrl: 'colectivooft.cl',
  },
};

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentProject = projectsData[currentIndex] || projectsData[0];
  const meta =
    featuredProjectsMeta[currentProject.id] || {
      shortTitle: currentProject.title,
      problemSolutionResult: currentProject.shortDescription,
      technologiesText: currentProject.technologies.slice(0, 4).join(' · '),
      browserUrl: 'proyecto.app',
    };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <section className="bg-[#0B111D] text-[#F5F6FA] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Contenido Principal */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Etiqueta superior */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#A9B5C8] uppercase mb-4 sm:mb-5">
              INGENIERO INFORMÁTICO
            </p>

            {/* Título principal con saltos de línea exactos */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#F5F6FA] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Desarrollo software<br />
              y soluciones web<br />
              <span className="text-[#A99AFF]">para empresas.</span>
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-[#A9B5C8] leading-relaxed mb-8 max-w-xl">
              Diseño, desarrollo e implemento soluciones tecnológicas<br className="hidden sm:inline" />{' '}
              adaptadas a los procesos de cada empresa.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm sm:text-base font-semibold text-[#F5F6FA] bg-[#6847FF] hover:bg-[#5735eb] transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm sm:text-base font-semibold text-[#F5F6FA] bg-[#131E30] hover:bg-[#1a283e] border border-[#29374D] transition-colors"
              >
                Conversemos
              </a>
            </div>

            {/* Indicador de disponibilidad */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#35D6A5]">
              <span className="w-2 h-2 rounded-full bg-[#35D6A5] shrink-0" />
              <span>Disponible para proyectos y consultoría</span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Proyecto Destacado */}
          <div className="lg:col-span-5 w-full">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-[#131E30] border border-[#29374D] rounded-2xl p-5 sm:p-6 shadow-xl transition-all"
            >
              {/* Etiqueta superior y controles */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#A9B5C8] uppercase">
                  PROYECTO DESTACADO ({currentIndex + 1}/4)
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    {projectsData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Ver proyecto ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          currentIndex === idx ? 'w-5 bg-[#6847FF]' : 'w-1.5 bg-[#29374D] hover:bg-[#A9B5C8]'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-0.5 ml-1">
                    <button
                      onClick={prevProject}
                      aria-label="Proyecto anterior"
                      className="p-1 rounded text-[#A9B5C8] hover:text-[#F5F6FA] hover:bg-[#1C2B43] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={nextProject}
                      aria-label="Proyecto siguiente"
                      className="p-1 rounded text-[#A9B5C8] hover:text-[#F5F6FA] hover:bg-[#1C2B43] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contenedor de captura del proyecto: Ventana de navegador */}
              <div className="bg-[#1C2B43] border border-[#29374D] rounded-xl overflow-hidden mb-5">
                {/* Barra superior con 3 pequeños círculos y URL del navegador */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#29374D] bg-[#162235]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#A9B5C8]/75 truncate max-w-[170px] xs:max-w-[220px]">
                    https://{meta.browserUrl}
                  </span>
                  <div className="w-5" />
                </div>

                {/* Área visual del proyecto */}
                <div className="h-44 sm:h-52 w-full bg-[#1C2B43] flex items-center justify-center p-4 overflow-hidden relative">
                  {currentProject.isLogo ? (
                    currentProject.logoBg === 'bg-white' ? (
                      <div className="px-5 py-3 rounded-xl bg-white shadow-md border border-white/80">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="h-14 sm:h-16 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="max-h-20 sm:max-h-24 max-w-[80%] object-contain drop-shadow-md"
                      />
                    )
                  ) : (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="min-h-[110px] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F6FA] mb-1 line-clamp-1">
                    {meta.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A9B5C8] mb-1.5 line-clamp-2">
                    {meta.problemSolutionResult}
                  </p>
                  <p className="text-xs text-[#A9B5C8]/80 mb-3 font-mono">
                    {meta.technologiesText}
                  </p>
                </div>
                <a
                  href="#proyectos"
                  className="text-sm font-semibold text-[#A99AFF] hover:text-[#6847FF] transition-colors inline-flex items-center gap-1.5 pt-1"
                >
                  <span>Ver caso completo</span>
                  <span aria-hidden="true">&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
