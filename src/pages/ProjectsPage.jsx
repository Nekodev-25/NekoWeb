import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function ProjectsPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
      projects: [
        {
          id: 1,
          name: 'Iocus',
          image: '/images/proyects-img/iocus/Tarjetas personales.png',
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
      customSection: {
        title: '¿Necesitas algo personalizado?',
        formLabels: {
          name: 'NOMBRE',
          lastName: 'APELLIDO',
          service: 'SERVICIO',
          email: 'CORREO ELECTRÓNICO',
          query: 'CONSULTA',
        },
        formPlaceholders: {
          name: '',
          lastName: '',
          service: 'Seleccionar servicio',
          email: '',
          query: '',
        },
        submitButton: 'Enviar',
        footer: {
          location: 'Buenos Aires, Argentina',
          tagline: 'Creamos para todo el mundo',
          phone: 'Tel: +54 11 6972-9914',
          email: 'Mail: infonekodev@gmail.com',
        },
      },
    },
    en: {
      title: 'Projects',
      viewProject: 'View project',
      projects: [
        {
          id: 1,
          name: 'Iocus',
          image: '/images/proyects-img/iocus/Tarjetas personales.png',
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
      customSection: {
        title: 'Do you need something personalized?',
        formLabels: {
          name: 'NAME',
          lastName: 'LAST NAME',
          service: 'SERVICE',
          email: 'EMAIL',
          query: 'QUERY',
        },
        formPlaceholders: {
          name: '',
          lastName: '',
          service: 'Select service',
          email: '',
          query: '',
        },
        submitButton: 'Send',
        footer: {
          location: 'Buenos Aires, Argentina',
          tagline: 'We create for everyone',
          phone: 'Tel: +54 11 6972-9914',
          email: 'Mail: infonekodev@gmail.com',
        },
      },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {t.projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col"
            >
              {/* Imagen del proyecto */}
              <div 
                className={`
                  w-full 
                  aspect-[4/3] 
                  mb-4
                  overflow-hidden
                  transition-colors duration-300
                  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}
                `}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              
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
                  self-start
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

      {/* Sección de formulario personalizado */}
      <section className={`py-16 md:py-24 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Columna izquierda - Título arriba y gatito/info abajo (solo desktop) */}
            <div className="hidden lg:flex flex-col min-h-[600px]">
              {/* Título arriba */}
              <div className="mb-12">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-left leading-tight transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}>
                  {t.customSection.title}
                </h2>
              </div>

              {/* Gatito marketing e información de contacto - abajo, gatito encima del texto */}
              <div className="mt-auto flex flex-col">
                {/* Gatito marketing */}
                <div className="mb-4">
                  <div className="w-[160px] h-[160px] flex items-end justify-start overflow-visible">
                    <img
                      src={isDarkMode ? '/images/gatitos/noche/marketing_noche-10.png' : '/images/gatitos/dia/marketing_dia-17.png'}
                      alt="Gatito marketing"
                      className="w-full h-full object-contain"
                      style={{ maxWidth: '160px', maxHeight: '160px', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Información de contacto - debajo del gatito */}
                <div className="space-y-1 text-left">
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                    {t.customSection.footer.location}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                    {t.customSection.footer.tagline}
                  </p>
                  <a 
                    href="https://wa.me/541169729914" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                  >
                    {t.customSection.footer.phone}
                  </a>
                  <a 
                    href="mailto:infonekodev@gmail.com"
                    className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                  >
                    {t.customSection.footer.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile: Título arriba */}
            <div className="lg:hidden mb-8">
              <h2 className={`text-4xl md:text-5xl font-black text-left leading-tight transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}>
                {t.customSection.title}
              </h2>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="lg:pt-32 lg:mt-12">
              <form className="space-y-8">
                {/* Nombre y Apellido en fila */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                      {t.customSection.formLabels.name}
                    </label>
                    <input
                      type="text"
                      placeholder={t.customSection.formPlaceholders.name}
                      className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                        isDarkMode 
                          ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                          : 'border-gray-900 focus:border-gray-600 text-gray-900'
                      }`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                      {t.customSection.formLabels.lastName}
                    </label>
                    <input
                      type="text"
                      placeholder={t.customSection.formPlaceholders.lastName}
                      className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                        isDarkMode 
                          ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                          : 'border-gray-900 focus:border-gray-600 text-gray-900'
                      }`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                    />
                  </div>
                </div>

                {/* Servicio - Dropdown */}
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                    {t.customSection.formLabels.service}
                  </label>
                  <div className="relative">
                    <select
                      className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none appearance-none pr-8 text-base transition-colors duration-300 ${
                        isDarkMode 
                          ? 'border-white focus:border-gray-300 text-white' 
                          : 'border-gray-900 focus:border-gray-600 text-gray-900'
                      }`}
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                    >
                      <option value="">{t.customSection.formPlaceholders.service}</option>
                      <option value="web-design">Web design</option>
                      <option value="web-develop">Web develop</option>
                      <option value="branding">Branding</option>
                    </select>
                    <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none pb-3">
                      <svg className={`w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                    {t.customSection.formLabels.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.customSection.formPlaceholders.email}
                    className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                        : 'border-gray-900 focus:border-gray-600 text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                  />
                </div>

                {/* Consulta - Textarea */}
                <div>
                  <label className={`block text-xs uppercase mb-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                    {t.customSection.formLabels.query}
                  </label>
                  <textarea
                    placeholder={t.customSection.formPlaceholders.query}
                    rows={5}
                    className={`w-full bg-transparent border-b-2 pb-3 focus:outline-none resize-none text-base transition-colors duration-300 ${
                      isDarkMode 
                        ? 'border-white focus:border-gray-300 text-white placeholder-gray-400' 
                        : 'border-gray-900 focus:border-gray-600 text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                  ></textarea>
                </div>

                {/* Botón enviar - alineado a la derecha */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className={`
                      px-8 
                      py-3 
                      rounded-full
                      font-medium 
                      transition-all 
                      duration-200
                      text-sm
                      border-2
                      ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                    `} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                      {t.customSection.submitButton}
                    </button>
                </div>
              </form>
            </div>

            {/* Mobile: Gatito e información de contacto - centrados y debajo del formulario */}
            <div className="lg:hidden mt-12 flex flex-col items-center">
              {/* Gatito marketing */}
              <div className="mb-4">
                <div className="w-[160px] h-[160px] flex items-center justify-center">
                  <img
                    src={isDarkMode ? '/images/gatitos/noche/marketing_noche-10.png' : '/images/gatitos/dia/marketing_dia-17.png'}
                    alt="Gatito marketing"
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '160px', maxHeight: '160px', objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Información de contacto - centrada */}
              <div className="space-y-1 text-center">
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                  {t.customSection.footer.location}
                </p>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}>
                  {t.customSection.footer.tagline}
                </p>
                <a 
                  href="https://wa.me/541169729914" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {t.customSection.footer.phone}
                </a>
                <a 
                  href="mailto:infonekodev@gmail.com"
                  className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {t.customSection.footer.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProjectsPage

