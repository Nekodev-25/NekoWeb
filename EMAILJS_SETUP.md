# Guía de Configuración de EmailJS

## 📋 Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a https://www.emailjs.com/
2. Crea una cuenta gratuita (hasta 200 emails/mes)
3. Verifica tu email

### 2. Configurar EmailJS

#### a) Agregar un servicio de email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Elige tu proveedor (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. **Guarda el Service ID** (ej: `service_xxxxxxx`)

#### b) Crear un template de email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura:
   - **Template Name**: "Contact Form" (o el nombre que prefieras)
   - **Subject**: "Nuevo mensaje de {{name}}"
   - **Content**: Usa el template HTML que creamos
4. **Guarda el Template ID** (ej: `template_xxxxxxx`)

#### c) Obtener tu Public Key
1. Ve a **Account** → **General**
2. Copia tu **Public Key** (ej: `xxxxxxxxxxxxx`)

### 3. Variables del template
Asegúrate de que tu template en EmailJS tenga estas variables:
- `{{name}}` - Nombre completo
- `{{lastName}}` - Apellido
- `{{email}}` - Email del remitente
- `{{service}}` - Servicio seleccionado
- `{{message}}` - Mensaje/consulta
- `{{time}}` - Fecha y hora (se genera automáticamente)

### 4. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
VITE_EMAILJS_TO_EMAIL=tu-email@ejemplo.com
```

**⚠️ IMPORTANTE**: 
- No subas el archivo `.env` a Git
- Agrega `.env` a tu `.gitignore`
- Las variables deben empezar con `VITE_` para que funcionen en Vite

### 5. Instalar EmailJS
```bash
npm install @emailjs/browser
```

## 📝 Notas importantes

- **Límite gratuito**: 200 emails/mes
- **Logo en emails**: El logo debe estar en una URL pública accesible (ej: tu dominio o un CDN)
- **Template HTML**: Puedes usar el template que creamos en `public/email-template.html` o `src/utils/emailTemplate.js`

