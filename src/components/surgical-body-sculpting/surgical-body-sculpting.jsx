import React from 'react'
import BookModel from '../BookModel'
import WhatIsSurgicalBodySculpting from './WhatIsSurgicalBodySculpting'
import Benefits from './benefits'
import { motion } from 'framer-motion'
import WhoExpect from './WhoExpect'
import FaqSection from './faqsection'
import BookYourAssessmentToday from './BookYourAssessmentToday'
const SurgicalBodySculpting = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false)
  
  const backgroundImageUrl = "https://res.cloudinary.com/di4caiech/image/upload/v1764147587/Redefine_Your_Body_The_Right_Way._3_nruosb.png"

  return (
    <div className="w-full min-h-screen relative overflow-hidden pt-20">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 "></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-10 lg:px-2 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center h-96 ">
            {/* Left Section - Text Content (2/3 width on desktop) */}
            <motion.div 
              className="lg:col-span-2 text-center lg:text-left mt-[-150px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Main Headline */} 
              <motion.div 
                className="mb-4 md:mb-5"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="text-[14px] sm:text-[14px] md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-sasha-purple-deeper leading-tight font-poppins">
                  Surgical Body Sculpting
                </h1>
              </motion.div>

              {/* Sub-headline */}
              <motion.div 
                className="mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <p className="text-xs sm:text-lg md:text-lg  lg:text-xl text-gray-800  uppercase tracking-wide font-montserra " style={{lineHeight: '1.8'}}>
                Achieve Dramatic, Lasting Results with Expert Cosmetic Surgery.
                </p>
                
              </motion.div>

              {/* Call to Action Button */}
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
            <div className="hidden lg:block lg:col-span-1">
              {/* The woman's image is part of the background image */}
              <div className="w-full h-full min-h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>

      <WhatIsSurgicalBodySculpting />
      <Benefits />
      <WhoExpect />
      <FaqSection />
      <BookYourAssessmentToday />
      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}

export default SurgicalBodySculpting

