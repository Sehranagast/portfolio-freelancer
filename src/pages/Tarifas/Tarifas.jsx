import "./Tarifas.css";

const planes = [
  {
    name: "Básico",
    price: "USD 180",
    features: [
      "Landing page 1 sección",
      "Diseño base adaptable",
      "Contacto a e-mail",
      "Entrega en 3-5 días",
    ],
    cta: "Consultar",
    highlighted: false,
  },
  {
    name: "Estándar",
    price: "USD 375",
    features: [
      "Hasta 5 secciones",
      "Diseño personalizado",
      "Optimización SEO inicial",
      "Analytics + Formulario",
    ],
    cta: "Más elegido",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Desde USD 650",
    features: [
      "Sitio a medida",
      "Integraciones / CMS",
      "Optimización performance",
      "Soporte prioritario",
    ],
    cta: "Agendar llamada",
    highlighted: false,
  },
];

function Tarifas() {
  return (
    <div className="container">
      <h2 className="section-title">Planes y tarifas</h2>
      <p className="section-subtitle">
        Transparencia primero. Elegí el plan que mejor se adapte a tu proyecto.
      </p>

      <div className="grid grid-3 pricing-grid">
        {planes.map((p) => (
          <article
            key={p.name}
            className={`price-card ${p.highlighted ? "is-featured" : ""}`}
          >
            {p.highlighted && <div className="badge">Más elegido</div>}
            <h3>{p.name}</h3>
            <div className="price">{p.price}</div>
            <ul className="feat-list">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a
              href="#contacto"
              className={`btn ${p.highlighted ? "btn-primary" : "btn-outline"}`}
            >
              {p.cta}
            </a>
          </article>
        ))}
      </div>

      <p className="price-note">
        * Los valores son orientativos. Emito factura. Podemos armar un plan a
        medida.
      </p>
    </div>
  );
}

export default Tarifas;
