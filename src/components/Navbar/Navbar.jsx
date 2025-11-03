import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#servicios", label: "Servicios" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
          }
        });
      },
      { rootMargin: "-50% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          Ignacio Gandolfo
        </a>

        <button
          aria-label="Abrir menú"
          className={`burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href ? "active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
