import React from 'react'
import { motion } from 'framer-motion'
import { Ship, Plane, Truck, Warehouse, Package, Globe, Shield, Clock } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Comprehensive ocean freight services connecting major ports worldwide with reliable and efficient shipping solutions.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and secure air freight services for time-sensitive shipments with global coverage and express delivery options.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Truck,
      title: 'Inland Transportation',
      description: 'Efficient inland transportation services ensuring seamless cargo movement from ports to final destinations.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Management',
      description: 'State-of-the-art warehouse facilities with advanced inventory management and distribution capabilities.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: Package,
      title: 'Customs Clearance',
      description: 'Expert customs clearance services ensuring smooth and compliant import/export processes worldwide.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive global network with offices in key locations providing local expertise and international reach.',
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: Shield,
      title: 'Cargo Insurance',
      description: 'Comprehensive cargo insurance solutions protecting your shipments throughout their journey.',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: Clock,
      title: 'Express Services',
      description: 'Priority express shipping services for urgent deliveries with guaranteed time-sensitive handling.',
      color: 'from-pink-500 to-pink-700',
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h4 
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR SERVICES
          </motion.h4>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              lineHeight: '1.2',
              paddingBottom: '0.2em',
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
            Comprehensive Logistics Solutions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer a complete range of shipping and logistics services to meet all your transportation needs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.85, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -20, 
                scale: 1.03, 
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-300/50 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  height: '100%',
                }}
              />

              {/* Animated Gradient Background on Hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                whileHover={{ scale: 1.1, rotate: 2 }}
              />
              
              {/* Animated Border Glow */}
              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30`}
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(14, 165, 233, 0)',
                    '0 0 30px rgba(14, 165, 233, 0.3)',
                    '0 0 0px rgba(14, 165, 233, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: [0, 10, -10, 10, 0],
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                  transition={{ 
                    duration: 0.6,
                    rotate: { duration: 0.8 }
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className={`text-white group-hover:text-primary-600 transition-colors duration-500`} size={36} />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 group-hover:text-white/95 transition-colors duration-500 leading-relaxed text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Animated Corner Accents */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:from-white/30 transition-all duration-500"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-200/20 to-transparent rounded-full -ml-16 -mb-16 group-hover:from-primary-300/40 transition-all duration-500"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.15, 0.4, 0.15],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 2,
                }}
              />

              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
