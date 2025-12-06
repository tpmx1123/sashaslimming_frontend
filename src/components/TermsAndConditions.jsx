import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <SEO 
        title="Terms & Conditions | Sasha Slimming"
        description="Read Sasha Slimming's terms and conditions for using our services and website."
        keywords="terms and conditions, terms of service, legal terms"
        canonical="https://sashaslimming.com/terms-conditions"
        noindex={true}
      />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto overflow-hidden mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3D1F58] to-[#5A3A7E] py-8 sm:py-12 shadow-md rounded-lg">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">Terms & Conditions</h1>
              <p className="text-[#D4AF37] text-lg sm:text-xl">Please read these terms carefully</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-white rounded-b-lg shadow-lg">
            <div className="p-6 sm:p-8">
              <div className="prose max-w-none text-gray-700">
                <section className="mb-8">
                  <p className="text-gray-600 mb-6">
                    Sasha Slimming is committed to maintaining transparency in all interactions with our clients and website visitors. By accessing sashaslimming.com or availing our slimming and wellness services, you agree to the terms and conditions outlined below.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Payment & Services</h2>
                  <p className="mb-4">
                    All payments for slimming, wellness, and body-transformation services can be made through online transfer, debit or credit cards, UPI, demand drafts, or cheques. Services are provided strictly according to the selected package or treatment plan. Once payment is made, refunds are not offered under any circumstance. However, eligible adjustments may be issued as credit, which can be used toward other slimming programs, wellness treatments, procedures, or products available at Sasha Slimming.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Appointment Validity</h2>
                  <p>
                    Consultations, assessment reports, treatment plans, and follow-up sessions issued by Sasha Slimming have a validity period of 15 days unless specifically stated otherwise. Credit notes, offers, discounts, and gift vouchers must be used before their expiration date. Expired credits or vouchers cannot be reinstated or extended.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Product Exchange Policy</h2>
                  <p>
                    Products purchased from Sasha Slimming may be exchanged only if they are defective. Exchanges must be completed within ten days from the date of purchase and must be supported by a valid receipt. Exchanges can only be processed at the same Sasha Slimming branch where the product was originally purchased. Products purchased under special offers, discounts, or promotional schemes cannot be returned or exchanged.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Policy Changes</h2>
                  <p>
                    Sasha Slimming reserves the right to update or modify these terms and conditions at any time without prior notice. Clients and visitors are encouraged to review this page regularly to stay informed about any updates.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Jurisdiction</h2>
                  <p>
                    In the event of any disagreement or dispute, the matter shall be resolved under the jurisdiction applicable to the operational location of Sasha Slimming.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Receipts & Documentation</h2>
                  <p>
                    Clients are advised to retain all receipts, invoices, prescriptions, assessment reports, and treatment-related documents for future reference. These may be required for follow-up sessions, tracking progress, clarifications, or any service-related verification.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Communication & Contact Authorization</h2>
                  <p className="mb-4">
                    By using sashaslimming.com or submitting your details through our website, consultation forms, or landing pages, you authorize Sasha Slimming to contact you via email, phone calls, WhatsApp, or SMS. Communications may include appointment scheduling, session reminders, treatment updates, service information, and promotional messages. Even if your phone number is registered under DND, DNC, or NCPR, you agree to receive communications from us for service-related or promotional purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[#3D1F58] mb-4">Consent for Communications</h2>
                  <p className="mb-4">
                    By sharing your contact information with Sasha Slimming, you consent to receiving SMS alerts, promotional messages, health reminders, calls, updates, and other service-related communication from Sasha Slimming or authorized third-party providers. This consent remains valid regardless of your number's registration status under national Do Not Call or Customer Preference registries. You agree not to hold Sasha Slimming or its service partners responsible for these communications or dispute them under the Telecom Commercial Communications Customer Preference (TRAI) Regulations, 2010, or any related rules.
                  </p>
                  <p className="mt-4">
                    This communication service renews automatically every month. If you wish to stop receiving calls or messages, you must send an email request to the support email listed on our website and also contact the given support number before the renewal date. Once any payment related to this service is deducted, it cannot be refunded.
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

export default TermsAndConditions;