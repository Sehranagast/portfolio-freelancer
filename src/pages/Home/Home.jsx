import "./Home.css";
import ProjectCarousel from "../../components/Carousel/ProjectCarousel";

const projects = [
  {
    id: "p1",
    title: "Landing para tienda de café",
    description:
      "Landing enfocada en conversión: menú, CTA por WhatsApp y mapa.",
    image: "/projects/landing-coffee.jpg",
    url: "https://landing-cafe.netlify.app/",
    tags: ["Landing", "Cafetería", "SEO", "WhatsApp"],
    alt: "Landing de cafetería con menú y CTA",
  },
  {
    id: "p2",
    title: "Dashboard de envíos",
    description: "Panel con filtros, KPIs, gráficos y exportación CSV.",
    image: "/projects/shipment-dashboard.jpg",
    url: "https://dashboard-envios.netlify.app/",
    tags: ["React", "Charts", "CSV"],
    alt: "Dashboard de envíos con gráficos y tabla",
  },
  {
    id: "p3",
    title: "Portfolio minimalista",
    description: "Sitio personal con tipografía cuidada y performance alta.",
    image: "/projects/portfolio.jpg",
    url: "https://gigi-fernandez.netlify.app/",
    tags: ["UI/UX", "SPA", "A11y"],
    alt: "Pantalla principal de un portfolio minimalista",
  },
  {
    id: "p4",
    title: "E-commerce simple",
    description: "Catálogo con carrito y checkout simulado para pruebas.",
    image: "/projects/ecommerce.jpg",
    url: "https://minitienda-cafe.netlify.app/",
    tags: ["E-commerce", "React"],
    alt: "Listado de productos con carrito",
  },
  {
    id: "p5",
    title: "Micrositio de campaña",
    description: "Secciones claras, CTA y medición para campañas.",
    image: "/projects/campaign.jpg",
    url: "https://micrositio-info.netlify.app/",
    tags: ["Landing", "Medición"],
    alt: "Micrositio con secciones y CTA",
  },
];

function Home() {
  return (
    <div className="home-container">
      <div className="home-content container">
        <h1>Construyo sitios web modernos y funcionales</h1>
        <p>
          Diseño y desarrollo soluciones digitales para potenciar tu negocio.
        </p>
        <div className="buttons">
          <a href="#servicios" className="btn btn-primary">
            Ver Servicios
          </a>
          <a href="#contacto" className="btn btn-outline">
            Contactame
          </a>
        </div>

        <div className="home-carousel-wrap">
          <h2 className="section-title" style={{ marginTop: 24 }}>
            Proyectos destacados
          </h2>
          <p className="section-subtitle">
            Explorá algunos trabajos y prototipos recientes.
          </p>
          <ProjectCarousel items={projects} />
        </div>

        {/* Strip de stack */}
        <div className="stack-strip">
          <span>React</span>
          <span>Vite</span>
          <span>JavaScript</span>
          <span>CSS Modules</span>
          <span>UI/UX</span>
        </div>

        {/* Highlights */}
        <div className="highlights">
          <div>
            <strong>+10</strong>
            <small>proyectos</small>
          </div>
          <div>
            <strong>72h</strong>
            <small>tiempos de entrega</small>
          </div>
          <div>
            <strong>100%</strong>
            <small>responsive</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
