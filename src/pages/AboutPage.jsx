import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function AboutPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const translations = {
    es: {
      about: {
        title: 'Nosotros',
        intro: 'Somos un estudio creativo que combina diseño, desarrollo y estrategia digital. Creemos en el poder de las ideas bien ejecutadas y en construir relaciones duraderas con nuestros clientes.',
      },
      team: [
        {
          name: 'Tomás Averbuj',
          role: 'Desarrollador web full stack y co-fundador de Neko dev',
          description: 'Estudió en Da Vinci y se especializa en crear sitios web innovadores e interactivos con diseños dinámicos y experiencias de usuario excepcionales.',
        },
        {
          name: 'Luna Bianchi',
          role: 'Diseñadora gráfica y co-fundadora de Neko dev',
          description: 'Estudiante de la UBA apasionada por el diseño. Busca constantemente crecer como diseñadora, creando piezas innovadoras y cautivadoras que conecten con las audiencias.',
        },
      ],
      process: {
        title: 'Nuestro proceso',
        title2: 'de trabajo',
        intro: '',
        steps: [
          {
            number: '01',
            title: 'Descubrimiento',
            description: 'Nos sumergimos en tu proyecto para entender tus objetivos, tu audiencia y tu visión. Investigamos y analizamos para crear una estrategia sólida.',
          },
          {
            number: '02',
            title: 'Diseño',
            description: 'Transformamos ideas en diseños visuales atractivos y funcionales. Creamos prototipos y refinamos cada detalle hasta lograr la experiencia perfecta.',
          },
          {
            number: '03',
            title: 'Desarrollo',
            description: 'Damos vida a los diseños con código limpio y optimizado. Construimos sitios rápidos, seguros y escalables que funcionan en todos los dispositivos.',
          },
          {
            number: '04',
            title: 'Lanzamiento',
            description: 'Preparamos todo para el lanzamiento y te acompañamos en cada paso. Brindamos soporte continuo para asegurar el éxito de tu proyecto.',
          },
        ],
      },
    },
    en: {
      about: {
        title: 'About Us',
        intro: 'We are a creative studio that combines design, development and digital strategy. We believe in the power of well-executed ideas and building lasting relationships with our clients.',
      },
      team: [
        {
          name: 'Tomás Averbuj',
          role: 'Full stack web developer and co-founder of Neko dev',
          description: 'Graduated from Da Vinci and specializes in creating innovative and interactive websites with dynamic designs and exceptional user experiences.',
        },
        {
          name: 'Luna Bianchi',
          role: 'Graphic designer and co-founder of Neko dev',
          description: 'UBA student passionate about design. Constantly seeking to grow as a designer, creating innovative and captivating pieces that connect with audiences.',
        },
      ],
      process: {
        title: 'Our Work',
        title2: 'Process',
        intro: '',
        steps: [
          {
            number: '01',
            title: 'Discovery',
            description: 'We dive into your project to understand your goals, audience and vision. We research and analyze to create a solid strategy.',
          },
          {
            number: '02',
            title: 'Design',
            description: 'We transform ideas into attractive and functional visual designs. We create prototypes and refine every detail until we achieve the perfect experience.',
          },
          {
            number: '03',
            title: 'Development',
            description: 'We bring designs to life with clean, optimized code. We build fast, secure and scalable sites that work on all devices.',
          },
          {
            number: '04',
            title: 'Launch',
            description: 'We prepare everything for launch and accompany you every step of the way. We provide ongoing support to ensure the success of your project.',
          },
        ],
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
        {/* Sección Nosotros */}
        <div className="mb-24">
          {/* Título centrado */}
          <div className="text-center mb-12">
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-black transition-colors duration-300 mb-8 ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
            >
              {t.about.title}
            </h1>
          </div>

          {/* Texto introductorio centrado */}
          <div className="max-w-3xl mx-auto mb-16">
            <p 
              className={`text-center text-base md:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
              }`} 
              style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
            >
              {t.about.intro}
            </p>
          </div>

          {/* Tarjetas de miembros del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {t.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Placeholder de imagen */}
                <div 
                  className={`
                    w-full 
                    aspect-square 
                    max-w-md
                    mb-6
                    transition-colors duration-300
                    ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}
                  `}
                ></div>
                
                {/* Nombre */}
                <h3 
                  className={`
                    text-center 
                    mb-2
                    transition-colors duration-300
                    ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                  `} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  {member.name}
                </h3>
                
                {/* Rol */}
                {member.role && (
                  <p 
                    className={`
                      text-center 
                      mb-4
                      text-sm md:text-base
                      transition-colors duration-300
                      ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                    `} 
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
                  >
                    {member.role}
                  </p>
                )}
                
                {/* Descripción */}
                <p 
                  className={`
                    text-center 
                    text-sm md:text-base
                    leading-relaxed
                    max-w-md
                    transition-colors duration-300
                    ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                  `} 
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección Proceso de Trabajo */}
        <div className="mt-32 relative">
          {/* Gatito dev - esquina superior derecha */}
          <div className="hidden md:block absolute right-6 top-0 lg:right-10">
            <div className="w-[160px] h-[160px] lg:w-[192px] lg:h-[192px] flex items-center justify-center">
              <img
                src={isDarkMode ? '/images/gatitos/noche/dev_noche-04.png' : '/images/gatitos/dia/dev_dia-15.png'}
                alt="Gatito dev"
                className="w-full h-full object-contain max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Título */}
          <div className="mb-8 md:mb-32 max-w-6xl mx-auto">
            {/* Título a la izquierda */}
            <div>
              <h2 
                className={`
                  text-4xl md:text-5xl lg:text-6xl 
                  font-black 
                  text-left
                  leading-tight
                  transition-colors duration-300
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
              >
                {t.process.title}
                <br />
                {t.process.title2}
              </h2>
            </div>
          </div>

          {/* Timeline de pasos */}
          <div className="max-w-7xl mx-auto relative">
            {/* Contenedor principal con línea en el medio */}
            <div className="relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
              {/* Línea horizontal del timeline - centrada verticalmente (solo desktop) */}
              <div 
                className={`
                  hidden md:block
                  absolute 
                  top-1/2 
                  left-0 
                  right-0 
                  h-px 
                  -translate-y-1/2
                  transition-colors duration-300
                  ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}
                  z-0
                `}
              ></div>

              {/* Grid de pasos - 4 columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {t.process.steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    {/* Número grande - arriba del círculo */}
                    <div 
                      className={`
                        text-6xl md:text-7xl lg:text-8xl 
                        font-black 
                        mb-0 md:mb-8
                        transition-colors duration-300
                        ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                      `} 
                      style={{ fontFamily: 'var(--font-delight)', fontWeight: 900 }}
                    >
                      {step.number}
                    </div>
                    
                    {/* Círculo outline - solo en desktop, centrado en la línea */}
                    <div 
                      className={`
                        hidden md:block
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-4 
                        h-4 
                        rounded-full
                        border-2
                        transition-colors duration-300
                        ${isDarkMode ? 'border-[#F6F3E8] bg-black' : 'border-gray-900 bg-[#F6F3E8]'}
                        z-20
                      `}
                    ></div>
                    
                    {/* Contenido debajo del número/círculo */}
                    <div className="mt-4 md:mt-16 text-center">
                      {/* Título del paso */}
                      <h3 
                        className={`
                          mb-4
                          font-bold
                          transition-colors duration-300
                          ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                        `} 
                        style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
                      >
                        {step.title}
                      </h3>
                      
                      {/* Descripción del paso */}
                      <p 
                        className={`
                          text-sm md:text-base
                          leading-relaxed
                          transition-colors duration-300
                          ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                        `} 
                        style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
