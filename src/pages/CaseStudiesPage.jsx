import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function CaseStudiesPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: 'Casos de Estudio',
      subtitle: 'Proyectos que han transformado negocios',
      cases: [
        {
          title: 'E-commerce Moderno',
          client: 'TechStore',
          description: 'Plataforma de comercio electrónico completa con integración de pagos y gestión de inventario.',
          results: ['+300% en ventas online', 'Tiempo de carga < 2s', '100% mobile responsive'],
        },
        {
          title: 'Aplicación SaaS',
          client: 'CloudManage',
          description: 'Solución SaaS para gestión de proyectos con dashboard interactivo y reportes en tiempo real.',
          results: ['10,000+ usuarios activos', '99.9% uptime', 'Integración con 20+ APIs'],
        },
        {
          title: 'Rediseño Corporativo',
          client: 'FinanceCorp',
          description: 'Transformación completa de la presencia digital con nuevo diseño y arquitectura moderna.',
          results: ['+150% en conversiones', 'Mejora en SEO', 'Mejor experiencia de usuario'],
        },
      ],
    },
    en: {
      title: 'Case Studies',
      subtitle: 'Projects that have transformed businesses',
      cases: [
        {
          title: 'Modern E-commerce',
          client: 'TechStore',
          description: 'Complete e-commerce platform with payment integration and inventory management.',
          results: ['+300% online sales', 'Load time < 2s', '100% mobile responsive'],
        },
        {
          title: 'SaaS Application',
          client: 'CloudManage',
          description: 'SaaS solution for project management with interactive dashboard and real-time reports.',
          results: ['10,000+ active users', '99.9% uptime', 'Integration with 20+ APIs'],
        },
        {
          title: 'Corporate Redesign',
          client: 'FinanceCorp',
          description: 'Complete transformation of digital presence with new design and modern architecture.',
          results: ['+150% conversions', 'SEO improvement', 'Better user experience'],
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section className={`snap-start min-h-screen pt-32 pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`} style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t.title}
            </h1>
            <p className={`text-xl transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.cases.map((caseStudy, index) => (
              <div
                key={index}
                className={`border rounded-xl p-8 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-900 border-white hover:border-gray-300' 
                    : 'bg-gray-100 border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="mb-4">
                  <span className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {caseStudy.client}
                  </span>
                </div>
                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {caseStudy.title}
                </h2>
                <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {caseStudy.description}
                </p>
                <div className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className={`flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <svg className={`w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPage

