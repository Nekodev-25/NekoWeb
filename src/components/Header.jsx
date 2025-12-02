import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()

  const translations = {
    es: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      caseStudies: 'Casos de estudio',
      contact: 'Contacto',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      caseStudies: 'Case studies',
      contact: 'Contact',
    },
  }

  const t = translations[language]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={isDarkMode ? "/images/logo-blanco.png" : "/images/logo-negro.png"} 
              alt="Neko Dev Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Navegación central - Centrada */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className={`relative transition text-sm pb-2 group ${
                isActive('/') 
                  ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.home}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                isActive('/') 
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </Link>
            <Link
              to="/about"
              className={`relative transition text-sm pb-2 group ${
                isActive('/about') 
                  ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.about}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                isActive('/about') 
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </Link>
            <Link
              to="/services"
              className={`relative transition text-sm pb-2 group ${
                isActive('/services') 
                  ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.services}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                isActive('/services') 
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </Link>
            <Link
              to="/case-studies"
              className={`relative transition text-sm pb-2 group ${
                isActive('/case-studies') 
                  ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.caseStudies}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                isActive('/case-studies') 
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </Link>
            <Link
              to="/contact"
              className={`relative transition text-sm pb-2 group ${
                isActive('/contact') 
                  ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.contact}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                isActive('/contact') 
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </Link>
          </div>
          
          {/* Idioma y Tema */}
          <div className="hidden md:flex items-center gap-4">
            {/* Switch de idioma */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-900'}`}
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {language === 'es' ? 'ES' : 'EN'}
              </span>
            </button>
            {/* Icono día/noche */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-900'}`}
              title={isDarkMode ? 'Modo día' : 'Modo noche'}
            >
              {isDarkMode ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {/* Menú móvil */}
          <button
            className={`md:hidden transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block transition ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.home}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block transition ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.about}
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block transition ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.services}
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setIsMenuOpen(false)}
              className={`block transition ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.caseStudies}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block transition ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
            >
              {t.contact}
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition flex-1 ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-900'}`}
              >
                <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {language === 'es' ? 'ES' : 'EN'}
                </span>
              </button>
              <button
                onClick={toggleTheme}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-900'}`}
              >
                {isDarkMode ? (
                  <HiSun className="w-5 h-5" />
                ) : (
                  <HiMoon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
