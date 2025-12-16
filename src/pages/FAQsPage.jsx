import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

function FAQsPage() {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()
  const [openIndex, setOpenIndex] = useState(null)

  const translations = {
    es: {
      title: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Cuál es el tiempo de entrega de un proyecto?',
          answer: 'El tiempo de entrega varía según el tipo de proyecto. Para proyectos web básicos, el tiempo promedio es de 4-6 semanas. Para proyectos más complejos, puede tomar entre 8-12 semanas. Siempre proporcionamos un cronograma detallado al inicio del proyecto.',
        },
        {
          question: '¿Ofrecen servicios de mantenimiento?',
          answer: 'Sí, ofrecemos servicios de mantenimiento continuo para todos nuestros proyectos. Esto incluye actualizaciones de seguridad, mejoras de rendimiento, y soporte técnico. Puedes contratar un plan de mantenimiento mensual o por horas.',
        },
        {
          question: '¿Cómo funciona el proceso de trabajo?',
          answer: 'Nuestro proceso comienza con una consulta inicial donde entendemos tus necesidades. Luego, creamos una propuesta detallada con cronograma y presupuesto. Una vez aprobado, comenzamos con el diseño y desarrollo, manteniendo comunicación constante contigo durante todo el proceso.',
        },
        {
          question: '¿Puedo ver el progreso de mi proyecto?',
          answer: 'Sí, mantenemos comunicación constante durante todo el proyecto. Proporcionamos actualizaciones regulares y acceso a un entorno de desarrollo donde puedes ver el progreso en tiempo real. También programamos reuniones periódicas para revisar avances.',
        },
        {
          question: '¿Qué métodos de pago aceptan?',
          answer: 'Aceptamos transferencias bancarias, tarjetas de crédito y débito, y pagos mediante plataformas digitales. El pago generalmente se divide en etapas: un depósito inicial al comenzar el proyecto, pagos parciales según hitos, y el pago final al completar el proyecto.',
        },
        {
          question: '¿Ofrecen garantía en sus servicios?',
          answer: 'Sí, ofrecemos garantía en todos nuestros servicios. Si encuentras algún problema técnico relacionado con nuestro trabajo dentro de los primeros 3 meses después de la entrega, lo corregiremos sin costo adicional.',
        },
      ],
    },
    en: {
      title: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the delivery time for a project?',
          answer: 'Delivery time varies depending on the type of project. For basic web projects, the average time is 4-6 weeks. For more complex projects, it can take 8-12 weeks. We always provide a detailed timeline at the start of the project.',
        },
        {
          question: 'Do you offer maintenance services?',
          answer: 'Yes, we offer ongoing maintenance services for all our projects. This includes security updates, performance improvements, and technical support. You can hire a monthly maintenance plan or pay by the hour.',
        },
        {
          question: 'How does the work process work?',
          answer: 'Our process begins with an initial consultation where we understand your needs. Then, we create a detailed proposal with timeline and budget. Once approved, we begin with design and development, maintaining constant communication with you throughout the process.',
        },
        {
          question: 'Can I see the progress of my project?',
          answer: 'Yes, we maintain constant communication throughout the project. We provide regular updates and access to a development environment where you can see progress in real time. We also schedule periodic meetings to review progress.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept bank transfers, credit and debit cards, and payments through digital platforms. Payment is generally divided into stages: an initial deposit when starting the project, partial payments according to milestones, and final payment upon project completion.',
        },
        {
          question: 'Do you offer a warranty on your services?',
          answer: 'Yes, we offer a warranty on all our services. If you find any technical problem related to our work within the first 3 months after delivery, we will fix it at no additional cost.',
        },
      ],
    },
  }

  const t = translations[language]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      className={`min-h-screen pt-32 pb-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-[#F6F3E8]'
      }`} 
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="mb-16">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-black text-left leading-tight md:leading-[80px] transition-colors duration-300 ${
              isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
            }`} 
            style={{ fontFamily: 'var(--font-delight)', fontWeight: 900, letterSpacing: '0%' }}
          >
            {t.title}
          </h1>
        </div>

        {/* Acordeón de preguntas */}
        <div className="max-w-4xl mx-auto">
          {t.faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                border-b
                transition-colors duration-300
                ${isDarkMode ? 'border-[#F6F3E8]' : 'border-gray-900'}
              `}
            >
              {/* Botón de pregunta */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`
                  w-full
                  py-6
                  text-left
                  flex
                  items-center
                  justify-between
                  transition-colors duration-300
                  ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                  hover:opacity-70
                `}
                style={{ fontFamily: 'var(--font-delight)', fontWeight: 700 }}
              >
                <span className="text-lg md:text-xl pr-4">{faq.question}</span>
                {/* Icono de más/menos */}
                <div className={`
                  flex-shrink-0
                  w-6
                  h-6
                  flex
                  items-center
                  justify-center
                  transition-transform duration-300
                  ${openIndex === index ? 'rotate-45' : 'rotate-0'}
                `}>
                  <svg 
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                </div>
              </button>

              {/* Respuesta (expandible) */}
              <div 
                className={`
                  overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div 
                  className={`
                    pb-6
                    transition-colors duration-300
                    ${isDarkMode ? 'text-[#F6F3E8]' : 'text-gray-900'}
                  `}
                  style={{ fontFamily: 'var(--font-delight)', fontWeight: 300 }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQsPage

