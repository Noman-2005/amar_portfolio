import { SOCIALS } from './socials'

export const PROJECTS = [
  {
    title: 'NomanOS',
    desc: 'A personal operating system built for a hackathon with smart features for creators.',
    tags: ['Next.js', 'Vercel'],
    emoji: '🚀',
    accent: 'var(--violet)',
    href: 'https://noman-os.vercel.app',
    featured: true,
  },
  {
    title: 'Java OOP Suite',
    desc: 'A collection of Java programs demonstrating abstraction, interfaces, polymorphism, and exception handling with clean design patterns.',
    tags: ['Java', 'OOP', 'Design Patterns'],
    emoji: '☕',
    accent: 'var(--amber)',
    href: SOCIALS.github,
    featured: false,
  },
  {
    title: 'Psychological Assessment System',
    desc: 'A psychological assessment system with interactive tools for mental health evaluation and self-assessment modules.',
    tags: ['JavaScript', 'Vercel', 'Psychology'],
    emoji: '🧠',
    accent: 'var(--teal)',
    href: 'https://psychological-assessment-theta.vercel.app/',
    featured: false,
  },
]