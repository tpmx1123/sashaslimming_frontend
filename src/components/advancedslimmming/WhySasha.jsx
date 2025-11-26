import React from 'react'
import { motion } from 'framer-motion'

const WhySasha = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
  const features = [
    {
      id: 1,
      title: "Doctor-led Programs",
      description: "Your plan is created by a team of medical experts.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053030/medical-assistance_1_1_fjmy2x.png"
    },
    {
      id: 2,
      title: "100% Non-Surgical",
      description: "No cuts, no downtime just science-backed fat reduction.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053030/surgery_1_1_1_gjjij2.png"
    },
    {
      id: 3,
      title: "Tailored to YOU",
      description: "Your lifestyle, your hormones, your goals fully customized.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053030/customer_1_1_v5jipo.png"
    },
    {
      id: 4,
      title: "Visible Results in Weeks",
      description: "Track progress with advanced BCA and expert monitoring.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053030/clipboard_1_1_oolvvc.png"
    }
  ]

  return (
    <motion.div 
      className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-4 md:mb-6 font-poppins"
          variants={headingVariants}
        >
          Why Sasha Slimming Works
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-800 text-center mb-10 md:mb-12 font-poppins max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Because your body deserves a real plan not quick fixes.
        </motion.p>

        {/* Features Grid - 2x2 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-purple-50 rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 flex items-start gap-4 md:gap-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-sasha-purple-deeper mb-2 md:mb-3 font-poppins">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-poppins">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WhySasha

