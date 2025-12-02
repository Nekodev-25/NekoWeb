import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function AreasSlider() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)

  const translations = {
    es: {
      title: 'Todo en un mismo espacio',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      ctaButton: 'Conocenos',
      areas: [
        {
          id: 1,
          title: 'ÁREA',
          location: 'Buenos Aires, Argentina',
          tagline: 'Creamos para todo el mundo',
          character: 'programador', // Gatito programador
        },
        {
          id: 2,
          title: 'ÁREA',
          location: 'Buenos Aires, Argentina',
          tagline: 'Creamos para todo el mundo',
          character: 'diseñador', // Gatito diseñador
        },
        {
          id: 3,
          title: 'ÁREA',
          location: 'Buenos Aires, Argentina',
          tagline: 'Creamos para todo el mundo',
          character: 'marketing', // Gatito marketing
        },
      ],
    },
    en: {
      title: 'Everything in one space',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      ctaButton: 'Know Us',
      areas: [
        {
          id: 1,
          title: 'AREA',
          location: 'Buenos Aires, Argentina',
          tagline: 'We create for everyone',
          character: 'programmer',
        },
        {
          id: 2,
          title: 'AREA',
          location: 'Buenos Aires, Argentina',
          tagline: 'We create for everyone',
          character: 'designer',
        },
        {
          id: 3,
          title: 'AREA',
          location: 'Buenos Aires, Argentina',
          tagline: 'We create for everyone',
          character: 'marketing',
        },
      ],
    },
  }

  const t = translations[language]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.areas.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.areas.length) % t.areas.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className={`snap-start min-h-screen py-32 overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`} style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6">
        {/* Header con título y descripción */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 items-start">
          {/* Columna izquierda - Título */}
          <div>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black mb-8 text-left leading-[100px] transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
              {t.title}
            </h2>
          </div>

          {/* Columna derecha - Descripción y botón */}
          <div className="flex flex-col justify-start">
            <p className={`mb-6 leading-relaxed text-left transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.description}
            </p>
            <button className={`
              px-8 
              py-4 
              rounded-lg
              font-medium 
              transition-colors 
              duration-200
              text-base
              self-start
              ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
            `} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.ctaButton}
            </button>
          </div>
        </div>

        {/* Slider de áreas - Muestra 3 cards visibles */}
        <div className="relative">
          {/* Contenedor del slider */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {t.areas.map((area) => (
                <div
                  key={area.id}
                  className="flex-shrink-0 flex justify-center"
                >
                  <div className="relative">
                    {/* Área gris grande arriba - imagen cuadrada más grande (207px), sin bordes redondeados */}
                    <div className="w-[207px] h-[207px] aspect-square bg-gray-200 overflow-hidden relative z-20 shadow-lg">
                      <img
                        src={
                          area.character === 'programador' || area.character === 'programmer' 
                            ? 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop'
                            : area.character === 'diseñador' || area.character === 'designer'
                            ? 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop'
                            : 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
                        }
                        alt={area.character}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Línea separadora continua - abarca toda la pantalla, pegada a la parte inferior de las imágenes (1px, gris) */}
            <div 
              className={`absolute h-[1px] transition-colors duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-400'}`}
              style={{ 
                top: '207px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100vw',
                pointerEvents: 'none',
                zIndex: 10
              }}
            ></div>
            
            {/* Texto debajo de la línea - centrado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
              {t.areas.map((area) => (
                <div
                  key={area.id}
                  className="space-y-1 text-center"
                >
                  {/* Título ÁREA */}
                  <h3 className={`text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {area.title}
                  </h3>
                  
                  {/* Información de contacto */}
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {area.location}
                  </p>
                  
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {area.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación - centrados en la mitad de la altura de las imágenes */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 -translate-x-8 w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            style={{ top: '103.5px' }}
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 translate-x-8 w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            style={{ top: '103.5px' }}
            aria-label="Slide siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AreasSlider

