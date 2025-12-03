import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

function Footer() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: {
        line1: 'lorem ipsum',
        line2: 'dolor sit amet',
      },
      contact: {
        location: 'Buenos Aires, ARG.',
        email: 'Mail: infonekodev@gmail.com',
        phone: 'Tel.: +54 11-3283-8365',
      },
      bottomText: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      social: {
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        tiktok: 'TikTok',
      },
    },
    en: {
      title: {
        line1: 'lorem ipsum',
        line2: 'dolor sit amet',
      },
      contact: {
        location: 'Buenos Aires, ARG.',
        email: 'Mail: infonekodev@gmail.com',
        phone: 'Tel.: +54 11-3283-8365',
      },
      bottomText: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      social: {
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        tiktok: 'TikTok',
      },
    },
  }

  const t = translations[language]

  return (
    <footer className={`py-16 lg:py-20 transition-colors duration-300 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-black'}`}>
      <div className="container mx-auto px-6">
        {/* Sección superior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Sección izquierda - Título y cuadrado */}
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
              {t.title.line1}
              <br />
              {t.title.line2}
            </h2>
            {/* Cuadrado gris */}
            <div className={`w-12 h-12 transition-colors duration-300 ${isDarkMode ? 'bg-[#2D3748]' : 'bg-gray-400'}`}></div>
          </div>

          {/* Sección derecha - Información de contacto */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <p className={`text-sm mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.contact.location}
            </p>
            <p className={`text-sm mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.contact.email}
            </p>
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.contact.phone}
            </p>
          </div>
        </div>

        {/* Línea separadora */}
        <div className={`w-full h-px mb-8 transition-colors duration-300 ${isDarkMode ? 'bg-[#2D3748]' : 'bg-[#F6F3E8]'}`}></div>

        {/* Sección inferior - Texto e iconos de redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Texto a la izquierda */}
          <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
            {t.bottomText}
          </p>

          {/* Iconos de redes sociales a la derecha */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isDarkMode 
                  ? 'border-[#2D3748] hover:bg-[#2D3748]' 
                  : 'border-[#F6F3E8] hover:bg-[#F6F3E8]'
              }`}
              aria-label={t.social.linkedin}
            >
              <FaLinkedin className={`w-5 h-5 transition-colors ${
                isDarkMode 
                  ? 'text-[#2D3748] group-hover:text-[#F8F7F0]' 
                  : 'text-[#F6F3E8] group-hover:text-black'
              }`} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isDarkMode 
                  ? 'border-[#2D3748] hover:bg-[#2D3748]' 
                  : 'border-[#F6F3E8] hover:bg-[#F6F3E8]'
              }`}
              aria-label={t.social.instagram}
            >
              <FaInstagram className={`w-5 h-5 transition-colors ${
                isDarkMode 
                  ? 'text-[#2D3748] group-hover:text-[#F8F7F0]' 
                  : 'text-[#F6F3E8] group-hover:text-black'
              }`} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-10 h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isDarkMode 
                  ? 'border-[#2D3748] hover:bg-[#2D3748]' 
                  : 'border-[#F6F3E8] hover:bg-[#F6F3E8]'
              }`}
              aria-label={t.social.tiktok}
            >
              <FaTiktok className={`w-5 h-5 transition-colors ${
                isDarkMode 
                  ? 'text-[#2D3748] group-hover:text-[#F8F7F0]' 
                  : 'text-[#F6F3E8] group-hover:text-black'
              }`} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

