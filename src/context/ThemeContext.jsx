import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [hasSelectedTheme, setHasSelectedTheme] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Cargar preferencia del tema desde localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const hasSelected = localStorage.getItem('hasSelectedTheme')
    
    if (hasSelected === 'true') {
      setHasSelectedTheme(true)
      if (savedTheme === 'dark') {
        setIsDarkMode(true)
      }
    }
    setIsLoading(false)
  }, [])

  // Guardar preferencia cuando cambia el tema
  useEffect(() => {
    if (hasSelectedTheme) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }
  }, [isDarkMode, hasSelectedTheme])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const setTheme = (darkMode) => {
    setIsDarkMode(darkMode)
    setHasSelectedTheme(true)
    localStorage.setItem('hasSelectedTheme', 'true')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      setTheme, 
      hasSelectedTheme, 
      isLoading 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

