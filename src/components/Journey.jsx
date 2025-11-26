import React, { useState } from 'react'
import { motion } from 'framer-motion'
import beforeImage1 from '../../assets/before.png'
import afterImage1 from '../../assets/after.png'
import beforeImage2 from '../../assets/before.png'
import afterImage2 from '../../assets/after.png'
import BookModel from './BookModel'
import BeforeAfterSlider from './BeforeAfterSlider'

const Journey = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

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

  const stepVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Consultation',
      description: "A diagnostic body analysis and comprehensive goal assessment with our experts"
    },
    {
      id: 2,
      number: '02',
      title: 'Personalised Plan',
      description: "Tailored treatment strategy based on your body's composition, not just the scale"
    },
    {
      id: 3,
      number: '03',
      title: 'Treatment Phase',
      description: "Non-invasive, comfortable procedures that are clinically monitored throughout"
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Beyond',
      description: "Long-term body management and nutritional support for sustained results"
    }
  ]

  return (
    <motion.div 
      className="w-full bg-white py-12 lg:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Your Journey */}
        <motion.div className="mb-16 lg:mb-20" variants={itemVariants}>
          {/* Title */}
          <motion.div 
            className="text-center mb-8 lg:mb-12"
            variants={headingVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-[#22222A] mb-3">
              Your Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              From Analysis to Artistry
            </p>
          </motion.div>

          {/* Process Steps - Two Column Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10 lg:mb-12"
            variants={containerVariants}
          >
            {/* Left Column - Steps 01 and 02 */}
            <div className="flex flex-col gap-8 lg:gap-12 relative">
              {/* Vertical Line (connecting steps) */}
              <div className="absolute left-6 top-12 w-[2px] bg-[#F1E2FF] z-0" style={{ height: 'calc(70% - 3rem)' }}></div>
              
              {steps.slice(0, 2).map((step) => (
                <motion.div 
                  key={step.id} 
                  className="relative flex items-start"
                  variants={stepVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Purple Number Square */}
                  <div className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 relative z-10">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-regular text-[#22222A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Steps 03 and 04 */}
            <div className="flex flex-col gap-8 lg:gap-12 relative">
              {/* Vertical Line (connecting steps) */}
              <div className="absolute left-6 top-12 w-[2px] bg-[#F1E2FF] z-0" style={{ height: 'calc(70% - 3rem)' }}></div>
              
              {steps.slice(2, 4).map((step) => (
                <motion.div 
                  key={step.id} 
                  className="relative flex items-start"
                  variants={stepVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Purple Number Square */}
                  <div className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 relative z-10">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-regular text-[#22222A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Book Your Consultation Button */}
          <motion.div className="text-center" variants={buttonVariants}>
            <motion.button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] text-white font-semibold px-8 py-3 rounded-lg hover:from-[#7A1BD2] hover:to-[#B866E8] transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Section 2: Before & After */}
        <motion.div className="mt-20 lg:mt-24" variants={itemVariants}>
          {/* Title */}
          <motion.div 
            className="text-center mb-8 lg:mb-12"
            variants={headingVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-[#22222A] mb-3">
              Before & After
            </h2>
            <p className="text-base md:text-lg text-[#22222A] max-w-3xl mx-auto">
              Real transformations from our clients — because results speak louder than promises
            </p>
          </motion.div>

          {/* Image Comparison Sliders */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            {/* First Slider */}
            <motion.div 
              className="w-full max-w-sm mx-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BeforeAfterSlider 
                beforeImage={beforeImage1}
                afterImage={afterImage1}
                alt="Transformation 1"
              />
            </motion.div>

            {/* Second Slider */}
            <motion.div 
              className="w-full max-w-sm mx-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BeforeAfterSlider 
                beforeImage={beforeImage2}
                afterImage={afterImage2}
                alt="Transformation 2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </motion.div>
  )
}

export default Journey

