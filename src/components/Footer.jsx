import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const quickLinks = [
    { text: "HOME", path: "/" },
    { text: "CONCERNS", path: "/advanced-slimming" },
    { text: "SERVICES", path: "/skin-tightening" },
    { text: "BLOG", path: "/blog" },
    { text: "CONTACT US", path: "/contact-us" }
  ];

  return (
    <motion.footer 
      className="w-full bg-[#392D44]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-3 py-6 sm:py-8 h-full text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Facebook Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#D4AF37] font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase text-center">
              FACEBOOK
            </h3>
            <motion.a 
              href="https://www.facebook.com/sashaclinics/?ref=embed_page#"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-[280px] mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={'https://res.cloudinary.com/di4caiech/image/upload/v1764675828/WhatsApp_Image_2025-12-02_at_3.53.43_PM_mugepx.jpg'} 
                alt="Facebook" 
                className="w-full h-auto rounded-lg"
              />
            </motion.a>
          </motion.div>

          {/* Instagram Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#D4AF37] font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase text-center">
              INSTAGRAM
            </h3>
            <motion.a 
              href="https://www.instagram.com/sashaluxeslimming?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-[280px] mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={'https://res.cloudinary.com/di4caiech/image/upload/v1764675835/WhatsApp_Image_2025-12-02_at_3.50.43_PM_vuvoew.jpg'} 
                alt="Instagram" 
                className="w-full h-auto rounded-lg"
              />
            </motion.a>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#D4AF37] font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase text-center">
              QUICK LINKS
            </h3>
            <motion.div 
              className="space-y-3"
              variants={containerVariants}
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="inline-block w-full max-w-[200px] mx-auto text-center bg-[#483956] text-white uppercase font-medium px-4 py-3 sm:py-2 rounded hover:bg-gray-600 transition-colors text-xs sm:text-sm"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Supports Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#D4AF37] font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase text-center">
              SUPPORTS
            </h3>
            <div className="space-y-4 sm:space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-center justify-center gap-3 py-1">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919234569999" className="text-white hover:text-[#D4AF37] transition-colors">
                  +91 9234569999
                </a>
              </div>
              

              {/* Email */}
              <div className="flex items-center justify-center gap-3 py-1">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <a href="mailto:hello@sashaclinics.com" className="text-white hover:text-[#D4AF37] transition-colors">
                  hello@sashaclinics.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-4 pt-3 sm:pt-2">
                <a href="https://www.instagram.com/sashaluxeslimming?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors p-1 sm:p-0" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/sashaclinics/?ref=embed_page#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors p-1 sm:p-0" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCQ-Vy5vEm_ubDiEPYQOunpw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors p-1 sm:p-0" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <motion.div 
        className="bg-[#3D1F58] py-3 sm:py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white text-center sm:text-left text-xs sm:text-sm mb-2 sm:mb-0">
              Copyright 2025 Sasha clinics. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" target="_blank" className="text-white hover:text-[#D4AF37] transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <span className="text-white">|</span>
              <Link to="/terms-conditions" target="_blank" className="text-white hover:text-[#D4AF37] transition-colors text-xs sm:text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919234569999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.964-.94 1.161-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.885 9.887-9.885 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885" />
        </svg>
      </a>
    </motion.footer>
  );
};

export default Footer;