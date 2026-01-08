import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import TextType from './TextType'

function Hero() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.3)
  const [showDescription, setShowDescription] = useState(false)

  const translations = {
    es: {
      title: 'Creamos experiencias digitales únicas',
      description: 'Somos un estudio creativo especializado en diseño web, desarrollo y branding. Transformamos ideas en experiencias digitales únicas que impulsan tu negocio.',
      cta1: 'Ver proyectos',
      cta2: 'Contacto',
    },
    en: {
      title: 'We create unique digital experiences',
      description: 'We are a creative studio specialized in web design, development and branding. We transform ideas into unique digital experiences that drive your business.',
      cta1: 'View projects',
      cta2: 'Contact',
    },
  }

  const t = translations[language]

  return (
    <section
      id="home"
      ref={ref}
      className={`
        snap-start snap-always
        min-h-screen flex items-center justify-center py-12 md:py-32 relative overflow-hidden
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center w-full">
          {/* Gatito diseñador con efecto de flotación - arriba centrado en tablet/mobile, a la izquierda en desktop */}
          <div className="w-full flex justify-center mb-2 md:mb-4 lg:mb-0 lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:justify-start -mt-8 md:-mt-4 lg:mt-0">
            <div 
              className={`
                w-[160px] h-[160px] 
                md:w-[180px] md:h-[180px] 
                lg:w-[140px] lg:h-[140px]
                flex items-center justify-center
                transition-transform duration-500
                ${isVisible ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}
              `}
              style={{ 
                transition: 'transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <img
                src={isDarkMode ? '/images/gatitos/noche/diseñador_noche-08.png' : '/images/gatitos/dia/diseñador_dia-12.png'}
                alt="Gatito diseñador"
                className="w-full h-full object-contain max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Título principal */}
          {isVisible && (
            <h1 
              className={`
                text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                font-black 
                mb-6 lg:mb-8 
                leading-[1.1] 
                w-full
                lg:max-w-4xl
                transition-colors duration-300
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
              `} 
              style={{ 
                fontFamily: 'var(--font-delight)', 
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              <TextType
                text={t.title}
                as="span"
                typingSpeed={50}
                initialDelay={200}
                loop={false}
                showCursor={true}
                hideCursorWhileTyping={false}
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                className="block w-full"
                onSentenceComplete={() => {
                  setShowDescription(true)
                }}
                startOnVisible={false}
              />
            </h1>
          )}
          
          {/* Descripción */}
          <p 
            className={`
              text-base md:text-lg 
              mb-10 lg:mb-12
              leading-relaxed 
              w-full
              lg:max-w-2xl
              transition-all duration-700
              ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
            `} 
            style={{ 
              fontFamily: 'var(--font-delight)', 
              fontWeight: 400,
              transitionDelay: '300ms'
            }}
          >
            {t.description}
          </p>
          
          {/* Botones CTA */}
          <div 
            className={`
              flex flex-col sm:flex-row gap-4 lg:gap-6 
              justify-center 
              items-center
              transition-all duration-700
              ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '500ms' }}
          >
            <Link
              to="/projects"
              className={`
                px-8 md:px-10 
                py-4 md:py-5 
                rounded-full 
                font-medium 
                transition-all 
                duration-300
                text-base
                border-2
                ${isDarkMode 
                  ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
                }
              `} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 600 }}
            >
              {t.cta1}
            </Link>
            
            <Link
              to="/#contact"
              className={`
                px-8 md:px-10 
                py-4 md:py-5 
                rounded-full 
                font-medium 
                transition-all 
                duration-300
                text-base
                border-2
                ${isDarkMode 
                  ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
                }
              `} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 600 }}
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </div>

      {/* Animación CSS para flotar */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
