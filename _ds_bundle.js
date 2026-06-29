/* @ds-bundle: {"format":3,"namespace":"QudoxDesignSystem_019e0a","components":[],"sourceHashes":{"ui_kits/agency-site/CaseStudies.jsx":"92e67c6fb6f0","ui_kits/agency-site/ContactSection.jsx":"a56e5df0fe88","ui_kits/agency-site/Footer.jsx":"4529c95c1ec4","ui_kits/agency-site/Hero.jsx":"6158871c794f","ui_kits/agency-site/Services.jsx":"3b4790a1c495","ui_kits/agency-site/TopNav.jsx":"40805ef68251","ui_kits/agency-site/primitives.jsx":"6c2ed0f29229"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QudoxDesignSystem_019e0a = window.QudoxDesignSystem_019e0a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/agency-site/CaseStudies.jsx
try { (() => {
/* global React, SectionHeader, Button */

const CASES = [{
  client: "Fintech LATAM",
  sector: "Servicios financieros",
  title: "De adquisición pagada a crecimiento orgánico medible",
  stats: [{
    v: "+187%",
    l: "tráfico orgánico"
  }, {
    v: "−42%",
    l: "CAC blended"
  }, {
    v: "9 mo.",
    l: "ramp"
  }]
}, {
  client: "D2C · Bienestar",
  sector: "E-commerce",
  title: "Lifecycle + paid social como motor único de retención",
  stats: [{
    v: "3,4×",
    l: "ROAS"
  }, {
    v: "+62%",
    l: "AOV"
  }, {
    v: "12 mo.",
    l: "ramp"
  }]
}];
function CaseStudies({
  onView
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "qx-cases",
    id: "casos",
    "data-screen-label": "Casos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    left: "Resultados",
    right: "Casos"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qx-cases-list"
  }, CASES.map((c, i) => /*#__PURE__*/React.createElement("article", {
    className: "qx-case",
    key: c.client
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-case-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, String(i + 1).padStart(2, "0"), " \xB7 ", c.sector), /*#__PURE__*/React.createElement("h3", {
    className: "qx-case-client"
  }, c.client)), /*#__PURE__*/React.createElement("div", {
    className: "qx-case-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "qx-case-title"
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    className: "qx-case-stats"
  }, c.stats.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.l
  }, /*#__PURE__*/React.createElement("strong", null, s.v), /*#__PURE__*/React.createElement("span", null, s.l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onView && onView(c)
  }, "Ver caso completo \u2192")))))));
}
Object.assign(window, {
  CaseStudies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/CaseStudies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/ContactSection.jsx
try { (() => {
/* global React, SectionHeader, Button, Field */
const {
  useState: useStateContact,
  useRef: useRefContact
} = React;
function ContactSection() {
  const [form, setForm] = useStateContact({
    name: "",
    email: "",
    company: "",
    goal: ""
  });
  const [sent, setSent] = useStateContact(false);
  const formRef = useRefContact(null);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  const reset = () => {
    setForm({
      name: "",
      email: "",
      company: "",
      goal: ""
    });
    setSent(false);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "qx-contact",
    id: "contacto",
    "data-screen-label": "Contacto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-container qx-contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-contact-copy"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    left: "Hablemos",
    right: "Contacto"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "qx-h2"
  }, "\xBFListos para ", /*#__PURE__*/React.createElement("em", null, "hacer crecer"), /*#__PURE__*/React.createElement("br", null), "tu marca en 2026?"), /*#__PURE__*/React.createElement("p", {
    className: "qx-lead"
  }, "Cu\xE9ntanos en una l\xEDnea qu\xE9 intentas mover. Te respondemos en 24\xA0horas con una primera lectura del problema."), /*#__PURE__*/React.createElement("ul", {
    className: "qx-contact-meta"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, "Respuesta"), /*#__PURE__*/React.createElement("strong", null, "< 24h")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, "Sede"), /*#__PURE__*/React.createElement("strong", null, "Ciudad de M\xE9xico \xB7 Madrid")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, "Email"), /*#__PURE__*/React.createElement("strong", null, "hola@qudox.com")))), /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    className: "qx-contact-form",
    onSubmit: submit
  }, !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre",
    name: "name",
    value: form.name,
    onChange: set("name"),
    placeholder: "Diego Mart\xEDnez",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    name: "email",
    type: "email",
    value: form.email,
    onChange: set("email"),
    placeholder: "diego@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Empresa",
    name: "company",
    value: form.company,
    onChange: set("company"),
    placeholder: "Acme Co."
  }), /*#__PURE__*/React.createElement("label", {
    className: "qx-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qx-field-label"
  }, "Objetivo"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: form.goal,
    onChange: set("goal"),
    placeholder: "Queremos escalar adquisici\xF3n sin que el CAC se dispare\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "qx-form-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Enviar"), /*#__PURE__*/React.createElement("span", {
    className: "qx-fineprint"
  }, "No spam. Solo conversaci\xF3n \xFAtil."))) : /*#__PURE__*/React.createElement("div", {
    className: "qx-form-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qx-tag"
  }, "Recibido"), /*#__PURE__*/React.createElement("h3", {
    className: "qx-card-title"
  }, "Gracias, ", form.name || "amigo/a", "."), /*#__PURE__*/React.createElement("p", {
    className: "qx-card-body"
  }, "Tu mensaje lleg\xF3 a hola@qudox.com. Te respondemos en menos de 24\xA0horas con una primera lectura del problema."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    type: "button",
    onClick: reset
  }, "Enviar otro")))));
}
Object.assign(window, {
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/Footer.jsx
try { (() => {
/* global React, PatternStrip */

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "qx-footer",
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-wm-text"
  }, "QUDOX"), /*#__PURE__*/React.createElement("p", {
    className: "qx-foot-tag"
  }, "Growth ", /*#__PURE__*/React.createElement("em", null, "Marketing"), " Company")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, "Servicios"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Performance"), /*#__PURE__*/React.createElement("li", null, "Estrategia"), /*#__PURE__*/React.createElement("li", null, "Producci\xF3n"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, "Empresa"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Manifiesto"), /*#__PURE__*/React.createElement("li", null, "Casos"), /*#__PURE__*/React.createElement("li", null, "Equipo"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "qx-label"
  }, "Contacto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "hola@qudox.com"), /*#__PURE__*/React.createElement("li", null, "+52 55 0000 0000"), /*#__PURE__*/React.createElement("li", null, "CDMX \xB7 Madrid")))), /*#__PURE__*/React.createElement("img", {
    className: "qx-pattern-img",
    src: "../../assets/pattern-strip.png",
    alt: "Qudox cintillo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qx-foot-rule"
  }, /*#__PURE__*/React.createElement("span", null, "Manual de Identidad \xB7 2026"), /*#__PURE__*/React.createElement("span", {
    className: "qx-foot-right"
  }, "QUDOX"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/Hero.jsx
try { (() => {
/* global React, Button, SectionHeader */

function Hero({
  onPrimary,
  onSecondary
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "qx-hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    left: "Manual de Identidad",
    right: "Crecimiento"
  }), /*#__PURE__*/React.createElement("p", {
    className: "qx-eyebrow"
  }, "Qudox \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    className: "qx-hero-title"
  }, "Marketing", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "que escala"), /*#__PURE__*/React.createElement("br", null), "contigo."), /*#__PURE__*/React.createElement("p", {
    className: "qx-hero-sub"
  }, "Estrategias data-driven para hacer crecer marcas con consistencia y velocidad. Trabajamos como una extensi\xF3n de tu equipo, no como una agencia distante."), /*#__PURE__*/React.createElement("div", {
    className: "qx-hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onPrimary
  }, "Hablemos"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onSecondary
  }, "Ver casos")), /*#__PURE__*/React.createElement("ul", {
    className: "qx-hero-stats"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "3,4\xD7"), /*#__PURE__*/React.createElement("span", null, "ROAS promedio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "+187%"), /*#__PURE__*/React.createElement("span", null, "tr\xE1fico org\xE1nico")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "24"), /*#__PURE__*/React.createElement("span", null, "marcas activas")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/Services.jsx
try { (() => {
/* global React, SectionHeader, Tag */

const SERVICES = [{
  tag: "Growth",
  title: "Performance",
  body: "Paid media full-funnel. Search, social y programmatic con atribución medible y reporting semanal.",
  items: ["Google · Meta · TikTok Ads", "Tracking & atribución", "CRO continuo"]
}, {
  tag: "Brand",
  title: "Estrategia",
  body: "Posicionamiento, narrativa de marca y arquitectura de mensajes para escalar sin perder identidad.",
  items: ["Brand strategy", "Messaging frameworks", "Identidad verbal"]
}, {
  tag: "Content",
  title: "Producción",
  body: "Contenido performance-ready. SEO, video, social y email — adaptado a cada canal y formato.",
  items: ["SEO técnico + editorial", "Video & motion", "Email lifecycle"]
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "qx-services",
    id: "servicios",
    "data-screen-label": "Servicios"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    left: "Lo que hacemos",
    right: "Servicios"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "qx-h2"
  }, "Tres frentes ", /*#__PURE__*/React.createElement("em", null, "integrados."), /*#__PURE__*/React.createElement("br", null), "Un mismo equipo que opera contigo."), /*#__PURE__*/React.createElement("div", {
    className: "qx-services-grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("article", {
    className: "qx-card",
    key: s.title
  }, /*#__PURE__*/React.createElement(Tag, null, s.tag), /*#__PURE__*/React.createElement("h3", {
    className: "qx-card-title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "qx-card-body"
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    className: "qx-card-list"
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it))))))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/TopNav.jsx
try { (() => {
/* global React, Button */
const {
  useState: useStateNav
} = React;
function TopNav({
  onCtaClick
}) {
  const [open, setOpen] = useStateNav(false);
  const links = [{
    label: "Servicios",
    href: "#servicios"
  }, {
    label: "Casos",
    href: "#casos"
  }, {
    label: "Manifiesto",
    href: "#manifiesto"
  }, {
    label: "Contacto",
    href: "#contacto"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "qx-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qx-nav-inner qx-container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "qx-wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qx-wm-text"
  }, "QUDOX"), /*#__PURE__*/React.createElement("span", {
    className: "qx-wm-dot"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "qx-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "qx-nav-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onCtaClick
  }, "Hablemos")), /*#__PURE__*/React.createElement("button", {
    className: "qx-nav-burger",
    "aria-label": open ? "Cerrar menú" : "Abrir menú",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    className: `qx-burger ${open ? "is-open" : ""}`
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)))), open && /*#__PURE__*/React.createElement("div", {
    className: "qx-nav-drawer"
  }, /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: () => setOpen(false)
  }, l.label))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setOpen(false);
      onCtaClick && onCtaClick();
    }
  }, "Hablemos")))));
}
Object.assign(window, {
  TopNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agency-site/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState
} = React;

// ──────────────────────────────────────────────────────────
//  SectionHeader  ·  label · ──────── · UPPERCASE
// ──────────────────────────────────────────────────────────
function SectionHeader({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qx-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qx-sh-left"
  }, left), /*#__PURE__*/React.createElement("span", {
    className: "qx-sh-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "qx-sh-right"
  }, right));
}

