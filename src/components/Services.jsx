import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Services() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)
  const [expandedService, setExpandedService] = useState(0) // Primer servicio expandido por defecto

  const translations = {
    es: {
      title: 'Nuestros servicios',
      services: [
        {
          id: 0,
          name: 'Web develope',
          plans: [
            {
              name: 'Plan básico',
              price: 'Desde $xxx',
              subtitle: 'PUCHITO PUCHITO',
              features: [
                { text: 'Incluye a ashe y bondiola', included: false },
                { text: 'Incluye a ashe y bondiola', included: false },
                { text: 'Incluye a ashe y bondiola', included: true },
              ],
            },
            {
              name: 'Plan básico',
              price: 'Desde $xxx',
              subtitle: 'PUCHITO PUCHITO',
              features: [
                { text: 'Incluye a ashe y bondiola', included: false },
                { text: 'Incluye a ashe y bondiola', included: false },
                { text: 'Incluye a ashe y bondiola', included: true },
              ],
            },
            {
              name: 'Plan básico',
              price: 'Desde $xxx',
              subtitle: 'PUCHITO PUCHITO',
              features: [
                { text: 'Incluye a ashe y bondiola', included: false },
                { text: 'Incluye a ashe y bondiola', included: true },
                { text: 'Incluye a ashe y bondiola', included: true },
                { text: 'Incluye a ashe y bondiola', included: true },
              ],
            },
          ],
        },
        {
          id: 1,
          name: 'Web develope',
          plans: [],
        },
        {
          id: 2,
          name: 'Web develope',
          plans: [],
        },
        {
          id: 3,
          name: 'Web develope',
          plans: [],
        },
      ],
      customTitle: '¿Necesitas algo personalizado?',
      customDescription: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      formLabels: {
        name: 'NOMBRE',
        lastName: 'APELLIDO',
        service: 'SERVICIO',
        email: 'CORREO ELECTRÓNICO',
        query: 'CONSULTA',
      },
      formPlaceholders: {
        name: '',
        lastName: '',
        service: 'Seleccionar servicio',
        email: '',
        query: '',
      },
      submitButton: 'Enviar',
      buyPlan: 'Comprar plan',
      footer: {
        location: 'Buenos Aires, Argentina',
        tagline: 'Creamos para todo el mundo',
        phone: 'Tel: +54 11-2292-6388',
        email: 'Mail: infopuchito@gmail.com',
      },
    },
    en: {
      title: 'Our services',
      services: [
        {
          id: 0,
          name: 'Web develop',
          plans: [
            {
              name: 'Basic plan',
              price: 'From $xxx',
              subtitle: 'PUCHITO PUCHITO',
              features: [
                { text: 'Includes a ashe and bondiola', included: false },
                { text: 'Includes a ashe and bondiola', included: false },
                { text: 'Includes a ashe and bondiola', included: true },
              ],
            },
            {
              name: 'Basic plan',
              price: 'From $xxx',
              subtitle: 'PUCHITO PUCHITO',
              features: [
                { text: 'Includes a ashe and bondiola', included: false },
                { text: 'Includes a ashe and bondiola', included: false },
                { text: 'Includes a ashe and bondiola', included: true },
              ],
            },
            {
              name: 'Basic plan',
              price: 'From $xxx',
              subtitle: 'PUCHITO PUCHITO',
              features: [
                { text: 'Includes a ashe and bondiola', included: false },
                { text: 'Includes a ashe and bondiola', included: true },
                { text: 'Includes a ashe and bondiola', included: true },
                { text: 'Includes a ashe and bondiola', included: true },
              ],
            },
          ],
        },
        {
          id: 1,
          name: 'Web develop',
          plans: [],
        },
        {
          id: 2,
          name: 'Web develop',
          plans: [],
        },
        {
          id: 3,
          name: 'Web develop',
          plans: [],
        },
      ],
      customTitle: 'Do you need something personalized?',
      customDescription: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      formLabels: {
        name: 'NAME',
        lastName: 'LAST NAME',
        service: 'SERVICE',
        email: 'EMAIL',
        query: 'QUERY',
      },
      formPlaceholders: {
        name: '',
        lastName: '',
        service: 'Select service',
        email: '',
        query: '',
      },
      submitButton: 'Send',
      buyPlan: 'Buy plan',
      footer: {
        location: 'Buenos Aires, Argentina',
        tagline: 'We create for everyone',
        phone: 'Tel: +54 11-2292-6388',
        email: 'Mail: infopuchito@gmail.com',
      },
    },
  }

  const t = translations[language]

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
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
        {/* Título principal alineado a la izquierda */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-left mb-24 leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Lista de servicios */}
        <div>
          {t.services.map((service, index) => (
            <div key={service.id} className="mb-8">
              {/* Header del servicio - siempre visible */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {String(index + 1).padStart(2, '0')}. {service.name}
                  </span>
                </div>
                <button
                  onClick={() => toggleService(service.id)}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-200 hover:scale-110 ${isDarkMode ? 'border-white' : 'border-gray-900'}`}
                >
                  <span className={`text-xl transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ transform: expandedService === service.id ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    +
                  </span>
                </button>
              </div>

              {/* Línea separadora */}
              <div className={`w-full h-px mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`}></div>

              {/* Contenido expandible - Planes de precios */}
              {expandedService === service.id && service.plans.length > 0 && (
                <div className="mt-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.plans.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className={`border rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-900 border-white' 
                            : 'bg-gray-100 border-gray-300'
                        }`}
                      >
                        {/* Título del plan */}
                        <h3 className={`text-2xl font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                          {plan.name}
                        </h3>
                        
                        {/* Precio */}
                        <p className={`mb-3 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                          {plan.price}
                        </p>
                        
                        {/* Subtítulo */}
                        <p className={`text-sm uppercase mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                          {plan.subtitle}
                        </p>
                        
                        {/* Lista de características */}
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                                isDarkMode 
                                  ? feature.included ? 'bg-white border-white' : 'bg-transparent border-white'
                                  : feature.included ? 'bg-gray-900 border-gray-900' : 'bg-transparent border-gray-900'
                              }`}>
                                {feature.included && (
                                  <span className={`text-sm font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>+</span>
                                )}
                              </div>
                              <span className={`text-base leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                                {feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Botón comprar plan */}
                        <button className={`
                          w-full
                          px-8 
                          py-4 
                          rounded-2xl
                          font-medium 
                          transition-all 
                          duration-200
                          text-base
                          hover:scale-[1.02]
                          active:scale-[0.98]
                          ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
                        `} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                          {t.buyPlan}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
