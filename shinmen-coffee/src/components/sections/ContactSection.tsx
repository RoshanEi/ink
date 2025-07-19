'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { scrollAnimations, microInteractions } from '@/lib/animations';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      content: '123 Coffee Street, Brew District, CA 90210',
      action: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      content: 'hello@shinmencoffee.com',
      action: 'Send Email'
    },
    {
      icon: '🕒',
      title: 'Hours',
      content: 'Mon-Fri: 7AM-8PM\nSat-Sun: 8AM-9PM',
      action: 'View Menu'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-coffee-dark to-coffee-primary text-coffee-light">
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
            Get in Touch
          </h2>
          <p className="text-lg text-coffee-accent/80 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback, 
            or just want to share your coffee experience, we're here to listen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={scrollAnimations.slideInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 heading-secondary">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-dark/30 border border-coffee-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-transparent text-coffee-light placeholder-coffee-accent/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-dark/30 border border-coffee-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-transparent text-coffee-light placeholder-coffee-accent/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-coffee-dark/30 border border-coffee-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-transparent text-coffee-light placeholder-coffee-accent/50"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-coffee-dark/30 border border-coffee-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-transparent text-coffee-light placeholder-coffee-accent/50 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-coffee-gold text-coffee-dark font-semibold rounded-full hover:bg-coffee-accent transition-all duration-300"
                whileHover={microInteractions.buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={scrollAnimations.slideInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 heading-secondary">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-4 p-4 bg-coffee-dark/30 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-coffee-accent/80 mb-2 whitespace-pre-line body-text">
                      {info.content}
                    </p>
                    <button className="text-coffee-gold hover:text-coffee-accent text-sm font-medium transition-colors duration-200">
                      {info.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-coffee-dark/30 rounded-full flex items-center justify-center text-xl hover:bg-coffee-gold hover:text-coffee-dark transition-all duration-200"
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
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 bg-coffee-dark/30 rounded-2xl p-8 text-center"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-semibold mb-2">Visit Our Location</h3>
          <p className="text-coffee-accent/80 mb-4">
            Interactive map coming soon - Experience our coffee shop in virtual reality
          </p>
          <motion.button
            className="px-6 py-3 bg-coffee-gold text-coffee-dark font-semibold rounded-full hover:bg-coffee-accent transition-all duration-300"
            whileHover={microInteractions.buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            View Map
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}