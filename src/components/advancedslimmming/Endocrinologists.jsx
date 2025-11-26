import React from 'react'
import { motion } from 'framer-motion'

const Endocrinologists = () => {
  const beforeAfterImages = [
    {
      id: 1,
      beforeAfter: "https://res.cloudinary.com/di4caiech/image/upload/v1764063412/Frame_1984078436_2_vqhk0p.png"
    },
    {
      id: 2,
      beforeAfter: "https://res.cloudinary.com/di4caiech/image/upload/v1764063412/Frame_1984078437_2_cswcvy.png"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

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

  return (
    <motion.div 
      className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-4 md:mb-6 font-montserrat"
          variants={headingVariants}
        >
          Endocrinologists & Wellness Coaches
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-700 text-center mb-8 md:mb-10 font-poppins max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Specialists in hormonal health and long-term weight management.
        </motion.p>

        {/* Section Title */}
        <motion.h3 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-8 md:mb-12 font-montserrat"
          variants={headingVariants}
        >
          Before & after
        </motion.h3>

        {/* Before & After Images Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
        >
          {beforeAfterImages.map((item) => (
            <motion.div 
              key={item.id} 
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={item.beforeAfter}
                alt={`Before & After ${item.id}`}
                className="w-full h-auto max-h-96 rounded-xl shadow-md object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Endocrinologists

