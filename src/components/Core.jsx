import React from 'react'
import { motion } from 'framer-motion'
import fatReductionImg from '../../assets/Fat Reduction.svg'
import inchLossImg from '../../assets/Inch Loss.svg'
import muscleBuildingImg from '../../assets/Muscle Building & Toning.svg'
import skinTighteningImg from '../../assets/Skin Tightening.svg'
import surgicalBodyImg from '../../assets/Surgical Body Sculpting.svg'

const Core = () => {
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
  const treatments = [
    {
      id: 1,
      title: "Fat Reduction",
      description: "Clinically proven fat reduction therapies that eliminate stubborn fat without surgery or downtime.",
      image: fatReductionImg
    },
    {
      id: 2,
      title: "Inch Loss",
      description: "Targeted inch loss programs that redefine your body's natural contours through non-invasive technologies.",
      image: inchLossImg
    },
    {
      id: 3,
      title: "Muscle Building & Toning",
      description: "Strengthen and sculpt your body using advanced EMS and physiotherapist guided toning.",
      image: muscleBuildingImg
    },
    {
        id: 4,
        title: "Surgical Body Sculpting",
        description: "For lasting results, our board-certified cosmetic surgeon delivers precision-driven surgical contouring.",
        image: surgicalBodyImg
    },
    {
      id: 5,
      title: "Skin Tightening",
      description: "Rebuild collagen, restore elasticity, and achieve firmer, smoother skin.",
      image: skinTighteningImg
    },
    
  ]

  return (
    <motion.div 
      className="w-full bg-white py-10 lg:py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: A Scientific Approach to Slimming */}
        <motion.div className="text-center mb-16 lg:mb-20" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-regular text-[#22222A] mb-6"
            variants={headingVariants}
          >
            A Scientific Approach to Slimming
          </motion.h2>
          <motion.div 
            className="max-w-[1010px] mx-auto"
            variants={itemVariants}
          >
            <p className="text-base md:text-[22px] text-[#392D44] leading-relaxed font-regular">
              At <span className="font-bold">Sasha Luxe</span>, we believe slimming isn't a trend it's precision science. Our philosophy combines medical evidence, <span className="font-bold">aesthetic expertise</span>, and human-centered care to deliver transformations that respect your body's biology. Every plan is data-driven, doctor-supervised, and tailored to your body composition ensuring visible, measurable, and sustainable outcomes.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 2: Our Core Treatments */}
        <motion.div className="text-center mb-12 lg:mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-regular text-[#22222A] mb-12 lg:mb-16"
            variants={headingVariants}
          >
            Our Core Treatments
          </motion.h2>

          {/* Treatment Cards Grid */}
          <div>
            {/* First 3 cards in a row */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-6 lg:mb-8"
              variants={containerVariants}
            >
              {treatments.slice(0, 3).map((treatment) => (
                <motion.div
                  key={treatment.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border overflow-hidden h-full"
                  style={{ 
                    borderWidth: '1px', 
                    borderColor: 'rgba(100, 29, 201, 0.15)'
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Image */}
                  <div className="w-full h-[280px] overflow-hidden flex-shrink-0">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="px-6 py-6 lg:px-8 lg:py-8 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-regular text-[#392D44] mb-3 text-left">
                      {treatment.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#392D44] text-sm md:text-base leading-relaxed mb-4 flex-grow text-left">
                      {treatment.description}
                    </p>

                    {/* Learn More Link */}
                    <a
                      href="#"
                      className="text-[#22222A] text-sm md:text-base font-medium hover:text-[#B886E8] transition-colors text-left inline-block mt-auto"
                    >
                      Learn More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Last 2 cards centered */}
            <motion.div 
              className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {treatments.slice(3).map((treatment) => (
                <motion.div
                  key={treatment.id}
                  className="w-full md:w-[calc(50%-1.5rem)] md:max-w-md lg:w-[calc(33.333%-1.5rem)]"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border overflow-hidden h-full"
                    style={{ 
                      borderWidth: '1px', 
                      borderColor: 'rgba(100, 29, 201, 0.15)'
                    }}
                  >
                    {/* Image */}
                    <div className="w-full h-[280px] overflow-hidden flex-shrink-0">
                      <img 
                        src={treatment.image} 
                        alt={treatment.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="px-6 py-6 lg:px-8 lg:py-8 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-regular text-[#392D44] mb-3 text-left">
                        {treatment.title}
                      </h3>
                      <p className="text-[#392D44] text-sm md:text-base leading-relaxed mb-4 flex-grow text-left">
                        {treatment.description}
                      </p>
                      <a
                        href="#"
                        className="text-[#22222A] text-sm md:text-base font-medium hover:text-[#B886E8] transition-colors text-left inline-block mt-auto"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Core

