import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { sendEmail, validateFormData } from '../utils/sendEmail'

function Contactanos() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)
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
      title: 'Contactanos',
      description: '¿Tenés un proyecto en mente? Nos encantaría escucharte. Completá el formulario y te responderemos a la brevedad.',
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
      title: 'Contact Us',
      description: 'Do you have a project in mind? We would love to hear from you. Fill out the form and we will get back to you shortly.',
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
    // Limpiar mensaje de error al escribir
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar datos
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
      // Limpiar formulario
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
    <section
      id="contact"
      ref={ref}
      className={`
        snap-start snap-always
        min-h-screen py-12 md:py-32
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
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black leading-tight md:leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna Izquierda - Ilustración del gato e información de contacto (solo desktop) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-end">
          {/* Imagen del gatito callcenter */}
          <div className="w-[200px] h-[200px] mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src={isDarkMode ? '/images/gatitos/noche/contacto_noche-05.png' : '/images/gatitos/dia/contacto_dia-11.png'} 
              alt="Gatito callcenter" 
              className="w-[200px] h-[200px] object-contain"
              style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            />
          </div>

            {/* Información de contacto */}
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
                href="mailto:infonekodev@gmail.com"
                className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
              >
                {t.footer.email}
              </a>
            </div>
          </div>

          {/* Columna Derecha - Texto descriptivo y Formulario */}
          <div className="lg:col-span-2">
            {/* Texto descriptivo */}
            <div className="mb-12 max-w-2xl">
            <p className={`leading-relaxed text-left break-words transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.description}
            </p>
            </div>

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

            {/* Formulario con campos más anchos */}
            <form onSubmit={handleSubmit} className="space-y-8 w-full">
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
                    className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white placeholder-gray-400' 
                        : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
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
                    className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white placeholder-gray-400' 
                        : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
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
                    className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 appearance-none pr-8 text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                  >
                    <option value="">{t.formPlaceholders.service}</option>
                    <option value="Diseño web">{language === 'es' ? 'Diseño web' : 'Web design'}</option>
                    <option value="Desarrollo web">{language === 'es' ? 'Desarrollo web' : 'Web development'}</option>
                    <option value="Branding">Branding</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Aplicaciones">{language === 'es' ? 'Aplicaciones' : 'Applications'}</option>
                    <option value="Otro">{language === 'es' ? 'Otro' : 'Other'}</option>
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
                  className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white placeholder-gray-400' 
                      : 'text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
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
                  className={`w-full bg-transparent border-b-2 border-gray-800 pb-3 focus:outline-none focus:border-gray-900 resize-none text-base transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white placeholder-gray-400' 
                      : 'text-gray-900'
                  }`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
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
                  `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                  {isSubmitting 
                    ? (language === 'es' ? 'Enviando...' : 'Sending...')
                    : t.submitButton
                  }
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile: Solo imagen del gatito (sin información de contacto) */}
        <div className="lg:hidden mt-12">
          <div className="flex flex-col items-center">
            {/* Imagen del gatito callcenter */}
            <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
              <img 
                src={isDarkMode ? '/images/gatitos/noche/contacto_noche-05.png' : '/images/gatitos/dia/contacto_dia-11.png'} 
                alt="Gatito callcenter" 
                className="w-[200px] h-[200px] object-contain"
                style={{ width: '200px', height: '200px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactanos

