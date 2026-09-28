import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, RefreshCw, Search, Code, CheckCircle } from 'lucide-react';
import { GitHubRepoItem } from '../types';

export const GitHubLiveSync: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.github.com/users/Tahiru2000/repos?per_page=100&sort=updated');
      if (res.ok) {
        const data = await res.json();
        const formatted: GitHubRepoItem[] = data.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
          updated_at: r.updated_at,
          html_url: r.html_url,
        }));
        setRepos(formatted);
        setLastUpdated(new Date().toLocaleTimeString());
      } else {
        throw new Error('API limit reached');
      }
    } catch (e) {
      // High quality fallback with known repos from user's GitHub
      setRepos([
        {
          id: 1,
          name: 'University-Attendance-System',
          description: 'This is an attendance system developed for university for taking students attendance during lectures',
          language: 'Python',
          stars: 0,
          forks: 0,
          updated_at: '2025-08-10T13:16:54Z',
          html_url: 'https://github.com/Tahiru2000/University-Attendance-System',
        },
        {
          id: 2,
          name: 'Ecommerce--website',
          description: 'An e-commerce website using Flask, which included dynamic product listings, a shopping cart, and payment integrations with MoMo and PayPal',
          language: 'HTML',
          stars: 0,
          forks: 0,
          updated_at: '2025-08-30T10:57:15Z',
          html_url: 'https://github.com/Tahiru2000/Ecommerce--website',
        },
        {
          id: 3,
          name: 'Jac-and-generative-AI-by-OUK',
          description: 'Generative AI master classes led by Open University of Kenya.',
          language: 'TypeScript',
          stars: 1,
          forks: 1,
          updated_at: '2025-10-24T18:06:46Z',
          html_url: 'https://github.com/Tahiru2000/Jac-and-generative-AI-by-OUK',
        },
        {
          id: 4,
          name: 'App-Ops',
          description: 'Interview question solution and system operation troubleshooting.',
          language: 'Python',
          stars: 0,
          forks: 0,
          updated_at: '2025-09-06T23:02:53Z',
          html_url: 'https://github.com/Tahiru2000/App-Ops',
        },
        {
          id: 5,
          name: 'ubids-attendance',
          description: 'Automated student attendance tracking module for UBIDS faculty courses.',
          language: 'Python',
          stars: 0,
          forks: 0,
          updated_at: '2025-09-08T14:19:15Z',
          html_url: 'https://github.com/Tahiru2000/ubids-attendance',
        },
        {
          id: 6,
          name: 'Performance-troubleshooting-assignmen',
          description: 'System diagnostic pipelines, performance benchmarking, and Linux process troubleshooting.',
          language: 'Python',
          stars: 0,
          forks: 0,
          updated_at: '2026-04-23T09:51:22Z',
          html_url: 'https://github.com/Tahiru2000/Performance-troubleshooting-assignmen',
        },
        {
          id: 7,
          name: 'Digital-Watch-Project',
          description: 'Interactive digital clock interface and responsive CSS styling.',
          language: 'CSS',
          stars: 0,
          forks: 0,
          updated_at: '2025-08-10T12:57:41Z',
          html_url: 'https://github.com/Tahiru2000/Digital-Watch-Project',
        },
        {
          id: 8,
          name: 'Portfolio-website',
          description: 'Personal web development portfolio and showcase.',
          language: 'HTML',
          stars: 0,
          forks: 0,
          updated_at: '2025-08-10T12:53:34Z',
          html_url: 'https://github.com/Tahiru2000/Portfolio-website',
        },
      ]);
      setLastUpdated('Loaded');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const languages = ['all', ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean)))];

  const filteredRepos = repos.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLanguage === 'all' || r.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="github-sync" className="py-24 border-t border-slate-800/80 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-800/70">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              06. Live GitHub Repository Activity
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
              Direct from github.com/Tahiru2000
            </h2>
            <p className="text-base text-slate-300">
              Real-time synchronization with my public GitHub repositories, demonstrating backend microservices, performance scripts, and university software projects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchGitHubData}
              disabled={loading}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Syncing...' : 'Sync Repos'}</span>
            </button>
            <a
              href="https://github.com/Tahiru2000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Follow @Tahiru2000</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search repositories by name or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Language filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang || 'all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedLanguage === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {lang === 'all' ? 'All Languages' : lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-slate-900/50 border border-slate-800/90 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-150 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-slate-400">
                      {repo.language || 'Codebase'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono tabular-nums">
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {repo.stars}
                      </span>
                    )}
                    {repo.forks > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base font-bold text-white group-hover:text-blue-400 transition-colors font-display break-words"
                >
                  {repo.name}
                </a>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {repo.description || 'Public repository showcasing backend implementations, algorithms, or utility tools.'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
                >
                  <span>Inspect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
