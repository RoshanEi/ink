import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'espresso' | 'latte' | 'cappuccino' | 'cold-brew' | 'specialty';
  image: string;
  customization: CoffeeCustomization;
  rating: number;
  reviews: number;
  preparationTime: number; // in minutes
  calories: number;
  caffeine: number; // mg
  allergens: string[];
  available: boolean;
}

export interface CoffeeCustomization {
  size: 'small' | 'medium' | 'large';
  strength: number; // 1-10 scale
  milk: 'none' | 'oat' | 'almond' | 'whole' | 'skim';
  temperature: number; // 140-180°F
  extras: string[];
  sweetness: number; // 0-10 scale
  ice: 'none' | 'light' | 'normal' | 'extra';
}

export interface CartItem {
  coffee: CoffeeItem;
  quantity: number;
  customizations: CoffeeCustomization;
  specialInstructions: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences: {
    favoriteDrinks: string[];
    preferredStrength: number;
    preferredMilk: string;
    preferredTemperature: number;
    dietaryRestrictions: string[];
    caffeineSensitivity: 'low' | 'medium' | 'high';
  };
  orderHistory: Order[];
  loyaltyPoints: number;
  achievements: Achievement[];
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderTime: Date;
  estimatedReadyTime: Date;
  pickupLocation: string;
  specialInstructions: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  progress: number;
  maxProgress: number;
  reward: {
    points: number;
    badge?: string;
    discount?: number;
  };
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface AnimationState {
  isAnimating: boolean;
  currentAnimation: string | null;
  animationQueue: string[];
  performanceMode: 'high' | 'medium' | 'low';
}

export interface AIRecommendations {
  personalizedDrinks: CoffeeItem[];
  seasonalSuggestions: CoffeeItem[];
  weatherBasedRecommendations: CoffeeItem[];
  moodBasedSuggestions: CoffeeItem[];
  timeBasedRecommendations: CoffeeItem[];
}

// Store State Interface
interface CoffeeShopState {
  // Cart State
  cart: CartItem[];
  cartTotal: number;
  cartItemCount: number;
  
  // User State
  user: UserProfile | null;
  isAuthenticated: boolean;
  
  // Menu State
  menu: CoffeeItem[];
  filteredMenu: CoffeeItem[];
  selectedCategory: string | null;
  searchQuery: string;
  
  // Order State
  currentOrder: Order | null;
  orderHistory: Order[];
  
  // Animation State
  animations: AnimationState;
  
  // AI Recommendations
  aiRecommendations: AIRecommendations;
  
