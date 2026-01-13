import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const Map = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-primary-600" size={32} />
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #0284c7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center', '0% center'],
              }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              Find Us
            </motion.h2>
          </div>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Visit our offices around the world
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-200/50 hover:border-primary-400/70 transition-all duration-300 relative group"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-primary-400/20 opacity-0 group-hover:opacity-100 blur-2xl -z-10"
            transition={{ duration: 0.3 }}
          />
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8!2d67.0285!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8e8e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sSharah-e-Faisal%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Transcom International Shipping & Logistics - Office Locations"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Office Locations Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { name: 'Pakistan', city: 'Karachi' },
            { name: 'UAE', city: 'Dubai' },
            { name: 'Malaysia', city: 'Klang' },
            { name: 'UK', city: 'Glasgow' },
          ].map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5 + index * 0.08, 
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
              className="bg-gradient-to-br from-white via-primary-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary-100 hover:border-primary-400 group relative overflow-hidden cursor-pointer"
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
                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 blur-xl"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Icon Container */}
              <motion.div
                className="relative z-10 mb-3"
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -10, 10, -10, 0],
                  y: -5
                }}
                transition={{ 
                  duration: 0.6,
                  rotate: { duration: 0.8 }
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 mx-auto">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="text-white" size={22} />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.h4 
                className="font-bold text-gray-900 relative z-10 group-hover:text-primary-700 transition-colors duration-500 text-center mb-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.08 + 0.2, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {location.name}
              </motion.h4>
              <motion.p 
                className="text-sm text-gray-600 relative z-10 group-hover:text-gray-800 transition-colors duration-500 text-center font-medium"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.08 + 0.3, duration: 0.5 }}
              >
                {location.city}
              </motion.p>
              
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
        </motion.div>
      </div>
    </section>
  )
}

export default Map
