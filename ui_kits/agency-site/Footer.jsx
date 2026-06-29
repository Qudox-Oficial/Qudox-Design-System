/* global React, PatternStrip */

function Footer() {
  return (
    <footer className="qx-footer" data-screen-label="Footer">
      <div className="qx-container">
        <div className="qx-footer-grid">
          <div>
            <span className="qx-wm-text">QUDOX</span>
            <p className="qx-foot-tag">Growth <em>Marketing</em> Company</p>
          </div>
          <div>
            <span className="qx-label">Servicios</span>
            <ul><li>Performance</li><li>Estrategia</li><li>Producción</li></ul>
          </div>
          <div>
            <span className="qx-label">Empresa</span>
            <ul><li>Manifiesto</li><li>Casos</li><li>Equipo</li></ul>
          </div>
          <div>
            <span className="qx-label">Contacto</span>
            <ul><li>hola@qudox.com</li><li>+52 55 0000 0000</li><li>CDMX · Madrid</li></ul>
          </div>
        </div>

        <img className="qx-pattern-img" src="../../assets/pattern-strip.png" alt="Qudox cintillo" />

        <div className="qx-foot-rule">
          <span>Manual de Identidad · 2026</span>
          <span className="qx-foot-right">QUDOX</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
