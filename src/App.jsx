import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Catering from './pages/Catering'
import About from './pages/About'
import Contact from './pages/Contact'
import Packages from './pages/Packages'

// Lazy-loaded page modules — code split per route
const CuisineExperiencePage = React.lazy(() => import('./pages/CuisineExperiencePage'));
const ChapterExperiencePage = React.lazy(() => import('./pages/ChapterExperiencePage'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0908] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border border-primary-gold/40 border-t-primary-gold rounded-full animate-spin" />
      <p className="font-sans text-xs tracking-widest uppercase text-primary-gold/60">Loading</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

          {/* System B: Chapter pages — MUST be before /menu/:cuisineId to avoid collision */}
          <Route
            path="/menu/chapters/:chapterId"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <ChapterExperiencePage />
              </React.Suspense>
            }
          />

          {/* System A: Cuisine pages */}
          <Route
            path="/menu/:cuisineId"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <CuisineExperiencePage />
              </React.Suspense>
            }
          />

          <Route path="/catering" element={<Catering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
