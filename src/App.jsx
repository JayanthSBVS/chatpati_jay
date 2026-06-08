import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'

// We will create these pages next based on user instruction
import Menu from './pages/Menu'
import Catering from './pages/Catering'
import About from './pages/About'
import Contact from './pages/Contact'
import Packages from './pages/Packages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
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
