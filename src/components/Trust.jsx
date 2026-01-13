import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle } from 'lucide-react'

const Trust = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #111827 0%, #0ea5e9 50%, #111827 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
            }}
            animate={{
              backgroundPosition: ['0% center', '200% center', '0% center'],
            }}
            transition={{
              opacity: { duration: 0.7 },
              y: { duration: 0.7 },
              backgroundPosition: {
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            WE CARRY YOUR TRUST
          </motion.h2>
          <motion.h3 
            className="text-2xl lg:text-3xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: 'rgba(14, 165, 233, 1)',
            }}
            animate={{
              textShadow: [
                '0 0 10px rgba(14, 165, 233, 0.3)',
                '0 0 20px rgba(14, 165, 233, 0.6)',
                '0 0 10px rgba(14, 165, 233, 0.3)',
              ],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              y: { duration: 0.6, delay: 0.2 },
              textShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            WITH A GLOBAL NETWORK AND ADVANCED LOGISTICS SOLUTIONS.
          </motion.h3>
        </motion.div>

        {/* Certified Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h4 
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              WE ARE
            </motion.h4>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #111827 0%, #0ea5e9 50%, #111827 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center', '0% center'],
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.1 },
                y: { duration: 0.7, delay: 0.1 },
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              CERTIFIED
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our certifications and accreditations demonstrate our commitment to maintaining the highest standards in international shipping and logistics.
            </motion.p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Shield, label: 'ISO Certified' },
                { icon: Award, label: 'Industry Awards' },
                { icon: CheckCircle, label: 'Quality Assured' },
                { icon: Shield, label: 'Fully Insured' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85, y: 20, rotateX: -15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -12, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-primary-50 via-white to-primary-50 p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary-100 hover:border-primary-400 group relative overflow-hidden cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.7 }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.2), transparent)',
                      height: '100%',
                    }}
                  />
                  
                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-primary-600/30 opacity-0 group-hover:opacity-100 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                      y: -5
                    }}
                    transition={{ 
                      duration: 0.6,
                      rotate: { duration: 0.8 }
                    }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="text-white" size={28} />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.h4 
                    className="font-bold text-gray-900 relative z-10 group-hover:text-primary-700 transition-colors duration-500 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
                    whileHover={{ x: 3 }}
                  >
                    {item.label}
                  </motion.h4>
                  
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-primary-300/0 group-hover:border-primary-400/60"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(14, 165, 233, 0)',
                        '0 0 20px rgba(14, 165, 233, 0.4)',
                        '0 0 0px rgba(14, 165, 233, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/images/image44.png" 
                alt="Certified Excellence" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ filter: 'brightness(1.05) contrast(1.1)' }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                whileHover={{ opacity: 0.9 }}
              />
              <div className="absolute inset-0 flex items-end justify-center pb-8 z-10">
                <motion.div 
                  className="text-center text-white p-8"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h3 
                    className="text-3xl font-bold mb-4 drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)',
                        '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)',
                      ],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.2 },
                      scale: { duration: 0.6, delay: 0.2 },
                      textShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    Certified Excellence
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 text-lg drop-shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Trusted by businesses worldwide
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 border-4 border-primary-400/50 rounded-2xl"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(14, 165, 233, 0.4)',
                    '0 0 60px rgba(14, 165, 233, 0.6)',
                    '0 0 30px rgba(14, 165, 233, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Trust
