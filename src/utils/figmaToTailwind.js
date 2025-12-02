/**
 * Utilidades para convertir valores de Figma a Tailwind CSS
 * 
 * Uso:
 * 1. Copia los valores de Figma Dev Mode
 * 2. Usa estas funciones para convertir a clases Tailwind
 * 3. O usa los valores directamente en style={{}} si no hay clase equivalente
 */

/**
 * Convierte padding/margin de Figma a Tailwind
 * Figma usa píxeles, Tailwind usa rem (1rem = 16px por defecto)
 */
export const spacingToTailwind = (px) => {
  const rem = px / 16
  const tailwindMap = {
    0: '0',
    1: '0.25',   // 4px
    2: '0.5',    // 8px
    3: '0.75',   // 12px
    4: '1',      // 16px
    5: '1.25',   // 20px
    6: '1.5',    // 24px
    8: '2',      // 32px
    10: '2.5',   // 40px
    12: '3',     // 48px
    16: '4',     // 64px
    20: '5',     // 80px
    24: '6',     // 96px
    32: '8',     // 128px
  }
  
  // Busca el valor más cercano
  const closest = Object.keys(tailwindMap).find(key => Math.abs(key - rem) < 0.5)
  return closest ? `p-${closest}` : `p-[${rem}rem]` // Usa valor arbitrario si no hay match
}

/**
 * Convierte font-size de Figma a Tailwind
 */
export const fontSizeToTailwind = (px) => {
  const rem = px / 16
  const sizeMap = {
    12: 'text-xs',    // 0.75rem
    14: 'text-sm',    // 0.875rem
    16: 'text-base',  // 1rem
    18: 'text-lg',    // 1.125rem
    20: 'text-xl',    // 1.25rem
    24: 'text-2xl',   // 1.5rem
    30: 'text-3xl',   // 1.875rem
    36: 'text-4xl',   // 2.25rem
    48: 'text-5xl',   // 3rem
    60: 'text-6xl',   // 3.75rem
    72: 'text-7xl',   // 4.5rem
    96: 'text-8xl',   // 6rem
  }
  
  return sizeMap[px] || `text-[${rem}rem]`
}

/**
 * Convierte font-weight de Figma a Tailwind
 */
export const fontWeightToTailwind = (weight) => {
  const weightMap = {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
  }
  
  return weightMap[weight] || 'font-normal'
}

/**
 * Convierte border-radius de Figma a Tailwind
 */
export const borderRadiusToTailwind = (px) => {
  const rem = px / 16
  const radiusMap = {
    0: 'rounded-none',
    2: 'rounded-sm',    // 0.125rem
    4: 'rounded',      // 0.25rem
    6: 'rounded-md',   // 0.375rem
    8: 'rounded-lg',   // 0.5rem
    12: 'rounded-xl',  // 0.75rem
    16: 'rounded-2xl', // 1rem
    24: 'rounded-3xl', // 1.5rem
  }
  
  return radiusMap[px] || `rounded-[${rem}rem]`
}

/**
 * Convierte color hex de Figma a Tailwind
 * Si el color no existe en Tailwind, devuelve el valor para usar en style
 */
export const colorToTailwind = (hex) => {
  // Colores comunes de Tailwind
  const colorMap = {
    '#000000': 'text-black',
    '#ffffff': 'text-white',
    '#3b82f6': 'text-blue-500',
    '#1e40af': 'text-blue-700',
    '#0f172a': 'text-slate-900',
    '#1e293b': 'text-slate-800',
  }
  
  return colorMap[hex.toLowerCase()] || hex // Devuelve hex si no hay match
}

/**
 * Helper para extraer valores de un elemento Figma
 * Formato de ejemplo basado en Dev Mode de Figma
 */
export const parseFigmaStyles = (figmaData) => {
  return {
    padding: spacingToTailwind(figmaData.padding),
    margin: spacingToTailwind(figmaData.margin),
    fontSize: fontSizeToTailwind(figmaData.fontSize),
    fontWeight: fontWeightToTailwind(figmaData.fontWeight),
    borderRadius: borderRadiusToTailwind(figmaData.borderRadius),
    color: colorToTailwind(figmaData.color),
  }
}

/**
 * Ejemplo de uso:
 * 
 * // Desde Figma Dev Mode copias:
 * // padding: 24px
 * // font-size: 18px
 * // font-weight: 600
 * // color: #3b82f6
 * 
 * const styles = parseFigmaStyles({
 *   padding: 24,
 *   fontSize: 18,
 *   fontWeight: 600,
 *   color: '#3b82f6'
 * })
 * 
 * // Resultado:
 * // className="p-6 text-lg font-semibold text-blue-500"
 */

