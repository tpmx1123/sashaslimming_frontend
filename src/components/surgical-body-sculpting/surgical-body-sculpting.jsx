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
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* MOBILE VIEW */}
      <div className="lg:hidden w-full relative overflow-x-hidden pt-10">
        <div className="relative w-full h-full">
          <img
            src="https://res.cloudinary.com/di4caiech/image/upload/v1764238928/Mask_group_4_nrbkgt.png"
            alt="Surgical Body Sculpting"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#61338A]"></div>
        </div>

        <div className="bg-white pt-4 pb-12 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-poppins text-[#61338A] font-bold leading-tight">
                Surgical Body Sculpting
              </h1>
            </div>

            <div className="mb-6 text-center">
              <p className="text-base text-gray-800 uppercase tracking-wide font-montserrat" style={{lineHeight: '1.8'}}>
                Achieve Dramatic, Lasting Results with Expert Cosmetic Surgery.
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
          <div className="absolute inset-0"></div>

          <div className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-10 lg:px-2 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center h-96">
              <motion.div 
                className="lg:col-span-2 text-center lg:text-left mt-[-150px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
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

                <motion.div 
                  className="mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <p className="text-xs sm:text-lg md:text-lg lg:text-xl text-gray-800 uppercase tracking-wide font-montserrat" style={{lineHeight: '1.8'}}>
                    Achieve Dramatic, Lasting Results with Expert Cosmetic Surgery.
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
                    className="font-montserrat bg-[#61338A] hover:bg-[#7A4DAC] text-white font-semibold rounded-lg px-8 py-4 transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <span>Book your Consultation Today</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>

              <div className="hidden lg:block lg:col-span-1">
                <div className="w-full h-full min-h-[500px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatIsSurgicalBodySculpting />
      <Benefits />
      <WhoExpect />
      <FaqSection />
      <BookYourAssessmentToday />
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}

export default SurgicalBodySculpting

