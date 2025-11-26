import React from 'react'
import { motion } from 'framer-motion'
import BookModel from '../BookModel'
import WhatIsST from './what_is_ST'
import Benefits from './benefits'
import WhoFor from './whoFor'
import ExpectBeforeAfter from './expectBeforAfter'
import Faqsection from './faqsection'
import LifeGlow from './lifeGlow'

const SkinTightening = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false)
  
  const backgroundImageUrl = "https://res.cloudinary.com/di4caiech/image/upload/v1764045889/Redefine_Your_Body_The_Right_Way._r0nyei.jpg"

  return (
    <div className="w-full min-h-screen relative overflow-hidden pt-24">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[180px] md:h-[400px] lg:h-[500px] xl:min-h-[600px] overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 "></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 md:px-8 lg:px-28 py-1 md:py-8 lg:py-20 h-full flex items-center">
          <div className="flex items-center justify-between w-full h-full">
            {/* Left Section - Text Content */}
            <motion.div 
              className="flex-1 ml-1 md:ml-8 lg:ml-14 -mt-1 md:-mt-2 lg:-mt-3 pr-2 md:pr-4 lg:pr-0 text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="mb-1 md:mb-3 lg:mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="font-montserrat text-[14px] md:text-3xl lg:text-5xl xl:text-6xl font-bold text-[#61338A] leading-tight">
                  Skin Tightening
                </h1>
              </motion.div>

              {/* Sub-headline */}
              <motion.div 
                className="mb-1 md:mb-3 lg:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <p className="font-poppins text-[6px] md:text-sm lg:text-lg xl:text-xl text-gray-800 font-normal leading-relaxed uppercase tracking-wide" style={{letterSpacing: '0.5px', lineHeight: '1.8'}}>
                  LIFT, FIRM, AND SMOOTH REVEAL YOUR<br className="hidden md:block"/>
                  MOST RADIANT SKIN YET.
                </p>
              </motion.div>

              {/* Call to Action Button */}
              <motion.div 
                className="flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="font-montserrat bg-[#61338A] hover:bg-[#61338A] text-[#FCC17F] font-semibold rounded-full text-[7px] md:text-sm lg:text-base xl:text-lg px-2 py-1 md:px-5 md:py-2.5 lg:px-8 lg:py-4 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  style={{letterSpacing: '0.5px'}}
                >
                  Book Your Consultation Today
                </button>
              </motion.div>
            </motion.div>

            {/* Right Section - Image (1/3 width on desktop, hidden on mobile as it's in background) */}
            <div className="hidden lg:block w-1/3">
              {/* The woman's image is part of the background image */}
              <div className="w-full h-full min-h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      
      {/* What Is Skin Tightening Section */}
      <WhatIsST />
      
      {/* Benefits Section */}
      <Benefits />
      
      {/* Who It's For Section */}
      <WhoFor />
      
      {/* What to Expect & Before/After Section */}
      <ExpectBeforeAfter />

      {/* FAQ Section */}
      <Faqsection />
      {/* Lift & Glow From Within Section */}
      <LifeGlow />
    </div>
  )
}

export default SkinTightening