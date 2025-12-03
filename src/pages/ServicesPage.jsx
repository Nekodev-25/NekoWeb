import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PlansSelector from '../components/PlansSelector'
import CustomServiceForm from '../components/CustomServiceForm'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function ServicesPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [searchParams] = useSearchParams()

  // Reiniciar scroll al inicio cuando se carga la página con un parámetro de plan
  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam) {
      // Reiniciar scroll al inicio de la página
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [searchParams])

  // Servicios para el formulario personalizado
  const servicesData = {
    es: [
      { id: 0, name: 'Web develope' },
      { id: 1, name: 'Web develope' },
      { id: 2, name: 'Web develope' },
      { id: 3, name: 'Web develope' },
    ],
    en: [
      { id: 0, name: 'Web develop' },
      { id: 1, name: 'Web develop' },
      { id: 2, name: 'Web develop' },
      { id: 3, name: 'Web develop' },
    ],
  }

  const services = servicesData[language]

  return (
    <>
      {/* Selector de planes con switch */}
      <PlansSelector />
      
      {/* Formulario personalizado */}
      <section className={`snap-start min-h-screen pb-32 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`} style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-6">
          <CustomServiceForm services={services} />
        </div>
      </section>
    </>
  )
}

export default ServicesPage

