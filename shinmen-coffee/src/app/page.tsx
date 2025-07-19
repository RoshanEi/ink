'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/navigation/Footer';
import { pageTransitions } from '@/lib/animations';

export default function HomePage() {
  return (
    <motion.div
      variants={pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <Navigation />
      
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
}
