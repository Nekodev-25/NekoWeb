import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Projects() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, isVisible } = useScrollReveal(0.25)
  const titleRef = useRef(null)
  const imagesRef = useRef(null)
  const [isTitleVisible, setIsTitleVisible] = useState(false)
  const [isImagesVisible, setIsImagesVisible] = useState(false)

  // Observador para el título (desde la izquierda)
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTitleVisible(true)
            titleObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current)
      }
      titleObserver.disconnect()
    }
  }, [])

  // Observador para las imágenes (desde la derecha)
  useEffect(() => {
    const imagesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImagesVisible(true)
            imagesObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (imagesRef.current) {
      imagesObserver.observe(imagesRef.current)
    }

    return () => {
      if (imagesRef.current) {
        imagesObserver.unobserve(imagesRef.current)
      }
      imagesObserver.disconnect()
    }
  }, [])

  const translations = {
    es: {
      title: 'Proyectos',
      filters: {
        all: 'Todos',
        webDesign: 'Web design',
        webDevelop: 'Web develop',
        branding: 'Branding',
      },
      location: 'Buenos Aires, Argentina',
      tagline: 'Creamos para todo el mundo',
      contactButton: 'Contactanos',
      projects: [
        {
          id: 1,
          name: 'Nombre del proyecto',
          category: 'webDesign',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        },
        {
          id: 2,
          name: 'Nombre del proyecto',
          category: 'webDevelop',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
        },
        {
          id: 3,
          name: 'Nombre del proyecto',
          category: 'branding',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        },
        {
          id: 4,
          name: 'Nombre del proyecto',
          category: 'webDesign',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        },
      ],
    },
    en: {
      title: 'Projects',
      filters: {
        all: 'All',
        webDesign: 'Web design',
        webDevelop: 'Web develop',
        branding: 'Branding',
      },
      location: 'Buenos Aires, Argentina',
      tagline: 'We create for everyone',
      contactButton: 'Contact us',
      projects: [
        {
          id: 1,
          name: 'Project name',
          category: 'webDesign',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        },
        {
          id: 2,
          name: 'Project name',
          category: 'webDevelop',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
        },
        {
          id: 3,
          name: 'Project name',
          category: 'branding',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        },
        {
          id: 4,
          name: 'Project name',
          category: 'webDesign',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        },
      ],
    },
  }

  const t = translations[language]

  // Filtrar proyectos según el filtro activo
  const filteredProjects = activeFilter === 'all' 
    ? t.projects 
    : t.projects.filter(project => project.category === activeFilter)

  return (
    <section
      ref={ref}
      className={`
        snap-start snap-always
        min-h-screen py-32 relative
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6">
        {/* Título grande arriba - en su propio contenedor */}
        <div 
          ref={titleRef}
          className={`mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            isTitleVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-black leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna Izquierda - Filtros y Footer */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              {/* Lista de filtros */}
              <ul className="space-y-4 mb-12">
                <li>
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`text-left transition-colors ${
                      isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                    } ${activeFilter === 'all' ? 'font-medium' : ''}`}
                    style={{ fontFamily: 'var(--font-archivo)', fontWeight: activeFilter === 'all' ? 500 : 300 }}
                  >
                    {t.filters.all}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveFilter('webDesign')}
                    className={`text-left transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } ${activeFilter === 'webDesign' ? 'font-medium' : ''}`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'webDesign' ? 500 : 400 }}
                  >
                    {t.filters.webDesign}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveFilter('webDevelop')}
                    className={`text-left transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } ${activeFilter === 'webDevelop' ? 'font-medium' : ''}`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'webDevelop' ? 500 : 400 }}
                  >
                    {t.filters.webDevelop}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveFilter('branding')}
                    className={`text-left transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } ${activeFilter === 'branding' ? 'font-medium' : ''}`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'branding' ? 500 : 400 }}
                  >
                    {t.filters.branding}
                  </button>
                </li>
              </ul>
            </div>

            {/* Footer con información de contacto */}
            <div className="mt-auto">
              <p className={`mb-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>{t.location}</p>
              <p className={`mb-6 text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>{t.tagline}</p>
              <button className={`
                px-6 
                py-3 
                rounded-full 
                font-medium 
                transition-colors 
                duration-200
                text-sm
                ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
              `} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                {t.contactButton}
              </button>
            </div>
          </div>

          {/* Columna Derecha - Grid de Proyectos */}
          <div 
            ref={imagesRef}
            className={`lg:col-span-2 transition-all duration-1000 ease-out delay-300 ${
              isImagesVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`group cursor-pointer transition-all duration-700 ease-out ${
                    isImagesVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ 
                    transitionDelay: isImagesVisible ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {/* Imagen del proyecto */}
                  <div className="
                    w-full 
                    h-[400px] 
                    bg-gray-200 
                    rounded-lg 
                    overflow-hidden 
                    mb-4
                    relative
                  ">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="
                        w-full 
                        h-full 
                        object-cover 
                        transition-transform 
                        duration-300 
                        group-hover:scale-105
                      "
                    />
                  </div>
                  
                  {/* Nombre del proyecto */}
                  <h3 className={`font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-archivo)', fontWeight: 300 }}>
                    {project.name}
                  </h3>
                  
                  {/* Línea separadora */}
                  <div className={`w-full h-px mb-3 transition-colors duration-300 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></div>
                  
                  {/* Tag/Descripción placeholder */}
                  <div className={`
                    w-24 
                    h-6 
                    rounded
                    transition-colors duration-300
                    ${isDarkMode ? 'bg-white' : 'bg-gray-200'}
                  `}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

