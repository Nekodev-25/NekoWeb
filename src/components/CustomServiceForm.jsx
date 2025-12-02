import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function CustomServiceForm({ services = [] }) {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      customTitle: '¿Necesitas algo personalizado?',
      customDescription: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
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
        phone: 'Tel: +54 11-2292-6388',
        email: 'Mail: infopuchito@gmail.com',
      },
    },
    en: {
      customTitle: 'Do you need something personalized?',
      customDescription: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
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
        phone: 'Tel: +54 11-2292-6388',
        email: 'Mail: infopuchito@gmail.com',
      },
    },
  }

  const t = translations[language]

  return (
    <div className={`pt-16 border-t transition-colors duration-300 ${isDarkMode ? 'border-white' : 'border-gray-300'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Columna izquierda - Texto con ancho limitado */}
        <div className="space-y-8">
          <div className="max-w-md">
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black text-left leading-tight mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}>
              {t.customTitle}
            </h3>
            
            <p className={`leading-relaxed text-left transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
              {t.customDescription}
            </p>
          </div>
        </div>

        {/* Columna derecha - Formulario (más abajo) */}
        <div className="lg:mt-48 lg:pt-12">
          {/* Formulario */}
          <form className="space-y-8">
            {/* Nombre y Apellido en fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
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
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
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
              <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
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
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
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
              <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
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
                `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                {t.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Información de contacto - Esquina inferior izquierda del contenedor */}
      <div className="mt-16 lg:mt-24">
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
    </div>
  )
}

export default CustomServiceForm

