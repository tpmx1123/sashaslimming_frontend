import React, { useState } from "react";
import { motion } from "framer-motion";
import FaqImage from "../../assets/Frequently Asked.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to second item expanded

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const faqs = [
    {
      question: "1. What is HydraFacial and how does it help?",
      answer:
        "For optimal results, aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, along with strength training exercises at least twice a week.",
    },
    {
      question: "2. How much time does the hydrafacial treatment take?",
      answer:
        "A typical HydraFacial treatment takes 45-60 minutes. You can sit back and relax while your skin receives hydration and serums for a healthy, glowing appearance.",
    },
    {
      question: "3. Is HydraFacial treatment safe for the face?",
      answer:
        "Aim for at least 8-10 glasses (2-2.5 liters) of water daily. Increase intake if you exercise regularly or live in a hot climate.",
    },
    {
      question: "4. Is HydraFacial suitable for both men and women?",
      answer:
        "Set realistic goals, track your progress, find a workout buddy, vary your routine, and reward yourself for milestones achieved.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="w-full bg-white py-12 lg:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="mb-8 flex items-center gap-4"
        variants={headingVariants}
      >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-regular text-[#22222A] uppercase whitespace-nowrap">
                FREQUENTLY ASKED QUESTION'S
              </h2>
              <div className="hidden lg:block w-52 h-[2px] bg-[#F1E2FF] flex-shrink-0"></div>
            </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Section - Illustration (40%) */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center items-center flex-shrink-0"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            <img
              src={FaqImage}
              alt="Frequently Asked Questions"
              className="w-full max-w-md object-contain"
              style={{
                width: "100%",
                maxWidth: "400px",
                minWidth: "300px",
                height: "auto",
                flexShrink: 0,
                objectFit: "contain",
              }}
            />
          </motion.div>

          {/* Right Section - FAQ Content (60%) */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={containerVariants}
          >
            {/* Title with underline */}
            

            {/* FAQ Items */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    activeIndex === index 
                      ? 'bg-white shadow-sm' 
                      : 'bg-[#FDF9FF]'
                  }`}
                  onClick={() => toggleFAQ(index)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`p-5 flex items-center gap-4 ${
                    activeIndex === index ? 'bg-[#FDF9FF]' : 'bg-[#FDF9FF]'
                  }`}>
                    {/* Purple +/- Icon */}
                    <div className="flex-shrink-0">
                      <span className={`text-2xl font-regular ${
                        activeIndex === index ? 'text-[#8A2BE2]' : 'text-[#8A2BE2]'
                      }`}>
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {/* Question */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-regular text-[#22222A]">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Answer (Expanded) */}
                  {activeIndex === index && (
                    <div className="px-5 pb-5 pl-12 bg-[#FDF9FF]">
                      <p className="text-base text-[#22222A] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
    </motion.section>
  );
};

export default FAQ;
