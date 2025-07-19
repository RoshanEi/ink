'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { scrollAnimations, microInteractions } from '@/lib/animations';

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 'virtual-tour',
      title: 'Virtual Coffee Tour',
      description: 'Take an immersive 3D tour of our roastery and learn about our coffee journey from bean to cup.',
      icon: '🏭',
      features: ['360° Roastery View', 'Interactive Learning', 'Bean Origin Stories', 'Roasting Process']
    },
    {
      id: 'ai-recommendations',
      title: 'AI Coffee Recommendations',
      description: 'Our intelligent system learns your preferences to suggest the perfect coffee for your mood and taste.',
      icon: '🤖',
      features: ['Personalized Suggestions', 'Mood-Based Matching', 'Weather Integration', 'Taste Profiling']
    },
    {
      id: 'latte-art-class',
      title: 'Virtual Latte Art Class',
      description: 'Learn the art of latte decoration with our interactive tutorials and real-time feedback.',
      icon: '🎨',
      features: ['Step-by-Step Tutorials', 'Real-time Feedback', 'Pattern Library', 'Progress Tracking']
    },
    {
      id: 'coffee-journey',
      title: 'Coffee Journey Game',
      description: 'Embark on a gamified adventure to discover coffee origins, brewing methods, and earn rewards.',
      icon: '🎮',
      features: ['Interactive Quests', 'Achievement System', 'Coffee Education', 'Loyalty Rewards']
    }
  ];

  const achievements = [
    { id: 'first-sip', title: 'First Sip', icon: '☕', progress: 100, maxProgress: 100, unlocked: true },
    { id: 'coffee-explorer', title: 'Coffee Explorer', icon: '🗺️', progress: 75, maxProgress: 100, unlocked: false },
    { id: 'latte-artist', title: 'Latte Artist', icon: '🎨', progress: 30, maxProgress: 100, unlocked: false },
    { id: 'coffee-master', title: 'Coffee Master', icon: '👑', progress: 10, maxProgress: 100, unlocked: false }
  ];

  return (
    <section id="experience" className="py-20 bg-coffee-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4 heading-primary">
            Interactive Experience
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto">
            Immerse yourself in the world of coffee through our cutting-edge digital experiences 
            and gamified learning platform.
          </p>
        </motion.div>

        {/* Experience Tabs */}
        <motion.div
          className="mb-12"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {experiences.map((experience, index) => (
              <motion.button
                key={experience.id}
                onClick={() => setActiveExperience(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeExperience === index
                    ? 'bg-coffee-gold text-coffee-dark shadow-lg'
                    : 'bg-white text-coffee-dark hover:bg-coffee-accent'
                }`}
                whileHover={microInteractions.buttonHover}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-lg">{experience.icon}</span>
                {experience.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Experience Content */}
        <motion.div
          key={activeExperience}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column - Content */}
          <div>
            <div className="text-6xl mb-6">{experiences[activeExperience].icon}</div>
            <h3 className="text-3xl font-bold text-coffee-dark mb-4 heading-secondary">
              {experiences[activeExperience].title}
            </h3>
            <p className="text-coffee-dark/70 mb-6 body-text">
              {experiences[activeExperience].description}
            </p>
            
            {/* Features List */}
            <div className="space-y-3">
              {experiences[activeExperience].features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-coffee-gold rounded-full" />
                  <span className="text-coffee-dark/80 body-text">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-8 px-8 py-4 bg-coffee-primary text-coffee-light font-semibold rounded-full hover:bg-coffee-gold hover:text-coffee-dark transition-all duration-300"
              whileHover={microInteractions.buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Start Experience
            </motion.button>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-coffee-primary to-coffee-secondary rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-coffee-light">
                <div className="text-8xl mb-4 opacity-60">
                  {experiences[activeExperience].icon}
                </div>
                <p className="text-lg font-medium">
                  Interactive Demo Coming Soon
                </p>
                <p className="text-sm opacity-80 mt-2">
                  Experience the future of coffee interaction
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="bg-coffee-dark rounded-2xl p-8 text-coffee-light"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center heading-secondary">
            Your Coffee Journey
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="text-center p-4 bg-coffee-dark/50 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                
                {/* Progress Bar */}
                <div className="w-full bg-coffee-dark/30 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-coffee-gold h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                <div className="text-sm text-coffee-accent/80">
                  {achievement.progress}/{achievement.maxProgress}
                </div>
                
                {achievement.unlocked && (
                  <div className="text-xs text-coffee-gold mt-1">✓ Unlocked</div>
                )}
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
          <h3 className="text-2xl font-bold text-coffee-dark mb-4">
            Ready to Start Your Coffee Adventure?
          </h3>
          <motion.button
            className="px-8 py-4 bg-coffee-gold text-coffee-dark font-semibold rounded-full text-lg hover:bg-coffee-accent transition-all duration-300"
            whileHover={microInteractions.buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}