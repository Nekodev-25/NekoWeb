import { useState, useEffect } from 'react'
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
        basico: 'BÁSICO',
        ecommerce: 'E-COMMERCE',
        aplicaciones: 'APLICACIONES',
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
        basico: 'BASIC',
        ecommerce: 'E-COMMERCE',
        aplicaciones: 'APPLICATIONS',
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
    }, 200)
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
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-left mb-16 leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Switch de tipos de planes */}
        <div className="mb-16 flex justify-center">
          <div className={`relative inline-flex rounded-full p-1 transition-colors duration-300 min-w-[500px] ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            {/* Indicador deslizante */}
            <div
              className={`absolute top-1 bottom-1 rounded-full w-1/3 transition-all duration-300 ease-out ${
                selectedPlanType === 'basico'
                  ? 'left-1'
                  : selectedPlanType === 'ecommerce'
                  ? 'left-[calc(33.33%+0.25rem)]'
                  : 'left-[calc(66.66%+0.5rem)]'
              } ${
                isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
              }`}
            ></div>
            
            <button
              onClick={() => handlePlanTypeChange('basico')}
              className={`relative z-10 w-1/3 px-6 py-3 rounded-full font-bold text-sm transition-colors duration-300 cursor-pointer flex items-center justify-center whitespace-nowrap ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
            >
              {t.planTypes.basico}
            </button>
            <button
              onClick={() => handlePlanTypeChange('ecommerce')}
              className={`relative z-10 w-1/3 px-6 py-3 rounded-full font-bold text-sm transition-colors duration-300 cursor-pointer flex items-center justify-center whitespace-nowrap ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
            >
              {t.planTypes.ecommerce}
            </button>
            <button
              onClick={() => handlePlanTypeChange('aplicaciones')}
              className={`relative z-10 w-1/3 px-6 py-3 rounded-full font-bold text-sm transition-colors duration-300 cursor-pointer flex items-center justify-center whitespace-nowrap ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
            >
              {t.planTypes.aplicaciones}
            </button>
          </div>
        </div>

        {/* Cards de planes */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
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
                  rounded-xl
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

