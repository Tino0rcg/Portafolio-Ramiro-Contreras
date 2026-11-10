import React from 'react';
import { TrendingUp } from 'lucide-react';

interface FeaturedProject {
  number: string;
  title: string;
  description: string;
  contribution: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    number: '01',
    title: 'OnlineDesk · Gestión de solicitudes',
    description: 'Tickets, asignación con IA, chat y control de tiempos.',
    contribution: 'Más trazabilidad y seguimiento de la atención.',
  },
  {
    number: '02',
    title: 'ICSA · Operación en terreno',
    description: 'Órdenes digitales, firmas, inventario e informes PDF.',
    contribution: 'Menos papel y cierres de trabajo más ágiles.',
  },
  {
    number: '03',
    title: 'ONLINE System · Web con IA',
    description: 'Portal TI con blog automatizado y calculadora ROI.',
    contribution: 'Menos tareas editoriales y apoyo a la captación.',
  },
  {
    number: '04',
    title: 'Colectivo OFT · Portafolio web',
    description: 'Galerías de arquitectura, servicios y contacto directo.',
    contribution: 'Mejor exhibición de obras y acceso a cotizaciones.',
  },
];

export const Hero: React.FC = () => {
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
              INGENIERO INFORMÁTICO · INGENIERO DE SOFTWARE
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

          {/* Columna Derecha: Sección Proyectos Destacados (4 Tarjetas Consecutivas) */}
          <div className="lg:col-span-5 w-full flex flex-col">
            {/* Encabezado */}
            <div className="mb-3 text-left">
              <h2 className="text-[14px] font-bold text-[#A99AFF] tracking-wider uppercase font-sans mb-0.5">
                PROYECTOS DESTACADOS
              </h2>
              <p className="text-[11px] text-[#A9B5C8] font-sans">
                Software, automatización y experiencias web
              </p>
            </div>

            {/* Lista vertical de 4 tarjetas */}
            <div className="flex flex-col gap-[13px] w-full">
              {featuredProjects.map((project) => (
                <div
                  key={project.number}
                  className="bg-[#131E30] border border-[#29374D] rounded-[13px] px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center gap-3.5 w-full text-left"
                >
                  {/* Columna izquierda: Cuadrado pequeño con número */}
                  <div className="w-[30px] h-[28px] rounded-[7px] bg-[#252346] text-[#A99AFF] text-[12px] font-bold flex items-center justify-center shrink-0 select-none">
                    {project.number}
                  </div>

                  {/* Columna derecha: Título, descripción y aporte */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#F5F6FA] leading-tight mb-1 truncate">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-[#A9B5C8] leading-tight mb-1 truncate">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] leading-tight">
                      <span className="text-[#8CCBB1] font-medium shrink-0">Aporte</span>
                      <span className="text-[#A9B5C8] truncate">{project.contribution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
