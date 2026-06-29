/* global React, Button */
const { useState: useStateNav } = React;

function TopNav({ onCtaClick }) {
  const [open, setOpen] = useStateNav(false);
  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos", href: "#casos" },
    { label: "Manifiesto", href: "#manifiesto" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <nav className="qx-nav">
      <div className="qx-nav-inner qx-container">
        <a href="#" className="qx-wordmark">
          <span className="qx-wm-text">QUDOX</span>
          <span className="qx-wm-dot"></span>
        </a>
        <ul className="qx-nav-links">
          {links.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="qx-nav-cta">
          <Button variant="primary" onClick={onCtaClick}>Hablemos</Button>
        </div>
        <button
          className="qx-nav-burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <span className={`qx-burger ${open ? "is-open" : ""}`}>
            <i></i><i></i><i></i>
          </span>
        </button>
      </div>
      {open && (
        <div className="qx-nav-drawer">
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li><Button variant="primary" onClick={() => { setOpen(false); onCtaClick && onCtaClick(); }}>Hablemos</Button></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { TopNav });
