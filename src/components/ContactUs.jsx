import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { contactService } from '../services/contactService'
import SEO from './SEO'

const bannerImage =
  'https://res.cloudinary.com/di4caiech/image/upload/v1764238157/contact_slim_nj7mks.jpg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    message: ''
  })
  const [charCount, setCharCount] = useState(0)
  const MAX_WORDS = 500

  // Hide success message after 5 seconds
  useEffect(() => {
    let timer
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [showSuccess])

  // Check for success parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true)
      // Clear the success parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return 'Email is required'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '')
    if (!phone) return 'Phone number is required'
    if (digits.length < 10) return 'Number is too short'
    if (digits.length > 15) return 'Number is too long'
    return ''
  }

  const validateMessage = (message) => {
    const words = message.trim().split(/\s+/).filter(word => word.length > 0)
    if (words.length === 0) return 'Message is required'
    if (words.length > MAX_WORDS) return `Message cannot exceed ${MAX_WORDS} words`
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Update word count for message field
    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0)
      setCharCount(words.length)
    }
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const emailError = validateEmail(formData.email)
    const phoneError = validatePhone(formData.phone)
    const messageError = validateMessage(formData.message)
    
    setErrors({
      email: emailError,
      phone: phoneError,
      message: messageError
    })
    
    // Don't submit if there are validation errors
    if (emailError || phoneError || messageError) {
      toast.error('Please fix the errors in the form', {
        style: {
          background: '#FF3333',
          color: 'white',
          marginTop: '70px'
        }
      })
      return
    }
    
    setIsSubmitting(true)

    try {
      const result = await contactService.submitContactForm(formData)

      if (result.success) {
        // Show success toast
        toast.success(result.message || 'Your message has been sent successfully!', {
          style: {
            background: '#4BB543',
            color: 'white',
            marginTop: '70px'
          }
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setCharCount(0)
        setErrors({
          email: '',
          phone: '',
          message: ''
        })
        setShowSuccess(true)
        setIsSubmitting(false)

        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.', {
          style: {
            background: '#FF3333',
            color: 'white',
            marginTop: '70px'
          }
        })
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('There was an error sending your message. Please try again or contact us directly.', {
        style: {
          background: '#FF3333',
          color: 'white',
          marginTop: '70px'
        }
      })
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Phone',
      subtitle: 'Call us anytime',
      details: [
        { value: '+91 9234569999', link: 'tel:+919234569999' }
      ],
      gradient: 'from-blue-300 to-blue-400',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email',
      subtitle: 'Drop us a line',
      details: [{ value: 'hello@sashaclinics.com', link: 'mailto:hello@sashaclinics.com' }],
      gradient: 'from-pink-300 to-rose-400',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Location',
      subtitle: 'Visit our clinic',
      details: [
        {
          value: 'Sasha Luxe Slimming -Madhapur',
          link: 'https://maps.app.goo.gl/kpJQHRo74kgwtvDi9',
        },
      ],
      gradient: 'from-emerald-300 to-teal-400',
    },
  ]

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-gray-50 via-white to-[#E8D5FF]/20 pt-24 min-h-screen"
      initial="hidden"
    >
      <SEO 
        title="Contact Us - Book Your Consultation | Sasha Slimming"
        description="Get in touch with Sasha Slimming for expert consultations on fat reduction, inch loss, skin tightening, and body sculpting treatments. Book your appointment today."
        keywords="contact sasha slimming, book consultation, slimming clinic contact, appointment booking, body transformation consultation"
        canonical="https://sashaslimming.com/contact-us"
      />
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div
        className="w-full relative bg-no-repeat bg-cover bg-center overflow-hidden flex items-center justify-center h-[200px] md:h-[270px]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        variants={itemVariants}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B886E8]/70 via-[#D4AF37]/15 to-[#E8D5FF]/70 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            variants={headingVariants}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We're here to help you on your journey to a better you.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {info.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#392D44] mb-2">{info.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{info.subtitle}</p>

                {/* Details */}
                <div className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <a
                      key={idx}
                      href={detail.link}
                      target={detail.link.startsWith('http') ? '_blank' : '_self'}
                      rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block text-[#B886E8] hover:text-[#61338A] font-semibold transition-colors group-hover:translate-x-2 duration-300"
                    >
                      {detail.value}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form and Additional Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form Section */}
          <motion.div variants={itemVariants} className="lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#392D44] mb-3">
                  Send Us a Message
                </h2>
                <p className="text-[#392D44]/70 text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you
                      soon.
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#392D44] mb-2.5"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B886E8] focus:border-[#B886E8] text-[#22222A] text-base transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#392D44] mb-2.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-3.5 border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B886E8] focus:border-[#B886E8] text-[#22222A] text-base transition-all bg-gray-50 focus:bg-white`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#392D44] mb-2.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-3.5 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B886E8] focus:border-[#B886E8] text-[#22222A] text-base transition-all bg-gray-50 focus:bg-white`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#392D44] mb-2.5"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B886E8] focus:border-[#B886E8] text-[#22222A] text-base transition-all bg-gray-50 focus:bg-white"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#392D44] mb-2.5"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className={`w-full px-5 py-3.5 border-2 ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-[#641DC9] text-[#22222A] resize-none text-base transition-all bg-gray-50 focus:bg-white`}
                      placeholder="Tell us how we can help you..."
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                      {charCount}/{MAX_WORDS} words
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-purple-50 to-pink-50 text-[#392D44] font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base relative overflow-hidden group border border-purple-100"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Additional Information Section */}
          <motion.div variants={itemVariants} className="lg:order-1">
            <div className="space-y-8">
              {/* About Section */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-[#392D44] mb-4">Why Choose Sasha Luxe?</h3>
                <p className="text-[#392D44]/80 leading-relaxed mb-6">
                  At <span className="font-bold text-[#B886E8]">Sasha Luxe</span>, we're committed to
                  providing you with exceptional care and support. Whether you have questions about
                  our services, want to schedule a consultation, or need assistance, our team is
                  ready to help.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#B886E8] to-[#E8D5FF] flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-[#61338A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#392D44]/80">Expert medical professionals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#B886E8] to-[#E8D5FF] flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-[#61338A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#392D44]/80">Personalized treatment plans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#B886E8] to-[#E8D5FF] flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-[#61338A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#392D44]/80">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#392D44] mb-6">Follow Us</h3>
                <p className="text-[#392D44]/70 mb-6">
                  Stay connected with us on social media for the latest updates, tips, and success
                  stories.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/sashaluxeslimming?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="YouTube"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#392D44]/80">Monday - Saturday</span>
                    <span className="font-semibold text-[#392D44]">9:00 AM - 9:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#392D44]/80">Sunday</span>
                    <span className="font-semibold text-[#392D44]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </motion.div>
  )
}

export default ContactUs
