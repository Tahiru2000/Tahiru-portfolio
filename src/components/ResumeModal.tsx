import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, PROJECTS, LEADERSHIP_ROLES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    navigator.clipboard.writeText(
      `SHAIBU TAHIRU\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nGitHub: ${PERSONAL_INFO.github}\nUBIDS, Wa, Ghana`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0b0e14] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-10 text-left text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="text-xs font-mono text-slate-400">
            OFFICIAL CURRICULUM VITAE · SHAIBU TAHIRU
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyContact}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Info'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Format */}
        <div className="print-area space-y-8 bg-slate-950/70 p-6 sm:p-8 rounded-xl border border-slate-800/80">
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white font-display uppercase">
              SHAIBU TAHIRU
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Simon Diedong Dombo University of Business and Integrated Development Studies (UBIDS) Wa, Ghana
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-blue-400 font-mono pt-1">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">
                {PERSONAL_INFO.phone}
              </a>
              <span className="text-slate-600">|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span className="text-slate-600">|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/Tahiru2000
              </a>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-1">
              PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I am a Computer Science graduate enthusiastic in cloud specializing in cloud architecture and backend development with Python. Experienced in machine learning—including transfer learning, Convolutional Neural Networks (CNNs), and Capsule Networks—with the proven capability to build intelligent, data-driven applications.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-1">
              EDUCATION
            </h2>
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">{edu.institution}</span>
                  <span className="font-mono text-slate-400">{edu.period}, {edu.location.split(',')[0]}</span>
                </div>
                <div className="text-xs sm:text-sm text-blue-400">{edu.degree}</div>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">
                    {exp.role} — <span className="text-slate-300 font-normal">{exp.organization}</span>
                  </span>
                  <span className="font-mono text-slate-400 text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                  {exp.bulletPoints.map((bp, i) => (
                    <li key={i} className="leading-relaxed">
                      {bp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects and Research */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-1">
              PROJECTS AND RESEARCH
            </h2>

            <div className="space-y-3">
              <div>
                <div className="font-bold text-white text-xs sm:text-sm">
                  Data Collection and Analysis – Practical Training Program, UBIDS
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1 mt-1">
                  <li>Conducted field-based research in rural communities as part of a collaborative team, gathering primary data through structured engagement.</li>
                  <li>Analyzed collected data to identify key socio-economic challenges and development opportunities using analytical and critical thinking approaches.</li>
                  <li>Developed evidence-based insights and actionable recommendations to support sustainable community development initiatives.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">UniversityAttendanceManagementSystem</span>
                  <span className="text-xs font-mono text-slate-400">Python, Django, PostgreSQL</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1 mt-1">
                  <li>Developed a scalable web-based attendance system using Django to automate student attendance tracking, authentication, and reporting.</li>
                  <li>Designed and implemented backend logic and RESTful APIs, integrating PostgreSQL for efficient data management and real-time updates.</li>
                  <li>Built a user-friendly interface for lecturers and administrators to monitor attendance, generate reports, and improve data accuracy.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">Deep Learning: Capsule Networks & CNN Research</span>
                  <span className="text-xs font-mono text-slate-400">PyTorch, Python, NumPy</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1 mt-1">
                  <li>Evaluated dynamic routing-by-agreement in Capsule Networks against CNN pooling layers to preserve geometric viewpoint invariance.</li>
                  <li>Implemented transfer learning mechanisms to accelerate model convergence on specialized vision datasets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Co-Curricular & Leadership */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-slate-800 pb-1">
              CO-CURRICULAR & LEADERSHIP ACTIVITIES
            </h2>

            {LEADERSHIP_ROLES.map((role) => (
              <div key={role.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">
                    {role.title}
                  </span>
                  <span className="font-mono text-slate-400 text-xs">{role.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                  {role.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
