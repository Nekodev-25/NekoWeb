/**
 * Configuración de EmailJS
 * 
 * IMPORTANTE: 
 * - Crea un archivo .env en la raíz del proyecto
 * - Agrega las siguientes variables (con VITE_ al inicio):
 *   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
 *   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
 *   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
 *   VITE_EMAILJS_TO_EMAIL=tu-email@ejemplo.com
 * 
 * - No subas el .env a Git (agrégalo a .gitignore)
 */

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL,
}

// Validar que las variables estén configuradas
export const validateEmailjsConfig = () => {
  const missing = []
  
  if (!emailjsConfig.serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
  if (!emailjsConfig.templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
  if (!emailjsConfig.publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')
  if (!emailjsConfig.toEmail) missing.push('VITE_EMAILJS_TO_EMAIL')
  
  if (missing.length > 0) {
    console.warn('⚠️ EmailJS: Faltan las siguientes variables de entorno:', missing.join(', '))
    console.warn('📝 Crea un archivo .env en la raíz del proyecto con estas variables')
    return false
  }
  
  return true
}

