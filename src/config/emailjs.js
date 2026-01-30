/**
 * Configuración de EmailJS
 *
 * Variables de entorno:
 *   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
 *   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx        → formulario de contacto
 *   VITE_EMAILJS_TEMPLATE_ID_PLAN=template_yyyyyyy    → formulario "Solicitar plan"
 *   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
 *   VITE_EMAILJS_TO_EMAIL=tu-email@ejemplo.com
 */

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateIdPlan: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PLAN,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL,
}

/**
 * Valida configuración según el tipo de envío.
 * @param {Object} options
 * @param {boolean} options.forPlan - true = validar template de solicitud de plan
 */
export const validateEmailjsConfig = (options = {}) => {
  const { forPlan = false } = options
  const missing = []

  if (!emailjsConfig.serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
  if (!emailjsConfig.publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')
  if (!emailjsConfig.toEmail) missing.push('VITE_EMAILJS_TO_EMAIL')

  if (forPlan) {
    if (!emailjsConfig.templateIdPlan) missing.push('VITE_EMAILJS_TEMPLATE_ID_PLAN')
  } else {
    if (!emailjsConfig.templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
  }

  if (missing.length > 0) {
    console.warn('⚠️ EmailJS: Faltan las siguientes variables de entorno:', missing.join(', '))
    if (typeof window !== 'undefined') {
      console.warn('📝 En local: Crea un archivo .env en la raíz del proyecto con estas variables')
      console.warn('📝 En producción (Vercel): Configura las variables en Settings → Environment Variables')
      console.warn('📝 Después de agregar variables en Vercel, haz redeploy del proyecto')
    }
    return false
  }

  return true
}

