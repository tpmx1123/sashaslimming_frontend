import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  const beforeAfterSets = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764131173/Frame_1984078436_3_xogrbg.png',
      alt: 'Before and After - Male Transformation'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764131173/Frame_1984078437_3_y30lhg.png',
      alt: 'Before and After - Female Transformation'
    }
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* What to Expect Section */}
        <motion.div 
          className="mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8 font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What to Expect
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-poppins text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center font-regular" style={{lineHeight: '1'}}>
              You'll begin with a comprehensive body analysis and consultation. Sessions typically last 30-60
            </p>
            <p className="font-poppins text-sm md:text-base lg:text-xl text-gray-700 leading-relaxed text-center font-regular" style={{lineHeight: '1'}}>
              minutes, and we recommend a personalized treatment plan based on your target areas and goals.
            </p>
            <p className="font-poppins text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center font-regular" style={{lineHeight: '1'}}>
              Many clients notice inch loss and improved skin firmness within a few sessions.
            </p>
          </motion.div>
        </motion.div>

        {/* Before and After Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-[#61338A] text-center mb-6 md:mb-8 lg:mb-12 font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Before and After
          </motion.h2>

          {/* Before/After Images Grid */}
          <motion.div 
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
              {beforeAfterSets.map((set) => (
                <motion.div
                  key={set.id}
                  className="w-full rounded-2xl overflow-hidden  transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={set.image}
                    alt={set.alt}
                    className="w-full h-auto rounded-2xl object-cover transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfter;

