import { motion } from 'framer-motion';

const WhoExpect = () => {


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
            className="font-montserra text-xl md:text-2xl lg:text-4xl font-bold text-[#61338A] text-center mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
Who It’s For
          </motion.h2>
          
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className=" font-poppins text-base md:text-lg lg:text-xl text-gray-700 leading-loose text-left" style={{ lineHeight:'1.6'}}>
              Ideal for women and men looking to slim specific body areas, reduce inches, or maintain results
after weight loss. Perfect for those who prefer non-surgical options.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 2: what to expect */}
        <motion.div 
          className="mb-0"
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
            className="space-y-3 md:space-y-4 lg:space-y-5 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-poppins text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-left" style={{ lineHeight:'1.6'}}>
              You’ll start with a personalized consultation. Treatments are comfortable, typically last 30–60
minutes, and require no recovery time. A series of sessions may be recommended for optimal
results.</p>
          </motion.div>
    </motion.div>
    </div>
    </div>
  );
};

export default WhoExpect;