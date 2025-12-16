# 📧 Template de EmailJS - Instrucciones

## 🎨 Template HTML para EmailJS

He creado un template HTML acorde al diseño de tu página que puedes usar directamente en EmailJS.

## 📋 Pasos para configurar en EmailJS:

### 1. Crear el Template en EmailJS

1. Ve a tu dashboard de EmailJS: https://dashboard.emailjs.com/
2. Ve a **Email Templates** → **Create New Template**
3. Configura:
   - **Template Name**: "Contact Form Neko Dev"
   - **Subject**: `Nuevo mensaje de {{name}}`

### 2. Copiar el contenido del template

1. Abre el archivo `public/emailjs-template.html`
2. Copia TODO el contenido HTML
3. Pégalo en el campo **Content** del template en EmailJS

### 3. Configurar las variables

El template usa estas variables (EmailJS las reemplazará automáticamente):

- `{{name}}` - Nombre completo del remitente
- `{{lastName}}` - Apellido (opcional)
- `{{email}}` - Email del remitente
- `{{service}}` - Servicio seleccionado (opcional)
- `{{message}}` - Mensaje/consulta
- `{{time}}` - Fecha y hora (se genera automáticamente)

**Nota sobre `{{service}}`**: 
- Si el servicio está vacío, no se mostrará (usa `{{#service}}...{{/service}}`)
- Si siempre quieres mostrarlo, cambia a `{{service}}` sin el condicional

### 4. Configurar el logo

**IMPORTANTE**: Necesitas actualizar la URL del logo en el template:

1. Sube tu logo a un servidor público (tu dominio o un CDN)
2. En el template, busca esta línea:
   ```html
   <img src="https://tudominio.com/images/logo-blanco.png" alt="Neko Dev" ... />
   ```
3. Reemplaza `https://tudominio.com/images/logo-blanco.png` con la URL real de tu logo

**Opciones para el logo:**
- Si tienes un dominio: `https://tudominio.com/images/logo-blanco.png`
- Si usas un CDN: `https://cdn.tudominio.com/logo-blanco.png`
- Si usas GitHub Pages: `https://tuusuario.github.io/images/logo-blanco.png`

### 5. Guardar el Template

1. Haz clic en **Save**
2. **Copia el Template ID** (ej: `template_xxxxxxx`)

### 6. Actualizar tu archivo .env

Agrega o actualiza estas variables en tu archivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_5z3q9c7
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_EMAILJS_TO_EMAIL=infonekodev@gmail.com
```

## 🎨 Características del Template

- ✅ Diseño acorde a tu marca (negro #000000 y beige #F6F3E8)
- ✅ Logo incluido (necesitas actualizar la URL)
- ✅ Responsive y compatible con clientes de email
- ✅ Muestra toda la información del formulario
- ✅ Diseño limpio y profesional

## 📝 Notas

- El template está optimizado para clientes de email modernos
- Usa tablas HTML (estándar para emails)
- Los estilos están inline (requerido para emails)
- El logo debe estar en una URL pública accesible

## 🔧 Personalización

Si quieres personalizar más el template:
- Colores: Busca `#000000` (negro) y `#F6F3E8` (beige) y cámbialos
- Fuentes: Ya está usando fuentes del sistema
- Espaciado: Ajusta los valores de `padding` en los `<td>`

