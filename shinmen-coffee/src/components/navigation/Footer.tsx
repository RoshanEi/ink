'use client';

import { motion } from 'framer-motion';
import { scrollAnimations, microInteractions } from '@/lib/animations';

export function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    menu: [
      { name: 'Coffee Menu', href: '#menu' },
      { name: 'Seasonal Drinks', href: '#menu' },
      { name: 'Food Menu', href: '#' },
      { name: 'Nutrition Info', href: '#' }
    ],
    experience: [
      { name: 'Virtual Tour', href: '#experience' },
      { name: 'Coffee Classes', href: '#experience' },
      { name: 'Events', href: '#' },
      { name: 'Gift Cards', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Order Support', href: '#' },
      { name: 'Feedback', href: '#contact' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-coffee-light">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            variants={scrollAnimations.fadeInOnScroll}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 heading-primary">Shinmen Coffee</h3>
            <p className="text-coffee-accent/80 mb-6 body-text">
              Experience the perfect harmony of tradition and innovation. 
              Every cup tells a story of passion, precision, and the pursuit of perfection.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-coffee-dark/50 border border-coffee-accent/30 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-transparent text-coffee-light placeholder-coffee-accent/50"
                />
                <motion.button
                  className="px-4 py-2 bg-coffee-gold text-coffee-dark font-semibold rounded-r-lg hover:bg-coffee-accent transition-all duration-200"
                  whileHover={microInteractions.buttonHover}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-coffee-dark/50 rounded-full flex items-center justify-center text-lg hover:bg-coffee-gold hover:text-coffee-dark transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-coffee-accent/80 hover:text-coffee-gold transition-colors duration-200 body-text"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-coffee-accent/60 text-sm body-text">
              © {currentYear} Shinmen Coffee. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                className="text-coffee-accent/60 hover:text-coffee-gold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-coffee-accent/60 hover:text-coffee-gold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="text-coffee-accent/60 hover:text-coffee-gold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Cookie Policy
              </motion.a>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-coffee-gold text-coffee-dark rounded-full flex items-center justify-center hover:bg-coffee-accent transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑
            </motion.button>
          </div>
        </div>
      </div>

      {/* Coffee Bean Decoration */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-coffee-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}