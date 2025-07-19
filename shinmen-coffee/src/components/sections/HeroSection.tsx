'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { coffeeAnimations, microInteractions } from '@/lib/animations';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coffee-dark via-coffee-primary to-coffee-secondary"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Coffee Beans */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-coffee-gold rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={coffeeAnimations.beanFloat}
            initial="initial"
            animate="animate"
            transition={{
              delay: Math.random() * 2,
              duration: 8 + Math.random() * 4,
            }}
          />
        ))}

        {/* Steam Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            className="absolute w-1 h-8 bg-gradient-to-t from-transparent to-white/30 rounded-full"
            style={{
              left: `${20 + (i * 4)}%`,
              bottom: '20%',
            }}
            variants={coffeeAnimations.steamRise}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 0.2,
              duration: 4 + Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        style={{ y, opacity, scale }}
      >
        {/* Logo/Brand */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-coffee-light mb-4 heading-primary">
            Shinmen
          </h1>
          <div className="w-24 h-1 bg-coffee-gold mx-auto mb-4" />
          <p className="text-xl md:text-2xl text-coffee-accent font-light">
            Coffee Artistry
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-lg md:text-xl text-coffee-accent/80 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect harmony of tradition and innovation. 
            Every cup tells a story of passion, precision, and the pursuit of perfection.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.button
            className="px-8 py-4 bg-coffee-gold text-coffee-dark font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 gpu-accelerated"
            whileHover={microInteractions.buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-coffee-accent text-coffee-accent font-semibold rounded-full text-lg hover:bg-coffee-accent hover:text-coffee-dark transition-all duration-300 gpu-accelerated"
            whileHover={microInteractions.buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Virtual Tour
          </motion.button>
        </motion.div>

        {/* Interactive Coffee Cup */}
        <motion.div
          className="absolute right-10 bottom-10 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="relative w-32 h-32">
            {/* Coffee Cup */}
            <div className="absolute inset-0 bg-gradient-to-b from-coffee-primary to-coffee-dark rounded-full opacity-80" />
            
            {/* Steam */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-transparent to-white/40 rounded-full"
              variants={coffeeAnimations.steamRise}
              initial="initial"
              animate="animate"
            />
            
            {/* Liquid */}
            <motion.div
              className="absolute inset-2 bg-gradient-to-b from-coffee-secondary to-coffee-primary rounded-full"
              variants={coffeeAnimations.liquidPour}
              initial="initial"
              animate="animate"
            />
            
            {/* Crema */}
            <motion.div
              className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-coffee-gold rounded-full opacity-60"
              variants={coffeeAnimations.cremaForm}
              initial="initial"
              animate="animate"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-coffee-accent rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-coffee-accent rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Mouse Parallax Effect */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
          }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Performance Overlay (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 text-xs text-coffee-accent/60">
          <div>FPS: 60</div>
          <div>Memory: 45MB</div>
        </div>
      )}
    </section>
  );
}