'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { title: "Nexus Inventory", tech: "Java, OOP, Design Patterns", desc: "Enterprise-grade inventory management system with multi-threaded sync and dynamic reporting.", icon: "⚡", gradient: "from-teal-400 to-cyan-400" },
    { title: "Aether AI", tech: "Python, TensorFlow, FastAPI", desc: "Conversational AI with RAG architecture, real-time memory, and semantic search.", icon: "🧠", gradient: "from-indigo-400 to-purple-400" },
    { title: "Stellar Dashboard", tech: "Next.js, D3.js, WebSockets", desc: "Real-time analytics for complex datasets with interactive visualizations and live updates.", icon: "📊", gradient: "from-rose-400 to-orange-400" },
    { title: "Bio-Sim Chip", tech: "React, Microfluidics, Three.js", desc: "Organ-on-a-chip simulation interface with 3D visualization and real-time data processing.", icon: "🧬", gradient: "from-emerald-400 to-teal-400" }
  ];

  const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "Java / Spring Boot", level: 85 },
    { name: "Python / FastAPI", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind / Framer", level: 92 },
    { name: "MongoDB / PostgreSQL", level: 82 }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.9, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDMiIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMjBhMTAgMTAgMCAwIDEgMTAgMTAgMTAgMTAgMCAwIDEtMTAgMTAgMTAgMTAgMCAwIDEtMTAtMTAgMTAgMTAgMCAwIDEgMTAtMTB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Premium Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl' : 'bg-transparent'}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.h1 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-black tracking-tighter gradient-text-premium"
          >
            ARN◈B.DEV
          </motion.h1>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Projects', 'Skills', 'Contact'].map(item => (
              <motion.button 
                key={item} 
                onClick={() => setActiveTab(item)} 
                whileHover={{ y: -2 }}
                className={`relative px-1 py-2 transition-all duration-300 animated-border ${activeTab === item ? 'text-teal-400' : 'text-slate-400 hover:text-teal-400'}`}
              >
                {item}
                {activeTab === item && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-teal-500/30 transition-all"
          >
            Resume ↗
          </motion.button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-200 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }} 
              className="md:hidden bg-[#020617]/95 backdrop-blur-xl border-t border-teal-500/20"
            >
              <div className="px-6 py-5 flex flex-col space-y-4 text-base font-medium">
                {['About', 'Projects', 'Skills', 'Contact'].map(item => (
                  <button key={item} onClick={() => { setActiveTab(item); setIsMenuOpen(false); }} className="text-slate-200 hover:text-teal-400 transition-colors py-2 border-b border-slate-800/60 text-left">
                    {item}
                  </button>
                ))}
                <button className="mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-center rounded-full py-3 font-bold">Resume</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* Hero Section */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-28"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-400 blur-2xl opacity-40 group-hover:opacity-70 transition-all"></div>
              <div className="relative rounded-3xl p-1 bg-gradient-to-r from-teal-400 to-cyan-400">
                <img 
                  src="/arnob.jpg" 
                  alt="Arnob" 
                  className="w-44 h-44 rounded-2xl object-cover border-2 border-slate-900"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400/1e293b/5eead4?text=ARN◈B"; }}
                />
              </div>
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-2 shadow-lg"
              >
                <svg className="w-4 h-4 text-slate-950" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm rounded-full px-3 py-1 border border-teal-400/30 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span className="text-teal-300 font-mono text-xs tracking-widest uppercase">Available for work</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tighter">
                <span className="gradient-text-premium">
                  Shibli Noman Arnob
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                Computer Science student at <span className="text-teal-400 font-semibold">UIU</span>. Building scalable software solutions and exploring the intersection of AI and Engineering.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <a href="#projects" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-teal-500/30">
                  View Work
                </a>
                <a href="#contact" className="border border-slate-700 hover:border-teal-400 px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-teal-500/10">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <span className="text-teal-500 font-mono text-lg font-bold">01.</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-teal-500/30 transition-all duration-500 overflow-hidden premium-shadow"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <div className="text-teal-400 mb-3 font-mono text-sm tracking-wider">{p.tech}</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{p.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-teal-400 cursor-pointer hover:text-teal-300">Live Demo →</span>
                    <span className="text-xs text-slate-500 cursor-pointer hover:text-slate-400">GitHub</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <span className="text-teal-500 font-mono text-lg font-bold">02.</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Tech Arsenal</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-teal-500/30 transition-all"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="text-teal-400 text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <span className="text-teal-500 font-mono text-lg font-bold">03.</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 border border-teal-500/20 text-center overflow-hidden glass-card"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:sarnob2430277@bscse.uiu.ac.bd" 
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  sarnob2430277@bscse.uiu.ac.bd
                </a>
                <a 
                  href="https://www.linkedin.com/in/shibli-noman-arnob-1247b4335" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z"/></svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Noman-2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 hover:bg-slate-700 border border-slate-600 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-sm">© 2026 Shibli Noman Arnob. Crafted with precision & passion.</p>
          <p className="text-slate-600 text-xs mt-2 font-mono">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </footer>
      </main>
    </div>
  );
}