/* global React */
const { useState } = React;

// ──────────────────────────────────────────────────────────
//  SectionHeader  ·  label · ──────── · UPPERCASE
// ──────────────────────────────────────────────────────────
function SectionHeader({ left, right }) {
  return (
    <div className="qx-section-head">
      <span className="qx-sh-left">{left}</span>
      <span className="qx-sh-line"></span>
      <span className="qx-sh-right">{right}</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
//  Button  ·  primary | ghost | gradient
// ──────────────────────────────────────────────────────────
function Button({ children, variant = "primary", as: Tag = "button", ...rest }) {
  return (
    <Tag className={`qx-btn qx-btn--${variant}`} {...rest}>
      {children}
    </Tag>
  );
}

// ──────────────────────────────────────────────────────────
//  Field  ·  uppercase label + input
// ──────────────────────────────────────────────────────────
function Field({ label, type = "text", placeholder, value, onChange, name, required }) {
  return (
    <label className="qx-field">
      <span className="qx-field-label">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

// ──────────────────────────────────────────────────────────
//  Tag  ·  small uppercase cyan eyebrow on cards
// ──────────────────────────────────────────────────────────
function Tag({ children }) {
  return <span className="qx-tag">{children}</span>;
}

// ──────────────────────────────────────────────────────────
//  PatternStrip  ·  the brand's signature footer pattern
// ──────────────────────────────────────────────────────────
function PatternStrip({ height = 120 }) {
  return (
    <div className="qx-pattern" style={{ height }}>
      <svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="qxStrokeRT" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00FFEF" />
            <stop offset="100%" stopColor="#EAFF00" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#qxStrokeRT)" strokeWidth="1.4" strokeLinecap="round">
          <path d="M 40 240 A 200 200 0 0 1 40 0" />
          <path d="M 90 240 A 160 160 0 0 1 90 30" opacity="0.85" />
          <path d="M 140 230 A 120 120 0 0 1 140 60" opacity="0.7" />
          <path d="M 190 220 A 80 80 0 0 1 190 80" opacity="0.55" />
          <circle cx="600" cy="120" r="80" />
          <path d="M 540 120 L 540 200" />
          <path d="M 660 120 L 660 40" />
          <path d="M 820 60 L 880 120 L 820 180" />
          <path d="M 900 60 L 960 120 L 900 180" opacity="0.85" />
          <path d="M 1040 60 L 980 120 L 1040 180" opacity="0.7" />
          <path d="M 1120 60 L 1060 120 L 1120 180" opacity="0.55" />
          <path d="M 0 130 L 60 130" opacity="0.5" />
          <path d="M 1140 130 L 1200 130" opacity="0.5" />
          <path d="M 700 120 L 800 120" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

Object.assign(window, { SectionHeader, Button, Field, Tag, PatternStrip });
