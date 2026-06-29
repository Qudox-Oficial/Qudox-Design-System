/* global React, SectionHeader, Tag */

const SERVICES = [
  {
    tag: "Growth",
    title: "Performance",
    body: "Paid media full-funnel. Search, social y programmatic con atribución medible y reporting semanal.",
    items: ["Google · Meta · TikTok Ads", "Tracking & atribución", "CRO continuo"],
  },
  {
    tag: "Brand",
    title: "Estrategia",
    body: "Posicionamiento, narrativa de marca y arquitectura de mensajes para escalar sin perder identidad.",
    items: ["Brand strategy", "Messaging frameworks", "Identidad verbal"],
  },
  {
    tag: "Content",
    title: "Producción",
    body: "Contenido performance-ready. SEO, video, social y email — adaptado a cada canal y formato.",
    items: ["SEO técnico + editorial", "Video & motion", "Email lifecycle"],
  },
];

function Services() {
  return (
    <section className="qx-services" id="servicios" data-screen-label="Servicios">
      <div className="qx-container">
        <SectionHeader left="Lo que hacemos" right="Servicios" />
        <h2 className="qx-h2">
          Tres frentes <em>integrados.</em><br/>
          Un mismo equipo que opera contigo.
        </h2>
        <div className="qx-services-grid">
          {SERVICES.map((s) => (
            <article className="qx-card" key={s.title}>
              <Tag>{s.tag}</Tag>
              <h3 className="qx-card-title">{s.title}</h3>
              <p className="qx-card-body">{s.body}</p>
              <ul className="qx-card-list">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
