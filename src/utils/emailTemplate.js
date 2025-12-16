/**
 * Template de email para notificaciones de contacto
 * Compatible con servicios de email como EmailJS, SendGrid, etc.
 * 
 * Variables disponibles:
 * - {{name}}: Nombre del remitente
 * - {{time}}: Fecha y hora del mensaje
 * - {{message}}: Contenido del mensaje
 * - {{logoUrl}}: URL del logo (debe ser una URL absoluta accesible públicamente)
 */

export const emailTemplate = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F6F3E8; padding: 40px 20px; margin: 0;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #000000; border-radius: 16px; overflow: hidden;">
    
    <!-- Header con logo -->
    <tr>
      <td style="padding: 40px 40px 30px; text-align: center; background-color: #000000;">
        <img src="{{logoUrl}}" alt="Neko Dev" style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
      </td>
    </tr>
    
    <!-- Mensaje de notificación -->
    <tr>
      <td style="padding: 0 40px 30px;">
        <p style="margin: 0; color: #F6F3E8; font-size: 14px; line-height: 1.6; text-align: center;">
          Has recibido un nuevo mensaje de <strong>{{name}}</strong>. Por favor, responde a la brevedad.
        </p>
      </td>
    </tr>
    
    <!-- Separador -->
    <tr>
      <td style="padding: 0 40px;">
        <div style="height: 1px; background-color: #F6F3E8; opacity: 0.2;"></div>
      </td>
    </tr>
    
    <!-- Contenido del mensaje -->
    <tr>
      <td style="padding: 30px 40px 40px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <!-- Avatar/Icono -->
            <td style="width: 60px; vertical-align: top; padding-right: 20px;">
              <div style="width: 50px; height: 50px; background-color: #F6F3E8; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                👤
              </div>
            </td>
            
            <!-- Información del mensaje -->
            <td style="vertical-align: top;">
              <div style="margin-bottom: 8px;">
                <strong style="color: #F6F3E8; font-size: 18px; display: block; margin-bottom: 4px;">{{name}}</strong>
                <span style="color: #F6F3E8; font-size: 12px; opacity: 0.6;">{{time}}</span>
              </div>
              <div style="margin-top: 16px; padding: 20px; background-color: rgba(246, 243, 232, 0.1); border-radius: 8px; border-left: 3px solid #F6F3E8;">
                <p style="margin: 0; color: #F6F3E8; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="padding: 30px 40px; background-color: rgba(246, 243, 232, 0.05); border-top: 1px solid rgba(246, 243, 232, 0.1);">
        <p style="margin: 0; color: #F6F3E8; font-size: 12px; text-align: center; opacity: 0.7;">
          Este es un mensaje automático de Neko Dev
        </p>
      </td>
    </tr>
    
  </table>
  
  <!-- Footer externo -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto 0;">
    <tr>
      <td style="text-align: center; padding: 20px;">
        <p style="margin: 0; color: #2D3748; font-size: 12px; opacity: 0.6;">
          © 2024 Neko Dev. Todos los derechos reservados.
        </p>
      </td>
    </tr>
  </table>
</div>
`

/**
 * Función helper para reemplazar las variables en el template
 * @param {string} template - Template con variables {{variable}}
 * @param {object} data - Objeto con los valores a reemplazar
 * @param {string} logoUrl - URL absoluta del logo (ej: https://tudominio.com/images/logo-blanco.png)
 * @returns {string} - Template con las variables reemplazadas
 */
export const fillEmailTemplate = (template, data, logoUrl) => {
  let filled = template
    .replace(/\{\{name\}\}/g, data.name || '')
    .replace(/\{\{time\}\}/g, data.time || '')
    .replace(/\{\{message\}\}/g, data.message || '')
    .replace(/\{\{logoUrl\}\}/g, logoUrl || '')
  
  return filled
}

/**
 * Ejemplo de uso:
 * 
 * const template = fillEmailTemplate(
 *   emailTemplate,
 *   {
 *     name: 'Juan Pérez',
 *     time: '15 de enero, 2024 - 14:30',
 *     message: 'Hola, me interesa conocer más sobre sus servicios...'
 *   },
 *   'https://tudominio.com/images/logo-blanco.png'
 * )
 */

