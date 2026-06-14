import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'],
  },
  // Turbopack এর জন্য (Next.js 15+)
  turbopack: {
    // এখানে Turbopack কনফিগারেশন
  },
};

export default nextConfig;