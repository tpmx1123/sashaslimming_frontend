import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import CookieBanner from './components/CookieBanner'
import ProtectedRoute from './components/ProtectedRoute'

// Lazy load components for better performance
// Core components (loaded immediately - above the fold)
const Home = lazy(() => import('./components/Home'))
const Core = lazy(() => import('./components/Core'))
const Journey = lazy(() => import('./components/Journey'))
const WhySasha = lazy(() => import('./components/WhySasha'))
const QuestionsFQ = lazy(() => import('./components/questionsfq'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

// Service pages (lazy loaded)
const AdvancedSlimming = lazy(() => import('./components/advancedslimmming/AdvancedSlimming'))
const SkinTightening = lazy(() => import('./components/skin-tightening/SkinTightening'))
const InchLoss = lazy(() => import('./components/inch-loss.jsx/InchLoss'))
const FatReduction = lazy(() => import('./components/fat-reduction/FatReduction'))
const SurgicalBodySculpting = lazy(() => import('./components/surgical-body-sculpting/surgical-body-sculpting'))
const MuscleBuildingToning = lazy(() => import('./components/muscle-building&toning/MuscleHero'))

// Blog and Contact (lazy loaded)
const Blog = lazy(() => import('./components/Blog'))
const BlogDetail = lazy(() => import('./components/BlogDetail'))
const ContactUs = lazy(() => import('./components/ContactUs'))

// Admin components (lazy loaded)
const AdminLogin = lazy(() => import('./components/AdminLogin'))
const AdminPanel = lazy(() => import('./components/AdminPanel'))
const BlogFormWrapper = lazy(() => import('./components/admin/BlogFormWrapper'))

// Legal pages (lazy loaded)
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#61338A]"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
)

function AppContent() {
  const location = useLocation()
  const validRoutes = [
    '/',
    '/advanced-slimming',
    '/skin-tightening',
    '/inch-loss',
    '/fat-reduction',
    '/surgical-body-sculpting',
    '/muscle-building-toning',
    '/contact-us',
    '/blog',
    '/admin-login',
    '/admin-panel'
  ]

  const isErrorPage = !validRoutes.includes(location.pathname) && 
                      !location.pathname.startsWith('/admin') &&
                      !location.pathname.startsWith('/admin/blog') &&
                      !location.pathname.startsWith('/blog/')

  // Hide navbar and footer for admin routes
  const isAdminRoute = location.pathname.startsWith('/admin-panel') || 
                       location.pathname.startsWith('/admin-login') ||
                       location.pathname.startsWith('/admin/blog')

  return (
    <div className="App">
      <ScrollToTop />
      {!isErrorPage && !isAdminRoute && <Navbar />}

      <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Core />
            <Journey />
            <WhySasha />
            <FAQ />
            <QuestionsFQ />
            <Footer />
          </>
        } />

        <Route path="/advanced-slimming" element={
          <>
            <AdvancedSlimming />
            <Footer />
          </>
        } />

        <Route path="/skin-tightening" element={
          <>
            <SkinTightening />
            <Footer />
          </>
        } />

        <Route path="/inch-loss" element={
          <>
            <InchLoss />
            <Footer />
          </>
        } />

        <Route path="/fat-reduction" element={
          <>
            <FatReduction />
            <Footer />
          </>
        } />

        <Route path="/surgical-body-sculpting" element={
          <>
            <SurgicalBodySculpting />
            <Footer />
          </>
        } />

        <Route path="/muscle-building-toning" element={
          <>
            <MuscleBuildingToning />
            <Footer />
          </>
        } />

        {/* ✅ NEW CONTACT US ROUTE */}
        <Route path="/contact-us" element={
          <>
            <ContactUs />
            <Footer />
          </>
        } />
          
        <Route path="/blog" element={<><Blog /></>} />
        <Route path="/blog/:slug" element={<><BlogDetail /></>} />
          
          <Route path="/privacy-policy" element={
            <>
              <Navbar />
              <PrivacyPolicy />
            </>
          } />
          
          <Route path="/terms-conditions" element={
            <>
              <Navbar />
              <TermsAndConditions />
            </>
          } />
          
        {/* Admin Routes - Secret Login Page */}
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Protected Admin Panel */}
        <Route path="/admin-panel" element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        } />

        {/* Blog Form Routes */}
        <Route path="/admin/blog/new" element={
          <ProtectedRoute>
            <BlogFormWrapper />
          </ProtectedRoute>
        } />
        
        <Route path="/admin/blog/edit/:id" element={
          <ProtectedRoute>
            <BlogFormWrapper />
          </ProtectedRoute>
        } />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Suspense>
      
      {/* Cookie Banner - Show on all pages except admin routes */}
      {!isAdminRoute && <CookieBanner />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
