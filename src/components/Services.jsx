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
          name: 'Web Básica / Institucional',
          price: 'Desde $180.000',
          forWho: 'Para quién es',
          forWhoText: 'Emprendedores, profesionales y pequeños negocios que necesitan presencia online clara y confiable.',
          whatOffers: 'Qué ofrece',
          features: [
            'Sitio web profesional y responsive',
            'Diseño limpio y moderno',
            'Información clara de tu negocio',
            'Contacto directo por WhatsApp o formulario',
          ],
          idealFor: 'Ideal si',
          idealForText: 'Querés mostrar quién sos, qué hacés y cómo contactarte, sin complejidad técnica.',
        },
        {
          name: 'E-commerce',
          price: 'Desde $650.000',
          forWho: 'Para quién es',
          forWhoText: 'Negocios que quieren vender productos o servicios online de forma automatizada.',
          whatOffers: 'Qué ofrece',
          features: [
            'Tienda online lista para vender',
            'Pagos integrados',
            'Gestión de productos y pedidos',
            'Diseño optimizado para convertir ventas',
          ],
          idealFor: 'Ideal si',
          idealForText: 'Querés vender 24/7 y escalar tu negocio en internet.',
        },
        {
          name: 'Aplicaciones / SAAS',
          price: 'Desde $2.200.000',
          forWho: 'Para quién es',
          forWhoText: 'Empresas, startups o proyectos que necesitan un sistema o plataforma a medida.',
          whatOffers: 'Qué ofrece',
          features: [
            'Desarrollo de aplicaciones web',
            'Paneles, sistemas y plataformas personalizadas',
            'Arquitectura escalable',
            'Branding y experiencia de usuario profesional',
          ],
          idealFor: 'Ideal si',
          idealForText: 'Tenés una idea, proceso o negocio que necesita una solución digital propia.',
        },
      ],
      buttonText: 'Ver planes',
    },
    en: {
      title: 'Plans and services',
      plans: [
        {
          name: 'Basic / Institutional Web',
          price: 'From $180.000',
          forWho: 'For whom',
          forWhoText: 'Entrepreneurs, professionals and small businesses that need a clear and reliable online presence.',
          whatOffers: 'What it offers',
          features: [
            'Professional and responsive website',
            'Clean and modern design',
            'Clear information about your business',
            'Direct contact via WhatsApp or form',
          ],
          idealFor: 'Ideal if',
          idealForText: 'You want to show who you are, what you do and how to contact you, without technical complexity.',
        },
        {
          name: 'E-commerce',
          price: 'From $650.000',
          forWho: 'For whom',
          forWhoText: 'Businesses that want to sell products or services online in an automated way.',
          whatOffers: 'What it offers',
          features: [
            'Online store ready to sell',
            'Integrated payments',
            'Product and order management',
            'Design optimized to convert sales',
          ],
          idealFor: 'Ideal if',
          idealForText: 'You want to sell 24/7 and scale your business online.',
        },
        {
          name: 'Applications / SAAS',
          price: 'From $2.200.000',
          forWho: 'For whom',
          forWhoText: 'Companies, startups or projects that need a custom system or platform.',
          whatOffers: 'What it offers',
          features: [
            'Web application development',
            'Custom panels, systems and platforms',
            'Scalable architecture',
            'Professional branding and user experience',
          ],
          idealFor: 'Ideal if',
          idealForText: 'You have an idea, process or business that needs its own digital solution.',
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
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                    {plan.name}
                  </h3>

                  {/* Precio */}
                  <p className={`mb-6 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                    {plan.price}
                  </p>

                  {/* Para quién es */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                      {plan.forWho}
                    </h4>
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                      {plan.forWhoText}
                    </p>
                  </div>

                  {/* Qué ofrece */}
                  <div className="mb-6 flex-grow">
                    <h4 className={`text-sm font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                      {plan.whatOffers}
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                          <span className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal si */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                      {plan.idealFor}
                    </h4>
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                      {plan.idealForText}
                    </p>
                  </div>

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
              <h3 className={`text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                {plan.name}
              </h3>

              {/* Precio */}
              <p className={`mb-6 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                {plan.price}
              </p>

              {/* Para quién es */}
              <div className="mb-6">
                <h4 className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                  {plan.forWho}
                </h4>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                  {plan.forWhoText}
                </p>
              </div>

              {/* Qué ofrece */}
              <div className="mb-6 flex-grow">
                <h4 className={`text-sm font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                  {plan.whatOffers}
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                      <span className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal si */}
              <div className="mb-6">
                <h4 className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                  {plan.idealFor}
                </h4>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                  {plan.idealForText}
                </p>
              </div>

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

export default Services
