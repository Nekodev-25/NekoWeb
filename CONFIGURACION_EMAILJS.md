# 📧 Configuración de EmailJS - Resumen

## ✅ Lo que ya está hecho:

1. ✅ **EmailJS instalado** (`@emailjs/browser`)
2. ✅ **Archivos de configuración creados**:
   - `src/config/emailjs.js` - Configuración
   - `src/utils/sendEmail.js` - Función para enviar emails
   - `src/utils/emailTemplate.js` - Template de email
3. ✅ **Formularios actualizados**:
   - `src/components/Contactanos.jsx` - Formulario de contacto principal
   - `src/components/CustomServiceForm.jsx` - Formulario de servicios personalizados
4. ✅ **Validación y manejo de errores** implementado
5. ✅ **Template de email** creado con el diseño de tu marca

## 🔧 Lo que necesitas hacer:

### 1. Crear cuenta en EmailJS
- Ve a https://www.emailjs.com/
- Crea una cuenta gratuita (200 emails/mes)
- Verifica tu email

### 2. Configurar EmailJS Dashboard

#### a) Agregar Servicio de Email:
1. Ve a **Email Services** → **Add New Service**
2. Elige tu proveedor (Gmail, Outlook, etc.)
3. Conecta tu cuenta
4. **Copia el Service ID** (ej: `service_abc123`)

#### b) Crear Template de Email:
1. Ve a **Email Templates** → **Create New Template**
2. Configura:
   - **Template Name**: "Contact Form"
   - **Subject**: `Nuevo mensaje de {{name}}`
   - **Content**: Copia el contenido de `public/email-template.html` o usa el template que crees en EmailJS
3. **Variables del template** (asegúrate de incluir estas):
   - `{{name}}` - Nombre completo
   - `{{lastName}}` - Apellido
   - `{{email}}` - Email del remitente
   - `{{service}}` - Servicio seleccionado
   - `{{message}}` - Mensaje/consulta
   - `{{time}}` - Fecha y hora
   - `{{to_email}}` - Email de destino
4. **Copia el Template ID** (ej: `template_xyz789`)

#### c) Obtener Public Key:
1. Ve a **Account** → **General**
2. **Copia tu Public Key** (ej: `abcdefghijklmnop`)

### 3. Crear archivo `.env`

En la raíz del proyecto, crea un archivo `.env` con:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
VITE_EMAILJS_TO_EMAIL=infonekodev@gmail.com
```

**⚠️ IMPORTANTE:**
- Reemplaza los valores con los tuyos
- Las variables DEBEN empezar con `VITE_` para funcionar en Vite
- No subas el archivo `.env` a Git (ya está en `.gitignore`)

### 4. Reiniciar el servidor de desarrollo

Después de crear el `.env`, reinicia el servidor:
```bash
npm run dev
```

### 5. (Opcional) Configurar el logo en el template

Para que el logo aparezca en los emails:
1. Sube tu logo a un servidor público (tu dominio o un CDN)
2. En el template de EmailJS, reemplaza `{{logoUrl}}` con la URL completa del logo
   - Ejemplo: `https://tudominio.com/images/logo-blanco.png`

## 🧪 Probar el formulario

1. Llena el formulario de contacto
2. Haz clic en "Enviar"
3. Deberías recibir el email en la dirección configurada en `VITE_EMAILJS_TO_EMAIL`

## 📝 Notas

- **Límite gratuito**: 200 emails/mes
- **Template personalizado**: Puedes editar el template en EmailJS dashboard para personalizarlo más
- **Variables**: Todas las variables del formulario se envían automáticamente

## 🐛 Solución de problemas

Si no funciona:
1. Verifica que las variables en `.env` estén correctas
2. Asegúrate de que el `.env` esté en la raíz del proyecto
3. Reinicia el servidor después de crear/modificar `.env`
4. Revisa la consola del navegador para ver errores
5. Verifica que el template en EmailJS tenga todas las variables necesarias

