import { useEffect, useRef, useState } from 'react'

/**
 * Hook sencillo para animar secciones cuando entran en viewport.
 * Devuelve un ref para asignar al elemento raíz y una clase booleana.
 */
export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Solo animar la primera vez que entra
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, isVisible }
}


