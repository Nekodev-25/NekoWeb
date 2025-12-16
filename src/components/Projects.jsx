import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Projects() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [activeFilter, setActiveFilter] = useState('webDesign')
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
      { threshold: 0.1, rootMargin: '50px' }
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
      viewProject: 'Ver proyecto',
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
        {
          id: 5,
          name: 'Nombre del proyecto',
          category: 'webDevelop',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
        },
        {
          id: 6,
          name: 'Nombre del proyecto',
          category: 'branding',
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
        },
        {
          id: 7,
          name: 'Nombre del proyecto',
          category: 'webDesign',
          image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
        },
        {
          id: 8,
          name: 'Nombre del proyecto',
          category: 'webDevelop',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
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
      viewProject: 'View project',
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
        {
          id: 5,
          name: 'Project name',
          category: 'webDevelop',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
        },
        {
          id: 6,
          name: 'Project name',
          category: 'branding',
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
        },
        {
          id: 7,
          name: 'Project name',
          category: 'webDesign',
          image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
        },
        {
          id: 8,
          name: 'Project name',
          category: 'webDevelop',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
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
        min-h-screen py-12 md:py-32 relative
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
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black leading-tight md:leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
            {t.title}
          </h2>
        </div>

        {/* Filtros - Mobile horizontal, Desktop vertical */}
        <div className="mb-8 lg:mb-0">
          {/* Mobile: Filtros horizontales */}
          <div className="lg:hidden flex flex-wrap items-center gap-6 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`relative transition-colors pb-2 group ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              } ${activeFilter === 'all' ? 'font-medium' : ''}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'all' ? 500 : 400 }}
            >
              {t.filters.all}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                activeFilter === 'all'
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </button>
            <button
              onClick={() => setActiveFilter('webDesign')}
              className={`relative transition-colors pb-2 group ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              } ${activeFilter === 'webDesign' ? 'font-medium' : ''}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'webDesign' ? 500 : 400 }}
            >
              {t.filters.webDesign}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                activeFilter === 'webDesign'
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </button>
            <button
              onClick={() => setActiveFilter('webDevelop')}
              className={`relative transition-colors pb-2 group ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              } ${activeFilter === 'webDevelop' ? 'font-medium' : ''}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'webDevelop' ? 500 : 400 }}
            >
              {t.filters.webDevelop}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                activeFilter === 'webDevelop'
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </button>
            <button
              onClick={() => setActiveFilter('branding')}
              className={`relative transition-colors pb-2 group ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              } ${activeFilter === 'branding' ? 'font-medium' : ''}`}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'branding' ? 500 : 400 }}
            >
              {t.filters.branding}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                activeFilter === 'branding'
                  ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                  : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
              }`}></div>
            </button>
          </div>

          {/* Desktop: Layout con sidebar */}
          <div className="hidden lg:grid grid-cols-3 gap-12">
            {/* Columna Izquierda - Filtros y Footer */}
            <div className="col-span-1 flex flex-col justify-between">
              <div>
                {/* Lista de filtros */}
                <ul className="space-y-4 mb-12">
                  <li>
                    <button
                      onClick={() => setActiveFilter('all')}
                      className={`relative text-left transition-colors pb-2 group ${
                        isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                      } ${activeFilter === 'all' ? 'font-medium' : ''}`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'all' ? 500 : 400 }}
                    >
                      {t.filters.all}
                      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                        activeFilter === 'all'
                          ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                          : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                      }`}></div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveFilter('webDesign')}
                      className={`relative text-left transition-colors pb-2 group ${
                        isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                      } ${activeFilter === 'webDesign' ? 'font-medium' : ''}`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'webDesign' ? 500 : 400 }}
                    >
                      {t.filters.webDesign}
                      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                        activeFilter === 'webDesign'
                          ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                          : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                      }`}></div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveFilter('webDevelop')}
                      className={`relative text-left transition-colors pb-2 group ${
                        isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                      } ${activeFilter === 'webDevelop' ? 'font-medium' : ''}`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'webDevelop' ? 500 : 400 }}
                    >
                      {t.filters.webDevelop}
                      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                        activeFilter === 'webDevelop'
                          ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                          : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                      }`}></div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveFilter('branding')}
                      className={`relative text-left transition-colors pb-2 group ${
                        isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                      } ${activeFilter === 'branding' ? 'font-medium' : ''}`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: activeFilter === 'branding' ? 500 : 400 }}
                    >
                      {t.filters.branding}
                      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors ${
                        activeFilter === 'branding'
                          ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                          : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                      }`}></div>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Footer con información de contacto */}
              <div className="mt-auto flex flex-col items-start">
                {/* Gatito desarrollador por encima del bloque de contacto (solo desktop) */}
                <div className="hidden md:block mb-4">
                  <div className="w-[128px] h-[128px] lg:w-[160px] lg:h-[160px] flex items-center justify-center">
                    <img
                      src={isDarkMode ? '/images/gatitos/noche/dev_noche-04.png' : '/images/gatitos/dia/dev_dia-15.png'}
                      alt="Gatito desarrollador"
                      className="w-full h-full object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>

                <p className={`mb-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>{t.location}</p>
                <p className={`mb-6 text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>{t.tagline}</p>
                <a 
                  href="#contact"
                  className={`
                    inline-block
                    px-6 
                    py-3 
                    rounded-full 
                    font-medium 
                    transition-all 
                    duration-200
                    text-sm
                    text-center
                    border-2
                    ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                  `} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  {t.contactButton}
                </a>
              </div>
            </div>

            {/* Columna Derecha - Grid de Proyectos */}
            <div 
              ref={imagesRef}
              className="col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`group cursor-pointer transition-all duration-700 ease-out ${
                      isImagesVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-100 translate-x-0'
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
                    <h3 className={`font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                      {project.name}
                    </h3>
                    
                    {/* Línea separadora */}
                    <div className={`w-full h-px mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></div>
                    
                    {/* Botón Ver proyecto */}
                    <Link 
                      to={`/project/${project.id}`}
                      className={`
                        px-6 
                        py-3 
                        rounded-full 
                        font-medium 
                        transition-all 
                        duration-200
                        text-sm
                        border-2
                        ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                      `} 
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                    >
                      {t.viewProject}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Footer debajo de los proyectos */}
        <div className="lg:hidden mt-12">
          <div 
            ref={imagesRef}
            className={`transition-all duration-1000 ease-out delay-300 ${
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
                  <h3 className={`font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                    {project.name}
                  </h3>
                  
                  {/* Línea separadora */}
                  <div className={`w-full h-px mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></div>
                  
                  {/* Botón Ver proyecto */}
                  <Link 
                    to={`/project/${project.id}`}
                    className={`
                      px-6 
                      py-3 
                      rounded-full 
                      font-medium 
                      transition-all 
                      duration-200
                      text-sm
                      border-2
                      ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                    `} 
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                  >
                    {t.viewProject}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Footer con información de contacto */}
          <div className="mt-12">
            <p className={`mb-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>{t.location}</p>
            <p className={`mb-6 text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>{t.tagline}</p>
            <a 
              href="#contact"
              className={`
                inline-block
                px-6 
                py-3 
                rounded-full 
                font-medium 
                transition-colors 
                duration-200
                text-sm
                text-center
                ${isDarkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
              `} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
            >
              {t.contactButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

