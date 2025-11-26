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
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        width: "100%",
        maxWidth: "1133.09px",
        margin: "20px auto 0",
        backgroundColor: "#FFFFFF",
        padding: "25px 24px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          maxWidth: "535px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(22px, 3vw, 36px)",
          color: "#61338A",
          textAlign: "center",
          margin: "0 auto 25px auto",
        }}
      >
        Frequently Asked Questions
      </h1>

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
          style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.025 }}
              style={{
                borderRadius: "16.88px",
                color: "#392D44",
                padding: "20px 30px",
                background: "#F2EFF4",
                cursor: "pointer",
                transition: "transform 0.18s ease-out",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <motion.div
                  style={{
                    width: "14px",
                    height: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    color: "#392D44",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.div>

                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 2vw, 16px)",
                    margin: 0,
                  }}
                >
                  {item.question}
                </h3>
              </div>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(11px, 2vw, 12.03px)",
                      lineHeight: "18.05px",
                      margin: 0,
                      paddingLeft: "28px",
                      paddingTop: "8px",
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={cardVariants}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 340, damping: 16 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "15px",
              paddingLeft: "5px",
              cursor: "pointer",
            }}
          >
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlapAskedQuestions;