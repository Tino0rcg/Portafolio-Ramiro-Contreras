import React, { useState, useMemo } from 'react';
import { Search, Globe, Monitor, Wrench, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { InteractiveTourModal } from './InteractiveTourModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [tourProject, setTourProject] = useState<Project | null>(null);

  // Compute category counts
  const counts = useMemo(() => {
    return {
      all: projectsData.length,
      web: projectsData.filter((p) => p.category === 'web').length,
      software: projectsData.filter((p) => p.category === 'software').length,
      tools: projectsData.filter((p) => p.category === 'tools').length,
    };
  }, []);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Proyectos & Portafolio</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Software y Aplicaciones Destacadas
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 px-2 sm:px-0">
          Explora proyectos que van desde sitios web modernos y plataformas interactivas hasta sistemas de software de escritorio y herramientas de automatización.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start md:justify-center gap-1.5 sm:gap-2 w-full md:w-auto p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span>Todos</span>
            <span className="text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('web')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'web'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Páginas & Apps Web</span>
            <span className="text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
              {counts.web}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('software')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'software'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Sistemas & SaaS</span>
            <span className="text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
              {counts.software}
            </span>
          </button>

          {counts.tools > 0 && (
            <button
              onClick={() => setActiveCategory('tools')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === 'tools'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Herramientas & CLI</span>
              <span className="text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
                {counts.tools}
              </span>
            </button>
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tecnología o título..."
            className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
              onOpenTour={(p) => setTourProject(p)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
          <p className="text-slate-400 text-base mb-3">
            No se encontraron proyectos con los criterios de búsqueda actuales.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors"
          >
            Restablecer filtros
          </button>
        </div>
      )}

      {/* Modal with Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenTour={(p) => {
          setSelectedProject(null);
          setTourProject(p);
        }}
      />

      {/* Interactive Tour Modal */}
      <InteractiveTourModal
        project={tourProject}
        onClose={() => setTourProject(null)}
      />
    </section>
  );
};
