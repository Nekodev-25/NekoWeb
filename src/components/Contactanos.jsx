import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function Contactanos() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

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
    <section className={`snap-start min-h-screen py-32 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`} style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6">
        {/* Título grande arriba */}
        <div className="mb-20">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-left leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
            {t.title}
          </h2>
        </div>

        {/* Contenido principal: Layout de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda - Cuadrado e información de contacto en la parte inferior */}
          <div className="flex flex-col justify-end">
            {/* Imagen del gatito callcenter */}
            <div className="w-[200px] h-[200px] rounded-lg mb-8 overflow-hidden">
              <img 
                src="/images/gatito-callcenter.png" 
                alt="Gatito callcenter" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Información de contacto - debajo del cuadrado */}
            <div className="space-y-1 text-left">
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.location}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.tagline}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.phone}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.footer.email}
              </p>
            </div>
          </div>

          {/* Columna derecha - Subtítulo arriba del formulario */}
          <div className="flex flex-col">
            {/* Subtítulo en 2 líneas arriba del formulario */}
            <div className="mb-12 max-w-md">
              <p className={`leading-relaxed text-left break-words transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.description}
              </p>
            </div>

            {/* Formulario */}
            <form className="space-y-8">
              {/* Nombre y Apellido en fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {t.formLabels.name}
                  </label>
                  <input
                    type="text"
                    placeholder={t.formPlaceholders.name}
                    className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                        : 'border-gray-900 focus:border-gray-600 text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
                  />
                </div>
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {t.formLabels.lastName}
                  </label>
                  <input
                    type="text"
                    placeholder={t.formPlaceholders.lastName}
                    className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                        : 'border-gray-900 focus:border-gray-600 text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
                  />
                </div>
              </div>

              {/* Servicio - Dropdown */}
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.formLabels.service}
                </label>
                <div className="relative">
                  <select
                    className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none appearance-none pr-8 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border-white focus:border-gray-300 text-white' 
                        : 'border-gray-900 focus:border-gray-600 text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}
                  >
                    <option value="">{t.formPlaceholders.service}</option>
                    <option value="web-design">Web design</option>
                    <option value="web-develop">Web develop</option>
                    <option value="branding">Branding</option>
                  </select>
                  <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none pb-3">
                    <svg className={`w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.formLabels.email}
                </label>
                <input
                  type="email"
                  placeholder={t.formPlaceholders.email}
                  className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                      : 'border-gray-900 focus:border-gray-600 text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
                />
              </div>

              {/* Consulta - Textarea */}
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                  {t.formLabels.query}
                </label>
                <textarea
                  placeholder={t.formPlaceholders.query}
                  rows={5}
                  className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none resize-none text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                      : 'border-gray-900 focus:border-gray-600 text-gray-900'
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

