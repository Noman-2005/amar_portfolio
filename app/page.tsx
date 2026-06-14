'use client';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeInOut" } 
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#e2e8f0] p-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ scale: 1.02 }} 
          className="relative group p-8 bg-[#0f172a] rounded-3xl border border-[#5eead4]/20"
        >
          <h1 className="text-4xl font-bold mb-4">
            Hello, I am Arnob
          </h1>
          <p className="text-lg text-slate-400">
            Welcome to my premium portfolio.
          </p>
        </motion.div>
      </div>
    </main>
  );
}