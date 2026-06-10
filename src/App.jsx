import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Takeaway from './pages/Takeaway'
import Story from './pages/Story'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import ChapterExperiencePage from './pages/ChapterExperiencePage'

// Dynamic imports removed

const PageLoader = () => (
  <div className="min-h-screen bg-surface-base flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border border-accent-gold/40 border-t-accent-gold rounded-full animate-spin" />
      <p className="font-sans text-xs tracking-widest uppercase text-accent-gold/60">Loading</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Main New Routes */}
          <Route path="/story" element={<Story />} />
          <Route path="/catering" element={<Menu />} />
          <Route path="/takeaway" element={<Takeaway />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu/chapters/:slug" element={<ChapterExperiencePage />} />
          
          {/* Compatibility Redirects */}
          <Route path="/about" element={<Navigate to="/story" replace />} />
          <Route path="/menu" element={<Navigate to="/catering" replace />} />



          <Route path="/packages" element={<Packages />} />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/catering" replace />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
