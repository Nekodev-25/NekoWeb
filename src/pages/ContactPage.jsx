import Contactanos from '../components/Contactanos'
import { useTheme } from '../context/ThemeContext'

function ContactPage() {
  const { isDarkMode } = useTheme()
  
  return (
    <Contactanos />
  )
}

export default ContactPage

