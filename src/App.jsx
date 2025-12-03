import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDarkMode } = useTheme()

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`}>
        <ThemeSelector />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
