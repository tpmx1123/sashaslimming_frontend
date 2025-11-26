import React from 'react'
import { motion } from 'framer-motion'

const WeightLoss = () => {
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
  const steps = [
    {
      id: 1,
      title: "Medical Body Assessment",
      description: "Complete diagnostic check + BCA scan.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053812/Frame_1984078427_1_y5nzht.png"
    },
    {
      id: 2,
      title: "Tailored Treatment Plan",
      description: "Built around your goals, hormones, and metabolism.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053812/Frame_1984078428_1_bfzlae.png"
    },
    {
      id: 3,
      title: "Nutrition & Movement Coaching",
      description: "Daily support from certified nutritionists & physios.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053812/Frame_1984078429_1_uo3fcy.png"
    },
    {
      id: 4,
      title: "Measurable Progress",
      description: "Monthly reports, ongoing expert guidance.",
      icon: "https://res.cloudinary.com/di4caiech/image/upload/v1764053812/Frame_1984078430_1_ha9twv.png"
    }
  ]

  return (
    <motion.div 
      className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: '#FBF2E8' // Light beige/off-white background
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-10 md:mb-12 font-poppins"
          variants={headingVariants}
        >
          Our Personalized Weight Loss Journey
        </motion.h2>

        {/* Steps Cards - Vertical Stack */}
        <motion.div 
          className="space-y-4 md:space-y-6"
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 flex items-center gap-4 md:gap-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon with Circular Purple Background */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sasha-purple-deeper flex items-center justify-center p-3">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 font-poppins">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-poppins">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WeightLoss

