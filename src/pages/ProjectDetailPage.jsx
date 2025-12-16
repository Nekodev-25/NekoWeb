import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  // Datos de proyectos (después se pueden cargar desde una API o CMS)
  const projectsData = {
    es: [
      {
        id: '1',
        title: 'Lorem ips dolor sit',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'PEDIDO',
          description: 'Diseño web completo con identidad visual y sistema de gestión de contenidos.'
        },
        entrega: {
          title: 'ENTREGA',
          description: 'Sitio web responsive, optimizado para SEO y con panel de administración.'
        },
        link: {
          title: 'LINK A LA WEB',
          description: 'Ver proyecto en vivo',
          url: '#'
        },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
      },
      {
        id: '2',
        title: 'Proyecto ejemplo dos',
        location: 'Buenos Aires, ARG.',
        year: '2024',
        pedido: {
          title: 'PEDIDO',
          description: 'E-commerce con integración de pagos y gestión de inventario.'
        },
        entrega: {
          title: 'ENTREGA',
          description: 'Tienda online funcional con pasarela de pagos y dashboard de ventas.'
        },
        link: {
          title: 'LINK A LA WEB',
          description: 'Ver proyecto en vivo',
          url: '#'
        },
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
      },
      {
        id: '3',
        title: 'Proyecto ejemplo tres',
        location: 'Buenos Aires, ARG.',
        year: '2024',
        pedido: {
          title: 'PEDIDO',
          description: 'Rediseño de marca e identidad visual completa para empresa tecnológica.'
        },
        entrega: {
          title: 'ENTREGA',
          description: 'Manual de marca, papelería corporativa y aplicaciones digitales.'
        },
        link: {
          title: 'LINK A LA WEB',
          description: 'Ver proyecto en vivo',
          url: '#'
        },
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
      }
    ],
    en: [
      {
        id: '1',
        title: 'Lorem ips dolor sit',
        location: 'Buenos Aires, ARG.',
        year: '2025',
        pedido: {
          title: 'REQUEST',
          description: 'Complete web design with visual identity and content management system.'
        },
        entrega: {
          title: 'DELIVERY',
          description: 'Responsive website, SEO optimized with admin panel.'
        },
        link: {
          title: 'LINK TO WEB',
          description: 'View live project',
          url: '#'
        },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
      },
      {
        id: '2',
        title: 'Example project two',
        location: 'Buenos Aires, ARG.',
        year: '2024',
        pedido: {
          title: 'REQUEST',
          description: 'E-commerce with payment integration and inventory management.'
        },
        entrega: {
          title: 'DELIVERY',
          description: 'Functional online store with payment gateway and sales dashboard.'
        },
        link: {
          title: 'LINK TO WEB',
          description: 'View live project',
          url: '#'
        },
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
      },
      {
        id: '3',
        title: 'Example project three',
        location: 'Buenos Aires, ARG.',
        year: '2024',
        pedido: {
          title: 'REQUEST',
          description: 'Brand redesign and complete visual identity for tech company.'
        },
        entrega: {
          title: 'DELIVERY',
          description: 'Brand manual, corporate stationery and digital applications.'
        },
        link: {
          title: 'LINK TO WEB',
          description: 'View live project',
          url: '#'
        },
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
      }
    ]
  }

  const projects = projectsData[language]
  const project = projects.find(p => p.id === id) || projects[0]

  // Obtener proyecto anterior y siguiente
  const currentIndex = projects.findIndex(p => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Columna izquierda - Información */}
          <div className="lg:col-span-2 flex flex-col">
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

            {/* Navegación entre proyectos */}
            <div className="mt-auto pt-8 flex justify-between items-center">
              {prevProject ? (
                <button
                  onClick={() => navigate(`/project/${prevProject.id}`)}
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
                  onClick={() => navigate(`/project/${nextProject.id}`)}
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

          {/* Columna derecha - Imagen */}
          <div className="lg:col-span-3 flex items-start">
            <div 
              className={`
                w-full 
                aspect-[4/3] 
                lg:aspect-auto
                lg:h-[650px]
                xl:h-[750px]
                transition-colors duration-300
                ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage

