import React from 'react';
import { Award, Users, Landmark, Sparkles, CheckCircle2 } from 'lucide-react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'fict-president':
        return Users;
      case 'src-parliament':
        return Landmark;
      case 'aspire-harvard':
        return Sparkles;
      default:
        return Award;
    }
  };

  return (
    <section id="leadership" className="py-24 border-t border-slate-800/80 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            05. Governance, Leadership & Advocacy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Championing Student Welfare, Civic Engagement, and Institutional Innovation.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Effective engineering is deeply intertwined with collaborative leadership. I have had the privilege to lead at the faculty, parliamentary, and international fellow levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {LEADERSHIP_ROLES.map((role) => {
            const Icon = getIcon(role.id);
            return (
              <div
                key={role.id}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-blue-400">
                      {role.period}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 font-medium">{role.scope}</div>
                    <h3 className="text-xl font-bold text-white font-display mt-1 leading-snug">
                      {role.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 font-medium">
                    {role.institution}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {role.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    {role.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
