import React from 'react';
import { motion } from 'framer-motion';

const WhatIsInchLoss = () => {

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: What Is Skin Tightening? */}
        <motion.div 
          className="mb-8 md:mb-6 lg:mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-2xl md:text-3xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8 font-be-vietnam"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
       
          >
            What Is Inch Loss?
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className=" font-poppins text-sm md:text-base lg:text-lg text-gray-700 leading-loose text-left font-regular" style={{ lineHeight:'1.8'}}>
            Weight loss on the scale doesn’t always tell the full story. At <b>Sasha Slimming</b>, we take a targeted, science-backed approach to help you <b>visibly reduce inches</b>, especially in stubborn areas like the belly, arms, hips, and back. Our focus goes beyond weight it's about reshaping your body, enhancing muscle tone, and tightening skin for real, noticeable transformation.</p>
          </motion.div>
        </motion.div>

        {/* Section 2: How It Works */}
        <motion.div 
          className="mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5 mb-6 md:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-poppins text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-left font-regular" style={{ lineHeight:'1.8'}}>
            Our inch loss programs are customized to support <b>fat reduction, muscle preservation, and skin tightening</b>, using a combination of advanced technologies and expert-led treatments. Your plan may include:
            </p>
          </motion.div>
        </motion.div>

        {/* Section 3: Benefits */}
        <motion.div
          className="w-full "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-6 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2}}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {/* Fat Loss Card */}
              <motion.div
                className="rounded-xl flex flex-row items-start gap-4 md:gap-6 lg:gap-8"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.01 }}
                style={{
                  background: 'linear-gradient(to right, #FFEFDD 0%, #C9B4C7 100%)',
                  opacity: 0.85, boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.1)'
                }}>
                {/* Image */}
                <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56">
                  <img
                    src="https://res.cloudinary.com/di4caiech/image/upload/v1764131174/Frame_1984078496_pn8osu.png"
                    alt="Fat Loss"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#61338A] mb-2 md:mb-3 lg:mb-4 lg:mt-10 font-poppins">
                    Fat Loss
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#000000] leading-relaxed font-poppins opacity-80" style={{ lineHeight:'1.8'}}>
                    Target fat mass in stubborn zones using non-invasive therapies designed to disrupt and eliminate fat cells.
                  </p>
                </div>
              </motion.div>

              {/* Muscle Retention Card */}
              <motion.div
                className="rounded-xl flex flex-row items-start gap-4 md:gap-6 lg:gap-8"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.01 }}
                style={{
                  background: 'linear-gradient(to right, #FFEFDD 0%, #C9B4C7 100%)',
                  opacity: 0.85, boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.1)'
                }}>
                {/* Image */}
                <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56">
                  <img
                    src="https://res.cloudinary.com/di4caiech/image/upload/v1764131172/Frame_1984078496_2_nsruvi.png"
                    alt="Muscle Retention"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#61338A] mb-2 md:mb-3 lg:mb-4 lg:mt-10 font-poppins">
                    Muscle Retention
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#000000] leading-relaxed font-poppins opacity-80" style={{ lineHeight:'1.8'}}>
                    Preserve and strengthen lean muscle to maintain a healthy metabolism and sculpted appearance.
                  </p>
                </div>
              </motion.div>

              {/* Inch Loss Card */}
              <motion.div
                className="rounded-xl flex flex-row items-start gap-4 md:gap-6 lg:gap-8"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.01 }}
                style={{
                  background: 'linear-gradient(to right, #FFEFDD 0%, #C9B4C7 100%)',
                  opacity: 0.85, boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.1)'
                }}>
                {/* Image */}
                <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56">
                  <img
                    src="https://res.cloudinary.com/di4caiech/image/upload/v1764131173/Frame_1984078496_1_j0jgzn.png"
                    alt="Inch Loss"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#61338A] mb-2 md:mb-3 lg:mb-4 lg:mt-10 font-poppins">
                    Inch Loss
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#000000] leading-relaxed font-poppins opacity-80" style={{ lineHeight:'1.8'}}>
                    Strategically reduce measurements in key areas like the waist, arms, thighs, back, and hips—with visible results over time.
                  </p>
                </div>
              </motion.div>

              {/* Skin Tightening Card */}
              <motion.div
                className="rounded-xl flex flex-row items-start gap-4 md:gap-6 lg:gap-8"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.01 }}
                style={{
                  background: 'linear-gradient(to right, #FFEFDD 0%, #C9B4C7 100%)',
                  opacity: 0.85, boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.1)'
                }}>
                {/* Image */}
                <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56">
                  <img
                    src="https://res.cloudinary.com/di4caiech/image/upload/v1764131172/Frame_1984078496_3_kyjtdv.png"
                    alt="Skin Tightening"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#61338A] mb-2 md:mb-3 lg:mb-4  lg:mt-10 font-poppins">
                    Skin Tightening
                  </h3> 
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#000000] leading-relaxed font-poppins opacity-80" style={{ lineHeight:'1.8'}}>
                    Non-surgical treatments like Radio Frequency (RF), Morpheus8 and HIFU (High-Intensity Focused Ultrasound) help firm and smooth skin as you lose volume.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsInchLoss;