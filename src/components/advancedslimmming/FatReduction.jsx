import React from 'react'
import { motion } from 'framer-motion'

const FatReduction = () => {
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
  const services = [
    {
      id: 1,
      title: "Cryotherapy:",
      description: "Freezes and eliminates stubborn fat cells without surgery or downtime.",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764050362/Group_1171287214_2_taoasm.png"
    },
    {
      id: 2,
      title: "Injection Lipolysis:",
      description: "Fat-dissolving injections that target localized fat pockets like belly, thighs, and arms.",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764050517/Group_1171287213_1_lew1la.png"
    },
    {
      id: 3,
      title: "Weight Loss Injections & Supplements:",
      description: "Medical solutions to boost metabolism, curb cravings, and support fat loss.",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764050516/Group_1171287212_1_onefci.png"
    },
    {
      id: 4,
      title: "Fat Disintegration System:",
      description: "Deep-heat wraps that break down fat and reduce inches from problem areas.",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764050516/Group_1171287215_1_cptc7b.png"
    },
    {
      id: 5,
      title: "Steam Therapy:",
      description: "Detoxifies the body and aids in reducing water retention and bloating.",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764050515/Group_1171287216_1_kzmlnp.png"
    }
  ]

  return (
    <motion.div 
      className="w-full bg-purple-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-12 md:mb-16 font-poppins"
          variants={headingVariants}
        >
          Fat Reduction
        </motion.h2>

        {/* Services Grid */}
        <div className="space-y-12 md:space-y-16">
          {/* First Row - 3 items */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            variants={containerVariants}
          >
            {services.slice(0, 3).map((service) => (
              <motion.div 
                key={service.id} 
                className="flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Circular Image */}
                <div className="mb-4 md:mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-sasha-purple-deeper mb-3 md:mb-4 font-poppins">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-poppins max-w-xs">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 items, centered */}
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-4xl"
              variants={containerVariants}
            >
              {services.slice(3, 5).map((service) => (
                <motion.div 
                  key={service.id} 
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Circular Image */}
                  <div className="mb-4 md:mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg border-4 border-white"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-sasha-purple-deeper mb-3 md:mb-4 font-poppins">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-poppins max-w-xs">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FatReduction

