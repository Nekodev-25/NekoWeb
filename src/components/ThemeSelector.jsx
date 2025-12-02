import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { HiSun, HiMoon } from 'react-icons/hi'

function ThemeSelector() {
  const { setTheme, hasSelectedTheme, isLoading } = useTheme()
  const { language } = useLanguage()

  const translations = {
    es: {
      dayMode: 'Modo Día',
      nightMode: 'Modo Noche',
    },
    en: {
      dayMode: 'Day Mode',
      nightMode: 'Night Mode',
    },
  }

  const t = translations[language]

  // No mostrar si ya seleccionó el tema o está cargando
  if (hasSelectedTheme || isLoading) {
    return null
  }

  const handleSelectTheme = (isDark) => {
    setTheme(isDark)
  }

  return (
    <div className="fixed inset-0 z-[100] flex w-screen h-screen overflow-hidden">
      {/* Mitad izquierda - Modo Día (Blanco) */}
      <button
        onClick={() => handleSelectTheme(false)}
        className="w-1/2 bg-[#F6F3E8] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#E8E3D5] group"
      >
        <div className="flex flex-col items-center gap-4">
          <HiSun className="w-16 h-16 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
          <span 
            className="text-gray-900 text-lg font-medium transition-all duration-300 group-hover:scale-105"
            style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500 }}
          >
            {t.dayMode}
          </span>
        </div>
      </button>

      {/* Línea divisoria */}
      <div className="w-px bg-gray-400"></div>

      {/* Mitad derecha - Modo Noche (Negro) */}
      <button
        onClick={() => handleSelectTheme(true)}
        className="w-1/2 bg-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-900 group"
      >
        <div className="flex flex-col items-center gap-4">
          <HiMoon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
          <span 
            className="text-white text-lg font-medium transition-all duration-300 group-hover:scale-105"
            style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500 }}
          >
            {t.nightMode}
          </span>
        </div>
      </button>
    </div>
  )
}

export default ThemeSelector

