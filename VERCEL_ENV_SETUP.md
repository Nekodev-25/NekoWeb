# 🔧 Configuración de Variables de Entorno en Vercel

## Problema
Las variables de entorno funcionan en local pero no en producción porque Vercel no lee el archivo `.env` automáticamente. Necesitas configurarlas en el dashboard de Vercel.

## ✅ Solución: Configurar Variables en Vercel

### Paso 1: Acceder al Dashboard de Vercel
1. Ve a https://vercel.com/dashboard
2. Inicia sesión con tu cuenta
3. Selecciona tu proyecto

### Paso 2: Agregar Variables de Entorno
1. Ve a **Settings** (Configuración) en la barra superior
2. En el menú lateral, haz clic en **Environment Variables**
3. Agrega cada variable una por una:

#### Variable 1:
- **Name**: `VITE_EMAILJS_SERVICE_ID`
- **Value**: `service_5z3q9c7`
- **Environment**: Selecciona todas (Production, Preview, Development)

#### Variable 2:
- **Name**: `VITE_EMAILJS_TEMPLATE_ID`
- **Value**: `template_mil4hhf`
- **Environment**: Selecciona todas (Production, Preview, Development)

#### Variable 3:
- **Name (Key)**: `VITE_EMAILJS_PUBLIC_KEY` ← Este va en el campo "Key"
- **Value**: `8tZZGgBaBELIGnqip` ← Este va en el campo "Value"
- **Environment**: Selecciona todas (Production, Preview, Development)

⚠️ **IMPORTANTE**: No intercambies los campos. El nombre de la variable va en "Key" y su valor en "Value"

#### Variable 4:
- **Name**: `VITE_EMAILJS_TO_EMAIL`
- **Value**: `infonekodev@gmail.com`
- **Environment**: Selecciona todas (Production, Preview, Development)

### Paso 3: Redesplegar
Después de agregar todas las variables:
1. Ve a **Deployments**
2. Haz clic en los tres puntos (...) del último deployment
3. Selecciona **Redeploy**
4. Confirma el redeploy

**O simplemente haz un nuevo commit y push** - Vercel redeplegará automáticamente con las nuevas variables.

## 🔍 Verificar que Funciona

1. Abre la consola del navegador en producción (F12)
2. Intenta enviar un formulario
3. Si hay errores, deberías ver mensajes más claros ahora
4. Revisa la consola para ver si las variables están cargadas

## ⚠️ Notas Importantes

- Las variables **DEBEN** empezar con `VITE_` para que funcionen en Vite
- Después de agregar variables, **siempre redeploya** el proyecto
- Las variables son sensibles - no las compartas públicamente
- Puedes tener diferentes valores para Production, Preview y Development si lo necesitas

## 🐛 Si Sigue Sin Funcionar

1. Verifica que las variables estén escritas exactamente igual (case-sensitive)
2. Asegúrate de haber seleccionado todos los ambientes (Production, Preview, Development)
3. Verifica que hayas hecho redeploy después de agregar las variables
4. Revisa los logs de Vercel en la sección "Deployments" → "Functions" para ver errores
