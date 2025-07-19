'use client';

import { motion } from 'framer-motion';
import { scrollAnimations, microInteractions } from '@/lib/animations';

export function AboutSection() {
  const features = [
    {
      icon: '🌱',
      title: 'Sustainable Sourcing',
      description: 'We partner with ethical coffee farms that prioritize environmental stewardship and fair labor practices.'
    },
    {
      icon: '🔥',
      title: 'Artisanal Roasting',
      description: 'Our master roasters carefully craft each batch to bring out the unique characteristics of every bean.'
    },
    {
      icon: '🎨',
      title: 'Latte Artistry',
      description: 'Every cup is a canvas for our skilled baristas to create beautiful, Instagram-worthy latte art.'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'We embrace cutting-edge brewing technology while honoring traditional coffee craftsmanship.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '50+', label: 'Coffee Varieties' },
    { number: '10k+', label: 'Happy Customers' },
    { number: '100%', label: 'Ethically Sourced' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-coffee-dark to-coffee-primary text-coffee-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-primary">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-coffee-gold mx-auto mb-6" />
          <p className="text-lg text-coffee-accent/80 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for exceptional coffee and Japanese craftsmanship, 
            Shinmen Coffee represents the perfect harmony of tradition and innovation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            variants={scrollAnimations.slideInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 heading-secondary">
              The Art of Coffee
            </h3>
            <div className="space-y-6 text-coffee-accent/90 body-text">
              <p>
                In the heart of our philosophy lies the Japanese concept of "wabi-sabi" - 
                finding beauty in imperfection and appreciating the natural cycle of growth and decay. 
                This principle guides every aspect of our coffee journey.
              </p>
              <p>
                From the moment we select our beans from sustainable farms around the world, 
                to the precise roasting process that brings out each bean's unique character, 
                we treat coffee as more than just a beverage - it's an art form.
              </p>
              <p>
                Our master baristas, trained in both traditional and modern techniques, 
                transform these carefully selected beans into extraordinary experiences 
                that awaken the senses and nourish the soul.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            variants={scrollAnimations.slideInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-coffee-secondary to-coffee-gold rounded-2xl overflow-hidden">
              {/* Animated Coffee Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-8xl opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ☕
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-coffee-accent rounded-full opacity-30"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={scrollAnimations.staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-coffee-dark/30 rounded-2xl backdrop-blur-sm"
              variants={scrollAnimations.fadeInOnScroll}
              whileHover={microInteractions.cardTilt}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-3 heading-secondary">
                {feature.title}
              </h4>
              <p className="text-coffee-accent/80 body-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="text-center"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 heading-secondary">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-coffee-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-coffee-accent/80 body-text">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-coffee-gold text-coffee-dark font-semibold rounded-full text-lg hover:bg-coffee-accent transition-all duration-300"
            whileHover={microInteractions.buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Roastery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}