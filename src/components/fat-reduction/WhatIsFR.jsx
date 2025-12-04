import React from 'react';
import { motion } from 'framer-motion';

const WhatIsFR = () => {
  const therapies = [
    {
      id: 1,
      title: 'Cryotherapy:',
      description: 'Freezes and breaks down fat cells for natural elimination.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764132223/Frame_1984078506_1_mrjrot.png',
      path: '/cryotherapy'
    },
    {
      id: 2,
      title: 'Injection Lipolysis:',
      description: 'Targets small, stubborn fat pockets with fat-dissolving injections.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764132223/Frame_1984078506_2_lztjin.png',
      path: '/injection-lipolysis'
    },
    {
      id: 3,
      title: 'Weight Loss Injections & Supplements:',
      description: 'Boost metabolism and support appetite control.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764132222/Frame_1984078506_3_v4vz9a.png',
      path: '/weight-loss-injections'
    },
    {
      id: 4,
      title: 'Fat Disintegration System:',
      description: 'Heat-based systems designed to break down subcutaneous fat.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764132222/Frame_1984078506_4_ucxhiu.png',
      path: '/fat-disintegration'
    },
    {
      id: 5,
      title: 'Steam Therapy:',
      description: 'Aids detox and reduces water retention.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764132222/Frame_1984078506_5_yudsu9.png',
      path: '/steam-therapy'
    },
    {
      id: 6,
      title: 'G10 (Vibration Therapy):',
      description: 'Boosts circulation, reduces cellulite, and enhances skin tone.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764130800/Frame_1984078506_jwm16y.png',
      path: '/g10-vibration'
    }
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: What Is Fat Reduction? */}
        <motion.div 
          className="mb-8 md:mb-6 lg:mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Is Fat Reduction?
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className=" font-poppins text-base md:text-lg lg:text-xl text-gray-700 leading-loose text-left" style={{ lineHeight:'1.6'}}>
              At Sasha Luxe, we offer innovative fat reduction treatments designed to eliminate stubborn fat and
reshape your silhouette—without the need for surgery or extended downtime. Whether you're
targeting love handles, thighs, arms, or belly fat, our range of non-invasive solutions are tailored to
your body and goals.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 2: How It Works */}
        <motion.div 
          className="mb-2 md:mb-3 lg:mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5 mb-6 md:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-poppins text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-left" style={{ lineHeight:'1.6'}}>
              We combine a range of tailored therapies to disrupt fat cells, stimulate metabolic activity, and
promote fat drainage naturally through the body. Depending on your body and goals, your
treatment may include:
            </p>
          </motion.div>

          {/* Therapy Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div 
                  className="w-full h-34 bg-gray-100 overflow-hidden cursor-default"
                >
                  <img
                    src={therapy.image}
                    alt={therapy.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className=" font-bold text-lg md:text-xl text-[#61338A] mb-3">
                    {therapy.title}
                  </h3>
                  
                  <p className=" text-base text-gray-dark leading-relaxed mb-4">
                    {therapy.description}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsFR;