import emailjs from '@emailjs/browser'
import { emailjsConfig, validateEmailjsConfig } from '../config/emailjs'

/**
 * Envía un email usando EmailJS
 * @param {Object} formData - Datos del formulario (name, lastName, email, service, message)
 * @param {Object} options
 * @param {boolean} options.usePlanTemplate - true = usar template de "Solicitar plan"
 * @returns {Promise} - Promise que se resuelve cuando el email se envía
 */
export const sendEmail = async (formData, options = {}) => {
  const { usePlanTemplate = false } = options

  if (!validateEmailjsConfig({ forPlan: usePlanTemplate })) {
    throw new Error('EmailJS no está configurado correctamente. Revisa las variables de entorno.')
  }

  const now = new Date()
  const time = now.toLocaleString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const templateParams = {
    name: `${formData.name} ${formData.lastName}`.trim(),
    lastName: formData.lastName || '',
    email: formData.email,
    service: formData.service || 'No especificado',
    message: formData.message,
    time: time,
    to_email: emailjsConfig.toEmail,
  }

  const templateId = usePlanTemplate ? emailjsConfig.templateIdPlan : emailjsConfig.templateId

  if (!templateId) {
    const missing = usePlanTemplate ? 'VITE_EMAILJS_TEMPLATE_ID_PLAN' : 'VITE_EMAILJS_TEMPLATE_ID'
    throw new Error(`Falta configurar ${missing}. Agregala en .env (local) o en Vercel → Environment Variables y redeploy.`)
  }

  try {
    emailjs.init(emailjsConfig.publicKey)

    const response = await emailjs.send(
      emailjsConfig.serviceId,
      templateId,
      templateParams
    )

    console.log('✅ Email enviado exitosamente:', response)
    return { success: true, response }
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
    console.error('Configuración actual:', {
      serviceId: emailjsConfig.serviceId ? '✅ Configurado' : '❌ Faltante',
      templateId: emailjsConfig.templateId ? '✅ Configurado' : '❌ Faltante',
      templateIdPlan: emailjsConfig.templateIdPlan ? '✅ Configurado' : '❌ Faltante',
      publicKey: emailjsConfig.publicKey ? '✅ Configurado' : '❌ Faltante',
      toEmail: emailjsConfig.toEmail ? '✅ Configurado' : '❌ Faltante',
    })
    if (error?.response) console.error('EmailJS response:', error.response)

    let errorMessage = 'Error al enviar el email. '
    const detail = error?.text || error?.message || ''
    if (detail) {
      errorMessage += detail
    } else {
      errorMessage += 'Verifica en EmailJS que el template use las variables: name, lastName, email, service, message, time, to_email. Y que el dominio esté en "Allowed origins".'
    }
    throw new Error(errorMessage)
  }
}

/**
 * Valida los datos del formulario antes de enviar
 * @param {Object} formData - Datos del formulario
 * @returns {Object} - { valid: boolean, errors: string[] }
 */
export const validateFormData = (formData) => {
  const errors = []

  if (!formData.name || formData.name.trim() === '') {
    errors.push('El nombre es requerido')
  }

  if (!formData.email || formData.email.trim() === '') {
    errors.push('El email es requerido')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('El email no es válido')
  }

  if (!formData.message || formData.message.trim() === '') {
    errors.push('El mensaje es requerido')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

