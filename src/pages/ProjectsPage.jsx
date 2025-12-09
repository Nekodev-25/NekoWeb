import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function ProjectsPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: 'Proyectos',
      projects: [
        {
          id: 1,
          name: 'Nombre del proyecto',
        },
        {
          id: 2,
          name: 'Nombre del proyecto',
        },
        {
          id: 3,
          name: 'Nombre del proyecto',
        },
        {
          id: 4,
          name: 'Nombre del proyecto',
        },
        {
          id: 5,
          name: 'Nombre del proyecto',
        },
        {
          id: 6,
          name: 'Nombre del proyecto',
        },
      ],
    },
    en: {
      title: 'Projects',
      projects: [
        {
          id: 1,
          name: 'Project name',
        },
        {
          id: 2,
          name: 'Project name',
        },
        {
          id: 3,
          name: 'Project name',
        },
        {
          id: 4,
          name: 'Project name',
        },
        {
          id: 5,
          name: 'Project name',
        },
        {
          id: 6,
          name: 'Project name',
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section 
      className={`min-h-screen pt-32 pb-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'
      }`} 
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto px-6">
        {/* Título centrado */}
        <div className="text-center mb-16">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-black transition-colors duration-300 ${
              isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
            }`} 
            style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
          >
            {t.title}
          </h1>
        </div>

        {/* Grid de proyectos: 2 filas, 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col"
            >
              {/* Rectángulo grande gris claro (placeholder de imagen) */}
              <div 
                className={`
                  w-full 
                  aspect-[4/3] 
                  mb-4
                  transition-colors duration-300
                  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}
                `}
              ></div>
              
              {/* Línea separadora negra delgada */}
              <div 
                className={`
                  w-full 
                  h-px 
                  mb-3
                  transition-colors duration-300
                  ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}
                `}
              ></div>
              
              {/* Nombre del proyecto */}
              <h3 
                className={`
                  mb-3
                  transition-colors duration-300
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
              >
                {project.name}
              </h3>
              
              {/* Rectángulo pequeño gris claro (placeholder de descripción) */}
              <div 
                className={`
                  w-full 
                  h-6 
                  transition-colors duration-300
                  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}
                `}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage

