import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function PlansPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [searchParams] = useSearchParams()
  const [selectedPlanType, setSelectedPlanType] = useState(searchParams.get('plan') || 'basico')
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
        basico: 'Páginas Web',
        ecommerce: 'E-commerce',
        aplicaciones: 'Aplicaciones',
      },
      plans: {
        basico: [
          {
            name: 'Plan Básico',
            price: 'Desde $180.000 ARS',
            description: 'Ideal para tener presencia online profesional, clara y funcional.',
            includes: [
              'Landing page o sitio simple (1 página)',
              'Diseño limpio y responsive',
              'Estructura estándar (hero, info, contacto)',
              'Formulario de contacto básico',
              'Integración con WhatsApp o redes',
              'SEO inicial (títulos y descripciones)',
            ],
            excludes: [
              'Panel administrable',
              'Blog o contenido dinámico',
              'E-commerce',
              'Branding o identidad visual',
            ],
            addons: [
              'Secciones extra',
              'Animaciones',
              'Copywriting',
              'Hosting y dominio',
              'Mantenimiento mensual',
            ],
            developmentTime: 'Desarrollo estimado: hasta 3 semanas',
            recommendedFor: 'Recomendado para emprendedores y negocios que recién empiezan.',
          },
          {
            name: 'Plan Intermedio',
            price: 'Desde $280.000 ARS',
            description: 'Para negocios que necesitan una web más completa y profesional.',
            includes: [
              'Incluye todo el Plan Básico +',
              'Sitio de 3 a 5 secciones',
              'Diseño personalizado (no plantilla genérica)',
              'Animaciones suaves y mejoras UX',
              'Integración con Google Analytics',
              'SEO intermedio',
              'Hasta 2 revisiones de diseño',
            ],
            excludes: [
              'CMS avanzado',
              'Funciones a medida',
              'Branding completo',
            ],
            addons: [
              'Blog administrable',
              'Optimización de velocidad',
              'Textos comerciales',
              'Integraciones externas',
            ],
            developmentTime: '',
            recommendedFor: 'Ideal para empresas pequeñas o profesionales independientes.',
          },
          {
            name: 'Plan Premium',
            price: 'Desde $420.000 ARS',
            description: 'Una web pensada para convertir y crecer.',
            includes: [
              'Incluye todo el Plan Intermedio +',
              'Secciones dinámicas administrables (CMS)',
              'Blog o contenido editable',
              'Optimización de velocidad',
              'Copywriting base',
              'Branding web básico',
              'Integración con chat, pixel y tracking',
              'Soporte técnico por 2 meses',
            ],
            excludes: [
              'Tienda online',
              'Funcionalidades a medida complejas',
            ],
            addons: [
              'Estrategia SEO avanzada',
              'Automatizaciones',
              'Integraciones personalizadas',
            ],
            developmentTime: '',
            recommendedFor: 'Pensado para marcas que quieren presencia digital sólida.',
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
        basico: 'Web Pages',
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
      // Actualizar URL sin recargar
      const newUrl = new URL(window.location)
      newUrl.searchParams.set('plan', newType)
      window.history.pushState({}, '', newUrl)
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
      className={`
        min-h-screen pt-32 pb-20
        transition-colors duration-300
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <h2 
          className={`
            text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 
            font-black 
            text-left 
            mb-16 
            leading-tight md:leading-[80px] 
            transition-colors duration-300 
            ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
          `} 
          style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}
        >
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
              style={{ fontFamily: 'var(--font-delight)', fontWeight: selectedPlanType === 'basico' ? 500 : 300 }}
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
              style={{ fontFamily: 'var(--font-delight)', fontWeight: selectedPlanType === 'ecommerce' ? 500 : 300 }}
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
              style={{ fontFamily: 'var(--font-delight)', fontWeight: selectedPlanType === 'aplicaciones' ? 500 : 300 }}
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
          <div ref={sliderRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth" id="plans-page-slider">
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
              <h3 
                className={`
                  text-2xl lg:text-3xl 
                  font-bold 
                  mb-6 
                  transition-colors duration-300 
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
              >
                {plan.name}
              </h3>

              {/* Precio */}
              <p 
                className={`
                  mb-6 
                  text-lg 
                  transition-colors duration-300 
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
              >
                {plan.price}
              </p>

              {/* Descripción */}
              <p 
                className={`
                  mb-8 
                  leading-relaxed 
                  transition-colors duration-300 
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
              >
                {plan.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span 
                      className={`
                        w-2 
                        h-2 
                        rounded-full 
                        mt-2 
                        flex-shrink-0 
                        ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}
                      `}
                    ></span>
                    <span 
                      className={`
                        text-sm 
                        leading-relaxed 
                        transition-colors duration-300 
                        ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                      `} 
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button 
                className={`
                  w-full
                  px-8 
                  py-4 
                  rounded-xl
                  font-medium 
                  transition-all 
                  duration-200
                  text-base
                  mt-auto
                  border-2
                  ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
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
        <div 
          className={`
            hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto 
            transition-opacity duration-300 
            ${isFading ? 'opacity-0' : 'opacity-100'}
          `}
        >
          {currentPlans.map((plan, index) => (
            <div
              key={`${selectedPlanType}-${index}`}
              className={`
                relative 
                border 
                rounded-[2.5rem] 
                p-10 lg:p-12 
                transition-all duration-300 
                flex flex-col 
                max-w-sm mx-auto 
                ${
                  isDarkMode 
                    ? 'border-[#F6F3E8] bg-transparent' 
                    : 'border-gray-900 bg-transparent'
                }
              `}
            >
              {/* Título del plan */}
              <h3 
                className={`
                  text-2xl lg:text-3xl 
                  font-bold 
                  mb-6 
                  transition-colors duration-300 
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
              >
                {plan.name}
              </h3>

              {/* Precio */}
              <p 
                className={`
                  mb-6 
                  text-lg 
                  transition-colors duration-300 
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
              >
                {plan.price}
              </p>

              {/* Descripción */}
              <p 
                className={`
                  mb-8 
                  leading-relaxed 
                  transition-colors duration-300 
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
              >
                {plan.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span 
                      className={`
                        w-2 
                        h-2 
                        rounded-full 
                        mt-2 
                        flex-shrink-0 
                        ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}
                      `}
                    ></span>
                    <span 
                      className={`
                        text-sm 
                        leading-relaxed 
                        transition-colors duration-300 
                        ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                      `} 
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button 
                className={`
                  w-full
                  px-8 
                  py-4 
                  rounded-xl
                  font-medium 
                  transition-all 
                  duration-200
                  text-base
                  mt-auto
                  border-2
                  ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
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

export default PlansPage

