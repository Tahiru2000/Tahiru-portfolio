import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section className="py-24 border-t border-slate-800/80 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            07. Technical Matrix & Architecture Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Systematic Engineering Across Cloud, Backend, and Deep Learning.
          </h2>
          <p className="text-base text-slate-300">
            Verified technical capabilities honed through AWS cloud training, university research labs, and production-grade full-stack implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          {/* Category Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {SKILL_CATEGORIES.map((category, idx) => (
              <button
                key={category.name}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                  activeCategoryIndex === idx
                    ? 'bg-blue-600/10 border-blue-500/50 text-white'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-sm font-display text-white">
                    {category.name}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeCategoryIndex === idx ? 'translate-x-1 text-blue-400' : 'text-slate-600'
                    }`}
                  />
                </div>
                <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {category.description}
                </div>
              </button>
            ))}

            {/* Architecture snippet terminal card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 text-xs font-mono text-slate-300 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>verified_credentials.sh</span>
              </div>
              <div className="text-slate-400"># Cloud & Academic Credentials</div>
              <div><span className="text-blue-400">AWS_CERT</span>="Cloud Practitioner"</div>
              <div><span className="text-blue-400">ACADEMIC</span>="BSc. Computer Science"</div>
              <div><span className="text-blue-400">GOVERNANCE</span>="President FICT UBIDS"</div>
              <div><span className="text-blue-400">STATUS</span>="Available for Hire"</div>
            </div>
          </div>

          {/* Active Skills Detailed View */}
          <div className="lg:col-span-8 bg-slate-900/50 border border-slate-800/90 rounded-2xl p-7 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                {activeCategory.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activeCategory.description}
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {activeCategory.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-slate-400 tabular-nums">
                      {skill.level}% Proficiency
                    </span>
                  </div>

                  {/* Meter bar */}
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono">
                    Key components: {skill.detail}
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
