import { useState } from "react";
import "./Contacto.css";

// Tu endpoint real de Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meopbzvj";

function Contacto() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.error || "No se pudo enviar. Probá más tarde.");
      }
    } catch {
      setErrorMsg("Hubo un error de conexión. Intentá nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h2 className="section-title">Hablemos</h2>
      <p className="section-subtitle">
        Contame sobre tu proyecto y te respondo con una propuesta a medida.
      </p>

      <form className="contact-card" onSubmit={onSubmit}>
        <div className="form-grid">
          <label>
            <span>Nombre</span>
            <input name="nombre" type="text" placeholder="Tu nombre" required />
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
            />
          </label>
        </div>

        <label>
          <span>Mensaje</span>
          <textarea
            name="message"
            rows="6"
            placeholder="¿Qué necesitás construir?"
            required
          />
        </label>

        <div className="form-actions">
          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>

          <a
            className="btn btn-outline"
            href="https://wa.me/5491154686309"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        {sent && (
          <p className="form-success">¡Gracias! Te responderé a la brevedad.</p>
        )}
        {errorMsg && <p className="form-error">{errorMsg}</p>}
      </form>
    </div>
  );
}

export default Contacto;
