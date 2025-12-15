import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AreasSlider() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.25)
  const sliderRef = useRef(null)

  // Detectar si estamos en mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const translations = {
    es: {
      title: 'Todo en un espacio',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      ctaButton: 'Conocenos',
      areas: [
        {
          id: 1,
          title: 'DISEÑO',
          location: 'Buenos Aires, Argentina',
          tagline: 'Diseñamos experiencias únicas y memorables',
          characterKey: 'designer',
        },
        {
          id: 2,
          title: 'DESARROLLO',
          location: 'Buenos Aires, Argentina',
          tagline: 'Creamos soluciones tecnológicas innovadoras',
          characterKey: 'dev',
        },
        {
          id: 3,
          title: 'DIRECCIÓN DE PROYECTOS',
          location: 'Buenos Aires, Argentina',
          tagline: 'Llevamos adelante tus proyectos con seriedad y estrategia',
          characterKey: 'boss',
        },
        {
          id: 4,
          title: 'REDES SOCIALES',
          location: 'Buenos Aires, Argentina',
          tagline: 'Gestionamos tu comunidad y presencia en redes',
          characterKey: 'social',
        },
        {
          id: 5,
          title: 'UX / PRODUCTO',
          location: 'Buenos Aires, Argentina',
          tagline: 'Diseñamos experiencias digitales centradas en las personas',
          characterKey: 'ux',
        },
        {
          id: 6,
          title: 'MARKETING',
          location: 'Buenos Aires, Argentina',
          tagline: 'Potenciamos tu marca con estrategias creativas',
          characterKey: 'marketing',
        },
      ],
    },
    en: {
      title: 'All in one space',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      ctaButton: 'Know Us',
      areas: [
        {
          id: 1,
          title: 'DESIGN',
          location: 'Buenos Aires, Argentina',
          tagline: 'We design unique and memorable experiences',
          characterKey: 'designer',
        },
        {
          id: 2,
          title: 'DEVELOPMENT',
          location: 'Buenos Aires, Argentina',
          tagline: 'We create innovative technological solutions',
          characterKey: 'dev',
        },
        {
          id: 3,
          title: 'PROJECT LEAD',
          location: 'Buenos Aires, Argentina',
          tagline: 'We lead your projects with strategy and responsibility',
          characterKey: 'boss',
        },
        {
          id: 4,
          title: 'SOCIAL MEDIA',
          location: 'Buenos Aires, Argentina',
          tagline: 'We manage your community and social presence',
          characterKey: 'social',
        },
        {
          id: 5,
          title: 'UX / PRODUCT',
          location: 'Buenos Aires, Argentina',
          tagline: 'We craft user-centered digital experiences',
          characterKey: 'ux',
        },
        {
          id: 6,
          title: 'MARKETING',
          location: 'Buenos Aires, Argentina',
          tagline: 'We boost your brand with creative strategies',
          characterKey: 'marketing',
        },
      ],
    },
  }

  const characterImages = {
    dev: {
      light: '/images/gatitos/dia/dev_dia-15.png',
      dark: '/images/gatitos/noche/dev_noche-04.png',
    },
    designer: {
      light: '/images/gatitos/dia/diseñador_dia-12.png',
      dark: '/images/gatitos/noche/diseñador_noche-08.png',
    },
    social: {
      light: '/images/gatitos/dia/redes_dia-16.png',
      dark: '/images/gatitos/noche/redes_noche-09.png',
    },
    ux: {
      light: '/images/gatitos/dia/ux_dia-13.png',
      dark: '/images/gatitos/noche/ux_noche-07.png',
    },
    marketing: {
      light: '/images/gatitos/dia/marketing_dia-17.png',
      dark: '/images/gatitos/noche/marketing_noche-10.png',
    },
    boss: {
      light: '/images/gatitos/dia/Jefe-dia.png',
      dark: '/images/gatitos/noche/Jefe.png',
    },
  }

  const t = translations[language]

  const getCharacterOffset = (key) => {
    // Base offset para que todos queden cerca de la línea
    const baseOffset = isMobile ? 18 : 22

    // Ajustes finos por gatito
    if (key === 'dev') return baseOffset - 2 // Dev un poco más arriba (no toca la línea)
    if (key === 'marketing' || key === 'social' || key === 'ux') return baseOffset + 4 // Segundo slide más pegado a la línea

    return baseOffset
  }

  // Para desktop: 2 slides de 3 imágenes cada uno (0-2, 3-5)
  // Para mobile: 6 slides de 1 imagen cada uno
  const totalDesktopSlides = 2 // 2 grupos de 3 imágenes
  const totalMobileSlides = t.areas.length // 6 imágenes individuales

  // Resetear el slide cuando cambia el tamaño de pantalla
  useEffect(() => {
    setCurrentSlide(0)
  }, [isMobile])

  // Detectar el slide actual basado en el scroll (solo mobile)
  useEffect(() => {
    if (!isMobile) return
    const slider = sliderRef.current
    if (!slider) return

    const updateCurrentSlide = () => {
      const cardWidth = window.innerWidth
      const scrollLeft = slider.scrollLeft
      const slideIndex = Math.round(scrollLeft / cardWidth)
      const clampedIndex = Math.max(0, Math.min(slideIndex, t.areas.length - 1))
      setCurrentSlide(clampedIndex)
    }

    // Escuchar el evento scroll en tiempo real
    slider.addEventListener('scroll', updateCurrentSlide)
    
    // También escuchar scrollend para asegurar actualización final después del snap
    if ('onscrollend' in window) {
      slider.addEventListener('scrollend', updateCurrentSlide)
    }

    // Actualizar al inicio
    updateCurrentSlide()

    return () => {
      slider.removeEventListener('scroll', updateCurrentSlide)
      if ('onscrollend' in window) {
        slider.removeEventListener('scrollend', updateCurrentSlide)
      }
    }
  }, [isMobile, t.areas.length, currentSlide])

  const nextSlide = () => {
    if (isMobile) {
      const slider = sliderRef.current
      if (slider) {
        const cardWidth = window.innerWidth
        const currentScroll = slider.scrollLeft
        const nextIndex = Math.min(t.areas.length - 1, Math.round(currentScroll / cardWidth) + 1)
        const targetScroll = nextIndex * cardWidth
        slider.scrollTo({ left: targetScroll, behavior: 'smooth' })
      }
    } else {
      setIsFading(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalDesktopSlides)
        setIsFading(false)
      }, 300)
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      const slider = sliderRef.current
      if (slider) {
        const cardWidth = window.innerWidth
        const currentScroll = slider.scrollLeft
        const prevIndex = Math.max(0, Math.round(currentScroll / cardWidth) - 1)
        const targetScroll = prevIndex * cardWidth
        slider.scrollTo({ left: targetScroll, behavior: 'smooth' })
      }
    } else {
      setIsFading(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + totalDesktopSlides) % totalDesktopSlides)
        setIsFading(false)
      }, 300)
    }
  }

  const goToSlide = (index) => {
    if (isMobile) {
      const slider = sliderRef.current
      if (slider) {
        const cardWidth = window.innerWidth
        slider.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
      }
    } else {
      setCurrentSlide(index)
    }
  }

  return (
    <section
      ref={ref}
      className={`
        snap-start snap-always
        min-h-0 md:min-h-screen py-12 md:py-32 pb-1.5 md:pb-32 overflow-x-hidden
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6">
        {/* Header con título - Desktop: lado izquierdo, Mobile: arriba cerca del slider */}
        <div className="mb-2 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Columna izquierda - Título */}
            <div>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black mb-8 lg:mb-8 text-left leading-tight md:leading-[100px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
              {t.title}
            </h2>
            </div>

            {/* Columna derecha - Descripción y botón (solo desktop) */}
            <div className="hidden lg:flex flex-col justify-start">
              <p className={`mb-6 leading-relaxed text-left transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.description}
              </p>
              <button className={`
                px-8 
                py-4 
                rounded-full
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
        </div>

        {/* Slider de áreas - Mobile: 1 imagen, Desktop: 3 imágenes */}
        <div className="relative">
          {/* Contenedor del slider con posicionamiento relativo */}
          <div className="relative z-10" style={{ minHeight: '207px' }}>
            {/* Mobile: cada área individualmente con fade y scroll táctil */}
            {isMobile ? (
              <div className="lg:hidden -mx-6">
                <div ref={sliderRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}>
                  <div className="flex" style={{ width: 'max-content' }}>
                    {t.areas.map((area, index) => (
                      <div
                        key={area.id}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ width: '100vw', scrollSnapAlign: 'center', scrollSnapStop: 'always' }}
                      >
                        {/* Contenedor del gatito (sin fondo gris) */}
                        <div
                          className={`
                            w-[207px]
                            h-[207px]
                            flex
                            items-end
                            justify-center
                            overflow-visible
                            relative
                            z-20
                          `}
                          style={{ transform: `translateY(${getCharacterOffset(area.characterKey)}px)` }}
                        >
                          <img
                            src={
                              characterImages[area.characterKey]
                                ? (isDarkMode ? characterImages[area.characterKey].dark : characterImages[area.characterKey].light)
                                : ''
                            }
                            alt={area.title}
                            className="w-full h-full object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Desktop: grupos de 3 áreas con fade
              [0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className={`absolute inset-0 grid grid-cols-3 gap-12 transition-opacity duration-500 ease-in-out ${
                    groupIndex === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {t.areas.slice(groupIndex * 3, groupIndex * 3 + 3).map((area) => (
                    <div
                      key={area.id}
                      className="flex justify-center"
                    >
                      <div className="relative">
                        {/* Contenedor del gatito (sin fondo gris) */}
                        <div
                          className={`
                            w-[207px]
                            h-[207px]
                            flex
                            items-end
                            justify-center
                            overflow-visible
                            relative
                            z-20
                            mx-auto
                          `}
                          style={{ transform: `translateY(${getCharacterOffset(area.characterKey)}px)` }}
                        >
                          <img
                            src={
                              characterImages[area.characterKey]
                                ? (isDarkMode ? characterImages[area.characterKey].dark : characterImages[area.characterKey].light)
                                : ''
                            }
                            alt={area.title}
                            className="w-full h-full object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
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
          
          {/* Texto debajo de la línea - centrado con fade */}
          <div className="relative z-10 mt-2 md:mt-4" style={{ minHeight: '80px' }}>
            {isMobile ? (
              // Mobile: cada área individual con fade
              t.areas.map((area, index) => (
                <div
                  key={area.id}
                  className={`absolute inset-0 space-y-1 text-center px-3 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Título ÁREA */}
                  <h3 className={`text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {area.title}
                  </h3>
                  
                  {/* Información de contacto */}
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {area.location}
                  </p>
                  
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {area.tagline}
                  </p>
                </div>
              ))
            ) : (
              // Desktop: grupos de 3 áreas con fade
              [0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className={`absolute inset-0 grid grid-cols-3 gap-12 transition-opacity duration-500 ease-in-out ${
                    groupIndex === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {t.areas.slice(groupIndex * 3, groupIndex * 3 + 3).map((area) => (
                    <div
                      key={area.id}
                      className="space-y-1 text-center"
                    >
                      {/* Título ÁREA */}
                      <h3 className={`text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                        {area.title}
                      </h3>
                      
                      {/* Información de contacto */}
                      <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                        {area.location}
                      </p>
                      
                      <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                        {area.tagline}
                      </p>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

          {/* Botones de navegación - centrados en la mitad de la altura de las imágenes */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 -translate-x-8 w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
            style={{ top: '103.5px' }}
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 translate-x-8 w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
            style={{ top: '103.5px' }}
            aria-label="Slide siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>


        {/* Mobile: Descripción y botón debajo del slider - OCULTO EN MOBILE */}
        <div className="hidden">
          <p className={`mb-6 leading-relaxed text-left transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
            {t.description}
          </p>
            <button className={`
              px-8 
              py-4 
              rounded-full
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
    </section>
  )
}

export default AreasSlider

