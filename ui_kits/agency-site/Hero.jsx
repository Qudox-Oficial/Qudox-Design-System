/* global React, Button, SectionHeader */

function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="qx-hero" data-screen-label="Hero">
      <div className="qx-container">
        <SectionHeader left="Manual de Identidad" right="Crecimiento" />
        <p className="qx-eyebrow">Qudox · 2026</p>
        <h1 className="qx-hero-title">
          Marketing<br/>
          <span>que escala</span><br/>
          contigo.
        </h1>
        <p className="qx-hero-sub">
          Estrategias data-driven para hacer crecer marcas con consistencia y velocidad.
          Trabajamos como una extensión de tu equipo, no como una agencia distante.
        </p>
        <div className="qx-hero-actions">
          <Button variant="primary" onClick={onPrimary}>Hablemos</Button>
          <Button variant="ghost" onClick={onSecondary}>Ver casos</Button>
        </div>
        <ul className="qx-hero-stats">
          <li><strong>3,4×</strong><span>ROAS promedio</span></li>
          <li><strong>+187%</strong><span>tráfico orgánico</span></li>
          <li><strong>24</strong><span>marcas activas</span></li>
        </ul>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
