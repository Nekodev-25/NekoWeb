import { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function PlansSelector({ initialPlanType }) {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selectedPlanType, setSelectedPlanType] = useState(initialPlanType || searchParams.get('plan') || 'basico')
  const [isFading, setIsFading] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  // Sincronizar con el parámetro de URL cuando cambia
  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam && ['basico', 'ecommerce', 'aplicaciones'].includes(planParam)) {
      setSelectedPlanType(planParam)
    }
  }, [searchParams])

  const translations = {
    es: {
      title: 'Planes y servicios',
      planTypes: {
        basico: 'Básico',
        ecommerce: 'E-commerce',
        aplicaciones: 'Aplicaciones',
      },
      plans: {
        basico: [
          {
            name: 'Plan básico',
            price: 'Desde $2.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'Plan básico',
            price: 'Desde $2.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'Plan básico',
            price: 'Desde $2.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
        ],
        ecommerce: [
          {
            name: 'e-commerce',
            price: 'Desde $3.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'e-commerce',
            price: 'Desde $3.500',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'e-commerce',
            price: 'Desde $4.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
        ],
        aplicaciones: [
          {
            name: 'aplicaciones',
            price: 'Desde $5.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'aplicaciones',
            price: 'Desde $6.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'aplicaciones',
            price: 'Desde $7.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
        ],
      },
      buttonText: 'Ver planes',
    },
    en: {
      title: 'Plans and services',
      planTypes: {
        basico: 'Basic',
        ecommerce: 'E-commerce',
        aplicaciones: 'Applications',
      },
      plans: {
        basico: [
          {
            name: 'Basic plan',
            price: 'From $2.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'Basic plan',
            price: 'From $2.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'Basic plan',
            price: 'From $2.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
        ],
        ecommerce: [
          {
            name: 'e-commerce',
            price: 'From $3.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'e-commerce',
            price: 'From $3.500',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'e-commerce',
            price: 'From $4.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
        ],
        aplicaciones: [
          {
            name: 'applications',
            price: 'From $5.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'applications',
            price: 'From $6.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
          {
            name: 'applications',
            price: 'From $7.000',
            description: 'Lorem ipsum dolor sit amet',
            features: [
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
              'Lorem ipsum dolor sit amet lorem ipsum',
            ],
          },
        ],
      },
      buttonText: 'View plans',
    },
  }

  const t = translations[language]
  const currentPlans = t.plans[selectedPlanType]

  // Función para cambiar el tipo de plan con efecto de desvanecimiento
  const handlePlanTypeChange = (newType) => {
    setIsFading(true)
    setTimeout(() => {
      setSelectedPlanType(newType)
      setIsFading(false)
      setCurrentSlide(0) // Resetear al primer slide cuando cambia el tipo
    }, 200)
  }

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
      const clampedIndex = Math.max(0, Math.min(slideIndex, currentPlans.length - 1))
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
  }, [currentPlans])

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
        min-h-screen py-32
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-left mb-16 leading-tight md:leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Selector horizontal de tipos de planes */}
        <div className="mb-16 flex justify-center">
          <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center">
            <button
              onClick={() => handlePlanTypeChange('basico')}
              className={`
                relative 
                text-left 
                transition-colors 
                pb-2 
                group
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                ${selectedPlanType === 'basico' ? 'font-medium' : ''}
              `}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: selectedPlanType === 'basico' ? 500 : 300 }}
            >
              {t.planTypes.basico}
              <div 
                className={`
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  h-[1px] 
                  transition-colors 
                  ${
                    selectedPlanType === 'basico'
                      ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                      : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                  }
                `}
              ></div>
            </button>
            
            <button
              onClick={() => handlePlanTypeChange('ecommerce')}
              className={`
                relative 
                text-left 
                transition-colors 
                pb-2 
                group
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                ${selectedPlanType === 'ecommerce' ? 'font-medium' : ''}
              `}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: selectedPlanType === 'ecommerce' ? 500 : 300 }}
            >
              {t.planTypes.ecommerce}
              <div 
                className={`
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  h-[1px] 
                  transition-colors 
                  ${
                    selectedPlanType === 'ecommerce'
                      ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                      : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                  }
                `}
              ></div>
            </button>
            
            <button
              onClick={() => handlePlanTypeChange('aplicaciones')}
              className={`
                relative 
                text-left 
                transition-colors 
                pb-2 
                group
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                ${selectedPlanType === 'aplicaciones' ? 'font-medium' : ''}
              `}
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: selectedPlanType === 'aplicaciones' ? 500 : 300 }}
            >
              {t.planTypes.aplicaciones}
              <div 
                className={`
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  h-[1px] 
                  transition-colors 
                  ${
                    selectedPlanType === 'aplicaciones'
                      ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                      : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                  }
                `}
              ></div>
            </button>
          </div>
        </div>

        {/* Cards de planes */}
        {/* Mobile: Slider horizontal */}
        <div className={`md:hidden relative overflow-hidden transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <div ref={sliderRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth" id="plans-selector-slider">
            <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
              {currentPlans.map((plan, index) => (
                <div
                  key={`${selectedPlanType}-${index}`}
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
                      const currentPath = window.location.pathname
                      if (currentPath === '/services') {
                        navigate(`/services?plan=${selectedPlanType}`, { replace: true })
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else {
                        navigate(`/services?plan=${selectedPlanType}`)
                      }
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
            {currentPlans.map((_, index) => (
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
        <div className={`hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {currentPlans.map((plan, index) => (
            <div
              key={`${selectedPlanType}-${index}`}
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
                  const currentPath = window.location.pathname
                  if (currentPath === '/services') {
                    // Si ya estamos en servicios, actualizar la URL y reiniciar scroll
                    navigate(`/services?plan=${selectedPlanType}`, { replace: true })
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  } else {
                    // Si estamos en otra página, navegar a servicios y reiniciar scroll
                    navigate(`/services?plan=${selectedPlanType}`)
                    // El scroll se reiniciará cuando se cargue la página
                  }
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

export default PlansSelector

