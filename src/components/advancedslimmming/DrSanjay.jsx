import React from 'react'
import { motion } from 'framer-motion'

const DrSanjay = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div 
      className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-6 md:mb-8 lg:mb-10 font-poppins"
          variants={headingVariants}
        >
          Start Your Custom Plan Now
        </motion.h2>

        {/* Image Card */}
        <motion.div 
          className="rounded-2xl md:rounded-3xl overflow-hidden "
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="https://res.cloudinary.com/di4caiech/image/upload/v1764061793/Dr._Sanjay_Shakamuri_2_qe3pzj.png"
            alt="Dr. Sanjay Shakamuri"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DrSanjay

