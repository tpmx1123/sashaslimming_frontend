import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: 'Is surgical body sculpting safe?',
    answer: 'Yes — when performed by a qualified and experienced surgeon, surgical body sculpting procedures are considered safe.'
  },
  {
    question: 'How long is the recovery?',
    answer: 'The number of sessions varies depending on the treatment type, target area, and your personal goals. Most clients see the best results after 4–6 sessions, but your provider will give you a tailored plan during your consultation.'
  },
  {
    question: 'Are the results permanent?',
    answer: 'Surgical body sculpting can offer long-lasting or permanent results, but maintaining them depends on your lifestyle.'
  },
  {
    question: 'Can I combine surgery with non-surgical treatments?',
    answer: 'Absolutely. Many patients combine surgical procedures (like liposuction or tummy tucks) with non-surgical treatments (such as skin tightening or body contouring) to enhance and maintain their results.'
  },
];

const FlapAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-white pt-0 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto"
      >
        <motion.h2
          className="font-montserrat text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-[#61338A] text-center mb-6 md:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 md:gap-8 lg:gap-10">
          <motion.img
            src="https://res.cloudinary.com/di4caiech/image/upload/v1764045875/faq_kpkxcw.png"
            alt="FAQ Illustration"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] cursor-default"
          />

          <motion.div 
            className="flex flex-col gap-3 md:gap-4 w-full lg:flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl text-[#392D44] p-4 md:p-5 lg:p-6 bg-[#F2EFF4] cursor-pointer transition-transform duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center mb-2">
                  <motion.div
                    className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-3 md:mr-4 text-[#392D44] text-base md:text-lg font-semibold flex-shrink-0"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? '−' : '+'}
                  </motion.div>

                  <h3 className="font-montserrat font-semibold text-sm md:text-base lg:text-lg text-[#392D44] m-0 flex-1 leading-tight">
                    {item.question}
                  </h3>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-montserrat font-normal text-xs md:text-sm lg:text-base leading-relaxed m-0 pl-7 md:pl-8 lg:pl-9 pt-2 md:pt-3 text-[#392D44]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlapAskedQuestions;