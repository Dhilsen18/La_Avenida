# 📁 Instrucciones para Usar tu Logo en LA AVENIDA

## 🎯 Pasos para Implementar tu Logo:

### 1. **Sube tus archivos de logo:**
Coloca tus archivos de logo en la carpeta: `public/logos/`

### 2. **Nombres de archivo recomendados:**
- `logo-principal.png` - Logo principal para header y footer
- `logo-circular.png` - Logo circular para pantalla de carga
- `favicon.ico` - Icono para la pestaña del navegador

### 3. **Descomenta las líneas en el código:**
Una vez que subas tus logos, descomenta estas líneas en `src/App.tsx`:

```javascript
// Cambiar de esto:
// import logoPrincipal from './assets/logos/logo-principal.png';
// import logoCircular from './assets/logos/logo-circular.png';

// A esto:
import logoPrincipal from './assets/logos/logo-principal.png';
import logoCircular from './assets/logos/logo-circular.png';
```

### 4. **Reemplazar los logos temporales:**
En la pantalla de carga, cambia:
```javascript
// De esto:
{/* <img src={logoCircular} alt="LA AVENIDA Logo" className="w-32 h-32 mx-auto mb-6 shadow-2xl" /> */}

// A esto:
<img src={logoCircular} alt="LA AVENIDA Logo" className="w-32 h-32 mx-auto mb-6 shadow-2xl" />
```

En el header, cambia:
```javascript
// De esto:
{/* <img src={logoPrincipal} alt="LA AVENIDA Logo" className="w-10 h-10 rounded-full shadow-lg" /> */}

// A esto:
<img src={logoPrincipal} alt="LA AVENIDA Logo" className="w-10 h-10 rounded-full shadow-lg" />
```

En el footer, cambia:
```javascript
// De esto:
{/* <img src={logoPrincipal} alt="LA AVENIDA Logo" className="w-12 h-12 rounded-full mb-4" /> */}

// A esto:
<img src={logoPrincipal} alt="LA AVENIDA Logo" className="w-12 h-12 rounded-full mb-4" />
```

### 5. **Comenta o elimina los logos temporales:**
Una vez que uses tu logo real, puedes comentar o eliminar las líneas con los logos temporales (los que tienen el icono de café).

## 🎨 Especificaciones Técnicas:

### **Tamaños recomendados:**
- **Logo principal**: 300x300px (PNG con transparencia)
- **Logo circular**: 200x200px (PNG con transparencia)
- **Favicon**: 32x32px (ICO)

### **Formatos soportados:**
- PNG (recomendado para logos con efectos)
- SVG (recomendado para logos simples)
- ICO (para favicon)

### **Colores:**
- Usa colores que combinen con tu paleta: verde oliva (#4a5c4e) y marrón oscuro (#8d6e63)
- Asegúrate de que el fondo sea transparente

## 🚀 ¡Listo!
Una vez que hagas estos cambios, tu logo aparecerá en:
- ✅ Pantalla de carga
- ✅ Header/Navegación
- ✅ Footer
- ✅ Favicon (si lo configuras)

¡Tu sitio web tendrá una identidad visual completamente personalizada!












