import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Database, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cloud' | 'ml' | 'fullstack' | 'research'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'fullstack', label: 'Backend & Systems' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'research', label: 'Field Research' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/70">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              03. Selected Projects & Engineering Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
              Engineered for Production, Grounded in Real Academic & Civic Needs.
            </h2>
            <p className="text-base text-slate-300">
              Scalable web architectures, deep learning research, and cloud infrastructure deployed with Python, Django, PostgreSQL, and AWS.
            </p>
          </div>

          {/* Interactive Filter Bar (Button controls, not pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured;
            const colSpan = isFeatured ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                className={`${colSpan} flex flex-col justify-between bg-slate-900/60 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-200 group`}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top clean unboxed category indicator */}
                  <div className="absolute top-4 left-4 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Unboxed date metadata */}
                    <div className="text-xs text-slate-400 font-mono">
                      Completed · {project.date}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display text-balance group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 font-bold">›</span>
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack: unboxed text with · separators */}
                  <div className="pt-4 border-t border-slate-800/70">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-300 font-mono">{tech}</span>
                          {tIdx < Math.min(project.technologies.length, 5) - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex items-center justify-between pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>System Architecture Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
