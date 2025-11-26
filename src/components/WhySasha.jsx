import React from 'react'
import { motion } from 'framer-motion'
import doctorLedExpertiseImg from '../../assets/Doctor-Led Expertise.png'
import measurableResultsImg from '../../assets/Measurable Results.png'
import luxuryExperienceImg from '../../assets/Luxury Experience.png'
import evidenceBasedTreatmentsImg from '../../assets/Evidence-Based Treatments.png'
import customDesignedPlansImg from '../../assets/Custom-Designed Plans.png'
import ongoingSupportImg from '../../assets/Ongoing Support.png'

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
      image: doctorLedExpertiseImg,
      title: 'Doctor-Led Expertise',
      description: 'Medically supervised treatments by certified aesthetic professionals'
    },
    {
      id: 2,
      image: evidenceBasedTreatmentsImg,
      title: 'Evidence-Based Treatments',
      description: 'Non-surgical, FDA-approved technologies with proven results'
    },
    {
      id: 3,
      image: measurableResultsImg,
      title: 'Measurable Results',
      description: 'Real, quantifiable inch loss and fat reduction outcomes'
    },
    {
      id: 4,
      image: customDesignedPlansImg,
      title: 'Custom-Designed Plans',
      description: 'Personalized programs tailored to your body composition'
    },
    {
      id: 5,
      image: luxuryExperienceImg,
      title: 'Luxury Experience',
      description: 'Refined, comfortable treatments in a premium setting'
    },
    {
      id: 6,
      image: ongoingSupportImg,
      title: 'Ongoing Support',
      description: 'Seamless post-care and maintenance programs'
    }
  ]

  return (
    <motion.div 
      className="w-full bg-white py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-[#22222A] mb-3">
            Why Clients Choose Sasha Luxe
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We combine clinical precision with a refined experience — because confidence deserves craftsmanship.
          </p>
        </motion.div>

        {/* Features Grid - 2 Columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-1 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="flex items-start gap-6 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image on Left */}
              <div className="flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </div>

              {/* Text Content on Right */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-regular text-[#22222A] mb-2">
                  {feature.title}
                  <div className="w-12 h-[2px] bg-[#61338A] mt-2"></div>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
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

