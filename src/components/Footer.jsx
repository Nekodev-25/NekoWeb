import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

function Footer() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: {
        line1: 'Hagamos algo',
        line2: 'increíble juntos',
      },
      contact: {
        location: 'Buenos Aires, ARG.',
        email: 'Mail: infonekodev@gmail.com',
        phone: 'Tel: +54 11 6972-9914',
      },
      bottomText: '© 2025 Neko Dev. Todos los derechos reservados.',
      faqs: 'FAQs',
      social: {
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        tiktok: 'TikTok',
      },
    },
    en: {
      title: {
        line1: 'Let\'s create',
        line2: 'something amazing',
      },
      contact: {
        location: 'Buenos Aires, ARG.',
        email: 'Mail: infonekodev@gmail.com',
        phone: 'Tel: +54 11 6972-9914',
      },
      bottomText: '© 2025 Neko Dev. All rights reserved.',
      faqs: 'FAQs',
      social: {
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        tiktok: 'TikTok',
      },
    },
  }

  const t = translations[language]

  return (
    <footer className={`pt-12 pb-16 lg:pt-16 lg:pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-black'}`}>
      <div className="container mx-auto px-6">
        {/* Sección superior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Sección izquierda - Título y cuadrado */}
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
              {t.title.line1}
              <br />
              {t.title.line2}
            </h2>
            {/* Gato de redes */}
            <img 
              src={isDarkMode ? '/images/gatitos/dia/redes_dia-16.png' : '/images/gatitos/noche/redes_noche-09.png'}
              alt="Gato redes"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>

          {/* Sección derecha - Información de contacto */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-1 mt-10">
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.contact.location}
            </p>
            <a 
              href="https://wa.me/541169729914" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
            >
              {t.contact.phone}
            </a>
            <a 
              href="mailto:infonekodev@gmail.com"
              className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
            >
              {t.contact.email}
            </a>
          </div>
        </div>

        {/* Línea separadora */}
        <div className={`w-full h-px mb-8 transition-colors duration-300 ${isDarkMode ? 'bg-[#2D3748]' : 'bg-[#F6F3E8]'}`}></div>

        {/* Sección inferior - Texto, FAQs e iconos de redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Texto y FAQs a la izquierda */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.bottomText}
            </p>
            <Link
              to="/faqs"
              className={`text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#2D3748]' : 'text-[#F6F3E8]'}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
            >
              {t.faqs}
            </Link>
          </div>

          {/* Iconos de redes sociales a la derecha */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-opacity duration-200 hover:opacity-70"
              aria-label={t.social.linkedin}
            >
              <FaLinkedin className={`w-6 h-6 transition-colors ${
                isDarkMode 
                  ? 'text-[#2D3748]' 
                  : 'text-[#F6F3E8]'
              }`} />
            </a>
            <a
              href="https://www.instagram.com/nekodev__/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-opacity duration-200 hover:opacity-70"
              aria-label={t.social.instagram}
            >
              <FaInstagram className={`w-6 h-6 transition-colors ${
                isDarkMode 
                  ? 'text-[#2D3748]' 
                  : 'text-[#F6F3E8]'
              }`} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-opacity duration-200 hover:opacity-70"
              aria-label={t.social.tiktok}
            >
              <FaTiktok className={`w-6 h-6 transition-colors ${
                isDarkMode 
                  ? 'text-[#2D3748]' 
                  : 'text-[#F6F3E8]'
              }`} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

