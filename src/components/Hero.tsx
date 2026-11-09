import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

interface FeaturedProjectMeta {
  tabName: string;
  badge: string;
  shortTitle: string;
  problemSolutionResult: string;
  technologiesText: string;
  browserUrl: string;
  glowColor: string;
}

const featuredProjectsMeta: Record<string, FeaturedProjectMeta> = {
  'onlinedesk-gestion-requerimientos': {
    tabName: 'OnlineDesk',
    badge: 'SaaS en Vivo',
    shortTitle: 'OnlineDesk — Plataforma SaaS en Tiempo Real',
    problemSolutionResult: 'Requerimientos desordenados · Tablero Kanban y SLA · Trazabilidad y PDF por correo',
    technologiesText: 'Next.js · TypeScript · Supabase Realtime · IA · PDF',
    browserUrl: 'gesti-n-de-requerimientos-app.vercel.app',
    glowColor: 'from-indigo-600/20 via-blue-600/10 to-transparent',
  },
  'software-gestion-operativa-icsa': {
    tabName: 'ICSA',
    badge: 'Cero Papel',
    shortTitle: 'ICSA — Gestión de Órdenes en Terreno',
    problemSolutionResult: 'Uso de papel y demoras · Órdenes digitales y firmas táctiles · Actas e informes en PDF',
    technologiesText: 'Next.js 15 · PostgreSQL · Firmas en Pantalla · PDF',
    browserUrl: 'icsa-operaciones.vercel.app',
    glowColor: 'from-teal-600/20 via-cyan-600/10 to-transparent',
  },
  'web-online-system': {
    tabName: 'ONLINE System',
    badge: 'Gemini IA',
    shortTitle: 'ONLINE System — Web con IA Autónoma',
    problemSolutionResult: 'Posicionamiento web lento · Automatización con API Gemini · Contenido técnico y SEO continuo',
    technologiesText: 'Next.js 15 · API Google Gemini · Tailwind CSS · SEO',
    browserUrl: 'onlinesystem.cl',
    glowColor: 'from-emerald-600/20 via-teal-600/10 to-transparent',
  },
  'web-colectivo-oft': {
    tabName: 'Colectivo OFT',
    badge: 'Editorial & Video',
    shortTitle: 'Colectivo OFT — Estudio & Arquitectura',
    problemSolutionResult: 'Presentación estática · Portafolio editorial interactivo y video · Catálogo de proyectos',
    technologiesText: 'Next.js · React · Video Streaming · Optimización WebP',
    browserUrl: 'colectivooft.cl',
    glowColor: 'from-amber-600/20 via-stone-700/10 to-transparent',
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
  }, [isPaused, currentIndex]);

  const currentProject = projectsData[currentIndex] || projectsData[0];
  const meta: FeaturedProjectMeta =
    featuredProjectsMeta[currentProject.id] || {
      tabName: currentProject.title.split('—')[0].trim(),
      badge: 'Destacado',
      shortTitle: currentProject.title,
      problemSolutionResult: currentProject.shortDescription,
      technologiesText: currentProject.technologies.slice(0, 4).join(' · '),
      browserUrl: 'proyecto.app',
      glowColor: 'from-indigo-600/20 to-transparent',
    };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#0B111D] text-[#F5F6FA] pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-20">
      {/* Imagen de fondo con overlay para preservar legibilidad y estética profesional */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/pexels-cesar-gaviria-232160-36571389.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-55 sm:opacity-60"
        />
        {/* Degradado lateral equilibrado: permite apreciar el código manteniendo excelente legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B111D]/85 via-[#0B111D]/65 to-[#0B111D]/45" />
        {/* Degradado vertical: transición suave con navbar y sección inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B111D]/70 via-transparent to-[#0B111D]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Izquierda: Contenido Principal */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-2 sm:pt-3 lg:pt-6">
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
              <span className="w-2 h-2 rounded-full bg-[#35D6A5] shrink-0 animate-pulse" />
              <span>Disponible para proyectos y consultoría</span>
            </div>

            {/* Elemento flotante de métrica de impacto */}
            <div className="mt-4 sm:mt-5 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#131E30]/90 border border-[#29374D] shadow-xl shadow-black/25 backdrop-blur-md animate-float hover:border-[#35D6A5]/50 transition-colors">
              <div className="w-6 h-6 rounded-lg bg-[#35D6A5]/15 border border-[#35D6A5]/30 flex items-center justify-center text-[#35D6A5] shrink-0">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm font-medium">
                <span className="font-extrabold text-[#35D6A5] mr-1.5">+30%</span>
                <span className="text-[#A9B5C8]">de mejora operativa</span>
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Proyecto Destacado (Dinámica con Timeline y Tabs) */}
          <div className="lg:col-span-5 w-full">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-[#131E30] border border-[#29374D] rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group"
            >
              {/* Barra de progreso de tiempo (Timeline Dinámico) */}
              <div className="w-full h-1 bg-[#1C2B43] rounded-full overflow-hidden mb-4">
                <div
                  key={currentIndex}
                  className="h-full bg-gradient-to-r from-[#6847FF] to-[#A99AFF] rounded-full animate-progress-fill"
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                />
              </div>

              {/* Etiqueta superior y controles */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#A9B5C8] uppercase">
                    PROYECTO DESTACADO
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1C2B43] text-indigo-300 border border-[#29374D]">
                    {currentIndex + 1} / 4
                  </span>
                </div>

                {/* Flechas de navegación rápida */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={prevProject}
                    aria-label="Proyecto anterior"
                    className="p-1.5 rounded-lg text-[#A9B5C8] hover:text-[#F5F6FA] bg-[#1C2B43]/70 hover:bg-[#1C2B43] border border-[#29374D] transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Proyecto siguiente"
                    className="p-1.5 rounded-lg text-[#A9B5C8] hover:text-[#F5F6FA] bg-[#1C2B43]/70 hover:bg-[#1C2B43] border border-[#29374D] transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Tabs interactivas con los 4 nombres de proyecto */}
              <div className="grid grid-cols-4 gap-1.5 mb-4 p-1 rounded-xl bg-[#0B111D]/80 border border-[#29374D]/80">
                {projectsData.map((project, idx) => {
                  const projectMeta = featuredProjectsMeta[project.id];
                  const label = projectMeta ? projectMeta.tabName : `P${idx + 1}`;
                  const isActive = currentIndex === idx;

                  return (
                    <button
                      key={project.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`py-1.5 px-1 rounded-lg text-[11px] font-medium transition-all text-center truncate cursor-pointer flex items-center justify-center gap-1 ${
                        isActive
                          ? 'bg-[#6847FF] text-white shadow-md shadow-[#6847FF]/30 font-semibold'
                          : 'text-[#A9B5C8] hover:text-[#F5F6FA] hover:bg-[#1C2B43]'
                      }`}
                      title={project.title}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#35D6A5] shrink-0" />}
                      <span className="truncate">{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenedor de captura del proyecto: Ventana de navegador con animación fluida */}
              <div className="bg-[#1C2B43] border border-[#29374D] rounded-xl overflow-hidden mb-4 shadow-inner relative">
                {/* Barra superior con 3 pequeños círculos, URL del navegador y Badge */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#29374D] bg-[#162235]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#A9B5C8]/80 truncate max-w-[150px] xs:max-w-[200px] flex items-center gap-1">
                    <span className="text-[#35D6A5]">🔒</span> https://{meta.browserUrl}
                  </span>
                  <span className="text-[10px] font-semibold text-[#A99AFF] bg-[#6847FF]/15 px-2 py-0.5 rounded border border-[#6847FF]/30 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#A99AFF]" />
                    <span>{meta.badge}</span>
                  </span>
                </div>

                {/* Área visual del proyecto con animación al cambiar */}
                <div
                  key={currentProject.id}
                  className="h-44 sm:h-52 w-full bg-[#162235] flex items-center justify-center p-4 overflow-hidden relative animate-hero-project"
                >
                  {/* Resplandor ambiental dinámico */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta.glowColor} pointer-events-none opacity-50`} />

                  {currentProject.isLogo ? (
                    currentProject.logoBg === 'bg-white' ? (
                      <div className="px-5 py-3 rounded-xl bg-white shadow-lg border border-white/90 relative z-10 transition-transform duration-300 group-hover:scale-105">
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
                        className="max-h-20 sm:max-h-24 max-w-[80%] object-contain drop-shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-105"
                      />
                    )
                  ) : (
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </div>

              {/* Información del proyecto dinámico con animación sincronizada */}
              <div
                key={`info-${currentProject.id}`}
                className="min-h-[110px] flex flex-col justify-between animate-hero-project"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F6FA] mb-1 line-clamp-1 group-hover:text-white transition-colors">
                    {meta.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A9B5C8] mb-1.5 leading-relaxed line-clamp-2">
                    {meta.problemSolutionResult}
                  </p>
                  <p className="text-xs text-[#A9B5C8]/80 mb-3 font-mono">
                    {meta.technologiesText}
                  </p>
                </div>

                {/* Acciones del caso */}
                <div className="flex items-center justify-between gap-3 pt-1 border-t border-[#29374D]/80">
                  <a
                    href="#proyectos"
                    className="text-sm font-semibold text-[#A99AFF] hover:text-[#6847FF] transition-colors inline-flex items-center gap-1.5 group/link"
                  >
                    <span>Ver caso completo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>

                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-[#1C2B43] hover:bg-[#253754] border border-[#29374D] transition-colors"
                    >
                      <span>App en Vivo</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
