# La Avenida - Cafetería Fullstack

Una aplicación web completa para una cafetería con frontend React y backend Node.js.

## 🚀 Características

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Base de datos**: MongoDB con Mongoose
- **Carrito de compras**: Funcionalidad completa
- **Responsive**: Diseño adaptativo para móviles y desktop

## 📁 Estructura del Proyecto

```
la-avenida-fullstack/
├── frontend/          # Aplicación React
├── backend/           # API Node.js
├── package.json       # Scripts unificados
└── README.md
```

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias

```bash
# Instalar dependencias de todos los proyectos
npm run install-all
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
MONGO_URI=mongodb://localhost:27017/la-avenida
PORT=4000
NODE_ENV=development
```

### 3. Instalar MongoDB

Asegúrate de tener MongoDB instalado y ejecutándose en tu sistema.

## 🚀 Ejecutar la Aplicación

### Desarrollo

```bash
# Ejecutar frontend y backend simultáneamente
npm run dev
```

Esto iniciará:
- **Backend**: http://localhost:4000
- **Frontend**: http://localhost:5173

### Producción

```bash
# Construir y ejecutar en producción
npm run build
npm start
```

## 📱 Funcionalidades

### Páginas Disponibles

1. **Inicio** (`/`)
   - Presentación de la cafetería
   - Información sobre horarios y ubicación
   - Enlaces a carta y carrito

2. **Carta** (`/carta`)
   - Lista de productos por categorías
   - Filtros por tipo de producto
   - Agregar productos al carrito
   - Visualización de imágenes

3. **Mi Pedido** (`/carrito`)
   - Ver productos agregados
   - Modificar cantidades
   - Eliminar productos
   - Calcular total con delivery

### API Endpoints

- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos/:id` - Obtener producto por ID
- `GET /api/productos/categoria/:categoria` - Productos por categoría
- `GET /api/carrito` - Obtener carrito del usuario
- `POST /api/carrito/agregar` - Agregar producto al carrito
- `PUT /api/carrito/:productoId` - Actualizar cantidad
- `DELETE /api/carrito/:productoId` - Eliminar producto
- `DELETE /api/carrito` - Vaciar carrito

## 🎨 Diseño

- **Colores**: Verde oscuro, dorado y crema
- **Tipografía**: Playfair Display para títulos
- **Componentes**: Diseño moderno con Tailwind CSS
- **Responsive**: Adaptable a todos los dispositivos

## 🗄️ Base de Datos

### Modelos

**Producto**:
- nombre, descripción, precio
- categoría, imagen, disponible

**Carrito**:
- productos (referencia a Producto)
- cantidad, subtotal, total
- sessionId para identificación

### Seed Automático

El sistema incluye un seed automático que agrega productos de ejemplo:
- Cafés (Americano, Latte, Cappuccino, etc.)
- Desayunos (Pan con palta, Sandwich de pollo, etc.)
- Jugos (Naranja, Maracuyá, Surtidos, etc.)
- Frappes, Infusiones, Postres

## 🔧 Tecnologías Utilizadas

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React (iconos)

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

### Herramientas
- Concurrently (ejecución simultánea)
- Nodemon (desarrollo backend)

## 📝 Notas de Desarrollo

- El carrito se mantiene por sesión usando localStorage
- Las imágenes de productos son opcionales
- El sistema incluye manejo de errores
- CORS configurado para desarrollo local
- Proxy automático en Vite para API calls

## 🚀 Despliegue

Para desplegar en producción:

1. Configurar variables de entorno de producción
2. Ejecutar `npm run build`
3. El backend servirá automáticamente el frontend compilado
4. Configurar MongoDB en la nube (MongoDB Atlas)

¡Disfruta tu cafetería digital! ☕