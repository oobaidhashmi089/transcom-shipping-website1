import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Calendar, Container, Users, MapPin } from 'lucide-react'

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
    return () => unsubscribe()
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const Stats = () => {
  const stats = [
    {
      icon: Calendar,
      value: 10,
      suffix: '+',
      label: 'Years of Experience',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Container,
      value: 1500,
      suffix: '',
      label: 'Num Of Own TEUS',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Hardworking People',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: MapPin,
      value: 50,
      suffix: '+',
      label: 'Our Services Ports',
      color: 'from-orange-500 to-orange-700',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)',
                '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
                '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2)',
              ],
            }}
            transition={{
              opacity: { duration: 0.7 },
              y: { duration: 0.7 },
              textShadow: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            Our Achievements
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Numbers that reflect our commitment to excellence
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border-2 border-white/20 hover:border-white/50 hover:bg-white/15 transition-all duration-500 relative overflow-hidden group cursor-pointer"
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    height: '100%',
                  }}
                />

                {/* Enhanced Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-25 blur-3xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 40px rgba(255,255,255,0.2)',
                      '0 0 80px rgba(255,255,255,0.4)',
                      '0 0 40px rgba(255,255,255,0.2)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Icon Container with Enhanced Animation */}
                <motion.div 
                  className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl relative z-10`}
                  whileHover={{ 
                    scale: 1.4, 
                    rotate: [0, 10, -10, 10, 0],
                    boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 30px rgba(255,255,255,0.4)`,
                      `0 0 60px rgba(255,255,255,0.6)`,
                      `0 0 30px rgba(255,255,255,0.4)`,
                    ],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    scale: { duration: 0.4 },
                    rotate: { duration: 0.8 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-white" size={44} />
                  </motion.div>
                </motion.div>
                
                <div className="mb-6 relative z-10">
                  <motion.span 
                    className="text-5xl lg:text-6xl font-black text-white block drop-shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-lg font-semibold text-white/95 relative z-10 drop-shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  {stat.label}
                </motion.h3>
                
                {/* Enhanced Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-white/30"
                  animate={{
                    borderColor: [
                      'rgba(255,255,255,0.3)',
                      'rgba(255,255,255,0.7)',
                      'rgba(255,255,255,0.3)',
                    ],
                    boxShadow: [
                      '0 0 20px rgba(255,255,255,0.1)',
                      '0 0 40px rgba(255,255,255,0.3)',
                      '0 0 20px rgba(255,255,255,0.1)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Floating Particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                    style={{
                      top: `${15 + i * 25}%`,
                      left: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
