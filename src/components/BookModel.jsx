import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

// Custom toast styles
const toastStyle = {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
    zIndex: 9999,
    marginTop: '70px' // Add margin to avoid navbar overlap
  },
  duration: 4000,
  position: 'top-center',
  // Custom success and error styles
  success: {
    style: {
      background: '#4BB543',
      color: 'white',
      border: 'none',
      padding: '16px',
      zIndex: 9999,
      marginTop: '70px'
    },
    iconTheme: {
      primary: 'white',
      secondary: '#4BB543'
    }
  },
  error: {
    style: {
      background: '#FF3333',
      color: 'white',
      border: 'none',
      padding: '16px',
      zIndex: 9999,
      marginTop: '70px'
    },
    iconTheme: {
      primary: 'white',
      secondary: '#FF3333'
    }
  }
}

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
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [charCount, setCharCount] = useState(0)
  const MAX_WORDS = 500

  // Generate time slots from 9AM to 9PM
  const generateTimeSlots = (selectedDate) => {
    const slots = []
    const now = new Date()
    const today = now.toISOString().split('T')[0]
    const isToday = selectedDate === today
    
    for (let hour = 9; hour <= 21; hour++) {
      for (let minute of ['00', '30']) {
        if (hour === 21 && minute === '30') break
        
        const timeValue = `${hour.toString().padStart(2, '0')}:${minute}`
        const period = hour >= 12 ? 'PM' : 'AM'
        const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour)
        const timeLabel = `${displayHour}:${minute} ${period}`
        
        // If it's today, only include future time slots
        if (isToday) {
          const currentTime = now.getHours() * 100 + now.getMinutes()
          const slotTime = hour * 100 + parseInt(minute)
          if (slotTime < currentTime) continue
        }
        
        slots.push({ value: timeValue, label: timeLabel })
      }
    }
    return slots
  }

  const timeSlots = formData.date ? generateTimeSlots(formData.date) : []

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return setEmailError('Email is required'), false
    if (!emailRegex.test(email)) return setEmailError('Enter a valid email'), false
    setEmailError('')
    return true
  }

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^\d+]/g, '')
    const digits = cleaned.replace(/\D/g, '')

    if (!phone) return setPhoneError('Phone number is required'), false
    if (digits.length < 10) return setPhoneError('Number is too short'), false
    if (digits.length > 15) return setPhoneError('Number is too long'), false

    setPhoneError('')
    return true
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle message character count
    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      if (words.length > MAX_WORDS) {
        // If over word limit, truncate the input
        const truncated = words.slice(0, MAX_WORDS).join(' ');
        setFormData(prev => ({
          ...prev,
          [name]: truncated
        }));
        setCharCount(MAX_WORDS);
        return;
      }
      setCharCount(words.length);
    }
    
    // Validate email on change
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
    if (name === 'date') {
      setFormData(prev => ({
        ...prev,
        date: value,
        time: '' // Reset time when date changes
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) return
    if (!validatePhone(formData.phone)) return

    setIsSubmitting(true)

    try {
      await new Promise((res) => setTimeout(res, 1000))

      // Show success toast first
      await toast.success('Your appointment request has been submitted!', {
        ...toastStyle.success,
        duration: 2000 // Show for 2 seconds before closing
      });
      
      // Clear form data after toast is shown
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
      setCharCount(0);
      
      // Close the form after a short delay to ensure toast is visible
      setTimeout(() => onClose(), 500);
    } catch (err) {
      console.error('Form submission error:', err)
      toast.error('Error submitting form. Please try again.', toastStyle.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    // Don't clear form data when closing the modal
    onClose()
  }

  if (!isOpen) return null

  // Add Toaster component at the root level of the component
  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            marginTop: '70px',
            zIndex: 9999
          },
          success: toastStyle.success,
          error: toastStyle.error
        }}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black bg-opacity-50" onClick={handleClose}>
      <div
        className="bg-white rounded-none sm:rounded-lg shadow-xl max-w-2xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#641DC9] to-[#AF57DB] px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-lg sm:text-2xl font-Be-Vietnam text-white">Book The Slimming Journey</h2>
          <button onClick={handleClose}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
          <div className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#641DC9]"
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                />
                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              </div>

              <div>
                <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                />
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
              </div>
            </div>

            {/* DATE + TIME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  disabled={!formData.date}
                  className={`w-full px-4 py-3 border ${!formData.date ? 'bg-gray-100 text-gray-400' : 'bg-white'} border-gray-300 rounded-lg`}
                >
                  <option value="">
                    {formData.date ? 'Select a time' : 'Please select a date first'}
                  </option>
                  {timeSlots.length > 0 ? (
                    timeSlots.map((slot, i) => (
                      <option key={i} value={slot.value}>
                        {slot.label}
                      </option>
                    ))
                  ) : formData.date ? (
                    <option disabled>No available time slots for this date</option>
                  ) : null}
                </select>
              </div>
            </div>

            {/* SERVICE */}
            <div>
              <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select a service</option>
                <option value="consultation">Consultation</option>
                <option value="fat-reduction">Fat Reduction</option>
                <option value="inch-loss">Inch Loss</option>
                <option value="muscle-toning">Muscle Building & Toning</option>
                <option value="skin-tightening">Skin Tightening</option>
                <option value="surgical-sculpting">Surgical Body Sculpting</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-Be-Vietnam text-[#392D44] mb-2">Additional Message</label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  maxLength={3000} // Roughly 500 words * 6 chars per word
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641DC9] focus:border-transparent text-[#22222A] text-base"
                  placeholder="Tell us more about your needs... (max 500 words)"
                ></textarea>
                <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                  {charCount}/{MAX_WORDS} words
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#641DC9] to-[#AF57DB] text-white px-8 py-3 rounded-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full border-2 border-[#641DC9] text-[#641DC9] px-8 py-3 rounded-lg"
              >
                Cancel
              </button>
            </div>

          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default BookModel
