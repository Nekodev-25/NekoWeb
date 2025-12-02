import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function AboutUs() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: 'Nosotros',
      description: 'Somos puchitos que lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    },
    en: {
      title: 'About Us',
      description: 'We are puchitos that lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    },
  }

  const t = translations[language]

  return (
    <section className={`snap-start min-h-screen py-32 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`} style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black mb-12 text-left leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Contenido: Imágenes a la izquierda, texto a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Dos imágenes personales más pequeñas */}
          <div className="flex flex-col gap-6">
            <div className={`w-64 h-64 rounded-lg overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Team member 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`w-64 h-64 rounded-lg overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Team member 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Columna derecha - Texto centrado verticalmente */}
          <div className="flex items-center">
            <p className={`leading-relaxed text-left transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

