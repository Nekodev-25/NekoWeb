import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { sendEmail, validateFormData } from '../utils/sendEmail'

const PLAN_TYPE_LABELS = {
  es: {
    basico: 'Páginas Web',
    ecommerce: 'E-commerce',
    aplicaciones: 'Aplicaciones',
  },
  en: {
    basico: 'Web Pages',
    ecommerce: 'E-commerce',
    aplicaciones: 'Applications',
  },
}

function PlanRequestModal({ isOpen, onClose, plan, planType }) {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const translations = {
    es: {
      title: 'Solicitar plan',
      formLabels: {
        name: 'NOMBRE',
        lastName: 'APELLIDO',
        planSelected: 'Plan seleccionado',
        planCategory: 'Categoría',
        email: 'CORREO ELECTRÓNICO',
        query: 'CONSULTA',
      },
      formPlaceholders: {
        name: '',
        lastName: '',
        email: '',
        query: '',
      },
      submitButton: 'Enviar',
      closeButton: 'Cerrar',
      successMessage: '¡Mensaje enviado! Te responderemos a la brevedad.',
      errorMessage: 'Error al enviar. Por favor, intenta nuevamente.',
      sending: 'Enviando...',
    },
    en: {
      title: 'Request plan',
      formLabels: {
        name: 'NAME',
        lastName: 'LAST NAME',
        planSelected: 'Selected plan',
        planCategory: 'Category',
        email: 'EMAIL',
        query: 'QUERY',
      },
      formPlaceholders: {
        name: '',
        lastName: '',
        email: '',
        query: '',
      },
      submitButton: 'Send',
      closeButton: 'Close',
      successMessage: 'Message sent! We will reply soon.',
      errorMessage: 'Error sending. Please try again.',
      sending: 'Sending...',
    },
  }

  const t = translations[language]
  const categoryLabel = planType ? PLAN_TYPE_LABELS[language][planType] : ''

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateFormData(formData)
    if (!validation.valid) {
      setSubmitStatus({ type: 'error', message: validation.errors.join(', ') })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const serviceText = plan
        ? `${plan.name} - ${categoryLabel}`
        : categoryLabel
      await sendEmail(
        {
          ...formData,
          service: serviceText,
        },
        { usePlanTemplate: true }
      )
      setSubmitStatus({
        type: 'success',
        message: t.successMessage,
      })
      setFormData({ name: '', lastName: '', email: '', message: '' })
      setTimeout(() => {
        onClose()
        setSubmitStatus({ type: null, message: '' })
      }, 2000)
    } catch (error) {
      const detail = error?.message || error?.text || ''
      const isConfig = /configurado|variable|VITE_EMAILJS_TEMPLATE_ID_PLAN/i.test(detail)
      setSubmitStatus({
        type: 'error',
        message: isConfig ? detail : `${t.errorMessage} ${detail ? `(${detail})` : ''}`.trim(),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  const inputBorder = isDarkMode ? 'border-white focus:border-gray-300' : 'border-gray-800 focus:border-gray-900'
  const inputText = isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-modal-title"
    >
      <div
        className={`
          relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
          rounded-2xl p-8 md:p-10
          border-2
          ${isDarkMode ? 'bg-black border-[#F6F3E8]' : 'bg-[#F6F3E8] border-gray-900'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-4 mb-8">
          <h2
            id="plan-modal-title"
            className={`text-2xl md:text-3xl font-black transition-colors ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
            style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
          >
            {t.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#F6F3E8]/10 text-[#F6F3E8]' : 'hover:bg-gray-900/10 text-gray-900'}`}
            aria-label={t.closeButton}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Plan y categoría (solo lectura) */}
        <div className="mb-8 space-y-4">
          <div>
            <label className={`block text-xs uppercase mb-2 font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.formLabels.planSelected}
            </label>
            <p className={`text-base font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
              {plan?.name ?? '-'}
            </p>
          </div>
          <div>
            <label className={`block text-xs uppercase mb-2 font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.formLabels.planCategory}
            </label>
            <p className={`text-base ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
              {categoryLabel || '-'}
            </p>
          </div>
        </div>

        {submitStatus.type && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-xs uppercase mb-3 font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.formLabels.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.formPlaceholders.name}
                required
                className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors ${inputBorder} ${inputText}`}
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
              />
            </div>
            <div>
              <label className={`block text-xs uppercase mb-3 font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                {t.formLabels.lastName}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t.formPlaceholders.lastName}
                className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors ${inputBorder} ${inputText}`}
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
              />
            </div>
          </div>

          <div>
            <label className={`block text-xs uppercase mb-3 font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.formLabels.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t.formPlaceholders.email}
              required
              className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors ${inputBorder} ${inputText}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
            />
          </div>

          <div>
            <label className={`block text-xs uppercase mb-3 font-medium ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
              {t.formLabels.query}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t.formPlaceholders.query}
              rows={4}
              required
              className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none resize-none text-base transition-colors ${inputBorder} ${inputText}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`
                px-6 py-3 rounded-full font-medium text-sm border-2
                ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
              `}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
            >
              {t.closeButton}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-8 py-3 rounded-full font-medium text-sm border-2
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
              `}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
            >
              {isSubmitting ? t.sending : t.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PlanRequestModal
