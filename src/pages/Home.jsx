import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import AreasSlider from '../components/AreasSlider'
import AboutUs from '../components/AboutUs'
import Contactanos from '../components/Contactanos'

function Home() {
  const location = useLocation()
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const translations = {
    es: {
      backToTop: '↑ Volver arriba'
    },
    en: {
      backToTop: '↑ Back to top'
    }
  }

  const t = translations[language]

  useEffect(() => {
    // Si hay un hash en la URL (ej: /#contact), hacer scroll a esa sección
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Pequeño delay para asegurar que el componente esté renderizado
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [location.hash])

  useEffect(() => {
    const handleScroll = () => {
      // Calcular la posición del scroll
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const footerHeight = 400 // Altura aproximada del footer
      
      // Mostrar el botón cuando estamos cerca del footer (a 500px del final)
      if (scrollPosition >= documentHeight - footerHeight - 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <AreasSlider />
      <AboutUs />
      <Contactanos />
      
      {/* Botón volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`
            fixed right-6 bottom-8
            w-12 h-12
            rounded-full
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110 active:scale-95
            border-2
            z-50
            ${isDarkMode 
              ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
              : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
            }
          `}
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  )
}

export default Home

