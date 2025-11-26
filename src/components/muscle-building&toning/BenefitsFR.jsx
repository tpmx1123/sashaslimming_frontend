import { motion } from 'framer-motion';

const BenefitsFR = () => {
  const benefits = [
    {
      id: 1,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764150158/measuring-tape_8966051_1_phiakc.png',
      text: 'Builds and tones muscle without lifting weights'
    },
    {
      id: 2,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764150158/Frame_1984078409_dga96e.png',
      text: 'Defines abs, glutes, thighs, arms, and core'
    },
    {
      id: 3,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764150157/Frame_1984078409_1_nnc6sf.png',
      text: 'Enhances athletic performance and posture'
    },
    {
      id: 4,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075108/Frame_1984078408_ygdhvt.png',
      text: 'Non-invasive, no downtime'
    },
    {
      id: 5,
      icon: 'https://res.cloudinary.com/di4caiech/image/upload/v1764075109/Frame_1984078408_3_n70dns.png',
      text: 'Safe and customizable for all fitness levels'
    },
  ];

  return (
    <div className="w-full pt-2 md:pt-3 lg:pt-4 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="font-montserra text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-[#61338A] text-center mb-3 md:mb-4 lg:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Key Benefits
        </motion.h2>

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
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="rounded-2xl p-4 md:p-2 flex items-center gap-4 md:gap-4 shadow-xl transition-shadow duration-300"
              style={{
                background: "white"
              }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-13">
                <img
                  src={benefit.icon}
                  alt={benefit.text}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <p className="font-poppins text-base md:text-lg text-[#61338A] font-normal leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsFR;