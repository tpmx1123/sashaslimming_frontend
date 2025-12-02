import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Core from './components/Core'
import Journey from './components/Journey'
import WhySasha from './components/WhySasha'
import QuestionsFQ from './components/questionsfq'  
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import AdvancedSlimming from './components/advancedslimmming/AdvancedSlimming'
import SkinTightening from './components/skin-tightening/SkinTightening'
import InchLoss from './components/inch-loss.jsx/InchLoss' 
import FatReduction from './components/fat-reduction/FatReduction'
import SurgicalBodySculpting from './components/surgical-body-sculpting/surgical-body-sculpting'
import MuscleBuildingToning from './components/muscle-building&toning/MuscleHero'
import ErrorPage from './components/ErrorPage'
import ContactUs from './components/ContactUs'   
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'
import BlogFormWrapper from './components/admin/BlogFormWrapper'
import ProtectedRoute from './components/ProtectedRoute'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'

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
        <Route path="/privacy-policy" element={<> <Navbar /> <PrivacyPolicy /></>} />
        <Route path="/terms-conditions" element={<> <Navbar /> <TermsAndConditions /></>} />
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
