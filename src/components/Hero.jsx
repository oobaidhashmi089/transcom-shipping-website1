import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const images = [
    '/images/image11.png',
    '/images/a050985d96.jpg',
    '/images/2db0d800f6.jpg',
    '/images/slideimage3.png',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState({})

  // Preload all images to ensure they're sharp
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }))
      }
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
    >

      {/* Hero Banner Image - Responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] relative flex items-center justify-center overflow-hidden mt-16 sm:mt-20"
        style={{
          minHeight: '500px',
        }}
      >
        {/* Animated Background Overlay - Enhanced */}
        <div className="absolute inset-0 z-10">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-600/20 to-primary-900/50"
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Radial Gradient Pulse */}
          <motion.div
            className="absolute inset-0 bg-radial-gradient from-primary-400/30 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Enhanced Floating Particles Effect */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
                background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
              initial={{
                x: Math.random() * 100 + '%',
                y: '100%',
                opacity: 0,
              }}
              animate={{
                y: ['100%', '-10%'],
                x: [null, (Math.random() - 0.5) * 20 + '%'],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1.2, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Light Rays Effect */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-white/40 to-transparent"
              style={{
                height: '150%',
                left: `${20 + i * 20}%`,
                top: '-25%',
                transform: `rotate(${-30 + i * 15}deg)`,
                transformOrigin: 'bottom center',
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Enhanced Shimmer Effect */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            width: '200%',
            height: '200%',
            transform: 'rotate(45deg)',
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
        />

        {/* Ripple Effect */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-white/30 rounded-full"
              style={{
                width: '200px',
                height: '200px',
              }}
              animate={{
                scale: [0, 4],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Image Slider with Auto-Change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full relative z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={images[currentIndex]} 
              alt="Reliable Cargo Partner - Transcom International Shipping & Logistics" 
              className="w-full h-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
              }}
              exit={{ 
                opacity: 0,
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                filter: 'brightness(1.1) contrast(1.15) saturate(1.15)',
                minHeight: '100%',
                minWidth: '100%',
                imageRendering: 'auto',
                WebkitImageRendering: 'auto',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'opacity',
              }}
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 sm:w-8 bg-white shadow-lg' 
                  : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Multi-layer Animated Border Glow */}
        <motion.div
          className="absolute inset-0 z-10 border-4 border-primary-400/40"
          animate={{
            boxShadow: [
              '0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2)',
              '0 0 50px rgba(14, 165, 233, 0.6), 0 0 100px rgba(14, 165, 233, 0.3)',
              '0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 z-10 border-2 border-white/20"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Enhanced Gradient Overlay for Depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
        
        {/* Corner Glow Effects */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl z-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl z-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut',
          }}
        />
        
        {/* CTA Button Overlay - Responsive */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-30 px-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 bg-primary-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-full shadow-2xl hover:bg-primary-700 transition-all duration-300 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Explore Our Services</span>
              <span className="sm:hidden">Explore</span>
              <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 md:h-3 bg-primary-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
