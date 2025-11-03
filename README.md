Portfolio Freelancer — Ignacio Gandolfo 2025

Portfolio desarrollado con Vite + React + JavaScript + CSS, enfocado en presentar servicios, proyectos y medios de contacto de forma clara, moderna y profesional.
Incluye secciones con scroll suave, un carrusel de proyectos con enlaces a sus sitios reales, formulario de contacto funcional con Formspree y CTA directo a WhatsApp. Ideal como web de presentación para freelancers y desarrolladores frontend.

🚀 Tecnologías utilizadas

Vite 5 — servidor de desarrollo rápido y liviano

React 19 + ReactDOM — estructura SPA moderna

CSS nativo modularizado — estilos propios sin frameworks

Formspree.io — envío de formularios directo a email

Netlify — deploy automático desde GitHub

JavaScript ES6+ — para animaciones y scroll suave

✅ Características principales
Diseño moderno y minimalista

Inspirado en agencias digitales (ej. Omatic), con buena tipografía, espacios amplios y acento color verde agua #00ADB5.
Paleta adaptable a fondos claros y oscuros.

Secciones incluidas

Home (Hero): presentación principal con CTA hacia servicios y contacto

Servicios: tarjetas descriptivas de los principales servicios ofrecidos

Tarifas / Planes: tabla comparativa de planes (básico, intermedio, premium)

Proyectos: carrusel con imágenes, descripción y enlaces a cada proyecto en Netlify

Contacto: formulario funcional (Formspree) y botón directo a WhatsApp

Footer: créditos y redes sociales

Scroll y navegación suave

El menú superior se mantiene fijo (sticky) y permite moverse por las secciones con animaciones de desplazamiento fluido.

Carrusel de proyectos

Componentes React con rotación automática, controles y dots visuales mejorados.
Cada slide incluye:

Imagen del proyecto (carpeta /public/projects/)

Título y breve descripción

Etiquetas (tags)

Botón “Ver proyecto” que abre la web real en Netlify

Formulario de contacto con envío real

Conectado a Formspree.io
 para recibir consultas directamente en nachingast@gmail.com
, sin necesidad de backend.
Incluye validación, feedback visual y fallback por WhatsApp.

▶️ Cómo instalar y correr

Clonar el repositorio:

git clone https://github.com/Sehranagast/portfolio-freelancer.git
cd portfolio-freelancer


Instalar dependencias:

npm install


Ejecutar en modo desarrollo:

npm run dev


Compilar para producción:

npm run build
npm run preview


El sitio se ejecuta en http://localhost:5173

📂 Estructura del proyecto
portfolio-freelancer/
 ├─ public/
 │   ├─ favicon.svg
 │   ├─ logo.svg
 │   └─ projects/
 │        ├─ landing-coffee.jpg
 │        ├─ shipment-dashboard.jpg
 │        ├─ portfolio.jpg
 │        ├─ ecommerce.jpg
 │        └─ campaign.jpg
 ├─ src/
 │   ├─ components/
 │   │   ├─ Navbar/
 │   │   ├─ Footer/
 │   │   └─ Carousel/
 │   ├─ pages/
 │   │   ├─ Home/
 │   │   ├─ Servicios/
 │   │   ├─ Tarifas/
 │   │   └─ Contacto/
 │   ├─ App.jsx
 │   ├─ App.css
 │   └─ main.jsx
 ├─ index.html
 ├─ package.json
 └─ README.md

🧩 Personalización

Modificar color principal: en App.css o variables de :root

Actualizar proyectos: editar projects dentro de Home.jsx

Cambiar imágenes: /public/projects/

Editar texto del hero o botones: src/pages/Home/Home.jsx

Actualizar contacto: cambiar Formspree endpoint o número de WhatsApp en Contacto.jsx

💬 Contacto

📧 Email: nachingast@gmail.com

💬 WhatsApp: Click para escribir

💼 LinkedIn: (opcional, agregar tu perfil)

🌐 Sitio publicado: (enlace Netlify de tu portfolio)

✅ Proyecto pensado para

Freelancers y desarrolladores web

Diseñadores UX/UI

Portfolios personales

Páginas de presentación profesional

Landing de servicios o consultorías digitales

📄 Licencia

MIT — libre para copiar, modificar y usar con fines educativos o profesionales, mencionando al autor.

🙌 Autor
Ignacio Gandolfo — 2025
Diseño y desarrollo completo en React + Vite + CSS.
