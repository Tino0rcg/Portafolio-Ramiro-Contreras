import React from 'react';

export const Hero: React.FC = () => {
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
            <div className="bg-[#131E30] border border-[#29374D] rounded-2xl p-5 sm:p-6 shadow-xl">
              {/* Etiqueta superior */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#A9B5C8] uppercase mb-4">
                PROYECTO DESTACADO
              </div>

              {/* Contenedor de captura del proyecto: Ventana de navegador */}
              <div className="bg-[#1C2B43] border border-[#29374D] rounded-xl overflow-hidden mb-5">
                {/* Barra superior con 3 pequeños círculos */}
                <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-[#29374D] bg-[#162235]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#29374D]" />
                </div>

                {/* Área central */}
                <div className="py-12 sm:py-16 px-4 text-center flex flex-col items-center justify-center">
                  <p className="text-sm font-semibold text-[#F5F6FA] mb-1">
                    Captura real del proyecto
                  </p>
                  <p className="text-xs text-[#A9B5C8]">
                    Sustituir este espacio por una imagen propia
                  </p>
                </div>
              </div>

              {/* Información del proyecto */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#F5F6FA] mb-1">
                  Nombre del proyecto
                </h3>
                <p className="text-xs sm:text-sm text-[#A9B5C8] mb-2">
                  Problema del cliente · Mi aporte · Resultado
                </p>
                <p className="text-xs text-[#A9B5C8]/80 mb-4">
                  Tecnologías utilizadas, verificables
                </p>
                <a
                  href="#proyectos"
                  className="text-sm font-semibold text-[#A99AFF] hover:text-[#6847FF] transition-colors inline-flex items-center gap-1"
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
