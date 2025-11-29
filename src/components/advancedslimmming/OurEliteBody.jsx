import React from 'react'
import { motion } from 'framer-motion'

const OurEliteBody = () => {
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
    hidden: { opacity: 0, y: 20 },
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
        duration: 0.5,
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
      <div className="max-w-5xl mx-auto">
        {/* Section 1 - First Paragraph */}
        <motion.div className="mb-6 md:mb-8" variants={itemVariants}>
          <p className="text-base md:text-lg lg:text-xl text-gray-700  font-poppins leading-loose" style={{lineHeight: '1.8'}}>
            At <span className="font-bold">Sasha Luxe</span>, we blend medical precision with aesthetic vision. Whether you're struggling with belly fat, water retention, or stubborn inches that won't go, our <span className="font-bold">non-surgical fat loss programs</span> help you shed fat, sculpt your shape, and feel your best.
          </p>
        </motion.div>

        {/* Section 2 - Second Paragraph */}
        <motion.div className="mb-8 md:mb-10" variants={itemVariants}>
          <p className="text-base md:text-lg lg:text-xl text-gray-700  font-poppins" style={{lineHeight: '1.8'}}>
            With expert-led protocols and the latest FDA-cleared technology, we deliver visible, measurable, and sustainable results with zero surgery, zero downtime.
          </p>
        </motion.div>

        {/* Section 3 - Heading and Tagline */}
        <motion.div variants={headingVariants}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sasha-purple-deeper mb-4 md:mb-6 font-montserrat text-center">
            Our Elite Body Transformation Suite:
          </h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-poppins text-center"
            variants={itemVariants}
          >
            <span className="font-bold">Sculpt. Slim. Strengthen.</span> Expert care. Proven technologies. Real results.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurEliteBody

