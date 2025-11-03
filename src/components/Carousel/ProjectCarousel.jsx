import { useEffect, useRef, useState } from "react";
import "./ProjectCarousel.css";

function useAutoplay({ playing, interval = 4500, onTick }) {
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(onTick, interval);
    return () => clearInterval(id);
  }, [playing, interval, onTick]);
}

export default function ProjectCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const trackRef = useRef(null);
  const touch = useRef({ startX: 0, deltaX: 0, isSwiping: false });

  const last = items.length - 1;
  const clamp = (n) => (n < 0 ? last : n > last ? 0 : n);

  const goTo = (i) => setIndex(clamp(i));
  const next = () => setIndex((i) => clamp(i + 1));
  const prev = () => setIndex((i) => clamp(i - 1));

  useAutoplay({ playing, onTick: next });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e) => {
    touch.current.isSwiping = true;
    touch.current.startX = e.touches[0].clientX;
    touch.current.deltaX = 0;
  };
  const onTouchMove = (e) => {
    if (!touch.current.isSwiping) return;
    touch.current.deltaX = e.touches[0].clientX - touch.current.startX;
  };
  const onTouchEnd = () => {
    if (!touch.current.isSwiping) return;
    const dx = touch.current.deltaX;
    touch.current.isSwiping = false;
    if (Math.abs(dx) > 60) (dx < 0 ? next() : prev());
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <div className="carousel-viewport" role="region" aria-label="Proyectos destacados">
        <ul
          className="carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((p, i) => (
            <li className="carousel-slide" key={p.id || i}>
              <article className="project-card">
                <div className="project-media">
                  <img src={p.image} alt={p.alt || p.title} loading="lazy" decoding="async" />
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-meta">
                    {p.tags?.map((t) => (
                      <span className="chip" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {p.url && (
                      <a className="btn btn-primary" href={p.url} target="_blank" rel="noreferrer">
                        Ver proyecto
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <button className="nav prev" aria-label="Anterior" onClick={prev}>‹</button>
      <button className="nav next" aria-label="Siguiente" onClick={next}>›</button>

      <div className="dots" role="tablist" aria-label="Paginación de proyectos">
        {items.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={index === i}
            aria-label={`Ir al slide ${i + 1}`}
            className={`dot ${index === i ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
