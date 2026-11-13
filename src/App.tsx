import React, { useState } from 'react';
import {
  ArrowUpRight,
  Dices,
  Gamepad2,
  GraduationCap,
  Menu,
  Rocket,
  Target,
  Tv,
  Video,
  X,
  Zap,
} from 'lucide-react';

type PageId = 'home' | 'games' | 'about';
type ProjectCategory = 'All' | 'Game' | 'Web App';

interface Project {
  id: string;
  name: string;
  category: 'Game' | 'Web App';
  description: string;
  url: string;
  accentGradient: string;
  borderColor: string;
  dotColor: string;
  iconColor: string;
  badgeClasses: string;
  icon: React.ComponentType<{ className?: string }>;
  isNew?: boolean;
}

const LOGO_URL = 'https://files.catbox.moe/h56lj4.png';

const PROJECTS: Project[] = [
  {
    id: 'mirza-run',
    name: 'MIRZA-RUN',
    category: 'Game',
    description:
      'A funny politician running game built for high-speed thrills and hilarious dodging action.',
    url: 'https://mirza-run.vercel.app',
    accentGradient: 'from-purple-900/60 to-indigo-950',
    borderColor: 'border-brand-500/30',
    dotColor: '#8b5cf6',
    iconColor: 'text-brand-400',
    badgeClasses: 'bg-brand-500/20 text-brand-300 border-brand-500/30',
    icon: Zap,
  },
  {
    id: 'dekhoo-tv',
    name: 'DEKHOO TV',
    category: 'Web App',
    description:
      'A streaming web app where people can watch all TV channels from around the world.',
    url: 'https://dekhootv.vercel.app',
    accentGradient: 'from-blue-900/60 to-slate-950',
    borderColor: 'border-blue-500/30',
    dotColor: '#3b82f6',
    iconColor: 'text-blue-400',
    badgeClasses: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    icon: Tv,
  },
  {
    id: 'mudo',
    name: 'MUDO',
    category: 'Game',
    description:
      'A classic Ludo board game built for fast-paced rolls, strategic token chases, and fun matches right in your browser.',
    url: 'https://mudo-ludo.vercel.app',
    accentGradient: 'from-rose-900/60 via-purple-950/60 to-slate-950',
    borderColor: 'border-rose-500/30',
    dotColor: '#fb7185',
    iconColor: 'text-rose-400',
    badgeClasses: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    icon: Dices,
    isNew: true,
  },
  {
    id: 'meeking',
    name: 'MEEKING',
    category: 'Web App',
    description:
      'A meeting platform designed for seamless communication and collaboration.',
    url: 'https://meeking.vercel.app',
    accentGradient: 'from-amber-900/60 to-slate-950',
    borderColor: 'border-amber-500/30',
    dotColor: '#f59e0b',
    iconColor: 'text-amber-400',
    badgeClasses: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: Video,
  },
  {
    id: 'bowx',
    name: 'BOWX',
    category: 'Game',
    description:
      'A dynamic archery or target gaming experience built for smooth interactive play.',
    url: 'https://bowx.vercel.app',
    accentGradient: 'from-emerald-900/60 to-slate-950',
    borderColor: 'border-emerald-500/30',
    dotColor: '#10b981',
    iconColor: 'text-emerald-400',
    badgeClasses: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    icon: Target,
  },
];

