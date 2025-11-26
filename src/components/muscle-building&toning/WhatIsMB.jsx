import { motion } from 'framer-motion';

const WhatIsMB = () => {
  const therapies = [
    {
      id: 1,
      title: 'Body Toning Therapy',
      description: 'A non-invasive treatment that stimulates muscle contractions to tone, firm, and shape the body. Ideal for improving muscle definition and supporting fat reduction.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764147262/Frame_1984078496_4_tbmukh.png'
    },
    {
      id: 2,
      title: 'CM Slim Treatment',
      description: 'A high-intensity body sculpting treatment that builds muscle and burns fat using electromagnetic pulses. Perfect for toning and contouring targeted areas quickly and effectively.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764147263/Frame_1984078496_5_bqahqs.png'
    },
    {
      id: 3,
      title: 'Physio-Supervised Muscle Building Exercises',
      description: 'Personalized strength training sessions guided by a licensed physiotherapist to target specific muscle groups, improve posture, and safely tone your body.',
      image: 'https://res.cloudinary.com/di4caiech/image/upload/v1764147262/Frame_1984078496_6_z7tfuz.png'
    }
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: What Is Muscle Building & Toning?*/}
        <motion.div 
          className="mb-8 md:mb-6 lg:mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Is Muscle Building & Toning?
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className=" font-poppins text-base md:text-lg lg:text-xl text-gray-700 leading-loose text-left" style={{ lineHeight:'1.6'}}>
              At Sasha Luxe, our muscle toning treatments combine advanced technology and expert-guided
workouts to help you build lean muscle, increase strength, and achieve a more sculpted physique
without intense physical strain. Whether you're targeting your abs, glutes, thighs, or arms, we
customize each session to align with your goals and fitness level.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 2: How It Works */}
        <motion.div 
          className="mb-2 md:mb-3 lg:mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-montserra text-xl md:text-2xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8"
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
            <p className="font-poppins text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-left" style={{ lineHeight:'1.6'}}>
              We blend innovative body sculpting devices with targeted, physiotherapist-supervised exercise to
activate, strengthen, and tone your muscles efficiently. Your treatment plan may include:
            </p>
          </motion.div>

          {/* Therapy Cards - Horizontal Layout */}
          <motion.div 
            className="space-y-5 sm:space-y-6 md:space-y-5 lg:space-y-6 max-w-3xl mx-auto"
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
                className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row md:max-h-56 lg:max-h-64"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Image - Left Side */}
                <div className="w-full md:w-1/2 lg:w-2/5 h-40 sm:h-44 md:h-40 lg:h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={therapy.image}
                    alt={therapy.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content - Right Side with Light Purple Background */}
                <div className="w-full md:w-1/2 lg:w-3/5 p-4 sm:p-5 md:p-4 lg:p-5 flex flex-col justify-center"
                style={{
                   background: 'linear-gradient(to right, #FFEEDD 0%, #C9B4C7 100%)'
                  }}>
                  <h3 className="font-bold text-base sm:text-lg md:text-base lg:text-lg text-[#61338A] mb-2 sm:mb-2.5 md:mb-2">
                    {therapy.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-sm text-gray-700 leading-relaxed" style={{ lineHeight: '1.5' }}>
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

export default WhatIsMB;