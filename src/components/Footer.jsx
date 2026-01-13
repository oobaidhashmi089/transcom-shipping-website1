import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Linkedin, Youtube, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const offices = [
    {
      country: 'PAKISTAN',
      company: 'TRANSCOM INTERNATIONAL SHIPPING & LOGISTICS PVT. LTD.',
      address: 'Suite # 205, Emarah Suites, Sharah-e-Faisal, Karachi, Pakistan.',
      email: 'info@transcomshipping.com',
      phone: '+92 21 34547944',
    },
    {
      country: 'UAE',
      company: 'TRANSCOM INTERNATIONAL SHIPPING & LOGISTICS LLC.',
      address: 'Office 418, Al Fahad 4 Building, Damascus Street, Al Qusais Industrial Area, Dubai, UAE.',
      email: 'uae@transcomshipping.com',
      phone: '+971 (04) 665 8899',
    },
    {
      country: 'MALAYSIA',
      company: 'TRANSCOM INTERNATIONAL SHIPPING & LOGISTICS SDN. BHD.',
      address: 'Suite 07-16, Level 7, Centro, No. 8 Jalan Batu Tiga Lama 41300 Klang, Selangor Darul Ehsan.',
      email: 'malaysia@transcomshipping.com',
      phone: '+60 3 3359 9949',
    },
    {
      country: 'UK',
      company: 'TRANSCOM INTERNATIONAL SHIPPING & LOGISTICS LTD.',
      address: '20-23 Woodside Pl, Glasgow G3 7QL, Regus Building, UK.',
      email: 'uk@transcomshipping.com',
      phone: '(+44) 0800 060 8704',
    },
  ]

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Youtube, url: '#', label: 'YouTube' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="/" className="flex items-center mb-4">
                <img 
                  src="/images/Transcom_logoimage .png" 
                  alt="Transcom International Shipping & Logistics" 
                  className="h-16 w-auto"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.p 
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.3)',
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 10px rgba(255,255,255,0.3)',
                  ],
                }}
                transition={{
                  textShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                Renting a shipping container is easier than ever
              </motion.p>
              <motion.p 
                className="text-white/90"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Transcom International Shipping & Logistics offers you the best freight experience you can find
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors"
              >
                <motion.h5 
                  className="text-lg font-bold text-primary-400 mb-4 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(14, 165, 233, 0.3)',
                      '0 0 20px rgba(14, 165, 233, 0.5)',
                      '0 0 10px rgba(14, 165, 233, 0.3)',
                    ],
                  }}
                  transition={{
                    textShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <MapPin size={20} />
                  {office.country}
                </motion.h5>
                <motion.p 
                  className="text-sm text-white/80 mb-4 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  {office.company}
                </motion.p>
                <motion.p 
                  className="text-sm text-white/70 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {office.address}
                </motion.p>
                <div className="space-y-2">
                  <p className="text-sm text-white/70 flex items-center gap-2">
                    <Mail size={16} className="text-primary-400" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary-400 transition-colors">
                      {office.email}
                    </a>
                  </p>
                  <p className="text-sm text-white/70 flex items-center gap-2">
                    <Phone size={16} className="text-primary-400" />
                    <a href={`tel:${office.phone}`} className="hover:text-primary-400 transition-colors">
                      {office.phone}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              Transcom International Shipping & Logistics © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-primary-700 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <span className="text-white text-2xl">↑</span>
      </motion.a>
    </footer>
  )
}

export default Footer
