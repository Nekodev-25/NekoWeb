import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function AboutPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      about: {
        title: 'Nosotros',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      team: [
        {
          name: 'Tomás Averbuj',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
          name: 'Luna Bianchi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
      ],
      process: {
        title: 'Nuestro proceso de trabajo',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        steps: [
          {
            number: '01',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            number: '02',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            number: '03',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            number: '04',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
        ],
      },
    },
    en: {
      about: {
        title: 'About Us',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      team: [
        {
          name: 'Tomás Averbuj',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
          name: 'Luna Bianchi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
      ],
      process: {
        title: 'Our Work Process',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        steps: [
          {
            number: '01',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            number: '02',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            number: '03',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            number: '04',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
        ],
      },
    },
  }

  const t = translations[language]

  return (
    <section 
      className={`min-h-screen pt-32 pb-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'
      }`} 
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto px-6">
        {/* Sección Nosotros */}
        <div className="mb-24">
          {/* Título centrado */}
          <div className="text-center mb-12">
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-black transition-colors duration-300 mb-8 ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
            >
              {t.about.title}
            </h1>
          </div>

          {/* Texto introductorio centrado */}
          <div className="max-w-3xl mx-auto mb-16">
            <p 
              className={`text-center text-base md:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
            >
              {t.about.intro}
            </p>
          </div>

          {/* Tarjetas de miembros del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {t.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Placeholder de imagen */}
                <div 
                  className={`
                    w-full 
                    aspect-square 
                    max-w-md
                    mb-6
                    transition-colors duration-300
                    ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}
                  `}
                ></div>
                
                {/* Nombre */}
                <h3 
                  className={`
                    text-center 
                    mb-4
                    transition-colors duration-300
                    ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                  `} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  {member.name}
                </h3>
                
                {/* Descripción */}
                <p 
                  className={`
                    text-center 
                    text-sm md:text-base
                    leading-relaxed
                    max-w-md
                    transition-colors duration-300
                    ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                  `} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección Proceso de Trabajo */}
        <div className="mt-32">
          {/* Título y texto introductorio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32 max-w-6xl mx-auto">
            {/* Título a la izquierda */}
            <div>
              <h2 
                className={`
                  text-4xl md:text-5xl lg:text-6xl 
                  font-black 
                  text-left
                  transition-colors duration-300
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
              >
                {t.process.title}
              </h2>
            </div>
            
            {/* Texto a la derecha */}
            <div className="flex items-start justify-end">
              <p 
                className={`
                  text-right 
                  text-base md:text-lg
                  leading-relaxed
                  max-w-md
                  transition-colors duration-300
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
              >
                {t.process.intro}
              </p>
            </div>
          </div>

          {/* Timeline de pasos */}
          <div className="max-w-7xl mx-auto relative">
            {/* Contenedor principal con línea en el medio */}
            <div className="relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
              {/* Línea horizontal del timeline - centrada verticalmente (solo desktop) */}
              <div 
                className={`
                  hidden md:block
                  absolute 
                  top-1/2 
                  left-0 
                  right-0 
                  h-px 
                  -translate-y-1/2
                  transition-colors duration-300
                  ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}
                  z-0
                `}
              ></div>

              {/* Grid de pasos - 4 columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {t.process.steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    {/* Número grande - arriba del círculo */}
                    <div 
                      className={`
                        text-6xl md:text-7xl lg:text-8xl 
                        font-black 
                        mb-0 md:mb-8
                        transition-colors duration-300
                        ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                      `} 
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
                    >
                      {step.number}
                    </div>
                    
                    {/* Círculo outline - solo en desktop, centrado en la línea */}
                    <div 
                      className={`
                        hidden md:block
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-4 
                        h-4 
                        rounded-full
                        border-2
                        transition-colors duration-300
                        ${isDarkMode ? 'border-[#F6F3E8] bg-black' : 'border-gray-900 bg-[#F6F3E8]'}
                        z-20
                      `}
                    ></div>
                    
                    {/* Contenido debajo del número/círculo */}
                    <div className="mt-4 md:mt-16 text-center">
                      {/* Título del paso */}
                      <h3 
                        className={`
                          mb-4
                          font-bold
                          transition-colors duration-300
                          ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                        `} 
                        style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
                      >
                        {step.title}
                      </h3>
                      
                      {/* Descripción del paso */}
                      <p 
                        className={`
                          text-sm md:text-base
                          leading-relaxed
                          transition-colors duration-300
                          ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                        `} 
                        style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
