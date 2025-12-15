import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Services() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const translations = {
    es: {
      title: 'Planes y servicios',
      plans: [
        {
          name: 'Plan bondiola',
          price: 'Desde $2.000',
          description: 'Lorem ipsum dolor sit amet',
          features: [
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
          ],
          hasIcon: false,
        },
        {
          name: 'Plan ashe',
          price: 'Desde $2.000',
          description: 'Lorem ipsum dolor sit amet',
          features: [
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
          ],
          hasIcon: false,
        },
        {
          name: 'Plan tita',
          price: 'Desde $2.000',
          description: 'Lorem ipsum dolor sit amet',
          features: [
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
          ],
          hasIcon: false,
        },
      ],
      buttonText: 'Ver planes',
    },
    en: {
      title: 'Plans and services',
      plans: [
        {
          name: 'Plan bondiola',
          price: 'From $2.000',
          description: 'Lorem ipsum dolor sit amet',
          features: [
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
          ],
          hasIcon: false,
        },
        {
          name: 'Plan ashe',
          price: 'From $2.000',
          description: 'Lorem ipsum dolor sit amet',
          features: [
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
          ],
          hasIcon: false,
        },
        {
          name: 'Plan tita',
          price: 'From $2.000',
          description: 'Lorem ipsum dolor sit amet',
          features: [
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
            'Lorem ipsum dolor sit amet lorem ipsum',
          ],
          hasIcon: false,
        },
      ],
      buttonText: 'View plans',
    },
  }

  const t = translations[language]

  // Detectar el slide actual basado en el scroll
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const updateCurrentSlide = () => {
      const cardWidth = window.innerWidth - 48 // 3rem = 48px
      const gap = 24 // 1.5rem = 24px
      const scrollLeft = slider.scrollLeft
      const slideWidth = cardWidth + gap
      const slideIndex = Math.round(scrollLeft / slideWidth)
      const clampedIndex = Math.max(0, Math.min(slideIndex, t.plans.length - 1))
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
  }, [t.plans.length])

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    const slider = sliderRef.current
    if (!slider) return
    
    setCurrentSlide(index) // Actualizar inmediatamente
    const cardWidth = window.innerWidth - 48 // 3rem = 48px
    const gap = 24 // 1.5rem = 24px
    slider.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className={`
        snap-start snap-always
        min-h-screen py-12 md:py-32
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6">
        {/* Título principal + gatito jefe a la derecha */}
        <div className="flex items-center gap-3 md:gap-4 mb-16">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black text-left leading-tight md:leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
            {t.title}
          </h2>

          {/* Gatito jefe */}
          <div className="hidden md:block flex-shrink-0">
            <div className="w-[160px] h-[160px] lg:w-[192px] lg:h-[192px] xl:w-[224px] xl:h-[224px] flex items-center justify-center">
              <img
                src={isDarkMode ? '/images/gatitos/noche/Jefe.png' : '/images/gatitos/dia/Jefe-dia.png'}
                alt="Gatito jefe"
                className="w-full h-full object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        </div>

        {/* Cards de planes */}
        {/* Mobile: Slider horizontal */}
        <div className="md:hidden relative overflow-hidden">
          <div ref={sliderRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth" id="services-slider">
            <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
              {t.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    relative 
                    border 
                    rounded-[2.5rem] 
                    p-10 
                    transition-all 
                    duration-300 
                    flex 
                    flex-col 
                    snap-center
                    flex-shrink-0
                    w-[calc(100vw-3rem)]
                    ${
                      isDarkMode 
                        ? 'border-[#F6F3E8] bg-transparent' 
                        : 'border-gray-900 bg-transparent'
                    }
                  `}
                >
                  {/* Título del plan */}
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                    {plan.name}
                  </h3>

                  {/* Precio */}
                  <p className={`mb-6 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                    {plan.price}
                  </p>

                  {/* Descripción */}
                  <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                    {plan.description}
                  </p>

                  {/* Lista de características */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                        <span className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <button 
                    onClick={() => {
                      // Mapear cada plan a su tipo correspondiente
                      const planTypes = ['basico', 'ecommerce', 'aplicaciones']
                      const planType = planTypes[index]
                      navigate(`/services?plan=${planType}`)
                    }}
                    className={`
                      w-full
                      px-8 
                      py-4 
                      rounded-full
                      font-medium 
                      transition-all 
                      duration-200
                      text-base
                      mt-auto
                      ${isDarkMode ? 'bg-gray-200 hover:bg-gray-300 text-gray-900' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
                    `} 
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
                  >
                    {t.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicadores de puntos */}
          <div className="flex justify-center gap-2 mt-6">
            {t.plans.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? isDarkMode 
                      ? 'bg-[#F6F3E8] w-8 h-2' 
                      : 'bg-gray-900 w-8 h-2'
                    : isDarkMode 
                      ? 'bg-[#F6F3E8]/30 w-2 h-2' 
                      : 'bg-gray-900/30 w-2 h-2'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid normal */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-[2.5rem] p-10 lg:p-12 transition-all duration-300 flex flex-col max-w-sm mx-auto ${
                isDarkMode 
                  ? 'border-[#F6F3E8] bg-transparent' 
                  : 'border-gray-900 bg-transparent'
              }`}
            >
              {/* Título del plan */}
              <h3 className={`text-2xl lg:text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                {plan.name}
              </h3>

              {/* Precio */}
              <p className={`mb-6 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                {plan.price}
              </p>

              {/* Descripción */}
              <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                {plan.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                    <span className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button 
                onClick={() => {
                  // Mapear cada plan a su tipo correspondiente
                  const planTypes = ['basico', 'ecommerce', 'aplicaciones']
                  const planType = planTypes[index]
                  navigate(`/services?plan=${planType}`)
                }}
                className={`
                  w-full
                  px-8 
                  py-4 
                  rounded-full
                  font-medium 
                  transition-all 
                  duration-200
                  text-base
                  mt-auto
                  ${isDarkMode ? 'bg-gray-200 hover:bg-gray-300 text-gray-900' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
              >
                {t.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
