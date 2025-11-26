import { motion } from 'framer-motion';

const WhoExpect = () => {


  return (
    <>
      {/* Section 1: Who It's For - Light Beige Background */}
      <div className="w-full bg-[#FBF2E8] py-12 md:py-16 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="font-montserra text-xl md:text-2xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Who It's For
            </motion.h2>

            {/* Subheading */}
            <motion.p 
              className="font-poppins text-sm md:text-base lg:text-lg text-gray-800 text-center mb-6 md:mb-8 lg:mb-10 font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              Surgical sculpting is best suited for individuals who:
            </motion.p>

            {/* Items List Container - Centered */}
            <motion.div 
              className="max-w-3xl mx-auto align-center mr-10"
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
              <div className="space-y-3 md:space-y-6">
                {[
                  'Seek significant or permanent body contouring',
                  'Have excess skin or stubborn fat not responding to non-surgical treatments',
                  'Are in good overall health and at a stable weight',
                  'Want comprehensive, physician-directed results'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 md:gap-4"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                  >
                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6">
                      <img
                        src="https://res.cloudinary.com/di4caiech/image/upload/v1764045886/Group_bhkcbj.png"
                        alt="arrow"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Text */}
                    <p className="font-poppins text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: What to Expect - White Background */}
      <div className="w-full bg-white py-12 md:py-10 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
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
              What to Expect
            </motion.h2>
            
            <motion.div 
              className="space-y-3 md:space-y-4 lg:space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-poppins text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-left max-w-5xl mx-auto" style={{ lineHeight:'1.8'}}>
              Your journey starts with a private consultation to discuss your goals and review surgical options. Your surgeon will guide you through pre-op planning, procedure details, and recovery expectations. Downtime varies by procedure, but most clients return to daily activities within 1–3 weeks, with final results visible after full healing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhoExpect;