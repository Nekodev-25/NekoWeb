import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function AboutPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: 'Sobre Nosotros',
      subtitle: 'Conoce nuestro equipo y nuestra historia',
      story: {
        title: 'Nuestra Historia',
        content: 'DesignStudio nació de la pasión por crear experiencias digitales excepcionales. Con más de 5 años de experiencia, hemos ayudado a empresas de todos los tamaños a transformar sus ideas en realidad digital.',
      },
      team: {
        title: 'Nuestro Equipo',
        content: 'Un equipo dedicado de más de 20 profesionales especializados en tecnologías web modernas, diseño UX/UI y desarrollo de software.',
      },
      values: {
        title: 'Nuestros Valores',
        items: [
          { title: 'Innovación', description: 'Siempre buscamos las mejores soluciones tecnológicas' },
          { title: 'Calidad', description: 'Comprometidos con la excelencia en cada proyecto' },
          { title: 'Colaboración', description: 'Trabajamos estrechamente con nuestros clientes' },
          { title: 'Transparencia', description: 'Comunicación clara y honesta en todo momento' },
        ],
      },
    },
    en: {
      title: 'About Us',
      subtitle: 'Meet our team and our story',
      story: {
        title: 'Our Story',
        content: 'DesignStudio was born from a passion for creating exceptional digital experiences. With over 5 years of experience, we have helped companies of all sizes transform their ideas into digital reality.',
      },
      team: {
        title: 'Our Team',
        content: 'A dedicated team of over 20 professionals specialized in modern web technologies, UX/UI design, and software development.',
      },
      values: {
        title: 'Our Values',
        items: [
          { title: 'Innovation', description: 'We always seek the best technological solutions' },
          { title: 'Quality', description: 'Committed to excellence in every project' },
          { title: 'Collaboration', description: 'We work closely with our clients' },
          { title: 'Transparency', description: 'Clear and honest communication at all times' },
        ],
      },
    },
  }

  const t = translations[language]

  return (
    <section className={`snap-start min-h-screen pt-32 pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`} style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.title}
            </h1>
            <p className={`text-xl transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.story.title}
              </h2>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.story.content}
              </p>
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.team.title}
              </h2>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.team.content}
              </p>
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.values.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.values.items.map((value, index) => (
                  <div
                    key={index}
                    className={`border rounded-xl p-6 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-900 border-white' 
                        : 'bg-gray-100 border-gray-300'
                    }`}
                  >
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {value.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {value.description}
                    </p>
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

