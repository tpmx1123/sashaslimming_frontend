import React from 'react'
import BookModel from '../BookModel'
import WhatIsInchLoss from './what-is-inchlos'
import Benefits from './benefits'
import WhoFor from './whoFor'
import BeforeAfter from './beforeafter'
import Faqsection from './faqsection'
import { motion } from 'framer-motion'
import SEO from '../SEO'
const InchLoss = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false)
  
  const backgroundImageUrl = "https://res.cloudinary.com/di4caiech/image/upload/v1764131902/Redefine_Your_Body_The_Right_Way._1_nuaufr.png"

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <SEO 
        title="Inch Loss Treatment - Targeted Body Reduction | Sasha Slimming"
        description="Effective inch loss treatments to reduce body measurements without surgery. Targeted reduction for waist, thighs, arms, and more. See visible results."
        keywords="inch loss, body measurement reduction, waist reduction, thigh reduction, non-surgical inch loss, body slimming"
        canonical="https://sashaslimming.com/inch-loss"
      />
      {/* MOBILE VIEW */}
      <div className="lg:hidden w-full relative overflow-x-hidden pt-20">
        <div className="relative w-full h-full">
          <img
            src="https://res.cloudinary.com/di4caiech/image/upload/v1764238928/Mask_group_2_wwi0gu.png"
            alt="Inch Loss"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#61338A]"></div>
        </div>

        <div className="bg-white pt-4 pb-12 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-poppins text-[#61338A] font-bold leading-tight">
                Inch Loss
              </h1>
            </div>

            <div className="mb-6 text-center">
              <p className="text-base text-gray-800 uppercase tracking-wide font-montserrat" style={{lineHeight: '1.8'}}>
                Redefine Your Shape. Lose Inches, Not Just Weight.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#61338A] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#7A4DAC] transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Book Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:block w-full min-h-screen relative overflow-hidden pt-20">
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
              <div className="lg:col-span-2 text-center lg:text-left mt-[-150px] ">
                {/* Main Headline */} 
                <div className="mb-4 md:mb-5">
                  
                  <h1 className="text-[14px] sm:text-[14px] md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-sasha-purple-deeper leading-tight font-poppins">
                    Inch Loss
                  </h1>
                </div>

                {/* Sub-headline */}
                <div className="mb-4 md:mb-6">
                <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-gray-800  uppercase tracking-wide font-montserra " style={{lineHeight: '1.8'}}>
                Redefine Your Shape. Lose <br/>Inches, Not Just Weight.
                  </p>
                  
                </div>

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
                    className="font-montserrat bg-[#61338A] hover:bg-[#7A4DAC] text-white font-semibold rounded-lg px-8 py-4 transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <span>Book Your Consultation Today</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </div>

              {/* Right Section - Image (1/3 width on desktop, hidden on mobile as it's in background) */}
              <div className="hidden lg:block lg:col-span-1">
                {/* The woman's image is part of the background image */}
                <div className="w-full h-full min-h-[500px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatIsInchLoss />
      <Benefits />
      <WhoFor />
      <BeforeAfter />
      <Faqsection />
      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}

export default InchLoss

