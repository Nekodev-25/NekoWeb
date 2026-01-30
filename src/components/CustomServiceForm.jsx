import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { sendEmail, validateFormData } from '../utils/sendEmail'

function CustomServiceForm({ services = [] }) {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    service: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const translations = {
    es: {
      customTitle: '¿Necesitas algo personalizado?',
      customDescription: 'Cada proyecto es único. Si no encontrás lo que buscás en nuestros planes, contanos tu idea y diseñamos una solución a medida para vos.',
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
        phone: 'Tel: +54 11 6972-9914',
        email: 'Mail: infonekodev@gmail.com',
      },
    },
    en: {
      customTitle: 'Do you need something personalized?',
      customDescription: 'Every project is unique. If you don\'t find what you\'re looking for in our plans, tell us your idea and we\'ll design a custom solution for you.',
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
        phone: 'Tel: +54 11 6972-9914',
        email: 'Mail: infonekodev@gmail.com',
      },
    },
  }

  const t = translations[language]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validation = validateFormData(formData)
    if (!validation.valid) {
      setSubmitStatus({
        type: 'error',
        message: validation.errors.join(', ')
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      await sendEmail(formData)
      setSubmitStatus({
        type: 'success',
        message: language === 'es' 
          ? '¡Mensaje enviado exitosamente! Te responderemos a la brevedad.'
          : 'Message sent successfully! We will reply soon.'
      })
      setFormData({
        name: '',
        lastName: '',
        service: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: language === 'es'
          ? 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
          : 'Error sending message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`pt-16 border-t transition-colors duration-300 ${isDarkMode ? 'border-white' : 'border-gray-300'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Columna izquierda - Título, texto arriba y gatito/info abajo (solo desktop) */}
        <div className="hidden lg:flex flex-col min-h-[600px]">
          {/* Título y texto descriptivo arriba */}
          <div className="mb-12">
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black text-left leading-tight mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}>
              {t.customTitle}
            </h3>
            
            <p className={`leading-relaxed text-left max-w-md transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.customDescription}
            </p>
          </div>

          {/* Gatito diseñador e información de contacto - abajo, gatito arriba del texto */}
          <div className="mt-auto flex flex-col">
            {/* Gatito diseñador */}
            <div className="mb-4">
              <div className="w-[160px] h-[160px] flex items-end justify-start overflow-visible">
                <img
                  src={isDarkMode ? '/images/gatitos/noche/diseñador_noche-08.png' : '/images/gatitos/dia/diseñador_dia-12.png'}
                  alt="Gatito diseñador"
                  className="w-full h-full object-contain"
                  style={{ maxWidth: '160px', maxHeight: '160px', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Información de contacto - debajo del gatito */}
            <div className="space-y-1 text-left">
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.footer.location}
              </p>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.footer.tagline}
              </p>
              <a 
                href="https://wa.me/541169729914" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
              >
                {t.footer.phone}
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=infonekodev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
              >
                {t.footer.email}
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: Título y texto descriptivo arriba */}
        <div className="lg:hidden mb-8">
          <h3 className={`text-4xl md:text-5xl font-black text-left leading-tight mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}>
            {t.customTitle}
          </h3>
          
          <p className={`leading-relaxed text-left max-w-md transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
            {t.customDescription}
          </p>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="lg:pt-24 lg:mt-8">
          {/* Mensaje de estado */}
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nombre y Apellido en fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                  {t.formLabels.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.formPlaceholders.name}
                  required
                  className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                      : 'border-gray-900 focus:border-gray-600 text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                />
              </div>
              <div>
                <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                  {t.formLabels.lastName}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={t.formPlaceholders.lastName}
                  className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                      : 'border-gray-900 focus:border-gray-600 text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                />
              </div>
            </div>

            {/* Servicio - Dropdown */}
            <div>
              <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.formLabels.service}
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none appearance-none pr-8 text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-white focus:border-gray-300 text-white' 
                      : 'border-gray-900 focus:border-gray-600 text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  <option value="">{t.formPlaceholders.service}</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
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
              <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.formLabels.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.formPlaceholders.email}
                required
                className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                    : 'border-gray-900 focus:border-gray-600 text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
              />
            </div>

            {/* Consulta - Textarea */}
            <div>
              <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.formLabels.query}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.formPlaceholders.query}
                rows={5}
                required
                className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none resize-none text-base transition-colors duration-300 ${
                  isDarkMode 
                    ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                    : 'border-gray-900 focus:border-gray-600 text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
              ></textarea>
            </div>

            {/* Botón enviar - alineado a la derecha */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  px-8 
                  py-3 
                  rounded-full
                  font-medium 
                  transition-all 
                  duration-200
                  text-sm
                  border-2
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                  ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                {isSubmitting 
                  ? (language === 'es' ? 'Enviando...' : 'Sending...')
                  : t.submitButton
                }
              </button>
            </div>
          </form>
        </div>

        {/* Mobile: Gatito e información de contacto - centrados y debajo del formulario */}
        <div className="lg:hidden mt-12 flex flex-col items-center">
          {/* Gatito diseñador */}
          <div className="mb-4">
            <div className="w-[160px] h-[160px] flex items-center justify-center">
              <img
                src={isDarkMode ? '/images/gatitos/noche/diseñador_noche-08.png' : '/images/gatitos/dia/diseñador_dia-12.png'}
                alt="Gatito diseñador"
                className="w-full h-full object-contain"
                style={{ maxWidth: '160px', maxHeight: '160px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Información de contacto - centrada */}
          <div className="space-y-1 text-center">
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.footer.location}
            </p>
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.footer.tagline}
            </p>
                <a 
                  href="https://wa.me/541169729914" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {t.footer.phone}
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=infonekodev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {t.footer.email}
                </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomServiceForm

