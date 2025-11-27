import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/Banner.svg';
import BookModel from './BookModel';

const mobileHeroImage = "https://res.cloudinary.com/di4caiech/image/upload/v1764235891/Mask_group_c5pd3w.png";

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="lg:hidden w-full relative pt-12 overflow-x-hidden">
        <div className="relative w-full h-full">
          <img
            src={mobileHeroImage}
            alt="Body transformation"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-1 bg-[#61338A]"></div>
        </div>

        <div className="bg-white pt-4 pb-12 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-2xl mx-auto"
          >
            <motion.div className="mb-8 text-center" variants={headingVariants}>
              <h1 className="text-3xl sm:text-4xl font-poppins text-[#22222A] leading-tight">
                Where Medical
              </h1>
              <h1 className="text-3xl sm:text-4xl font-poppins text-[#22222A] leading-tight">
                Science Meets
              </h1>
              <h1 className="text-4xl sm:text-3xl font-poppins text-[#61338A] font-bold leading-tight">
                Aesthetic Precision
              </h1>
            </motion.div>

            <motion.div className="flex justify-center" variants={buttonVariants}>
              <motion.button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#61338A] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#7A4DAC] transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <motion.div
        className="hidden lg:block w-full relative pt-24 bg-no-repeat bg-right bg-contain"
        style={{ backgroundImage: `url(${bannerImage})`, minHeight: "750px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            <div className="text-center lg:text-left">
              <motion.div className="mb-8" variants={headingVariants}>
                <h1 className="text-4xl lg:text-6xl font-Be-Vietnam leading-tight text-[#22222A]">
                  Where Medical
                </h1>
                <h1 className="text-4xl lg:text-6xl font-Be-Vietnam leading-tight text-[#22222A]">
                  Science Meets
                </h1>
                <h1 className="text-4xl lg:text-6xl font-Be-Vietnam leading-tight text-[#61338A]">
                  Aesthetic Precision
                </h1>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={containerVariants}>
                <motion.button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-[#61338A] text-white font-semibold px-8 py-3 rounded-md shadow-md w-full sm:w-auto"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Body Analysis
                </motion.button>

                <motion.button
                  className="bg-white border-2 border-[#61338A] text-[#61338A] font-semibold px-8 py-3 rounded-md w-full sm:w-auto flex items-center justify-center gap-2"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  923456999
                </motion.button>
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <div className="w-full h-full min-h-[500px]"></div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* BOOKING MODAL */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
};

export default Home;
