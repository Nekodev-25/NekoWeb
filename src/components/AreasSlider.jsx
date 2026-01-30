import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function AreasSlider() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.25)
  const swiperImagesRef = useRef(null)

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
      description: 'Ofrecemos soluciones integrales para tu presencia digital. Desde el diseño hasta el desarrollo, todo bajo un mismo techo.',
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
      description: 'We offer comprehensive solutions for your digital presence. From design to development, everything under one roof.',
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

  return (
    <section
      ref={ref}
      className={`
        snap-start snap-always
        py-12 md:py-32
        transition-colors duration-300
        transform-gpu
        overflow-hidden
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
              <p className={`mb-6 leading-relaxed text-left transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.description}
              </p>
              <button className={`
                px-8 
                py-4 
                rounded-full
                font-medium 
                transition-all 
                duration-200
                text-base
                self-start
                border-2
                ${isDarkMode 
                  ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
              `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                {t.ctaButton}
              </button>
            </div>
          </div>
        </div>

        {/* Slider de áreas con Swiper */}
        <div className="relative" style={{ overflow: 'visible' }}>
          {/* Contenedor del slider completo */}
          <div className="relative" style={{ minHeight: '207px' }}>
            <Swiper
              onSwiper={(swiper) => {
                swiperImagesRef.current = swiper
              }}
              slidesPerView={isMobile ? 1 : 3}
              spaceBetween={isMobile ? 0 : 48}
              loop={true}
              freeMode={false}
              centeredSlides={false}
              pagination={{
                clickable: true,
                enabled: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="areasSwiper"
            >
              {t.areas.map((area) => (
                <SwiperSlide key={area.id}>
                  <div className="flex flex-col items-center w-full">
                    {/* Contenedor del gatito */}
                    <div className="relative" style={{ minHeight: '207px', width: '100%', display: 'flex', justifyContent: 'center' }}>
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
                    
                    {/* Texto debajo - dentro del mismo slide */}
                    <div className="space-y-1 text-center w-full mt-2 md:mt-4" style={{ minHeight: '80px', paddingTop: '8px' }}>
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                        {area.title}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                        {area.location}
                      </p>
                      <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                        {area.tagline}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Línea separadora continua - abarca toda la pantalla, pegada a la parte inferior de las imágenes */}
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

          {/* Botones de navegación personalizados - centrados en la mitad de la altura de las imágenes */}
          <button
            onClick={() => {
              if (swiperImagesRef.current) {
                swiperImagesRef.current.slidePrev()
              }
            }}
            className={`absolute left-0 -translate-x-8 w-8 h-8 flex items-center justify-center transition-colors duration-200 z-20 cursor-pointer ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'} hover:opacity-70`}
            style={{ top: '103.5px' }}
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => {
              if (swiperImagesRef.current) {
                swiperImagesRef.current.slideNext()
              }
            }}
            className={`absolute right-0 translate-x-8 w-8 h-8 flex items-center justify-center transition-colors duration-200 z-20 cursor-pointer ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'} hover:opacity-70`}
            style={{ top: '103.5px' }}
            aria-label="Slide siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Estilos personalizados para Swiper */}
      <style>{`
        .areasSwiper {
          overflow: visible !important;
          height: auto !important;
        }
        .areasSwiper .swiper-wrapper {
          align-items: flex-end;
        }
        .areasSwiper .swiper-slide {
          height: auto !important;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .areasTextSwiper {
          overflow: visible !important;
          height: auto !important;
        }
        .areasTextSwiper .swiper-slide {
          height: auto !important;
          display: flex;
          justify-content: center;
        }
        /* Ocultar pagination por defecto */
        .areasSwiper .swiper-pagination {
          display: none;
        }
        /* Asegurar que no haya scroll vertical en el contenedor */
        .areasSwiper .swiper-container,
        .areasTextSwiper .swiper-container {
          overflow: visible !important;
        }
        /* Asegurar que el contenido dentro de cada slide esté centrado */
        .areasSwiper .swiper-slide > div,
        .areasTextSwiper .swiper-slide > div {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </section>
  )
}

export default AreasSlider