// ──────────────────────────────────────────────────────────
//  Button  ·  primary | ghost | gradient
// ──────────────────────────────────────────────────────────
function Button({
  children,
  variant = "primary",
  as: Tag = "button",
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `qx-btn qx-btn--${variant}`
  }, rest), children);
}

// ──────────────────────────────────────────────────────────
//  Field  ·  uppercase label + input
// ──────────────────────────────────────────────────────────
function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "qx-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qx-field-label"
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required
  }));
}

// ──────────────────────────────────────────────────────────
//  Tag  ·  small uppercase cyan eyebrow on cards
// ──────────────────────────────────────────────────────────
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "qx-tag"
  }, children);
}

// ──────────────────────────────────────────────────────────
//  PatternStrip  ·  the brand's signature footer pattern
// ──────────────────────────────────────────────────────────
function PatternStrip({
  height = 120
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qx-pattern",
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 240",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "qxStrokeRT",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#00FFEF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#EAFF00"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "url(#qxStrokeRT)",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 240 A 200 200 0 0 1 40 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 90 240 A 160 160 0 0 1 90 30",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 140 230 A 120 120 0 0 1 140 60",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 190 220 A 80 80 0 0 1 190 80",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "600",
    cy: "120",
    r: "80"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 540 120 L 540 200"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 660 120 L 660 40"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 820 60 L 880 120 L 820 180"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 900 60 L 960 120 L 900 180",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1040 60 L 980 120 L 1040 180",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1120 60 L 1060 120 L 1120 180",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 130 L 60 130",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1140 130 L 1200 130",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 700 120 L 800 120",
    opacity: "0.6"
  }))));
}
Object.assign(window, {
  SectionHeader,
  Button,
  Field,
  Tag,
  PatternStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agency-site/primitives.jsx", error: String((e && e.message) || e) }); }

})();
