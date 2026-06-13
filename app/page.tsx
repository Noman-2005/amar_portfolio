// app/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalEmail = "sarnob2430277@bscse.uiu.ac.bd";
  const linkedInUrl = "https://www.linkedin.com/in/shibli-noman-arnob-1247b4335?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  const projects = [
    {
      title: "Nexus Inventory System",
      tech: ["Java", "OOP Concepts", "IntelliJ IDEA", "Design Patterns", "JUnit"],
      link: "https://github.com/Noman-2005",
      description: "Enterprise-grade inventory management solution featuring dynamic reporting, multi-threaded sync, and elegant CLI interface.",
      icon: "⚡",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      title: "Aether AI Companion",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "Vector DB"],
      link: "https://github.com/Noman-2005",
      description: "Conversational AI with RAG architecture, real-time memory and semantic search — built for next-gen assistance.",
      icon: "🧠",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      title: "Stellar Dashboard",
      tech: ["Next.js", "Tailwind", "D3.js", "MongoDB", "WebSockets"],
      link: "https://github.com/Noman-2005",
      description: "Real-time analytics dashboard with interactive data visualizations, live updates and dark-mode cosmic theme.",
      icon: "📊",
      gradient: "from-rose-400 to-orange-400"
    }
  ];

  const skillSet = ["React / Next.js", "Java & Spring Boot", "Python / FastAPI", "Tailwind / Framer", "Cloud (AWS basics)", "MongoDB / PostgreSQL"];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.9, 0.3, 1] } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/40 selection:text-white overflow-x-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] bg-teal-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-500/20 rounded-full blur-[130px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      {/* --- PREMIUM NAVIGATION --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.a href="#" whileHover={{ scale: 1.02 }} className="text-2xl font-black tracking-tighter">
            <span className="gradient-text-premium text-3xl">ARN◈B.DEV</span>
          </motion.a>
          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-teal-400 transition-all duration-300 relative pb-1 animated-border">
                {item}
              </a>
            ))}
          </div>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="hidden md:block bg-white/5 backdrop-blur-sm border border-teal-400/40 rounded-full px-5 py-2 text-sm font-semibold text-teal-300 hover:bg-teal-400/10 transition-all">
            Resume ↗
          </motion.a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-200 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-teal-500/20">
              <div className="px-6 py-5 flex flex-col space-y-4 text-base font-medium">
                {["About", "Skills", "Projects", "Contact"].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-slate-200 hover:text-teal-400 transition-colors py-1 border-b border-slate-800/60">{item}</a>
                ))}
                <a href="#contact" className="mt-2 bg-teal-500/20 text-center rounded-full py-2 text-teal-300 font-bold">Contact me</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="relative pt-36 pb-24 md:pt-44 max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center text-center">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-teal-400/30 mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span></span>
            <span className="text-teal-300 font-mono text-xs tracking-widest uppercase">Available for collaboration</span>
          </motion.div>
          <motion.p variants={fadeUp} className="text-teal-400 font-mono text-sm md:text-base tracking-[0.2em] uppercase mb-3">Hi, my name is</motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"><span className="gradient-text-premium">Shibli Noman Arnob.</span></motion.h1>

          <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} className="relative mt-10 flex justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative rounded-full p-1 bg-gradient-to-tr from-teal-400 to-cyan-400 shadow-2xl">
              <img
                src="/arnob.jpg"
                alt="Shibli Noman Arnob"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-900 bg-slate-800"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400/1e293b/5eead4?text=ARN◈B"; }}
              />
            </div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-2 shadow-lg">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
            </motion.div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mt-8 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">I build clean, interactive software.</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mt-4">Computer Science & Engineering @ United International University • Crafting digital experiences with passion & precision.</motion.p>

          <motion.div variants={fadeUp} className="pt-10 flex flex-wrap gap-5 justify-center">
            <a href="#projects" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 px-8 py-3.5 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-teal-500/30 overflow-hidden">
              <span>View Projects</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#contact" className="backdrop-blur-sm bg-white/5 border border-slate-600 hover:border-teal-400 px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-teal-500/10 shadow-md">Contact Me</a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-teal-400 font-mono text-sm tracking-widest uppercase bg-teal-500/10 px-4 py-1 rounded-full">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-5">Tech Arsenal &nbsp;<span className="gradient-text-premium">✦</span></h2>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {skillSet.map((skill) => (
              <div key={skill} className="glass-card p-4 text-center backdrop-blur-md rounded-2xl border border-slate-700/60 hover:border-teal-400/50 transition-all hover:scale-105 duration-300">
                <p className="font-semibold text-slate-200 text-md">{skill}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-sm tracking-widest bg-cyan-500/10 px-4 py-1 rounded-full">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-5">Flagship <span className="gradient-text-premium">Projects</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto mt-3">Crafted with modern architecture, clean code, and visionary design.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div key={idx} variants={fadeUp} whileHover={{ y: -10 }} className="glass-card rounded-3xl overflow-hidden group premium-shadow transition-all duration-500 flex flex-col h-full">
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => <span key={i} className="text-[11px] font-mono font-medium bg-white/5 border border-slate-700 rounded-full px-3 py-1 text-teal-300">{tech}</span>)}
                  </div>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-all text-sm font-semibold">Explore repo →</a>
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <svg className="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="text-center mt-12">
            <a href="https://github.com/Noman-2005" target="_blank" className="inline-flex items-center gap-2 text-slate-300 border-b border-teal-400/40 pb-1 hover:text-teal-400 transition">See all on GitHub →</a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-5xl mx-auto px-6 lg:px-8 py-28 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="glass-card rounded-3xl p-8 md:p-12 text-center border-teal-500/20">
          <motion.div variants={fadeUp}>
            <span className="text-teal-400 font-mono text-sm">Get in touch</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 gradient-text-premium">Let's create something epic.</h2>
            <p className="text-slate-300 max-w-lg mx-auto mt-4 text-lg">Whether you have a project in mind or just want to connect — I'm always open to conversations.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <a href={`mailto:${personalEmail}`} className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {personalEmail}
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg flex items-center gap-2 group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" /></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Noman-2005" target="_blank" className="bg-slate-800/50 hover:bg-slate-700 border border-slate-600 px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                GitHub
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 bg-slate-800/40 rounded-full px-5 py-2 border border-slate-700">
              <span className="text-teal-400 text-sm font-mono">✉️</span>
              <span className="text-slate-300 text-sm">{personalEmail}</span>
              <button onClick={() => navigator.clipboard.writeText(personalEmail)} className="ml-2 text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-md transition-colors">Copy</button>
            </div>
            <div className="mt-12 pt-6 border-t border-slate-700/40 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-sm">
              <span>📍 Dhaka, Bangladesh</span>
              <span>⚡ Open for freelance & collab</span>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" /></svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-slate-500 text-sm border-t border-slate-800/40 mt-12">
        <p>© 2026 Shibli Noman Arnob — built with Next.js, Tailwind & Framer Motion</p>
        <p className="mt-2 text-xs text-slate-600 flex items-center justify-center gap-3 flex-wrap">
          <span>{personalEmail}</span>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">LinkedIn ↗</a>
        </p>
      </footer>

      <style jsx>{`
        .gradient-text-premium {
          background: linear-gradient(135deg, #5eead4 0%, #2dd4bf 40%, #38bdf8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glass-card {
          background: rgba(15, 25, 35, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(94, 234, 212, 0.18);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .glass-card:hover {
          border-color: rgba(94, 234, 212, 0.5);
          background: rgba(20, 32, 44, 0.7);
          box-shadow: 0 25px 40px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(94, 234, 212, 0.2);
        }
        .premium-shadow {
          box-shadow: 0 20px 35px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(94, 234, 212, 0.1);
        }
        .animated-border::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #5eead4, #2dd4bf);
          transition: width 0.3s ease;
        }
        .animated-border:hover::after { width: 100%; }
      `}</style>
    </div>
  );
}