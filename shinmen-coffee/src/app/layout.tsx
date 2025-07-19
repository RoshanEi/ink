import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shinmen Coffee - Premium Coffee Experience',
  description: 'Experience the art of coffee at Shinmen Coffee Shop. Discover our handcrafted beverages, artisanal brewing methods, and immersive digital coffee journey.',
  keywords: 'coffee, premium coffee, artisanal coffee, coffee shop, specialty coffee, latte art, espresso, cold brew',
  authors: [{ name: 'Shinmen Coffee' }],
  creator: 'Shinmen Coffee',
  publisher: 'Shinmen Coffee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shinmen-coffee.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shinmen Coffee - Premium Coffee Experience',
    description: 'Experience the art of coffee at Shinmen Coffee Shop. Discover our handcrafted beverages and immersive digital coffee journey.',
    url: 'https://shinmen-coffee.com',
    siteName: 'Shinmen Coffee',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shinmen Coffee Shop - Premium Coffee Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shinmen Coffee - Premium Coffee Experience',
    description: 'Experience the art of coffee at Shinmen Coffee Shop. Discover our handcrafted beverages and immersive digital coffee journey.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Food & Beverage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance Optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#8B4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shinmen Coffee" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Viewport and Performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div id="root" className="min-h-screen bg-coffee-light">
            {children}
          </div>
        </Providers>
        
        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
                  }
                });
              }
              
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
