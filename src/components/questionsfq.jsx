import React, { useState } from "react";
import { motion } from "framer-motion";
import BookModel from "./BookModel";

const questionsfq = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
    <motion.section 
      className="w-full py-10 px-4 bg-white flex justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl text-center px-4">
        <motion.h2 
          className="text-[2.6rem] text-[#2D3748] mb-6 font-regular font-Be-Vietnam']"
          variants={headingVariants}
        >
          Your Body, Engineered to Its Best Form
        </motion.h2>
        <motion.p 
          className="text-[1.1rem] text-[#4A5568] leading-7 mb-10 max-w-3xl mx-auto font-Be-Vietnam']"
          variants={textVariants}
        >
          At Sasha Luxe Slimming, we treat the body as a design of biology and
          balance where innovation meets intention. Experience results that are
          scientific, elegant, and enduring.
        </motion.p>
        <motion.button 
          onClick={() => setIsBookingModalOpen(true)}
          className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] text-white border-none py-4 px-10 text-[1.1rem] font-medium rounded-lg shadow-[0_4px_15px_rgba(109,40,217,0.2)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(109,40,217,0.3)] font-Be-Vietnam']"
          variants={buttonVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(109,40,217,0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Consultation
        </motion.button>
      </div>

      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </motion.section>
  );
};

export default questionsfq;
