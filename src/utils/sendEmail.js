import emailjs from '@emailjs/browser'
import { emailjsConfig, validateEmailjsConfig } from '../config/emailjs'

/**
 * Envía un email usando EmailJS
 * @param {Object} formData - Datos del formulario
 * @param {string} formData.name - Nombre del remitente
 * @param {string} formData.lastName - Apellido del remitente
 * @param {string} formData.email - Email del remitente
 * @param {string} formData.service - Servicio seleccionado
 * @param {string} formData.message - Mensaje/consulta
 * @returns {Promise} - Promise que se resuelve cuando el email se envía
 */
export const sendEmail = async (formData) => {
  // Validar configuración
  if (!validateEmailjsConfig()) {
    throw new Error('EmailJS no está configurado correctamente. Revisa las variables de entorno.')
  }

  // Formatear fecha y hora
  const now = new Date()
  const time = now.toLocaleString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  // Preparar los parámetros para el template
  const templateParams = {
    name: `${formData.name} ${formData.lastName}`.trim(),
    lastName: formData.lastName || '',
    email: formData.email,
    service: formData.service || 'No especificado',
    message: formData.message,
    time: time,
    to_email: emailjsConfig.toEmail, // Email de destino
  }

  try {
    // Inicializar EmailJS con la Public Key
    emailjs.init(emailjsConfig.publicKey)

    // Enviar el email
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    )

    console.log('✅ Email enviado exitosamente:', response)
    return { success: true, response }
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
    throw error
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

