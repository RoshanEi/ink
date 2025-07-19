import { AnimationConfig } from 'framer-motion';

// Coffee-Specific Animation Variants
export const coffeeAnimations = {
  steamRise: {
    initial: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8, 
      filter: 'blur(2px)' 
    },
    animate: {
      opacity: [0, 1, 0.7, 0],
      y: [20, -40, -80, -120],
      scale: [0.8, 1, 1.2, 1.5],
      filter: ['blur(2px)', 'blur(1px)', 'blur(2px)', 'blur(4px)'],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },
  
  beanFloat: {
    initial: { rotate: 0, y: 0 },
    animate: {
      rotate: [0, 360],
      y: [0, -10, 0],
      transition: {
        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
    }
  },
  
  liquidPour: {
    initial: { scaleY: 0, transformOrigin: "top" },
    animate: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.5
      }
    }
  },

  cremaForm: {
    initial: { scale: 0, rotate: 0, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 360,
      opacity: 0.8,
      transition: {
        duration: 3,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },

  cupFill: {
    initial: { scaleY: 0, transformOrigin: "bottom" },
    animate: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  grindParticles: {
    initial: { opacity: 0, scale: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0.5],
      y: [0, -20, -40],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  }
};

// Micro-Interaction Library
export const microInteractions = {
  buttonHover: {
    scale: 1.02,
    boxShadow: '0 8px 25px rgba(139, 69, 19, 0.15)',
    transition: { duration: 0.2 }
  },
  
  cardTilt: {
    rotateY: 8,
    rotateX: 4,
    scale: 1.03,
    transition: { duration: 0.3 }
  },
  
  imageReveal: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
  },

  textReveal: {
    opacity: [0, 1],
    y: [20, 0],
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  },

  menuSlide: {
    x: [100, 0],
    opacity: [0, 1],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
  },

  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  },

  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Page Transitions
export const pageTransitions = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  }
};

// Scroll Animations
export const scrollAnimations = {
  fadeInOnScroll: {
    initial: { opacity: 0, y: 50 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    },
    viewport: { once: true, margin: "-100px" }
  },

  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    },
    viewport: { once: true, margin: "-100px" }
  },

  slideInRight: {
    initial: { opacity: 0, x: 100 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    },
    viewport: { once: true, margin: "-100px" }
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    },
    viewport: { once: true, margin: "-100px" }
  }
};

// Performance-Optimized Animation Config
export const performanceConfig: AnimationConfig = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

// Custom Animation Hook Interface
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
  repeat?: number;
  yoyo?: boolean;
  onComplete?: () => void;
}

// Coffee Temperature Color Mapping
export const temperatureColors = {
  cold: '#4A90E2',    // Blue for cold brew
  warm: '#F4A460',    // Orange for warm
  hot: '#DC143C',     // Red for hot
  steam: '#F5F5F5'    // White for steam
};

// Animation Presets for Different Coffee Types
export const coffeeTypeAnimations = {
  espresso: {
    pour: { duration: 0.8, ease: "easeOut" },
    crema: { duration: 1.2, ease: [0.23, 1, 0.32, 1] }
  },
  latte: {
    pour: { duration: 2.0, ease: "easeInOut" },
    art: { duration: 3.0, ease: [0.23, 1, 0.32, 1] }
  },
  cappuccino: {
    pour: { duration: 1.5, ease: "easeOut" },
    foam: { duration: 2.5, ease: [0.23, 1, 0.32, 1] }
  },
  coldBrew: {
    drip: { duration: 4.0, ease: "linear" },
    ice: { duration: 1.0, ease: "easeOut" }
  }
};