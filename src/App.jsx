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
import Blog from './components/blog'

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
    '/blog'   
  ]

  const isErrorPage = !validRoutes.includes(location.pathname)

  return (
    <div className="App">
      <ScrollToTop />
      {!isErrorPage && <Navbar />}

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
        <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />

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