  // UI State
  isMenuOpen: boolean;
  isCartOpen: boolean;
  isProfileOpen: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  addToCart: (item: CoffeeItem, customizations: CoffeeCustomization, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItem: (itemId: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  
  setUser: (user: UserProfile) => void;
  logout: () => void;
  
  setMenu: (menu: CoffeeItem[]) => void;
  filterMenu: (category: string | null, query: string) => void;
  
  createOrder: (items: CartItem[], pickupLocation: string, specialInstructions?: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  
  setAnimationState: (state: Partial<AnimationState>) => void;
  queueAnimation: (animation: string) => void;
  
  setAIRecommendations: (recommendations: AIRecommendations) => void;
  
  setUIState: (updates: Partial<{
    isMenuOpen: boolean;
    isCartOpen: boolean;
    isProfileOpen: boolean;
    isLoading: boolean;
    error: string | null;
  }>) => void;
  
  // Computed Values
  getCartTotal: () => number;
  getCartItemCount: () => number;
  getFavoriteDrinks: () => CoffeeItem[];
  getRecommendedDrinks: () => CoffeeItem[];
}

// Store Implementation
export const useCoffeeShopStore = create<CoffeeShopState>()(
  persist(
    (set, get) => ({
      // Initial State
      cart: [],
      cartTotal: 0,
      cartItemCount: 0,
      
      user: null,
      isAuthenticated: false,
      
      menu: [],
      filteredMenu: [],
      selectedCategory: null,
      searchQuery: '',
      
      currentOrder: null,
      orderHistory: [],
      
      animations: {
        isAnimating: false,
        currentAnimation: null,
        animationQueue: [],
        performanceMode: 'high'
      },
      
      aiRecommendations: {
        personalizedDrinks: [],
        seasonalSuggestions: [],
        weatherBasedRecommendations: [],
        moodBasedSuggestions: [],
        timeBasedRecommendations: []
      },
      
      isMenuOpen: false,
      isCartOpen: false,
      isProfileOpen: false,
      isLoading: false,
      error: null,
      
      // Actions
      addToCart: (item, customizations, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(
            cartItem => cartItem.coffee.id === item.id && 
            JSON.stringify(cartItem.customizations) === JSON.stringify(customizations)
          );
          
          let newCart;
          if (existingItem) {
            newCart = state.cart.map(cartItem =>
              cartItem === existingItem
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem
            );
          } else {
            newCart = [...state.cart, {
              coffee: item,
              quantity,
              customizations,
              specialInstructions: ''
            }];
          }
          
          return {
            cart: newCart,
            cartTotal: newCart.reduce((total, item) => total + (item.coffee.price * item.quantity), 0),
            cartItemCount: newCart.reduce((count, item) => count + item.quantity, 0)
          };
        });
      },
      
      removeFromCart: (itemId) => {
        set((state) => {
          const newCart = state.cart.filter(item => item.coffee.id !== itemId);
          return {
            cart: newCart,
            cartTotal: newCart.reduce((total, item) => total + (item.coffee.price * item.quantity), 0),
            cartItemCount: newCart.reduce((count, item) => count + item.quantity, 0)
          };
        });
      },
      
      updateCartItem: (itemId, updates) => {
        set((state) => {
          const newCart = state.cart.map(item =>
            item.coffee.id === itemId ? { ...item, ...updates } : item
          );
          return {
            cart: newCart,
            cartTotal: newCart.reduce((total, item) => total + (item.coffee.price * item.quantity), 0),
            cartItemCount: newCart.reduce((count, item) => count + item.quantity, 0)
          };
        });
      },
      
      clearCart: () => {
        set({
          cart: [],
          cartTotal: 0,
          cartItemCount: 0
        });
      },
      
      setUser: (user) => {
        set({
          user,
          isAuthenticated: true
        });
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          cart: [],
          cartTotal: 0,
          cartItemCount: 0
        });
      },
      
      setMenu: (menu) => {
        set({
          menu,
          filteredMenu: menu
        });
      },
      
      filterMenu: (category, query) => {
        set((state) => {
          let filtered = state.menu;
          
          if (category) {
            filtered = filtered.filter(item => item.category === category);
          }
          
          if (query) {
            filtered = filtered.filter(item =>
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.description.toLowerCase().includes(query.toLowerCase())
            );
          }
          
          return {
            filteredMenu: filtered,
            selectedCategory: category,
            searchQuery: query
          };
        });
      },
      
      createOrder: (items, pickupLocation, specialInstructions = '') => {
        const order: Order = {
          id: `order-${Date.now()}`,
          items,
          total: items.reduce((total, item) => total + (item.coffee.price * item.quantity), 0),
          status: 'pending',
          orderTime: new Date(),
          estimatedReadyTime: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
          pickupLocation,
          specialInstructions
        };
        
        set((state) => ({
          currentOrder: order,
          orderHistory: [order, ...state.orderHistory],
          cart: [],
          cartTotal: 0,
          cartItemCount: 0
        }));
      },
      
      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orderHistory: state.orderHistory.map(order =>
            order.id === orderId ? { ...order, status } : order
          ),
          currentOrder: state.currentOrder?.id === orderId 
            ? { ...state.currentOrder, status }
            : state.currentOrder
        }));
      },
      
      setAnimationState: (updates) => {
        set((state) => ({
          animations: { ...state.animations, ...updates }
        }));
      },
      
      queueAnimation: (animation) => {
        set((state) => ({
          animations: {
            ...state.animations,
            animationQueue: [...state.animations.animationQueue, animation]
          }
        }));
      },
      
      setAIRecommendations: (recommendations) => {
        set({ aiRecommendations: recommendations });
      },
      
      setUIState: (updates) => {
        set(updates);
      },
      
      // Computed Values
      getCartTotal: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + (item.coffee.price * item.quantity), 0);
      },
      
      getCartItemCount: () => {
        const state = get();
        return state.cart.reduce((count, item) => count + item.quantity, 0);
      },
      
      getFavoriteDrinks: () => {
        const state = get();
        if (!state.user) return [];
        return state.menu.filter(item => 
          state.user!.preferences.favoriteDrinks.includes(item.id)
        );
      },
      
      getRecommendedDrinks: () => {
        const state = get();
        return [
          ...state.aiRecommendations.personalizedDrinks,
          ...state.aiRecommendations.seasonalSuggestions,
          ...state.aiRecommendations.weatherBasedRecommendations
        ].slice(0, 6);
      }
    }),
    {
      name: 'shinmen-coffee-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        orderHistory: state.orderHistory,
        animations: state.animations
      })
    }
  )
);