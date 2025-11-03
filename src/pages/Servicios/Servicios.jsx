import "./Servicios.css";

const items = [
  { icon: "💻", title: "Desarrollo Web", desc: "Sitios rápidos, responsivos y optimizados para SEO." },
  { icon: "⚙️", title: "Mantenimiento", desc: "Actualizaciones, fixes y mejoras continuas." },
  { icon: "🚀", title: "Performance", desc: "Optimización de carga, Core Web Vitals y mejores prácticas." },
  { icon: "🛒", title: "E-commerce", desc: "Tiendas online con pagos, envíos e integraciones." },
  { icon: "📈", title: "Landing Pages", desc: "Páginas que convierten, listas para campañas." },
  { icon: "🔌", title: "Integraciones", desc: "APIs, CRM, Analytics, formularios y automatizaciones." },
];

function Servicios() {
  return (
    <div className="container">
      <h2 className="section-title">Mis servicios</h2>
      <p className="section-subtitle">Soluciones claras, pensadas para tu negocio y enfocadas en resultados medibles.</p>

      <div className="grid grid-3 services-grid">
        {items.map((s) => (
          <article key={s.title} className="service-card">
            <div className="service-icon" aria-hidden>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
