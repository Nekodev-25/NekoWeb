import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contactanos() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)

  const translations = {
    es: {
      title: 'Contactanos',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
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
      footer: {
        location: 'Buenos Aires, Argentina',
        tagline: 'Creamos para todo el mundo',
        phone: 'Tel.: +54 11-3283-8365',
        email: 'Mail: infonekodev@gmail.com',
      },
    },
    en: {
      title: 'Contact Us',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
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
      footer: {
        location: 'Buenos Aires, Argentina',
        tagline: 'We create for everyone',
        phone: 'Tel.: +54 11-3283-8365',
        email: 'Mail: infonekodev@gmail.com',
      },
    },
  }

  const t = translations[language]

  return (
    <section
      id="contact"
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
        {/* Título grande arriba - en su propio contenedor */}
        <div className="mb-12 lg:mb-16">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-black leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna Izquierda - Ilustración del gato e información de contacto */}
          <div className="lg:col-span-1 flex flex-col justify-end">
            {/* Imagen del gatito callcenter */}
            <div className="w-[200px] h-[200px] mb-4">
              <img 
                src="/images/gatito-callcenter.png" 
                alt="Gatito callcenter" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información de contacto */}
            <div className="space-y-1 text-left">
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.location}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.tagline}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.phone}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.email}
              </p>
            </div>
          </div>

          {/* Columna Derecha - Texto descriptivo y Formulario */}
          <div className="lg:col-span-2">
            {/* Texto descriptivo */}
            <div className="mb-12 max-w-2xl">
            <p className={`leading-relaxed text-left break-words transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.description}
            </p>
            </div>

            {/* Formulario con campos más anchos */}
            <form className="space-y-8 w-full">
              {/* Nombre y Apellido en fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {t.formLabels.name}
                  </label>
                  <input
                    type="text"
                    placeholder={t.formPlaceholders.name}
                    className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white placeholder-gray-400' 
                        : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {t.formLabels.lastName}
                  </label>
                  <input
                    type="text"
                    placeholder={t.formPlaceholders.lastName}
                    className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white placeholder-gray-400' 
                        : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
                  />
                </div>
              </div>

              {/* Servicio - Dropdown */}
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.formLabels.service}
                </label>
                <div className="relative">
                  <select
                    className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 appearance-none pr-8 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
                  >
                    <option value="">{t.formPlaceholders.service}</option>
                    <option value="web-design">Web design</option>
                    <option value="web-develop">Web develop</option>
                    <option value="branding">Branding</option>
                  </select>
                  <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none pb-3">
                    <svg className={`w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.formLabels.email}
                </label>
                <input
                  type="email"
                  placeholder={t.formPlaceholders.email}
                  className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white placeholder-gray-400' 
                      : 'text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
                />
              </div>

              {/* Consulta - Textarea */}
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.formLabels.query}
                </label>
                <textarea
                  placeholder={t.formPlaceholders.query}
                  rows={5}
                  className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 resize-none text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white placeholder-gray-400' 
                      : 'text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
                ></textarea>
              </div>

              {/* Botón enviar - alineado a la derecha */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className={`
                    px-8 
                    py-3 
                    rounded-lg
                    font-medium 
                    transition-colors 
                    duration-200
                    text-sm
                    ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
                  `} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.submitButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactanos

