'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCoffeeShopStore } from '@/lib/store';
import { scrollAnimations, microInteractions } from '@/lib/animations';

// Sample coffee data
const coffeeItems = [
  {
    id: 'espresso-classic',
    name: 'Classic Espresso',
    description: 'Rich, bold, and perfectly balanced single shot of espresso',
    price: 3.50,
    category: 'espresso' as const,
    image: '/images/espresso.jpg',
    rating: 4.8,
    reviews: 127,
    preparationTime: 2,
    calories: 5,
    caffeine: 80,
    allergens: [],
    available: true,
    customization: {
      size: 'medium' as const,
      strength: 8,
      milk: 'none' as const,
      temperature: 160,
      extras: [],
      sweetness: 0,
      ice: 'none' as const,
    }
  },
  {
    id: 'latte-art',
    name: 'Artisan Latte',
    description: 'Smooth espresso with velvety steamed milk and beautiful latte art',
    price: 5.50,
    category: 'latte' as const,
    image: '/images/latte.jpg',
    rating: 4.9,
    reviews: 203,
    preparationTime: 4,
    calories: 120,
    caffeine: 75,
    allergens: ['milk'],
    available: true,
    customization: {
      size: 'medium' as const,
      strength: 6,
      milk: 'whole' as const,
      temperature: 150,
      extras: [],
      sweetness: 2,
      ice: 'none' as const,
    }
  },
  {
    id: 'cappuccino-perfect',
    name: 'Perfect Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam',
    price: 4.75,
    category: 'cappuccino' as const,
    image: '/images/cappuccino.jpg',
    rating: 4.7,
    reviews: 156,
    preparationTime: 3,
    calories: 80,
    caffeine: 70,
    allergens: ['milk'],
    available: true,
    customization: {
      size: 'medium' as const,
      strength: 7,
      milk: 'whole' as const,
      temperature: 155,
      extras: [],
      sweetness: 1,
      ice: 'none' as const,
    }
  },
  {
    id: 'cold-brew-smooth',
    name: 'Smooth Cold Brew',
    description: '18-hour steeped cold brew with notes of chocolate and caramel',
    price: 6.00,
    category: 'cold-brew' as const,
    image: '/images/cold-brew.jpg',
    rating: 4.6,
    reviews: 89,
    preparationTime: 1,
    calories: 15,
    caffeine: 200,
    allergens: [],
    available: true,
    customization: {
      size: 'medium' as const,
      strength: 9,
      milk: 'none' as const,
      temperature: 40,
      extras: [],
      sweetness: 3,
      ice: 'normal' as const,
    }
  },
  {
    id: 'mocha-decadent',
    name: 'Decadent Mocha',
    description: 'Rich chocolate and espresso with steamed milk',
    price: 6.50,
    category: 'specialty' as const,
    image: '/images/mocha.jpg',
    rating: 4.8,
    reviews: 134,
    preparationTime: 5,
    calories: 280,
    caffeine: 85,
    allergens: ['milk', 'chocolate'],
    available: true,
    customization: {
      size: 'medium' as const,
      strength: 6,
      milk: 'whole' as const,
      temperature: 150,
      extras: ['chocolate'],
      sweetness: 7,
      ice: 'none' as const,
    }
  },
  {
    id: 'americano-bold',
    name: 'Bold Americano',
    description: 'Espresso with hot water for a clean, strong flavor',
    price: 4.00,
    category: 'espresso' as const,
    image: '/images/americano.jpg',
    rating: 4.5,
    reviews: 98,
    preparationTime: 2,
    calories: 10,
    caffeine: 90,
    allergens: [],
    available: true,
    customization: {
      size: 'medium' as const,
      strength: 9,
      milk: 'none' as const,
      temperature: 170,
      extras: [],
      sweetness: 0,
      ice: 'none' as const,
    }
  }
];

const categories = [
  { id: 'all', name: 'All', icon: '☕' },
  { id: 'espresso', name: 'Espresso', icon: '⚡' },
  { id: 'latte', name: 'Lattes', icon: '🥛' },
  { id: 'cappuccino', name: 'Cappuccinos', icon: '☁️' },
  { id: 'cold-brew', name: 'Cold Brew', icon: '🧊' },
  { id: 'specialty', name: 'Specialty', icon: '✨' },
];

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCoffeeShopStore();

  const filteredItems = coffeeItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: typeof coffeeItems[0]) => {
    addToCart(item, item.customization);
  };

  return (
    <section id="menu" className="py-20 bg-coffee-light">
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
            Our Menu
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee beverages, 
            each prepared with precision and passion.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-12"
          variants={scrollAnimations.fadeInOnScroll}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for your favorite coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white border border-coffee-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-coffee-gold focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-coffee-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-coffee-gold text-coffee-dark shadow-lg'
                    : 'bg-white text-coffee-dark hover:bg-coffee-accent'
                }`}
                whileHover={microInteractions.buttonHover}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={scrollAnimations.staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={scrollAnimations.scaleIn}
              whileHover={microInteractions.cardTilt}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-coffee-primary to-coffee-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">☕</span>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-coffee-gold text-coffee-dark px-2 py-1 rounded-full text-sm font-bold">
                  ⭐ {item.rating}
                </div>
                
                {/* Preparation Time */}
                <div className="absolute top-4 left-4 bg-coffee-dark/80 text-coffee-light px-2 py-1 rounded-full text-sm">
                  ⏱️ {item.preparationTime}m
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-coffee-dark heading-secondary">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-coffee-gold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-coffee-dark/70 mb-4 body-text">
                  {item.description}
                </p>

                {/* Nutrition Info */}
                <div className="flex justify-between text-sm text-coffee-dark/60 mb-4">
                  <span>🔥 {item.calories} cal</span>
                  <span>⚡ {item.caffeine}mg caffeine</span>
                </div>

                {/* Allergens */}
                {item.allergens.length > 0 && (
                  <div className="mb-4">
                    <span className="text-xs text-coffee-dark/50">
                      Contains: {item.allergens.join(', ')}
                    </span>
                  </div>
                )}

                {/* Add to Cart Button */}
                <motion.button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-coffee-primary text-coffee-light py-3 rounded-full font-semibold hover:bg-coffee-gold hover:text-coffee-dark transition-all duration-200"
                  whileHover={microInteractions.buttonHover}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-2">
              No coffee found
            </h3>
            <p className="text-coffee-dark/70">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}