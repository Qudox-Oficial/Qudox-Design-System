/* global React, SectionHeader, Button, Field */
const { useState: useStateContact, useRef: useRefContact } = React;

function ContactSection() {
  const [form, setForm] = useStateContact({ name: "", email: "", company: "", goal: "" });
  const [sent, setSent] = useStateContact(false);
  const formRef = useRefContact(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  const reset = () => {
    setForm({ name: "", email: "", company: "", goal: "" });
    setSent(false);
  };

  return (
    <section className="qx-contact" id="contacto" data-screen-label="Contacto">
      <div className="qx-container qx-contact-grid">
        <div className="qx-contact-copy">
          <SectionHeader left="Hablemos" right="Contacto" />
          <h2 className="qx-h2">
            ¿Listos para <em>hacer crecer</em><br/>
            tu marca en 2026?
          </h2>
          <p className="qx-lead">
            Cuéntanos en una línea qué intentas mover. Te respondemos en 24&nbsp;horas con una primera lectura del problema.
          </p>
          <ul className="qx-contact-meta">
            <li><span className="qx-label">Respuesta</span><strong>&lt; 24h</strong></li>
            <li><span className="qx-label">Sede</span><strong>Ciudad de México · Madrid</strong></li>
            <li><span className="qx-label">Email</span><strong>hola@qudox.com</strong></li>
          </ul>
        </div>

        <form ref={formRef} className="qx-contact-form" onSubmit={submit}>
          {!sent ? (
            <>
              <Field label="Nombre" name="name" value={form.name} onChange={set("name")} placeholder="Diego Martínez" required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={set("email")} placeholder="diego@empresa.com" required />
              <Field label="Empresa" name="company" value={form.company} onChange={set("company")} placeholder="Acme Co." />
              <label className="qx-field">
                <span className="qx-field-label">Objetivo</span>
                <textarea
                  rows="3"
                  value={form.goal}
                  onChange={set("goal")}
                  placeholder="Queremos escalar adquisición sin que el CAC se dispare…"
                />
              </label>
              <div className="qx-form-actions">
                <Button variant="primary" type="submit">Enviar</Button>
                <span className="qx-fineprint">No spam. Solo conversación útil.</span>
              </div>
            </>
          ) : (
            <div className="qx-form-success">
              <span className="qx-tag">Recibido</span>
              <h3 className="qx-card-title">Gracias, {form.name || "amigo/a"}.</h3>
              <p className="qx-card-body">
                Tu mensaje llegó a hola@qudox.com. Te respondemos en menos de 24&nbsp;horas con una primera lectura del problema.
              </p>
              <Button variant="ghost" type="button" onClick={reset}>Enviar otro</Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { ContactSection });
