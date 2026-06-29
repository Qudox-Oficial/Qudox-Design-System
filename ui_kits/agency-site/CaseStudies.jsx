/* global React, SectionHeader, Button */

const CASES = [
  {
    client: "Fintech LATAM",
    sector: "Servicios financieros",
    title: "De adquisición pagada a crecimiento orgánico medible",
    stats: [
      { v: "+187%", l: "tráfico orgánico" },
      { v: "−42%", l: "CAC blended" },
      { v: "9 mo.", l: "ramp" },
    ],
  },
  {
    client: "D2C · Bienestar",
    sector: "E-commerce",
    title: "Lifecycle + paid social como motor único de retención",
    stats: [
      { v: "3,4×", l: "ROAS" },
      { v: "+62%", l: "AOV" },
      { v: "12 mo.", l: "ramp" },
    ],
  },
];

function CaseStudies({ onView }) {
  return (
    <section className="qx-cases" id="casos" data-screen-label="Casos">
      <div className="qx-container">
        <SectionHeader left="Resultados" right="Casos" />
        <div className="qx-cases-list">
          {CASES.map((c, i) => (
            <article className="qx-case" key={c.client}>
              <div className="qx-case-meta">
                <span className="qx-label">{String(i + 1).padStart(2, "0")} · {c.sector}</span>
                <h3 className="qx-case-client">{c.client}</h3>
              </div>
              <div className="qx-case-body">
                <p className="qx-case-title">{c.title}</p>
                <ul className="qx-case-stats">
                  {c.stats.map((s) => (
                    <li key={s.l}>
                      <strong>{s.v}</strong>
                      <span>{s.l}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" onClick={() => onView && onView(c)}>Ver caso completo →</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CaseStudies });
