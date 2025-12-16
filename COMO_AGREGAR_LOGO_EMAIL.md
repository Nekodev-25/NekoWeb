# 📸 Cómo agregar el logo al template de email

## ⚠️ Problema
Las imágenes locales (`/images/logo-blanco.png`) **NO funcionan en emails**. Los clientes de email no pueden acceder a archivos de tu computadora o servidor local.

## ✅ Soluciones

### Opción 1: Subir a tu servidor/dominio (RECOMENDADO)

Si ya tienes un dominio o hosting:

1. **Sube el logo a tu servidor**
   - Sube `public/images/logo-blanco.png` a tu servidor
   - Ejemplo: `https://tudominio.com/images/logo-blanco.png`

2. **Actualiza el template en EmailJS**
   - Busca: `<img src="https://tudominio.com/images/logo-blanco.png"`
   - Reemplaza `https://tudominio.com/images/logo-blanco.png` con tu URL real

### Opción 2: Usar un servicio de hosting de imágenes

#### A) Imgur (Gratis y fácil)
1. Ve a https://imgur.com/
2. Sube tu logo (`public/images/logo-blanco.png`)
3. Haz clic derecho en la imagen → "Copy image address"
4. Copia la URL (ej: `https://i.imgur.com/xxxxx.png`)
5. Reemplaza en el template de EmailJS

#### B) Cloudinary (Gratis, más profesional)
1. Crea cuenta en https://cloudinary.com/
2. Sube tu logo
3. Copia la URL generada
4. Reemplaza en el template

#### C) GitHub (Si usas GitHub Pages)
1. Sube el logo a tu repositorio
2. Usa la URL: `https://tuusuario.github.io/puchit-project/images/logo-blanco.png`
3. Reemplaza en el template

### Opción 3: Convertir a Base64 (NO RECOMENDADO)

⚠️ **Limitaciones**: 
- Aumenta mucho el tamaño del email
- Algunos clientes de email bloquean imágenes base64
- Más difícil de mantener

Si aún así quieres usarlo:
1. Convierte la imagen a base64 (usa una herramienta online)
2. Reemplaza en el template:
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." alt="Neko Dev" />
```

## 📝 Pasos para actualizar el template

1. **Obtén la URL pública de tu logo** (usando una de las opciones arriba)

2. **Ve a EmailJS Dashboard**:
   - https://dashboard.emailjs.com/
   - Ve a **Email Templates**
   - Edita tu template

3. **Busca esta línea en el template**:
   ```html
   <img src="https://tudominio.com/images/logo-blanco.png" alt="Neko Dev" ... />
   ```

4. **Reemplaza la URL** con la URL real de tu logo

5. **Guarda el template**

## 🧪 Probar que funciona

1. Envía un email de prueba desde tu formulario
2. Verifica que el logo aparezca en el email recibido
3. Si no aparece, verifica que la URL sea accesible públicamente

## 💡 Recomendación

**Usa Imgur** si no tienes un dominio propio todavía:
- Es gratis
- Es rápido de configurar
- Las URLs son permanentes
- Funciona perfectamente en emails

