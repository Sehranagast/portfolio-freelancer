import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© 2025 Nacho. Todos los derechos reservados.</small>
        <nav className="footer-links">
          <a href="#home">Inicio</a>
          <a href="#contacto">Contacto</a>
          <a
            href="https://www.linkedin.com/in/ignacio-gandolfo-aab9ab13b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sehranagast"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
