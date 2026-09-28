import React from 'react';
import { Cloud, Server, BrainCircuit, Users, Award, BookOpen, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Cloud,
      title: 'Cloud Architecture & Operations',
      description:
        'Certified AWS Cloud Practitioner with practical experience architecting resilient infrastructure: VPC network isolation, IAM least-privilege policies, S3 lifecycle rules, EC2 compute deployment, and Linux performance troubleshooting.',
      metrics: 'AWS Well-Architected Framework · Security & High Availability',
    },
    {
      icon: Server,
      title: 'Python Backend & Data Engineering',
      description:
        'Specializing in scalable backend engineering with Django and Flask. Designing RESTful API contracts, role-based authorization tiers, and normalized PostgreSQL database schemas tailored for sub-100ms response times under load.',
      metrics: 'Django REST Framework · PostgreSQL · MoMo Webhooks · Session Auth',
    },
    {
      icon: BrainCircuit,
      title: 'Deep Learning & Neural Networks',
      description:
        'Conducting applied research into Computer Vision architectures, focusing on Convolutional Neural Networks (CNNs) and Capsule Networks (CapsNets). Exploring dynamic routing by agreement to resolve spatial transformation and viewpoint limitations in AI.',
      metrics: 'Capsule Networks · CNN Feature Extraction · Transfer Learning · GenAI',
    },
    {
      icon: Users,
      title: 'Institutional Governance & Leadership',
      description:
        'Demonstrated leadership as President of the Faculty of ICT at UBIDS and elected Member of the 5th SRC Parliament. Harvard Aspire Leaders Program graduate with proven capability in cross-functional consensus, student welfare advocacy, and community digital literacy.',
      metrics: 'President FICT · 5th SRC Parliamentarian · Harvard Aspire Fellow',
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-800/80 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            01. Background & Core Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Rooted in Rigorous Computer Science, Focused on Real-World Technological Impact.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From the Upper West Region of Ghana to global tech frameworks, my work centers on engineering backend solutions that are performant, secure, and contextually grounded. Whether designing an automated university attendance system or training deep neural architectures, I bring disciplined system thinking and empathetic leadership.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/70 text-xs font-mono text-slate-400">
                  {pillar.metrics}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Academic Rigor */}
        <div className="mt-16 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-white font-display">
              Academic Foundations & Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                  <span className="text-xs font-mono text-blue-400">{edu.period}</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {edu.institution} · {edu.location}
                </div>
                {edu.details && (
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-300 list-disc list-inside">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
