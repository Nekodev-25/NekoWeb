import { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import PlanRequestModal from './PlanRequestModal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function PlansSelector({ initialPlanType }) {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.25)
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [selectedPlanType, setSelectedPlanType] = useState(initialPlanType || searchParams.get('plan') || 'basico')
  const [isFading, setIsFading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPlan, setModalPlan] = useState(null)
  const swiperRef = useRef(null)

  const isOnServicesPage = location.pathname === '/services'

  // Detectar si estamos en mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Sincronizar con el parámetro de URL cuando cambia
  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam && ['basico', 'ecommerce', 'aplicaciones'].includes(planParam)) {
      setSelectedPlanType(planParam)
    }
  }, [searchParams])

  const translations = {
    es: {
      title: 'Planes y servicios',
      planTypes: {
        basico: 'Páginas Web',
        ecommerce: 'E-commerce',
        aplicaciones: 'Aplicaciones',
      },
      plans: {
        basico: [
          {
            name: 'Plan Básico',
            price: 'Desde $180.000 ARS',
            description: 'Ideal para tener presencia online profesional, clara y funcional.',
            includes: [
              'Landing page o sitio simple (1 página)',
              'Diseño limpio y responsive',
              'Estructura estándar (hero, info, contacto)',
              'Formulario de contacto básico',
              'Integración con WhatsApp o redes',
              'SEO inicial (títulos y descripciones)',
            ],
            excludes: [
              'Panel administrable',
              'Blog o contenido dinámico',
              'E-commerce',
              'Branding o identidad visual',
            ],
            addons: [
              'Secciones extra',
              'Animaciones',
              'Copywriting',
              'Hosting y dominio',
              'Mantenimiento mensual',
            ],
            developmentTime: 'Desarrollo estimado: hasta 3 semanas',
            recommendedFor: 'Recomendado para emprendedores y negocios que recién empiezan.',
          },
          {
            name: 'Plan Intermedio',
            price: 'Desde $280.000 ARS',
            description: 'Para negocios que necesitan una web más completa y profesional.',
            includes: [
              'Incluye todo el Plan Básico +',
              'Sitio de 3 a 5 secciones',
              'Diseño personalizado (no plantilla genérica)',
              'Animaciones suaves y mejoras UX',
              'Integración con Google Analytics',
              'SEO intermedio',
              'Hasta 2 revisiones de diseño',
            ],
            excludes: [
              'CMS avanzado',
              'Funciones a medida',
              'Branding completo',
            ],
            addons: [
              'Blog administrable',
              'Optimización de velocidad',
              'Textos comerciales',
              'Integraciones externas',
            ],
            developmentTime: '',
            recommendedFor: 'Ideal para empresas pequeñas o profesionales independientes.',
          },
          {
            name: 'Plan Premium',
            price: 'Desde $420.000 ARS',
            description: 'Una web pensada para convertir y crecer.',
            includes: [
              'Incluye todo el Plan Intermedio +',
              'Secciones dinámicas administrables (CMS)',
              'Blog o contenido editable',
              'Optimización de velocidad',
              'Copywriting base',
              'Branding web básico',
              'Integración con chat, pixel y tracking',
              'Soporte técnico por 2 meses',
            ],
            excludes: [
              'Tienda online',
              'Funcionalidades a medida complejas',
            ],
            addons: [
              'Estrategia SEO avanzada',
              'Automatizaciones',
              'Integraciones personalizadas',
            ],
            developmentTime: '',
            recommendedFor: 'Pensado para marcas que quieren presencia digital sólida.',
          },
        ],
        ecommerce: [
          {
            name: 'Plan Básico',
            price: 'Desde $650.000 ARS',
            description: 'Para empezar a vender online de forma ordenada.',
            includes: [
              'Tienda online funcional',
              'Hasta 30 productos cargados',
              'Carrito + checkout',
              'Métodos de pago (Mercado Pago / Stripe)',
              'Diseño base responsive',
              'Emails automáticos estándar',
            ],
            excludes: [
              'Variantes complejas',
              'Automatización de marketing',
              'Integraciones externas',
            ],
            addons: [
              'Carga extra de productos',
              'Envíos avanzados',
              'SEO por producto',
              'Soporte extendido',
            ],
            developmentTime: 'Desarrollo mínimo: 1 mes',
            recommendedFor: 'Ideal para catálogos pequeños o validación de ventas.',
          },
          {
            name: 'Plan Intermedio',
            price: 'Desde $950.000 ARS',
            description: 'Una tienda preparada para escalar.',
            includes: [
              'Incluye todo el Plan Básico +',
              'Productos ilimitados',
              'Variantes (talle, color, etc.)',
              'Gestión de inventario',
              'Cupones y promociones',
              'Envíos configurables',
              'SEO optimizado por producto',
              'Integración con redes sociales',
            ],
            excludes: [
              'Automatizaciones avanzadas',
              'Sistemas externos (ERP, CRM)',
            ],
            addons: [
              'Marketing automation',
              'Reportes avanzados',
              'Multitienda',
            ],
            developmentTime: '',
            recommendedFor: 'Para negocios con ventas frecuentes.',
          },
          {
            name: 'Plan Premium',
            price: 'Desde $1.500.000 ARS',
            description: 'E-commerce profesional y automatizado.',
            includes: [
              'Incluye todo el Plan Intermedio +',
              'Diseño UI/UX 100% personalizado',
              'Automatización de marketing',
              'Suscripciones o membresías',
              'Dashboards avanzados',
              'Integraciones personalizadas',
              'Soporte por 3 meses',
            ],
            excludes: [],
            addons: [],
            developmentTime: '',
            recommendedFor: 'Pensado para marcas consolidadas o en expansión.',
          },
        ],
        aplicaciones: [
          {
            name: 'Plan Básico',
            price: 'Desde $2.200.000 ARS',
            description: 'MVP funcional para validar una idea.',
            includes: [
              'Análisis y arquitectura inicial',
              'Branding base',
              'Login y autenticación',
              'Dashboard simple',
              '1 módulo principal',
              'Base de datos + API',
              'Despliegue inicial',
            ],
            excludes: [
              'Lógica compleja',
              'Escalabilidad avanzada',
            ],
            addons: [],
            developmentTime: 'Desarrollo mínimo: 3 meses',
            recommendedFor: 'Ideal para startups en etapa temprana.',
          },
          {
            name: 'Plan Intermedio',
            price: 'Desde $3.800.000 ARS',
            description: 'Sistema estable y escalable.',
            includes: [
              'Incluye todo el Plan Básico +',
              'Branding completo',
              '3 a 4 módulos',
              'Roles y permisos',
              'Seguridad avanzada',
              'Integraciones externas',
              'UI/UX profesional',
            ],
            excludes: [],
            addons: [],
            developmentTime: '',
            recommendedFor: 'Para empresas que ya operan con el sistema.',
          },
          {
            name: 'Plan Premium',
            price: 'Desde $6.500.000 ARS',
            description: 'Plataforma completa de nivel empresarial.',
            includes: [
              'UX research + branding premium',
              'Funciones avanzadas (pagos, tiempo real)',
              'Arquitectura escalable',
              'CI/CD y cloud',
              'Analíticas avanzadas',
              'Soporte y mantenimiento inicial',
            ],
            excludes: [],
            addons: [],
            developmentTime: '',
            recommendedFor: 'Pensado para productos digitales a largo plazo.',
          },
        ],
      },
      buttonText: 'Ver planes',
      buttonTextRequest: 'Solicitar plan',
      keyMessage: 'Todos los planes son "desde". El precio final puede variar según alcance, funcionalidades y requerimientos específicos. Podés elegir un plan base o solicitar un presupuesto personalizado.',
    },
    en: {
      title: 'Plans and services',
      planTypes: {
        basico: 'Web Pages',
        ecommerce: 'E-commerce',
        aplicaciones: 'Applications',
      },
      plans: {
        basico: [
          {
            name: 'Basic Plan',
            price: 'From $180.000 ARS',
            description: 'Ideal for having a professional, clear and functional online presence.',
            includes: [
              'Landing page or simple site (1 page)',
              'Clean and responsive design',
              'Standard structure (hero, info, contact)',
              'Basic contact form',
              'WhatsApp or social media integration',
              'Initial SEO (titles and descriptions)',
            ],
            excludes: [
              'Admin panel',
              'Blog or dynamic content',
              'E-commerce',
              'Branding or visual identity',
            ],
            addons: [
              'Extra sections',
              'Animations',
              'Copywriting',
              'Hosting and domain',
              'Monthly maintenance',
            ],
            developmentTime: 'Estimated development: up to 3 weeks',
            recommendedFor: 'Recommended for entrepreneurs and businesses just starting out.',
          },
          {
            name: 'Intermediate Plan',
            price: 'From $280.000 ARS',
            description: 'For businesses that need a more complete and professional website.',
            includes: [
              'Includes everything in Basic Plan +',
              '3 to 5 section site',
              'Custom design (not generic template)',
              'Smooth animations and UX improvements',
              'Google Analytics integration',
              'Intermediate SEO',
              'Up to 2 design revisions',
            ],
            excludes: [
              'Advanced CMS',
              'Custom functions',
              'Complete branding',
            ],
            addons: [
              'Manageable blog',
              'Speed optimization',
              'Commercial texts',
              'External integrations',
            ],
            developmentTime: '',
            recommendedFor: 'Ideal for small businesses or independent professionals.',
          },
          {
            name: 'Premium Plan',
            price: 'From $420.000 ARS',
            description: 'A website designed to convert and grow.',
            includes: [
              'Includes everything in Intermediate Plan +',
              'Manageable dynamic sections (CMS)',
              'Blog or editable content',
              'Speed optimization',
              'Base copywriting',
              'Basic web branding',
              'Chat, pixel and tracking integration',
              'Technical support for 2 months',
            ],
            excludes: [
              'Online store',
              'Complex custom functionalities',
            ],
            addons: [
              'Advanced SEO strategy',
              'Automations',
              'Custom integrations',
            ],
            developmentTime: '',
            recommendedFor: 'Designed for brands that want a solid digital presence.',
          },
        ],
        ecommerce: [
          {
            name: 'Basic Plan',
            price: 'From $650.000 ARS',
            description: 'To start selling online in an organized way.',
            includes: [
              'Functional online store',
              'Up to 30 loaded products',
              'Cart + checkout',
              'Payment methods (Mercado Pago / Stripe)',
              'Base responsive design',
              'Standard automatic emails',
            ],
            excludes: [
              'Complex variants',
              'Marketing automation',
              'External integrations',
            ],
            addons: [
              'Extra product loading',
              'Advanced shipping',
              'SEO per product',
              'Extended support',
            ],
            developmentTime: 'Minimum development: 1 month',
            recommendedFor: 'Ideal for small catalogs or sales validation.',
          },
          {
            name: 'Intermediate Plan',
            price: 'From $950.000 ARS',
            description: 'A store ready to scale.',
            includes: [
              'Includes everything in Basic Plan +',
              'Unlimited products',
              'Variants (size, color, etc.)',
              'Inventory management',
              'Coupons and promotions',
              'Configurable shipping',
              'SEO optimized per product',
              'Social media integration',
            ],
            excludes: [
              'Advanced automations',
              'External systems (ERP, CRM)',
            ],
            addons: [
              'Marketing automation',
              'Advanced reports',
              'Multi-store',
            ],
            developmentTime: '',
            recommendedFor: 'For businesses with frequent sales.',
          },
          {
            name: 'Premium Plan',
            price: 'From $1.500.000 ARS',
            description: 'Professional and automated e-commerce.',
            includes: [
              'Includes everything in Intermediate Plan +',
              '100% custom UI/UX design',
              'Marketing automation',
              'Subscriptions or memberships',
              'Advanced dashboards',
              'Custom integrations',
              'Support for 3 months',
            ],
            excludes: [],
            addons: [],
            developmentTime: '',
            recommendedFor: 'Designed for established or expanding brands.',
          },
        ],
        aplicaciones: [
          {
            name: 'Basic Plan',
            price: 'From $2.200.000 ARS',
            description: 'Functional MVP to validate an idea.',
            includes: [
              'Initial analysis and architecture',
              'Base branding',
              'Login and authentication',
              'Simple dashboard',
              '1 main module',
              'Database + API',
              'Initial deployment',
            ],
            excludes: [
              'Complex logic',
              'Advanced scalability',
            ],
            addons: [],
            developmentTime: 'Minimum development: 3 months',
            recommendedFor: 'Ideal for early-stage startups.',
          },
          {
            name: 'Intermediate Plan',
            price: 'From $3.800.000 ARS',
            description: 'Stable and scalable system.',
            includes: [
              'Includes everything in Basic Plan +',
              'Complete branding',
              '3 to 4 modules',
              'Roles and permissions',
              'Advanced security',
              'External integrations',
              'Professional UI/UX',
            ],
            excludes: [],
            addons: [],
            developmentTime: '',
            recommendedFor: 'For companies already operating with the system.',
          },
          {
            name: 'Premium Plan',
            price: 'From $6.500.000 ARS',
            description: 'Complete enterprise-level platform.',
            includes: [
              'UX research + premium branding',
              'Advanced features (payments, real-time)',
              'Scalable architecture',
              'CI/CD and cloud',
              'Advanced analytics',
              'Initial support and maintenance',
            ],
            excludes: [],
            addons: [],
            developmentTime: '',
            recommendedFor: 'Designed for long-term digital products.',
          },
        ],
      },
      buttonText: 'View plans',
      buttonTextRequest: 'Request plan',
      keyMessage: 'All plans are "from". The final price may vary according to scope, functionalities and specific requirements. You can choose a base plan or request a personalized quote.',
    },
  }

  const t = translations[language]
  const currentPlans = t.plans[selectedPlanType]
  const planButtonText = isOnServicesPage ? t.buttonTextRequest : t.buttonText

  const openPlanModal = (plan) => {
    setModalPlan(plan)
    setModalOpen(true)
  }

  // Función para cambiar el tipo de plan con efecto de desvanecimiento
  const handlePlanTypeChange = (newType) => {
    setIsFading(true)
    setTimeout(() => {
      setSelectedPlanType(newType)
      setIsFading(false)
      setCurrentSlide(0) // Resetear al primer slide cuando cambia el tipo
    }, 200)
  }


  return (
    <section
      ref={ref}
      className={`
        snap-start snap-always
        min-h-screen py-32
        transition-colors duration-300
        transform-gpu
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'}
      `}
      style={{ scrollMarginTop: '80px', transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
    >
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-left mb-16 leading-tight md:leading-[80px] transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}>
          {t.title}
        </h2>

        {/* Selector horizontal de tipos de planes */}
        <div className="mb-16 flex justify-center">
          <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center">
            <button
              onClick={() => handlePlanTypeChange('basico')}
              className={`
                relative 
                text-left 
                transition-colors 
                pb-2 
                group
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                ${selectedPlanType === 'basico' ? 'font-medium' : ''}
              `}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: selectedPlanType === 'basico' ? 500 : 300 }}
            >
              {t.planTypes.basico}
              <div 
                className={`
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  h-[1px] 
                  transition-colors 
                  ${
                    selectedPlanType === 'basico'
                      ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                      : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                  }
                `}
              ></div>
            </button>
            
            <button
              onClick={() => handlePlanTypeChange('ecommerce')}
              className={`
                relative 
                text-left 
                transition-colors 
                pb-2 
                group
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                ${selectedPlanType === 'ecommerce' ? 'font-medium' : ''}
              `}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: selectedPlanType === 'ecommerce' ? 500 : 300 }}
            >
              {t.planTypes.ecommerce}
              <div 
                className={`
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  h-[1px] 
                  transition-colors 
                  ${
                    selectedPlanType === 'ecommerce'
                      ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                      : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                  }
                `}
              ></div>
            </button>
            
            <button
              onClick={() => handlePlanTypeChange('aplicaciones')}
              className={`
                relative 
                text-left 
                transition-colors 
                pb-2 
                group
                ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                ${selectedPlanType === 'aplicaciones' ? 'font-medium' : ''}
              `}
              style={{ fontFamily: 'var(--font-delight)', fontWeight: selectedPlanType === 'aplicaciones' ? 500 : 300 }}
            >
              {t.planTypes.aplicaciones}
              <div 
                className={`
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  h-[1px] 
                  transition-colors 
                  ${
                    selectedPlanType === 'aplicaciones'
                      ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                      : (isDarkMode ? 'bg-transparent group-hover:bg-white' : 'bg-transparent group-hover:bg-gray-900')
                  }
                `}
              ></div>
            </button>
          </div>
        </div>

        {/* Cards de planes */}
        {/* Mobile: Swiper */}
        <div className={`md:hidden relative overflow-hidden transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              // El pagination se actualiza automáticamente
            }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            modules={[Pagination]}
            className="plansSwiper"
          >
            {currentPlans.map((plan, index) => (
              <SwiperSlide key={`${selectedPlanType}-${index}`}>
                <div
                  className={`
                    relative 
                    border 
                    rounded-[2.5rem] 
                    p-10 
                    transition-all 
                    duration-300 
                    flex 
                    flex-col 
                    mx-auto
                    w-full
                    max-w-[calc(100vw-3rem)]
                    min-h-[600px]
                    md:min-h-0
                    ${
                      isDarkMode 
                        ? 'border-[#F6F3E8] bg-transparent' 
                        : 'border-gray-900 bg-transparent'
                    }
                  `}
                >
                  {/* Título del plan */}
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                    {plan.name}
                  </h3>

                  {/* Precio */}
                  <p className={`mb-6 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                    {plan.price}
                  </p>

                  {/* Descripción */}
                  <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                    {plan.description}
                  </p>

                  {/* Incluye */}
                  {plan.includes && plan.includes.length > 0 && (
                    <div className="mb-6">
                      <h4 className={`text-sm font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                        Incluye
                      </h4>
                      <ul className="space-y-2">
                        {plan.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                            <span className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* No incluye */}
                  {plan.excludes && plan.excludes.length > 0 && (
                    <div className="mb-6">
                      <h4 className={`text-sm font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                        No incluye
                      </h4>
                      <ul className="space-y-2">
                        {plan.excludes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                            <span className={`text-xs leading-relaxed transition-colors duration-300 opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tiempo de desarrollo */}
                  {plan.developmentTime && (
                    <p className={`text-xs mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                      {plan.developmentTime}
                    </p>
                  )}

                  {/* Botón */}
                  <button 
                    type="button"
                    onClick={() => {
                      if (isOnServicesPage) {
                        openPlanModal(plan)
                      } else {
                        navigate(`/services?plan=${selectedPlanType}`)
                      }
                    }}
                    className={`
                      w-full
                      px-8 
                      py-4 
                      rounded-full
                      font-medium 
                      transition-all
                      duration-200
                      text-base
                      mt-auto
                      border-2
                      ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                    `} 
                    style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
                  >
                    {planButtonText}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid normal */}
        <div className={`hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {currentPlans.map((plan, index) => (
            <div
              key={`${selectedPlanType}-${index}`}
              className={`relative border rounded-[2.5rem] p-10 lg:p-12 transition-all duration-300 flex flex-col max-w-sm mx-auto ${
                isDarkMode 
                  ? 'border-[#F6F3E8] bg-transparent' 
                  : 'border-gray-900 bg-transparent'
              }`}
            >
              {/* Título del plan */}
              <h3 className={`text-2xl lg:text-3xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                {plan.name}
              </h3>

              {/* Precio */}
              <p className={`mb-6 text-lg transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}>
                {plan.price}
              </p>

              {/* Descripción */}
              <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                {plan.description}
              </p>

              {/* Incluye */}
              {plan.includes && plan.includes.length > 0 && (
                <div className="mb-6">
                  <h4 className={`text-sm font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                    Incluye
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                        <span className={`text-xs leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* No incluye */}
              {plan.excludes && plan.excludes.length > 0 && (
                <div className="mb-6">
                  <h4 className={`text-sm font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}>
                    No incluye
                  </h4>
                  <ul className="space-y-2">
                    {plan.excludes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-[#F6F3E8]' : 'bg-gray-900'}`}></span>
                        <span className={`text-xs leading-relaxed transition-colors duration-300 opacity-70 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tiempo de desarrollo */}
              {plan.developmentTime && (
                <p className={`text-xs mb-6 transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
                  {plan.developmentTime}
                </p>
              )}

              {/* Botón */}
              <button 
                type="button"
                onClick={() => {
                  if (isOnServicesPage) {
                    openPlanModal(plan)
                  } else {
                    navigate(`/services?plan=${selectedPlanType}`)
                  }
                }}
                className={`
                  w-full
                  px-8 
                  py-4 
                  rounded-full
                  font-medium 
                  transition-all 
                  duration-200
                  text-base
                  mt-auto
                  border-2
                  ${isDarkMode ? 'border-[#F6F3E8] text-[#F6F3E8] hover:bg-[#F6F3E8] hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#F6F3E8]'}
                `} 
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 500 }}
              >
                {planButtonText}
              </button>
            </div>
          ))}
        </div>

        {/* Mensaje clave */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className={`text-sm md:text-base text-center leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-delight)', fontWeight: 400 }}>
            {t.keyMessage}
          </p>
        </div>
      </div>

      {/* Estilos personalizados para Swiper */}
      <style>{`
        .plansSwiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: ${isDarkMode ? 'rgba(246, 243, 232, 0.3)' : 'rgba(17, 24, 39, 0.3)'};
          opacity: 1;
          transition: all 0.3s;
        }
        .plansSwiper .swiper-pagination-bullet-active {
          width: 32px;
          height: 8px;
          border-radius: 4px;
          background: ${isDarkMode ? '#F6F3E8' : '#111827'};
        }
        .plansSwiper .swiper-pagination {
          position: relative;
          margin-top: 24px;
        }
      `}</style>

      <PlanRequestModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setModalPlan(null) }}
        plan={modalPlan}
        planType={selectedPlanType}
      />
    </section>
  )
}

export default PlansSelector

