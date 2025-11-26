import React, { useState } from "react";
import { motion } from "framer-motion";
import BookModel from "../BookModel";
const LifeGlow="https://res.cloudinary.com/di4caiech/image/upload/v1764065720/Frame_1984078438_1_bkecun.png"
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

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
};

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
};

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
};

export default function BookYourAssessmentToday() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="-mt-4 py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <motion.div 
          className="relative overflow-hidden w-full h-[200px] sm:h-[280px] md:h-[380px] lg:h-[400px]"
          style={{
            backgroundImage: `url(${LifeGlow})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            borderRadius: '20px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Content Overlay */}
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-12 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-0 sm:ml-4 md:ml-8 lg:ml-14 -mt-0 sm:-mt-2 md:-mt-3 pr-2 sm:pr-4 md:pr-0">
              
              <motion.p 
                className="text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-[14px] sm:text-xl md:text-2xl lg:text-3xl xl:text-[45px] w-full sm:w-[250px] md:w-[350px] lg:w-[520px] font-poppins font-bold leading-tight sm:leading-snug md:leading-normal" 
                style={{letterSpacing: '0.5px', lineHeight: '1.3'}}
                variants={textVariants}
              >
                Ready to Begin<br className="hidden sm:block" /> 
                Your Transformation
              </motion.p>
              <motion.button 
                className="bg-[#FCC17F] text-[#0267AC] font-bold rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg text-[10px] sm:text-sm md:text-base lg:text-xl xl:text-[25px] px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-[18px] whitespace-nowrap"
                style={{letterSpacing: '0.5px'}}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
              >
                Book Your Assessment Today
              </motion.button>
            </div>

            {/* Right Side - Image (will be handled by background) */}
            <div className="hidden sm:block w-0 sm:w-1/3 md:w-2/5 lg:w-1/3"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Booking Modal */}
      <BookModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}