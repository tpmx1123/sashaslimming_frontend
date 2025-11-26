import React from 'react';
import { motion } from 'framer-motion';

const WhatIsSurgicalBodySculpting = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const cards = [
    {
      id: 1,
      title: "Liposuction",
      description: "for targeted fat removal",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764147585/Frame_1984078506_6_mijc5w.png"
    },
    {
      id: 2,
      title: "Tummy Tucks (Abdominoplasty)",
      description: "for tighter, flatter abdominal contours",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764147581/Frame_1984078506_7_bmu86u.png"
    },
    {
      id: 3,
      title: "Body Lifts",
      description: "to remove excess skin and sculpt the lower or upper body",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764147577/Frame_1984078506_8_qirxbc.png"
    },
    {
      id: 4,
      title: "Fat Transfer",
      description: "to naturally enhance areas like the hips or buttocks",
      image: "https://res.cloudinary.com/di4caiech/image/upload/v1764147577/Frame_1984078506_9_sukiez.png"
    }
  ]

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            What Is Surgical Body Sculpting?
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className=" font-poppins text-sm md:text-base lg:text-lg text-gray-700 leading-loose text-left font-regular" style={{ lineHeight:'1.8'}}>
            At <b>Sasha Luxe</b>, we offer <b>Cosmetic Body Sculpting Surgery</b> for those seeking more dramatic, permanent transformations. Performed by our <b>board-certified cosmetic surgeon</b>, these procedures are designed to reshape, refine, and enhance your natural silhouette with precision and artistry.</p>
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
            Using advanced surgical techniques and a personalized treatment plan, we address stubborn fat, loose skin, and contour irregularities to create a smoother, more defined physique. Common procedures include:
            </p>
          </motion.div>
        </motion.div>

       {/* Cards Grid */}
       <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image */}
              <div className="w-full bg-purple-50 flex items-center justify-center ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto max-h-[180px] md:max-h-[200px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#61338A] mb-2 md:mb-3 font-poppins">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-poppins">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default WhatIsSurgicalBodySculpting;