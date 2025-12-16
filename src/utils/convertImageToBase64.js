/**
 * Utilidad para convertir una imagen local a Base64
 * 
 * NOTA: Base64 en emails tiene limitaciones:
 * - Aumenta el tamaño del email significativamente
 * - Algunos clientes de email pueden bloquearlo
 * - No es la solución más recomendada
 * 
 * Mejor opción: Subir la imagen a un servidor público o usar un CDN
 */

/**
 * Convierte una imagen a Base64
 * @param {File|string} image - Archivo de imagen o ruta
 * @returns {Promise<string>} - String base64 de la imagen
 */
export const convertImageToBase64 = (image) => {
  return new Promise((resolve, reject) => {
    if (typeof image === 'string') {
      // Si es una ruta, necesitarías leer el archivo del servidor
      // Esto solo funciona en Node.js, no en el navegador
      reject(new Error('Para rutas de archivo, usa Node.js fs.readFileSync'))
      return
    }

    if (image instanceof File) {
      const reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsDataURL(image)
    } else {
      reject(new Error('Formato de imagen no soportado'))
    }
  })
}

/**
 * Ejemplo de uso en el navegador (para testing):
 * 
 * const fileInput = document.querySelector('input[type="file"]')
 * fileInput.addEventListener('change', async (e) => {
 *   const file = e.target.files[0]
 *   const base64 = await convertImageToBase64(file)
 *   console.log(base64) // data:image/png;base64,iVBORw0KGgo...
 * })
 */

