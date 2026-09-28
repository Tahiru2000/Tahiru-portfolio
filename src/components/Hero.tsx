import React, { useState } from 'react';
import { ArrowDown, Github, Mail, ShieldCheck, Award, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [showAvatarToggle, setShowAvatarToggle] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline, Bio, and Quantified Proof */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed editorial kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span>BSc. Computer Science</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Cloud & Backend Specialist</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 inline" />
                Wa, Ghana
              </span>
            </div>

            {/* Display Headline with balanced text wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display text-balance">
              Architecting Resilient Cloud Infrastructure & Intelligent Backend Systems.
            </h1>

            {/* Body lead */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I am <span className="font-semibold text-white">Shaibu Tahiru</span>, a Computer Science graduate from Simon Diedong Dombo University (UBIDS), AWS Certified Cloud Practitioner, and Python backend engineer. I design robust relational data pipelines, scalable RESTful services, and research deep learning architectures—including Capsule Networks and CNNs.
            </p>

            {/* Trust and Key Credentials */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                AWS Certified Cloud Practitioner (Amalitech)
              </span>
              <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                President, Faculty of ICT (UBIDS 2024-2025)
              </span>
              <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-purple-400" />
                Harvard Aspire Leaders Fellow
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/25 transition-all duration-150 whitespace-nowrap"
              >
                <span>View Selected Systems</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Download Curriculum Vitae</span>
              </button>

              <a
                href="https://github.com/Tahiru2000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg border border-slate-800 transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>github/Tahiru2000</span>
              </a>
            </div>

            {/* Claim-to-Proof Quantitative Grid */}
            <div className="pt-8 border-t border-slate-800/70 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Visual Portrait with African heritage fugu framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer structural frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-2xl shadow-black/60 group">
                <img
                  src={showAvatarToggle ? PERSONAL_INFO.avatarUrl : PERSONAL_INFO.heroImage}
                  alt="Shaibu Tahiru — Computer Scientist & Cloud Engineer"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle scrim overlay for crisp legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-white tracking-wide">
                      Shaibu Tahiru
                    </span>
                    <button
                      onClick={() => setShowAvatarToggle(!showAvatarToggle)}
                      className="text-[11px] text-blue-400 hover:text-blue-300 underline cursor-pointer bg-slate-900/60 px-2 py-0.5 rounded"
                      title="Switch between portrait photo and GitHub avatar"
                    >
                      {showAvatarToggle ? 'Show Portrait' : 'Show GitHub Avatar'}
                    </button>
                  </div>
                  <div className="text-xs text-slate-400">
                    UBIDS Computer Science '26 · AWS Cloud Practitioner
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Cloud, Backend & Research Opportunities
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-3 -right-3 w-28 h-28 bg-blue-600/10 rounded-2xl border border-blue-500/20 -z-10 blur-xs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
