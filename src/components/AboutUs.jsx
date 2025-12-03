import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutUs() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)

  const translations = {
    es: {
      title: 'Nosotros',
      description: 'Somos que lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem i',
      members: [
        {
          name: 'Tomás Averbuj',
          description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsummm lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsummmmmmmmmmmmm',
        },
        {
          name: 'Tomás Averbuj',
          description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsummm lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsummmmmmmmmmmmm',
        },
      ],
    },
    en: {
      title: 'About Us',
      description: 'We are that lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem i',
      members: [
        {
          name: 'Tomás Averbuj',
          description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsummm lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsummmmmmmmmmmmm',
        },
        {
          name: 'Tomás Averbuj',
          description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsummm lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsummmmmmmmmmmmm',
        },
      ],
    },
  }

  const t = translations[language]

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
        {/* Título */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black mb-12 text-left leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Párrafo descriptivo */}
        <p className={`mb-16 leading-relaxed text-left transition-colors duration-300 max-w-4xl ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
          {t.description}
        </p>

        {/* Cards de perfil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {t.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Imagen con posible icono */}
              <div className="relative w-full max-w-md mb-6">
                <div className={`w-full aspect-square rounded-lg overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1472099645785-5658abf4ff4e' : '1494790108377-be9c29b29330'}?w=400&h=400&fit=crop`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Nombre */}
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>
                {member.name}
              </h3>

              {/* Descripción */}
              <p className={`text-sm leading-relaxed transition-colors duration-300 max-w-md ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs

