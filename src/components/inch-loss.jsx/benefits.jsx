import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075108/Frame_1984078408_ygdhvt.png',
      text: 'Targeted fat and inch loss from problem areas'
    },
    {
      id: 2,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075108/Frame_1984078408_1_glacgf.png',
      text: 'Maintains muscle for better shape and tone'
    },
    {
      id: 3,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075108/Frame_1984078408_2_gtc1we.png',
      text: 'Enhances skin texture and elasticity'
    },
    {
      id: 4,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075109/Frame_1984078408_3_n70dns.png',
      text: 'Safe, non-surgical & clinically proven methods'
    },
    {
      id: 5,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075108/Frame_1984078408_4_wkjarf.png',
      text: 'Ideal for reshaping post-weight loss or postpartum bodies'
    }
  ];

  return (
    <div className="w-full bg-purple-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2 
          className="font-montserra text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#61338A] text-center mb-3 md:mb-4 lg:mb-6 font-be-vietnam"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Key Benefits
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="font-poppins text-sm md:text-base lg:text-lg text-gray-dark text-center mb-8 md:mb-10 lg:mb-12 font-be-vietnam max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Weight loss alone can be misleading. At Sasha Slimming, we focus on:
        </motion.p>

        {/* Benefits Grid - 3 cards top row, 2 cards bottom row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* First 3 cards - top row */}
          {benefits.slice(0, 3).map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 flex items-start justify-start">
                <img
                  src={benefit.icon}
                  alt={benefit.text}
                  className="w-full h-full object-contain "
                />
              </div>

              {/* Text */}
              <p className="font-poppins text-base md:text-lg text-gray-dark leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
          
          {/* Last 2 cards - bottom row, centered */}
          {benefits.slice(3).map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 flex items-center justify-center">
                <img
                  src={benefit.icon}
                  alt={benefit.text}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <p className="font-poppins text-base md:text-lg text-gray-dark leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
          <div className="hidden lg:block"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;