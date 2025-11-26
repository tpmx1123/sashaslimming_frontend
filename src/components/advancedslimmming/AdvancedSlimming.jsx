import React from 'react'
import BookModel from '../BookModel'
import OurEliteBody from './OurEliteBody'
import FatReduction from './FatReduction'
import SkinTightening from './SkinTightening'
import InchLoss from './InchLoss'
import WhySasha from './WhySasha'
import WeightLoss from './WeightLoss'
import DrSanjaySection from './DrSanjay'
import EndrocrinologistSection from './Endocrinologists'
import FAQData from './faqData'
import BookYourAssessmentToday from './BookYourAssessmentToday'
import OurClient from './client'
const AdvancedSlimming = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false)
  
  const backgroundImageUrl = "https://res.cloudinary.com/di4caiech/image/upload/v1764045069/Redefine_Your_Body_The_Right_Way._w9db5i.png"

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
            <div className="lg:col-span-2 text-center lg:text-left mt-[-150px] ">
              {/* Main Headline */} 
              <div className="mb-4 md:mb-5">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-sasha-purple-deeper mb-2 leading-tight font-poppins">
                  Where Aesthetics Meet
                </h1>
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-sasha-purple-deeper leading-tight font-poppins">
                  Advanced Slimming
                </h1>
              </div>

              {/* Sub-headline */}
              <div className="mb-4 md:mb-6">
                <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-gray-800  uppercase tracking-wide font-montserra " style={{lineHeight: '1.8'}}>
                  HYDERABAD'S LEADING NON-INVASIVE SLIMMING & FAT LOSS CLINIC
                </p>
                
              </div>

              {/* Call to Action Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-sasha-purple-deeper hover:bg-sasha-purple-dark text-[#FCC17F] font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] font-montserrat"
                >
                  Book Your Consultation Today
                </button>
              </div>
            </div>

            {/* Right Section - Image (1/3 width on desktop, hidden on mobile as it's in background) */}
            <div className="hidden lg:block lg:col-span-1">
              {/* The woman's image is part of the background image */}
              <div className="w-full h-full min-h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Elite Body Section */}
      <OurEliteBody />
      <FatReduction />
      <SkinTightening />
      <InchLoss />
      <WhySasha />
      <WeightLoss />
      <DrSanjaySection/>
      <EndrocrinologistSection/>
      <FAQData/>
      <BookYourAssessmentToday/>
      <OurClient/>
      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}

export default AdvancedSlimming

