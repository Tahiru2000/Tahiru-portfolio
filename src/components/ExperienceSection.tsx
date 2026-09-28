import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            02. Professional Experience & Industry Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Hands-on Engineering, Cloud Deployment, and Community Research.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Direct industry experience spanning intensive AWS cloud specialization, full-stack software development at commercial tech hubs, and quantitative research for development advocacy.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-7 hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="text-xs font-medium text-blue-400 tracking-wide">
                    {exp.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">{exp.organization}</span>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 inline" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-lg shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
                {exp.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies footer: Unboxed clean metadata with · separator */}
              <div className="mt-6 pt-4 border-t border-slate-800/70 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
                <span className="font-medium text-slate-300">Technologies & Core Competencies:</span>
                {exp.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <span className="text-slate-300">{skill}</span>
                    {sIdx < exp.skills.length - 1 && (
                      <span className="text-slate-600" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
