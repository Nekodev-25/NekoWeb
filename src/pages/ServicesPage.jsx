import Services from '../components/Services'
import CustomServiceForm from '../components/CustomServiceForm'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function ServicesPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  // Servicios para el formulario personalizado (mismos que en Services.jsx)
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
      {/* Acordeón de servicios */}
      <Services />
      
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

