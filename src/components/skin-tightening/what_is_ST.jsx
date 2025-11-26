import React from 'react';
import { motion } from 'framer-motion';

const WhatIsST = () => {
  const handleNavigation = (path) => {
    // You can replace this with React Router or your preferred navigation method
    window.location.href = path;
    // Or use: window.location.pathname = path; for same-page navigation
  };

  const therapies = [
    {
      id: 1,
      title: 'Radio Frequency (RF) Therapy:',
      description: 'Delivers heat energy deep into the skin to boost collagen and tighten loose areas, leaving your skin visibly firmer and smoother.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764045894/therapy_n8p4zd.png',
      path: '/rf-therapy' // Update with your actual route
    },
    {
      id: 2,
      title: 'Morpheus8 Micro needling:',
      description: 'Combines microneedling with RF to tighten skin, smooth wrinkles, and improve texture with minimal downtime.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764045875/gadget_bafveo.png',
      path: '/morpheus8' // Update with your actual route
    }
  ];

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
            className="font-montserra text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8 font-be-vietnam"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
       
          >
            What Is Skin Tightening?
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className=" font-poppins text-base md:text-lg lg:text-xl text-gray-700 leading-loose text-left font-regular" style={{ lineHeight:'1.8'}}>
              At Sasha Luxe, our non-invasive skin tightening treatments are designed to restore firmness, smooth texture, and rejuvenate your skin all without needles or downtime.
            Whether you're noticing sagging, fine lines, or uneven tone, our treatments help you achieve a fresher, firmer, more youthful appearance.
            </p>
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
            <p className="font-poppins text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-left font-regular" style={{ lineHeight:'1.8'}}>
              We combine powerful, non-surgical therapies that stimulate your skin's natural collagen and elastin production, enhance circulation, and reduce the appearance of cellulite. <br/>
              Depending on your skin concerns and goals, your treatment may include:
            </p>
          </motion.div>

          {/* Therapy Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
            {therapies.map((therapy) => (
              <motion.div
                key={therapy.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleNavigation(therapy.path)}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div 
                  className="w-full h-64 bg-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => handleNavigation(therapy.path)}
                >
                  <img
                    src={therapy.image}
                    alt={therapy.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-montserra font-bold text-lg md:text-xl text-gray-dark mb-3">
                    {therapy.title}
                  </h3>
                  
                  <p className="font-poppins text-base text-gray-dark leading-relaxed mb-4 ">
                    {therapy.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(therapy.path);
                    }}
                    className="bg-[#61338A] hover:bg-[#4A2A6B] text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 font-poppins"
                  >
                    Read more
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsST;