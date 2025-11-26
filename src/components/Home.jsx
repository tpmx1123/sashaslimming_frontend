import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/Banner.svg';

const Home = () => {
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

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
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

  return (
    <motion.div
      className="w-full relative pt-24 md:pt-24 bg-no-repeat bg-right lg:bg-contain overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage})`,
        minHeight: '750px',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background overlay for better text readability on small screens */}
      <div className="absolute inset-0 bg-white/80 lg:bg-transparent z-1"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
          {/* Left Section (Text + Buttons) */}
          <div className="lg:col-span-3 text-center sm:text-left">
            {/* Heading */}
            <motion.div className="mb-6" variants={headingVariants}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Be-Vietnam leading-tight mb-1 text-[#22222A]">
                Where Medical Science
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Be-Vietnam leading-tight">
                Meets <span className="text-[#61338A]">Aesthetic Precision</span>
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.div 
              className="text-[#22222A] text-sm sm:text-base md:text-lg leading-relaxed font-Be-Vietnam mb-8"
              variants={textVariants}
            >
              <p>Non-surgical body contouring, fat reduction, and muscle</p>
              <p>toning backed by clinical innovation and luxury experience.</p>
              <p>Designed to refine your silhouette—without compromising</p>
              <p>your lifestyle.</p>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
              variants={containerVariants}
            >
              {/* Button 1 */}
              <motion.button 
                className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] text-white font-semibold px-8 py-3 rounded-lg hover:from-[#9A5DDC] hover:to-[#7A4DAC] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Body Analysis
              </motion.button>

              {/* Button 2 */}
              <motion.button 
                className="border-2 border-[#8A4DCC] text-[#8A4DCC] font-semibold px-8 py-3 rounded-lg hover:bg-[#8A4DCC] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                9848400009
              </motion.button>
            </motion.div>
          </div>

        
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