function BrandLogo({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const [imgError, setImgError] = useState(false);

  const boxSize = size === 'lg' ? 'w-14 h-14 rounded-xl p-2' : 'w-8 h-8 rounded-lg p-1';
  const textSize = size === 'lg' ? 'text-xl' : 'text-xs';

  if (imgError) {
    return (
      <div
        className={`${boxSize} flex items-center justify-center bg-brand-900/60 border border-brand-500/40 font-display font-extrabold text-white ${textSize}`}
      >
        M
      </div>
    );
  }

  return (
    <img
      src={LOGO_URL}
      alt="MUBIX Logo"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`${boxSize} object-contain bg-brand-900/50 border border-brand-500/35`}
    />
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>('All');

  const gamesCount = PROJECTS.filter((p) => p.category === 'Game').length;
  const appsCount = PROJECTS.filter((p) => p.category === 'Web App').length;

  const filteredProjects =
    categoryFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === categoryFilter);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
          >
            <div className="group-hover:scale-105 transition-transform">
              <BrandLogo size="sm" />
            </div>
            <span className="font-display font-extrabold text-base tracking-wider text-white">
              MUBIX
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-brand-400 ${
                activePage === 'home' ? 'text-brand-400' : 'text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigateTo('games')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-brand-400 ${
                activePage === 'games' ? 'text-brand-400' : 'text-slate-300'
              }`}
            >
              Games &amp; Apps
            </button>
            <button
              type="button"
              onClick={() => navigateTo('about')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-brand-400 ${
                activePage === 'about' ? 'text-brand-400' : 'text-slate-300'
              }`}
            >
              About Us
            </button>
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => navigateTo('games')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Explore Projects
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-4 space-y-3">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className={`block w-full text-left text-sm font-medium py-1.5 ${
                activePage === 'home' ? 'text-brand-400' : 'text-slate-300 hover:text-brand-400'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigateTo('games')}
              className={`block w-full text-left text-sm font-medium py-1.5 ${
                activePage === 'games' ? 'text-brand-400' : 'text-slate-300 hover:text-brand-400'
              }`}
            >
              Games &amp; Apps
            </button>
            <button
              type="button"
              onClick={() => navigateTo('about')}
              className={`block w-full text-left text-sm font-medium py-1.5 ${
                activePage === 'about' ? 'text-brand-400' : 'text-slate-300 hover:text-brand-400'
              }`}
            >
              About Us
            </button>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigateTo('games')}
                className="block text-center w-full py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold"
              >
                Explore Projects
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {/* HOME PAGE */}
        {activePage === 'home' && (
          <section key="home" className="animate-page-in">
            <div className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden flex items-center justify-center min-h-[85vh]">
              <div className="absolute inset-0 hero-glow pointer-events-none" />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/15 blur-[140px] rounded-full pointer-events-none" />

              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-brand-300 mb-5">
                  <Rocket className="w-4 h-4 text-brand-400" />
                  <span>Student-Powered Game &amp; App Studio</span>
                </p>

                <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight max-w-4xl mx-auto text-center text-balance">
                  Crafting Fun, Building The Future at{' '}
                  <span className="bg-gradient-to-r from-brand-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                    MUBIX
                  </span>
                </h1>

                <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-center">
                  Hi! I’m a student developer who turns creative hobbies into immersive web games and
                  utility apps. Welcome to my official company headquarters!
                </p>

                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigateTo('games')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-600/30 hover:scale-105 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    <span>Play &amp; Test Creations</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('about')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm hover:bg-slate-800/80 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Meet the Founder</span>
                  </button>
                </div>

                {/* Stats Bar */}
                <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-slate-900">
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                      {gamesCount}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      Games Built
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-400 tabular-nums">
                      {appsCount}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      Web Apps
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      Passion &amp; Code
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-400 tabular-nums">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      Creative Mode
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* GAMES & APPS PAGE */}
        {activePage === 'games' && (
          <section key="games" className="animate-page-in py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-brand-400 font-semibold text-xs tracking-wider">
                  Portfolio Showcase
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mt-1 text-balance">
                  Featured Games &amp; Apps
                </h2>
                <p className="mt-3 text-slate-400 text-sm sm:text-base">
                  Explore the official live creations built by MUBIX
                </p>

                {/* Category Filter Tabs */}
                <div className="mt-6 inline-flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
                  {(['All', 'Game', 'Web App'] as ProjectCategory[]).map((cat) => {
                    const count =
                      cat === 'All'
                        ? PROJECTS.length
                        : PROJECTS.filter((p) => p.category === cat).length;
                    const label =
                      cat === 'All'
                        ? `All (${count})`
                        : cat === 'Game'
                        ? `Games (${count})`
                        : `Web Apps (${count})`;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          categoryFilter === cat
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {filteredProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <article
                      key={project.id}
                      className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40"
                    >
                      <div>
                        <div
                          className={`h-44 rounded-xl bg-gradient-to-br ${project.accentGradient} border ${project.borderColor} flex items-center justify-center relative overflow-hidden group`}
                        >
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: `radial-gradient(${project.dotColor} 1px, transparent 1px)`,
                              backgroundSize: '20px 20px',
                            }}
                          />
                          <Icon
                            className={`w-14 h-14 ${project.iconColor} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-2">
                          <h3 className="font-display font-bold text-xl text-white">
                            {project.name}
                          </h3>
                          <span className="text-xs font-medium text-slate-400 whitespace-nowrap shrink-0">
                            {project.category}
                            {project.isNew ? ' · New' : ''}
                          </span>
                        </div>

                        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                        <span className="text-xs text-emerald-400 font-medium">
                          Live on Vercel
                        </span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-1.5 shadow-lg shadow-brand-600/25 whitespace-nowrap shrink-0"
                        >
                          <span>Visit</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ABOUT PAGE */}
        {activePage === 'about' && (
          <section key="about" className="animate-page-in py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-brand-400 font-semibold text-xs tracking-wider">
                  Our Story
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 text-balance">
                  About MUBIX
                </h2>
                <p className="mt-2 text-slate-400 text-xs sm:text-sm">
                  Built out of pure passion for coding, gaming, and creative innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-brand-300 text-xs font-semibold mb-2">
                      Founder &amp; Developer
                    </p>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      Turning Hobbies Into Reality
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                      Hi there! I am a student developer who loves building things that bring joy
                      and entertainment. What started as a simple hobby of experimenting with code
                      and building small games has now grown into{' '}
                      <strong className="text-white">MUBIX</strong>.
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                      I have successfully built engaging arcade and board games alongside utility
                      web apps. Every project is crafted with dedication, creativity, and a drive
                      to build memorable web experiences.
                    </p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => navigateTo('games')}
                      className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Explore My Work
                    </button>
                  </div>
                </div>

                <div className="w-full min-h-[220px] rounded-xl bg-gradient-to-br from-brand-900/40 via-indigo-950 to-slate-900 border border-brand-500/30 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <BrandLogo size="lg" />
                    <h4 className="font-display font-extrabold text-lg text-white mt-3">MUBIX</h4>
                    <p className="text-xs text-brand-300 tracking-wide mt-0.5 font-semibold">
                      Official Headquarters
                    </p>
                    <p className="mt-3 text-xs text-emerald-300 font-medium">
                      Active Development Mode · {PROJECTS.length} Live Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-5 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-slate-300 font-semibold">
            &copy; MUBIX All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
