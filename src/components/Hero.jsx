import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.3)

  const translations = {
    es: {
      title: 'Lorem ipsum dolor sit amet lorem ipsum',
      description: 'Somos que lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
      cta1: 'Ver proyectos',
      cta2: 'Contacto',
    },
    en: {
      title: 'Lorem ipsum dolor sit amet lorem ipsum',
      description: 'We are that lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
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
        min-h-screen flex items-center justify-center py-12 md:py-32
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6 relative">
        {/* Gatito diseñador - arriba centrado en mobile, a la izquierda del título en desktop */}
        {/* Mobile */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="w-[112px] h-[112px] flex items-center justify-center">
            <img
              src={isDarkMode ? '/images/gatitos/noche/diseñador_noche-08.png' : '/images/gatitos/dia/diseñador_dia-12.png'}
              alt="Gatito diseñador"
              className="w-full h-full object-contain max-w-full max-h-full"
            />
          </div>
        </div>
        {/* Desktop */}
        <div
          className="
            hidden
            md:block
            absolute
            left-6
            lg:left-12
            top-20
            lg:top-24
            w-[128px]
            h-[128px]
            lg:w-[160px]
            lg:h-[160px]
            xl:w-[192px]
            xl:h-[192px]
            flex
            items-center
            justify-center
          "
        >
          <img
            src={isDarkMode ? '/images/gatitos/noche/diseñador_noche-08.png' : '/images/gatitos/dia/diseñador_dia-12.png'}
            alt="Gatito diseñador"
            className="w-full h-full object-contain max-w-full max-h-full"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal - Headline grande con buen espaciado entre líneas */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-medium mb-8 leading-[1.2] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
            {t.title}
          </h1>
          
          {/* Descripción - Párrafo centrado */}
          <p className={`text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
            {t.description}
          </p>
          
          {/* Botones CTA - Dos botones horizontales con fondo gris claro, redondeados y con espaciado correcto */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className={`
              px-10 
              py-5 
              rounded-full 
              font-medium 
              transition-colors 
              duration-200
              text-base
              ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
            `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
              {t.cta1}
            </button>
            <button className={`
              px-10 
              py-5 
              rounded-full 
              font-medium 
              transition-colors 
              duration-200
              text-base
              ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
            `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
              {t.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
