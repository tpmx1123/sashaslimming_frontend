import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <SEO 
        title="Privacy Policy | Sasha Slimming"
        description="Read Sasha Slimming's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, privacy terms"
        canonical="https://sashaslimming.com/privacy-policy"
        noindex={true}
      />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto overflow-hidden mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header inside motion.div */}
          <div className="bg-gradient-to-r from-[#3D1F58] to-[#5A3A7E] py-8 sm:py-12 shadow-md rounded-lg">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">Privacy Policy</h1>
              <p className="text-[#D4AF37] text-lg sm:text-xl">Your privacy is important to us</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-white rounded-b-lg shadow-lg">
            <div className="p-6 sm:p-8">
            <div className="prose max-w-none text-gray-700">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Introduction</h2>
                <p className="text-gray-600 mb-6">
                  At Sasha Slimming, we value your privacy and are committed to maintaining complete transparency about how we collect, use, and protect your information. This policy explains the practices we follow when you interact with our website or slimming services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Information We Collect</h2>
                <p className="mb-4">
                  We collect personal details only when you voluntarily provide them through our forms. This includes your name, email address, phone number, wellness goals, and any additional information you submit. When you contact us, book a consultation, or subscribe to updates, your information is used only for communication related to assessments, appointments, service updates, promotions, and announcements from Sasha Slimming. 
                </p>
                <p>
                  We do not add your information to any external mailing lists, and you may unsubscribe at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  The information you provide is used to respond to your inquiries, confirm appointments, offer slimming-related updates, and improve your browsing and consultation experience on our website. 
                </p>
                <p>
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Compliance With Privacy Laws</h2>
                <p className="mb-4">
                  Sasha Slimming follows all applicable privacy and data protection laws. We implement industry-standard security measures to ensure your information remains safe. Personal data is not disclosed to anyone unless required by law. This policy applies to all digital platforms managed by Sasha Slimming.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Content Accuracy and Health Disclaimer</h2>
                <p className="mb-4">
                  Our website provides general information about slimming treatments, wellness programs, and body transformation services. While we aim to offer accurate and helpful guidance reviewed by professionals, the information on our website should not be considered medical or clinical advice. 
                </p>
                <p>
                  Visitors are encouraged to consult a licensed healthcare provider, nutritionist, or certified specialist before making decisions related to any slimming or wellness treatments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Use of Non-Identifiable Data</h2>
                <p className="mb-4">
                  We may use non-identifiable data to understand website traffic, analyze user behavior, and improve our services. This data does not reveal the identity of any user and is used only for analytical and marketing improvements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Cookies Usage</h2>
                <p className="mb-4">
                  Our website uses cookies to enhance your experience, remember your preferences, and analyze website performance. Cookies do not provide access to personal files or sensitive information. You may disable cookies through your browser settings, although some website features may be affected.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">IP Address Information</h2>
                <p className="mb-4">
                  Your IP address may be used to diagnose technical issues, understand general user demographics, and improve website performance. This information is used only for operational and analytical purposes and does not personally identify you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">External Links</h2>
                <p className="mb-4">
                  Our website may include links to external websites for additional information or convenience. While we review these links initially, we do not control or monitor their content or privacy practices. We advise visitors to review the privacy policies of external websites before sharing personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Security Measures</h2>
                <p className="mb-4">
                  At Sasha Slimming, we regularly update and improve our security systems to safeguard your data from unauthorized access or misuse. Although no digital platform can guarantee complete security, we take every reasonable precaution to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Changes to This Privacy Policy</h2>
                <p>
                  Sasha Slimming may update or modify this privacy policy at any time without prior notice. We recommend visiting this page periodically to stay informed about how we continue to protect your privacy.
                </p>
              </section>
            </div>
          </div>
        </div>
        </motion.div>

        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 py-4 bg-gray-50 border-t border-gray-100">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#3D1F58] hover:text-[#D4AF37] font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;