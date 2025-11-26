import React from 'react'
import { motion } from 'framer-motion'

const InchLoss = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
  const cards = [
    {
      id: 1,
      title: "Fat Loss:",
      description: "Target and reduce fat mass, especially from stubborn areas",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764051976/Frame_1984078422_mxpd57.png"
    },
    {
      id: 2,
      title: "Muscle Retention:",
      description: "Maintain lean mass for metabolism & tone",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764051976/Frame_1984078422_1_jprgb2.png"
    },
    {
      id: 3,
      title: "Inch Loss:",
      description: "Shrink specific areas like belly, arms, back, hips",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764051977/Frame_1984078422_2_fjwiex.png"
    },
    {
      id: 4,
      title: "Skin Tightening:",
      description: "Non-surgical RF and HIFU treatments for firm, smooth skin",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764051976/Frame_1984078422_3_gu9xia.png"
    }
  ]

  return (
    <motion.div 
      className="w-full py-1 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to right, #FFEEDD 0%, #C9B4C7 100%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-4 md:mb-6 font-poppins"
          variants={headingVariants}
        >
          Inch Loss
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-700 text-center mb-10 md:mb-12 font-poppins max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Weight loss alone can be misleading. At Sasha Slimming, we focus on:
        </motion.p>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image */}
              <div className="w-full h-40 md:h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-sasha-purple-deeper mb-2 md:mb-3 font-poppins">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-poppins">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default InchLoss

