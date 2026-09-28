import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Database, Layers, Cpu, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0e17] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>{project.categoryLabel}</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>{project.date}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display text-balance pr-10">
            {project.title}
          </h2>
        </div>

        {/* Media Frame */}
        {project.image && (
          <div className="my-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9] max-h-[360px]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            {project.metrics.map((m) => (
              <div key={m.label} className="space-y-0.5">
                <div className="text-xs text-slate-400">{m.label}</div>
                <div className="text-base font-bold text-white font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Narrative */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h3 className="text-lg font-bold text-white font-display">System Overview & Architecture</h3>
          <p>{project.description}</p>

          <h3 className="text-lg font-bold text-white font-display pt-2">Key Engineering Outcomes</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Unboxed */}
        <div className="mt-8 pt-5 border-t border-slate-800/80">
          <div className="text-xs font-semibold text-slate-400 mb-2">Technology Stack:</div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-300">
            {project.technologies.map((t, idx) => (
              <React.Fragment key={t}>
                <span className="font-mono text-slate-200">{t}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-slate-600" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
