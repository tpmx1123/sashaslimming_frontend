import React from 'react'
import { motion } from 'framer-motion'

const SkinTightening = () => {
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
      className="w-full  py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
        
        {/* Skin Tightening Section */}
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-10 md:mb-12 font-poppins"
            variants={headingVariants}
          >
            Skin Tightening
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
            variants={itemVariants}
          >
            {/* Left Side - Image */}
            <motion.div 
              className="order-2 lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/di4caiech/image/upload/v1764051285/Frame_1984078414_1_ma50p1.png"
                alt="Radio Frequency Therapy Procedure"
                className="w-full h-auto rounded-2xl  object-contain"
              />
            </motion.div>
            
            {/* Right Side - Services */}
            <motion.div className="order-1 lg:order-2 space-y-6 md:space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-poppins">
                  Radio Frequency Therapy:
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                  Stimulates collagen production for firmer, tighter, and more youthful-looking skin.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-poppins">
                  G10 (Vibration Therapy):
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                  Enhances circulation and skin tone while helping reduce cellulite.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Muscle Building & Toning Section */}
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sasha-purple-deeper text-center mb-10 md:mb-12 font-poppins"
            variants={headingVariants}
          >
            Muscle Building & Toning
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
            variants={itemVariants}
          >
            {/* Left Side - Image */}
            <motion.div 
              className="order-2 lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/di4caiech/image/upload/v1764051285/Frame_1984078415_1_iaefl4.png"
                alt="Electrical Muscle Stimulator"
                className="w-full h-auto rounded-2xl  object-cover bg-white p-4"
              />
            </motion.div>
            
            {/* Right Side - Service */}
            <motion.div className="order-1 lg:order-2" variants={itemVariants}>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-poppins">
                Electrical Muscle Stimulator:
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                Activates muscles through electrical pulses to tone and strengthen without physical effort.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Physio-Supervised Muscle Building Exercises Section */}
        <motion.div variants={itemVariants}>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
            variants={itemVariants}
          >
            {/* Left Side - Text */}
            <motion.div className="order-2 lg:order-1" variants={itemVariants}>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-poppins">
                Physio-Supervised Muscle Building Exercises:
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                Customized strength sessions guided by a physiotherapist to tone and shape your body.
              </p>
            </motion.div>
            
            {/* Right Side - Image */}
            <motion.div 
              className="order-1 lg:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/di4caiech/image/upload/v1764051285/Frame_1984078439_1_hsiilf.png"
                alt="Physio-Supervised Exercise"
                className="w-full h-auto rounded-2xl  object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default SkinTightening

