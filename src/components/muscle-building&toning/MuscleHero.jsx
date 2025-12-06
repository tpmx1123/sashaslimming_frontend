import React from 'react'
import { motion } from 'framer-motion'
import WhatIsMB from './WhatIsMB'
import BenefitsMB from './BenefitsFR'
import BookModel from '../BookModel'
import WhoExpectMB from './WhoExpect'
import FAQMB from './FAQMB'
import BookYourAssessmentToday from './BookYourAssessmentToday'
import SEO from '../SEO'
//import Ready from './ready'

const MuscleHero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false)
  
  const backgroundImageUrl = "https://res.cloudinary.com/di4caiech/image/upload/v1764147269/Redefine_Your_Body_The_Right_Way._2_k5zlii.png"

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <SEO 
        title="Muscle Building & Toning - Body Sculpting & Strength Training | Sasha Slimming"
        description="Advanced muscle building and toning treatments for defined, sculpted physique. Non-surgical solutions for muscle enhancement and body definition."
        keywords="muscle building, muscle toning, body sculpting, muscle definition, strength training, body toning, muscle enhancement"
        canonical="https://sashaslimming.com/muscle-building-toning"
      />
      {/* MOBILE VIEW */}
      <div className="lg:hidden w-full relative overflow-x-hidden pt-20">
        <div className="relative w-full h-full">
          <img
            src="https://res.cloudinary.com/di4caiech/image/upload/v1764238927/Mask_group_5_icqyel.png"
            alt="Muscle Building & Toning"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#61338A]"></div>
        </div>

        <div className="bg-white pt-4 pb-12 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-poppins text-[#61338A] font-bold leading-tight">
                Muscle Building & Toning
              </h1>
            </div>

            <div className="mb-6 text-center">
              <p className="text-base text-gray-800 uppercase tracking-wide font-montserrat" style={{lineHeight: '1.8'}}>
                Sculpt, Strengthen & Define With or Without the Gym.
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
      <div className="hidden lg:block w-full min-h-screen relative overflow-hidden pt-24">
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
              <motion.div 
              className="flex-1 ml-1 md:ml-8 lg:ml-4 -mt-1 md:-mt-2 lg:-mt-3 pr-2 md:pr-4 lg:pr-0 text-center md:text-left"
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
                <h1 className="font-montserrat text-[14px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#61338A] leading-tight">
                    Muscle Building & Toning
                  </h1>
                </motion.div>

                <motion.div 
                  className="mb-1 md:mb-3 lg:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <p className="font-poppins text-[6px] md:text-sm lg:text-lg xl:text-xl text-gray-800 font-normal leading-relaxed uppercase tracking-wide" style={{letterSpacing: '0.5px', lineHeight: '1.8'}}>
                  Sculpt, Strengthen & Define With or Without<br />
the Gym.
                  </p>
                </motion.div>

                <motion.div 
                  className="flex justify-center md:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-[#61338A] hover:bg-[#7A4DAC] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <span>Book your Consultation Today</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>

              <div className="hidden lg:block w-1/3">
                <div className="w-full h-full min-h-[500px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      {/* what is Fat Reduction */}
      <WhatIsMB />
      {/* key Benefits */}
      <BenefitsMB />
      {/* Who Expects */}
      <WhoExpectMB />
      {/* Frequently asked questions */}
      <FAQMB />
      {/* Ready to redefine your body */}
      <BookYourAssessmentToday />
    </div>
  )
}
export default MuscleHero