import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { gsap } from 'gsap'

function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [direction, setDirection] = useState('next') // 'next' o 'prev'
  const contentRef = useRef(null)

  // Datos de proyectos (después se pueden cargar desde una API o CMS)
  const projectsData = {
    es: [
      {
        id: '1',
        title: 'Iocus Juguetes',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'PEDIDO',
          description: 'IOCUS es una marca argentina de juegos para niños que hace poco tiempo incorporó alquileres para eventos, necesitaban un espacio en donde puedan organizar todos los servicios de manera eficaz.'
        },
        entrega: {
          title: 'ENTREGA',
          description: 'E-commerce completo con sistema de gestión de servicios de alquileres para eventos, plataforma web responsive con panel de administración para organizar todos los servicios de manera eficaz.'
        },
        link: {
          title: 'LINK A LA WEB',
          description: 'Ver proyecto en vivo',
          url: '#'
        },
        image: '/images/proyects-img/iocus/Proyecto.jpg'
      },
      {
        id: '2',
        title: 'LeveleAr',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'PEDIDO',
          description: 'LeveleAr es una plataforma digital conceptual enfocada en el mercado argentino, diseñada para impulsar y fomentar el desarrollo de videojuegos independientes. El cliente necesitaba un espacio donde los desarrolladores pudieran publicar sus proyectos, interactuar con usuarios y construir una comunidad activa de gamers y creadores.'
        },
        entrega: {
          title: 'ENTREGA',
          description: 'Plataforma web completa con biblioteca de juegos, sistema de exploración por categorías, perfiles de desarrolladores, sistema de comunidad con foros y comentarios, y diseño responsive para desktop y mobile. Incluye secciones de novedades, exploración por categorías y perfiles personalizados para gamers y desarrolladores.'
        },
        link: {
          title: 'LINK A LA WEB',
          description: 'Ver proyecto en vivo',
          url: '#'
        },
        image: '/images/proyects-img/levelear/large-img-lvl.jpg'
      },
      {
        id: '3',
        title: 'Nai Nai',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'PEDIDO',
          description: 'Nai Nai necesitaba desarrollar una identidad visual completa que reflejara su esencia artesanal y lúdica. El objetivo era crear un sistema de diseño coherente que pudiera aplicarse a diversos productos y elementos de marca, manteniendo una estética cálida y acogedora.'
        },
        entrega: {
          title: 'ENTREGA',
          description: 'Desarrollo completo de identidad de marca incluyendo diseño de iconografía personalizada, ilustraciones para productos, paleta de colores vibrante y sistema de aplicación gráfica. Se crearon dibujos únicos para productos, elementos decorativos y aplicaciones en packaging, etiquetas y merchandising. La estética final combina ilustraciones a mano alzada con un sistema de colores armonioso que transmite calidez y creatividad.'
        },
        link: {
          title: '',
          description: '',
          url: ''
        },
        image: '/images/proyects-img/nainai/proyecto_nainai.jpg'
      },
    ],
    en: [
      {
        id: '1',
        title: 'Iocus',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'REQUEST',
          description: 'IOCUS is an Argentine children\'s games brand that recently incorporated event rentals, they needed a space where they could organize all services effectively.'
        },
        entrega: {
          title: 'DELIVERY',
          description: 'Complete e-commerce with event rental service management system, responsive web platform with admin panel to organize all services effectively.'
        },
        link: {
          title: 'LINK TO WEB',
          description: 'View live project',
          url: '#'
        },
        image: '/images/proyects-img/iocus/Proyecto.jpg'
      },
      {
        id: '2',
        title: 'LeveleAr',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'REQUEST',
          description: 'LeveleAr is a conceptual digital platform focused on the Argentine market, designed to boost and promote independent game development. The client needed a space where developers could publish their projects, interact with users, and build an active community of gamers and creators.'
        },
        entrega: {
          title: 'DELIVERY',
          description: 'Complete web platform with game library, category exploration system, developer profiles, community system with forums and comments, and responsive design for desktop and mobile. Includes news sections, category exploration, and personalized profiles for gamers and developers.'
        },
        link: {
          title: 'LINK TO WEB',
          description: 'View live project',
          url: '#'
        },
        image: '/images/proyects-img/levelear/large-img-lvl.jpg'
      },
      {
        id: '3',
        title: 'Nai Nai',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'REQUEST',
          description: 'Nai Nai needed to develop a complete visual identity that reflected their artisanal and playful essence. The goal was to create a coherent design system that could be applied to various products and brand elements, maintaining a warm and welcoming aesthetic.'
        },
        entrega: {
          title: 'DELIVERY',
          description: 'Complete brand identity development including custom iconography design, product illustrations, vibrant color palette and graphic application system. Unique drawings were created for products, decorative elements and applications in packaging, labels and merchandising. The final aesthetic combines hand-drawn illustrations with a harmonious color system that conveys warmth and creativity.'
        },
        link: {
          title: '',
          description: '',
          url: ''
        },
        image: '/images/proyects-img/nainai/proyecto_nainai.jpg'
      },
    ]
  }

  const projects = projectsData[language]
  const project = projects.find(p => p.id === id) || projects[0]

  // Obtener proyecto anterior y siguiente
  const currentIndex = projects.findIndex(p => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  // Efecto de transición cuando cambia el proyecto
  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    // Determinar la dirección de entrada basada en la dirección guardada
    const offsetX = direction === 'next' ? 80 : -80
    
    // Configurar estado inicial: desplazado con aceleración GPU
    gsap.set(el, {
      x: offsetX,
      visibility: 'visible',
      force3D: true, // Aceleración GPU
      willChange: 'transform'
    })

    // Animación de entrada optimizada (solo movimiento, sin fade)
    const tl = gsap.timeline({
      defaults: {
        force3D: true,
        immediateRender: false
      }
    })
    tl.to(el, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out' // Más ligero que power3
    })

    // Limpiar willChange después de la animación
    tl.call(() => {
      gsap.set(el, { willChange: 'auto' })
    })

    return () => {
      tl.kill()
    }
  }, [id, direction])

  // Función para navegar con transición
  const handleNavigate = (projectId, navDirection) => {
    const el = contentRef.current
    if (!el) {
      navigate(`/project/${projectId}`)
      return
    }

    setDirection(navDirection) // Guardar la dirección para el próximo proyecto
    
    // Determinar la dirección de salida (opuesta a la de entrada)
    const exitOffsetX = navDirection === 'next' ? -80 : 80
    
    // Optimizar para animación
    gsap.set(el, { willChange: 'transform' })
    
    // Animación de salida optimizada (solo movimiento, sin fade)
    const exitTl = gsap.timeline({
      defaults: {
        force3D: true,
        immediateRender: false
      },
      onComplete: () => {
        // Navegar al nuevo proyecto
        navigate(`/project/${projectId}`)
        // El useEffect se activará automáticamente para la animación de entrada
      }
    })
    
    exitTl.to(el, {
      x: exitOffsetX,
      duration: 0.35,
      ease: 'power2.in' // Más ligero que power3
    })
  }

  const translations = {
    es: {
      back: 'Volver a proyectos',
      prev: 'Anterior',
      next: 'Siguiente'
    },
    en: {
      back: 'Back to projects',
      prev: 'Previous',
      next: 'Next'
    }
  }

  const t = translations[language]

  return (
    <section 
      className={`min-h-screen pt-32 pb-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Contenido principal */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 relative"
          style={{ 
            visibility: 'hidden',
            backfaceVisibility: 'hidden',
            perspective: 1000
          }}
        >
          {/* Columna izquierda - Información sticky */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="lg:sticky lg:top-32 lg:self-start">
              {/* Título del proyecto */}
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-black mb-12 leading-tight transition-colors duration-300 ${
                  isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
              >
                {project.title}
              </h1>

              {/* Ubicación y año */}
              <div className={`border-t pt-4 pb-4 flex justify-between items-center transition-colors duration-300 ${
                isDarkMode ? 'border-[#F6F3E8]' : 'border-gray-900'
              }`}>
                <span 
                  className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {project.location}
                </span>
                <span 
                  className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {project.year}
                </span>
              </div>

              {/* Sección PEDIDO */}
              <div className={`border-t pt-6 pb-8 transition-colors duration-300 ${
                isDarkMode ? 'border-[#F6F3E8]' : 'border-gray-900'
              }`}>
                <h3 
                  className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
                >
                  {project.pedido.title}
                </h3>
                <p 
                  className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {project.pedido.description}
                </p>
              </div>

              {/* Sección ENTREGA */}
              <div className={`border-t pt-6 pb-8 transition-colors duration-300 ${
                isDarkMode ? 'border-[#F6F3E8]' : 'border-gray-900'
              }`}>
                <h3 
                  className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
                >
                  {project.entrega.title}
                </h3>
                <p 
                  className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {project.entrega.description}
                </p>
              </div>

              {/* Sección LINK A LA WEB */}
              {project.link.title && project.link.url && (
                <div className={`border-t pt-6 pb-8 transition-colors duration-300 ${
                  isDarkMode ? 'border-[#F6F3E8]' : 'border-gray-900'
                }`}>
                  <h3 
                    className={`text-sm font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
                  >
                    {project.link.title}
                  </h3>
                  <a 
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                  >
                    {project.link.description}
                  </a>
                </div>
              )}

              {/* Navegación entre proyectos - Solo desktop */}
              <div className="hidden lg:flex mt-auto pt-8 justify-between items-center">
                {prevProject ? (
                  <button
                    onClick={() => handleNavigate(prevProject.id, 'prev')}
                    className={`
                      px-6 py-3 
                      rounded-full 
                      font-medium 
                      transition-all 
                      duration-200
                      text-sm
                      border-2
                      ${isDarkMode 
                        ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                        : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
                      }
                    `}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                  >
                    ← {t.prev}
                  </button>
                ) : <div />}
                
                {nextProject ? (
                  <button
                    onClick={() => handleNavigate(nextProject.id, 'next')}
                    className={`
                      px-6 py-3 
                      rounded-full 
                      font-medium 
                      transition-all 
                      duration-200
                      text-sm
                      border-2
                      ${isDarkMode 
                        ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                        : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
                      }
                    `}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                  >
                    {t.next} →
                  </button>
                ) : <div />}
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen alargada */}
          <div className="lg:col-span-3">
            <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto block"
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  willChange: 'auto',
                  imageRendering: 'auto'
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Navegación entre proyectos - Solo mobile, debajo de la imagen */}
            <div className="lg:hidden mt-8 flex justify-between items-center">
              {prevProject ? (
                <button
                  onClick={() => handleNavigate(prevProject.id, 'prev')}
                  className={`
                    px-6 py-3 
                    rounded-full 
                    font-medium 
                    transition-all 
                    duration-200
                    text-sm
                    border-2
                    ${isDarkMode 
                      ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
                    }
                  `}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  ← {t.prev}
                </button>
              ) : <div />}
              
              {nextProject ? (
                <button
                  onClick={() => handleNavigate(nextProject.id, 'next')}
                  className={`
                    px-6 py-3 
                    rounded-full 
                    font-medium 
                    transition-all 
                    duration-200
                    text-sm
                    border-2
                    ${isDarkMode 
                      ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' 
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'
                    }
                  `}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  {t.next} →
                </button>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage

