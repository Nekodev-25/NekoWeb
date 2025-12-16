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
      description: 'Somos un equipo joven y apasionado por la tecnología y el diseño. Creemos que cada proyecto es una oportunidad para crear algo extraordinario. Combinamos creatividad, estrategia y tecnología para dar vida a ideas que marcan la diferencia.',
      members: [
        {
          name: 'Tomás Averbuj',
          role: 'Desarrollador web full stack y co-fundador de Neko dev',
          description: 'Estudió en Da Vinci y se especializa en crear sitios web innovadores e interactivos con diseños dinámicos y experiencias de usuario excepcionales.',
        },
        {
          name: 'Luna Bianchi',
          role: 'Diseñadora gráfica y co-fundadora de Neko dev',
          description: 'Estudiante de la UBA apasionada por el diseño. Busca constantemente crecer como diseñadora, creando piezas innovadoras y cautivadoras que conecten con las audiencias.',
        },
      ],
    },
    en: {
      title: 'About Us',
      description: 'We are a young team passionate about technology and design. We believe that every project is an opportunity to create something extraordinary. We combine creativity, strategy and technology to bring ideas to life that make a difference.',
      members: [
        {
          name: 'Tomás Averbuj',
          role: 'Full stack web developer and co-founder of Neko dev',
          description: 'Graduated from Da Vinci and specializes in creating innovative and interactive websites with dynamic designs and exceptional user experiences.',
        },
        {
          name: 'Luna Bianchi',
          role: 'Graphic designer and co-founder of Neko dev',
          description: 'UBA student passionate about design. Constantly seeking to grow as a designer, creating innovative and captivating pieces that connect with audiences.',
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
        min-h-0 md:min-h-screen pt-4 md:pt-32 pb-12 md:pb-32
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black mb-12 text-left leading-tight md:leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Párrafo descriptivo */}
        <p className={`mb-16 leading-relaxed text-left transition-colors duration-300 max-w-4xl ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
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
              <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                {member.name}
              </h3>

              {/* Rol */}
              {member.role && (
                <p className={`text-sm md:text-base mb-4 transition-colors duration-300 max-w-md ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                  {member.role}
                </p>
              )}

              {/* Descripción */}
              <p className={`text-sm leading-relaxed transition-colors duration-300 max-w-md ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
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

