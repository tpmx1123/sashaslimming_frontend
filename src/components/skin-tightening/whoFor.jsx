import React from 'react';
import { motion } from 'framer-motion';

const WhoFor = () => {
  const items = [
    'Mild to moderate skin laxity',
    'Fine lines and early signs of aging',
    'Uneven skin tone or texture',
    'Post-weight loss or post-baby skin',
    'Cellulite in areas like thighs, buttocks, or arms',
  ];

  const arrowIcon = 'https://res.cloudinary.com/di4caiech/image/upload/v1764045886/Group_bhkcbj.png';

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="font-montserra text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#61338A] text-center mb-3 md:mb-4 lg:mb-6 font-be-vietnam"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Who It's For
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="font-poppins text-sm md:text-base lg:text-lg text-gray-dark text-center mb-6 md:mb-8 lg:mb-12 font-be-vietnam"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Perfect for anyone experiencing:
        </motion.p>

        {/* Cards Grid - 2 columns, 3 rows */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:shadow-md transition-shadow duration-300"
              style={{
                background: "linear-gradient(to right, #FFEEDD 0%, #C9B4C7 100%)"
              }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              {/* Arrow Icon */}
              <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6">
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <p className="font-poppins text-base md:text-lg text-[#61338A] font-medium leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhoFor;