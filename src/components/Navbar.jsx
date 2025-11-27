import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import BookModel from './BookModel'

const Navbar = () => {
  const [concernsOpen, setConcernsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileConcernsOpen, setMobileConcernsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-t-2 border-b-[3px] border-sasha-purple-light shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand Info - Left Side */}
          <div className="flex items-center space-x-16 flex-shrink-0">
            <Link to="/">
              <img 
                src={logo} 
                alt="SASHA Logo" 
                className="h-36 w-36 object-contain"
              />
            </Link>
             <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sasha-purple-deeper font-semibold uppercase text-[15px] hover:text-sasha-purple-dark transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className="text-sasha-purple-deeper font-semibold uppercase text-[15px] hover:text-sasha-purple-dark transition-colors flex items-center"
                onMouseEnter={() => setConcernsOpen(true)}
                onMouseLeave={() => setConcernsOpen(false)}
              >
                CONCERNS
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {concernsOpen && (
                <div 
                  className="absolute top-full left-0 pt-1 w-48 z-50"
                  onMouseEnter={() => setConcernsOpen(true)}
                  onMouseLeave={() => setConcernsOpen(false)}
                >
                  <div className="bg-white shadow-lg rounded-md py-2 mt-0">
                    <Link to="/advanced-slimming" className="block px-4 py-2 text-sm text-sasha-purple-deeper hover:bg-sasha-purple-light">Advanced Slimming</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="text-sasha-purple-deeper font-semibold uppercase text-[15px] hover:text-sasha-purple-dark transition-colors flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                SERVICES
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 pt-1 w-48 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-white shadow-lg rounded-md py-2 mt-0">
                    <Link to="/skin-tightening" className="block px-4 py-2 text-sm text-sasha-purple-deeper hover:bg-sasha-purple-light">Skin Tightening</Link>
                    <Link to="/inch-loss" className="block px-4 py-2 text-sm text-sasha-purple-deeper hover:bg-sasha-purple-light">Inch Loss</Link>
                    <Link to="/fat-reduction" className="block px-4 py-2 text-sm text-sasha-purple-deeper hover:bg-sasha-purple-light">Fat Reduction</Link>
                    <Link to="/surgical-body-sculpting" className="block px-4 py-2 text-sm text-sasha-purple-deeper hover:bg-sasha-purple-light">Surgical Body Sculpting</Link>
                    <Link to="/muscle-building-toning" className="block px-4 py-2 text-sm text-sasha-purple-deeper hover:bg-sasha-purple-light">Muscle Building & Toning</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-sasha-purple-deeper font-semibold uppercase text-[15px] hover:text-sasha-purple-dark transition-colors">
              Blog
            </Link>
            <Link to="/contact-us" className="text-sasha-purple-deeper font-semibold uppercase text-[15px] hover:text-sasha-purple-dark transition-colors">
              Contact Us
            </Link>
          </div>
            
          </div>

          {/* Right Side - Button and Contact */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            {/* Book Appointment Button */}
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden md:block bg-white border border-sasha-purple-deeper text-sasha-purple-deeper font-semibold px-6 py-2 rounded-[10px] uppercase text-xs hover:bg-sasha-purple-light transition-colors whitespace-nowrap"
            >
              Book Appointment
            </button>

            {/* Phone Numbers */}
            <div className="hidden lg:flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919234569999" className="text-sasha-purple-deeper font-semibold text-sm hover:text-sasha-purple-dark transition-colors">9234569999</a>
              </div>
              
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-sasha-purple-deeper"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-sasha-purple-light py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sasha-purple-deeper font-semibold uppercase text-[10px] hover:text-sasha-purple-dark transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-4">
                <button 
                  className="text-sasha-purple-deeper font-semibold uppercase text-[10px] hover:text-sasha-purple-dark transition-colors flex items-center w-full justify-between"
                  onClick={() => setMobileConcernsOpen(!mobileConcernsOpen)}
                >
                  CONCERNS
                  <svg 
                    className={`w-3 h-3 transition-transform ${mobileConcernsOpen ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileConcernsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link 
                      to="/advanced-slimming" 
                      className="block text-sm text-sasha-purple-deeper hover:text-sasha-purple-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Advanced Slimming
                    </Link>
                   
                    
                  </div>
                )}
              </div>

              <div className="px-4">
                <button 
                  className="text-sasha-purple-deeper font-semibold uppercase text-[10px] hover:text-sasha-purple-dark transition-colors flex items-center w-full justify-between"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  SERVICES
                  <svg 
                    className={`w-3 h-3 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a 
                      href="/skin-tightening" 
                      className="block text-sm text-sasha-purple-deeper hover:text-sasha-purple-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                     Skin Tightening
                    </a>
                    <a 
                      href="/inch-loss" 
                      className="block text-sm text-sasha-purple-deeper hover:text-sasha-purple-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Inch Loss
                    </a>
                    <a 
                      href="/fat-reduction" 
                      className="block text-sm text-sasha-purple-deeper hover:text-sasha-purple-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Fat Reduction 
                    </a>
                    <a 
                      href="/surgical-body-sculpting" 
                      className="block text-sm text-sasha-purple-deeper hover:text-sasha-purple-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Surgical Body Sculpting
                    </a>
                    <a 
                      href="/muscle-building-toning" 
                      className="block text-sm text-sasha-purple-deeper hover:text-sasha-purple-dark"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Muscle Building & Toning
                    </a>
                  </div>
                )}
              </div>

              <Link 
                to="/blog" 
                className="text-sasha-purple-deeper font-semibold uppercase text-[10px] hover:text-sasha-purple-dark transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact-us" 
                className="text-sasha-purple-deeper font-semibold uppercase text-[10px] hover:text-sasha-purple-dark transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile Book Appointment Button */}
              <div className="px-4 pt-2">
                <button 
                  onClick={() => {
                    setIsBookingModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full bg-white border border-sasha-purple-deeper text-sasha-purple-deeper font-semibold px-6 py-2 rounded-[10px] uppercase text-[10px] hover:bg-sasha-purple-light transition-colors"
                >
                  Book Appointment
                </button>
              </div>

              {/* Mobile Phone Numbers */}
              <div className="px-4 space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+919234569999" className="text-sasha-purple-deeper font-semibold text-sm hover:text-sasha-purple-dark transition-colors">9234569999</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </nav>
  )
}

export default Navbar

