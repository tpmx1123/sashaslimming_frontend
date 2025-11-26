import React, { useState } from 'react'

const BookModel = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      alert('Thank you! Your appointment request has been submitted. We will contact you soon.')
      handleClose()
    }, 1000)
  }

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black bg-opacity-50" onClick={handleClose}>
      <div 
        className="bg-white rounded-none sm:rounded-lg shadow-xl max-w-2xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between rounded-none sm:rounded-t-lg sticky top-0 z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular font-Be-Vietnam text-white pr-2">
            Book The Slimming Journey
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
              >
                <option value="">Select a service</option>
                <option value="consultation">Consultation</option>
                <option value="fat-reduction">Fat Reduction</option>
                <option value="inch-loss">Inch Loss</option>
                <option value="muscle-toning">Muscle Building & Toning</option>
                <option value="skin-tightening">Skin Tightening</option>
                <option value="surgical-sculpting">Surgical Body Sculpting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-regular font-Be-Vietnam text-[#392D44] mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] resize-none text-base"
                placeholder="Tell us about your concerns or any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-2 bg-gradient-to-r from-[#641DC9] to-[#AF57DB] text-white font-regular font-Be-Vietnam px-6 sm:px-8 py-3 sm:py-3 rounded-lg hover:from-[#7A1BD2] hover:to-[#B866E8] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:flex-1 bg-white border-2 border-[#641DC9] text-[#641DC9] font-regular font-Be-Vietnam px-6 sm:px-8 py-3 rounded-lg hover:bg-sasha-purple-light transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookModel

