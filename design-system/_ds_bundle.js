/* @ds-bundle: {"format":4,"namespace":"AsyncForestDesignSystem_6656fd","components":[{"name":"Block","sourcePath":"components/blocks/Block.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/blocks/Block.jsx":"733cb736eb03","components/core/Badge.jsx":"94802167a6e5","components/core/Button.jsx":"8c39098e46c5","components/core/Callout.jsx":"b50cba48db7a","components/core/Card.jsx":"8d8b655cbdde","components/core/Checkbox.jsx":"587a78e48ea1","components/core/Eyebrow.jsx":"b382b69e3f7e","components/core/Field.jsx":"b489927b6013","components/core/IconButton.jsx":"286c16841cda","components/core/Input.jsx":"ecbf73fc1bb3","components/core/Select.jsx":"86ff483bef3e","components/core/Tag.jsx":"7ada48db7633","components/core/Textarea.jsx":"e46969ade9d2","ui_kits/website/Contact.jsx":"5a07ef2821fb","ui_kits/website/Footer.jsx":"63523900ae81","ui_kits/website/Header.jsx":"7df9b08514b2","ui_kits/website/Hero.jsx":"c90c04445830","ui_kits/website/Process.jsx":"fa42a98173a0","ui_kits/website/Sample.jsx":"115dac3a56b0","ui_kits/website/Services.jsx":"e4ffdb519469"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AsyncForestDesignSystem_6656fd = window.AsyncForestDesignSystem_6656fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/Block.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Async Forest — Block
 * Tactile 3D "block" element (adapted from blocks.css by @thesephist, MIT).
 * CSS-driven: applies the .block classes shipped in components/blocks/blocks.css
 * via styles.css. The press mechanics live in CSS (pseudo-elements), so this
 * component is intentionally class-based rather than inline-styled.
 */
function Block({
  variant = 'default',
  // 'default' | 'accent'
  shape = 'default',
  // 'default' | 'round'
  size = 'default',
  // 'default' | 'inline'
  fixed = false,
  // non-interactive (static label)
  as = 'button',
  // 'button' | 'a' | 'div' | 'span'
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['block'];
  if (variant === 'accent') cls.push('accent');
  if (shape === 'round') cls.push('round');
  if (size === 'inline') cls.push('inline');
  if (fixed) cls.push('fixed');
  if (className) cls.push(className);
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls.join(' '),
    href: href
  }, rest), children);
}
Object.assign(__ds_scope, { Block });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Block.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Async Forest — Badge
 * Small status pill with a soft backing. Uses the status token pairs.
 */
function Badge({
  tone = 'neutral',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--gray-100)',
      fg: 'var(--gray-700)',
      bd: 'var(--gray-200)'
    },
    brand: {
      bg: 'var(--gray-100)',
      fg: 'var(--gray-900)',
      bd: 'var(--gray-200)'
    },
    accent: {
      bg: 'var(--accent-soft)',
      fg: 'var(--accent)',
      bd: 'var(--accent-border)'
    },
    success: {
      bg: 'var(--success-soft)',
      fg: 'var(--gray-900)',
      bd: 'var(--gray-200)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      fg: 'var(--amber-700)',
      bd: 'var(--amber-100)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      fg: 'var(--red-600)',
      bd: '#f2d4cd'
    },
    info: {
      bg: 'var(--info-soft)',
      fg: 'var(--blue-600)',
      bd: '#d6e0f2'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      boxShadow: 'var(--shadow-offset-xs)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Button
 * Raised variants carry a subtle "block" offset shadow that presses on click.
 * primary = ink fill; secondary = hairline; ghost = text; subtle = gray; accent = deep blue.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  href,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: '0.8125rem',
      gap: 7,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: '0.9375rem',
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 26px',
      height: 52,
      fontSize: '1rem',
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: 'var(--brand)',
      bgHover: 'var(--brand-hover)',
      bgActive: 'var(--brand-active)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent',
      shadow: 'var(--shadow-sm)'
    },
    secondary: {
      bg: 'var(--surface-card)',
      bgHover: 'var(--gray-50)',
      bgActive: 'var(--gray-100)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      borderHover: '1px solid var(--border-strong)',
      shadow: 'var(--shadow-xs)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--gray-100)',
      bgActive: 'var(--gray-200)',
      color: 'var(--text-brand)',
      border: '1px solid transparent',
      shadow: 'none'
    },
    subtle: {
      bg: 'var(--gray-100)',
      bgHover: 'var(--gray-200)',
      bgActive: 'var(--gray-200)',
      color: 'var(--gray-800)',
      border: '1px solid transparent',
      shadow: 'none'
    },
    accent: {
      bg: 'var(--accent)',
      bgHover: 'var(--accent-hover)',
      bgActive: 'var(--accent-active)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const bg = disabled ? 'var(--gray-200)' : active ? p.bgActive : hover ? p.bgHover : p.bg;

  // Subtle "block" elevation: a solid, blur-free offset shadow that presses in
  // on hover/active. Applied consistently to the raised variants; ghost/subtle
  // stay flat to preserve hierarchy.
  const isBlock = ['primary', 'secondary', 'accent'].includes(variant);
  const blockColor = variant === 'primary' ? 'var(--gray-400)' : 'var(--gray-300)';
  const off = active ? 1 : hover ? 2 : 3;
  const shadowParts = [];
  if (focus) shadowParts.push('var(--shadow-ring)');
  if (isBlock && !disabled) shadowParts.push(`${off}px ${off}px 0 0 ${blockColor}`);
  const boxShadow = shadowParts.length ? shadowParts.join(', ') : 'none';
  const transform = disabled ? 'none' : isBlock ? active ? 'translate(2px,2px)' : hover ? 'translate(1px,1px)' : 'none' : active ? 'translateY(1px)' : 'none';
  const styleObj = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    borderRadius: s.radius,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: '0.005em',
    color: disabled ? 'var(--text-subtle)' : p.color,
    background: bg,
    border: hover && p.borderHover ? p.borderHover : p.border,
    boxShadow: boxShadow,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transform: transform,
    transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...style
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    style: styleObj,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Async Forest — Callout
 * Hairline note block for reports & pages. Left rule + eyebrow + body.
 * Brand-specific: mirrors the editorial "observation" voice of the reports.
 */
function Callout({
  tone = 'note',
  title,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    note: {
      rule: 'var(--gray-700)',
      bg: 'var(--gray-100)',
      bd: 'var(--gray-200)',
      label: 'var(--gray-900)'
    },
    warm: {
      rule: 'var(--amber-400)',
      bg: 'var(--amber-50)',
      bd: 'var(--amber-100)',
      label: 'var(--amber-700)'
    },
    caution: {
      rule: 'var(--warning)',
      bg: 'var(--warning-soft)',
      bd: 'var(--amber-100)',
      label: 'var(--amber-700)'
    },
    risk: {
      rule: 'var(--danger)',
      bg: 'var(--danger-soft)',
      bd: '#f2d4cd',
      label: 'var(--red-600)'
    }
  };
  const t = tones[tone] || tones.note;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 18px',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderLeft: `3px solid ${t.rule}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-offset-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: t.label,
      marginBottom: 6,
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Card
 * White surface, hairline border, subtle solid "block" offset shadow, lg radius.
 * Interactive variant presses toward its shadow on hover (tactile block language).
 */
function Card({
  interactive = false,
  tone = 'default',
  padding = 'var(--space-6)',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    default: {
      bg: 'var(--surface-card)',
      bd: 'var(--border-subtle)'
    },
    warm: {
      bg: 'var(--surface-warm)',
      bd: 'var(--border-warm)'
    },
    sunken: {
      bg: 'var(--surface-sunken)',
      bd: 'var(--border-subtle)'
    },
    brand: {
      bg: 'var(--gray-100)',
      bd: 'var(--gray-200)'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.bg,
      border: `1px solid ${interactive && hover ? 'var(--border-strong)' : t.bd}`,
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: interactive && hover ? '2px 2px 0 0 var(--gray-300)' : 'var(--shadow-offset-md)',
      transform: interactive && hover ? 'translate(2px,2px)' : 'none',
      transition: 'box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out), border-color var(--duration-normal) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Async Forest — Checkbox
 * Custom-styled checkbox with forest fill + label.
 */
function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
      marginTop: 1
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Async Forest — Eyebrow
 * The mono uppercase section tag that opens most headings. Core brand signature.
 */
function Eyebrow({
  children,
  color = 'var(--gray-800)',
  tick = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 500,
      color,
      ...style
    }
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 2,
      background: 'var(--gray-900)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Field
 * Label + optional hint + optional error wrapper for form controls.
 */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      display: 'inline-flex',
      gap: 4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — IconButton
 * Square button for a single icon (pass a Lucide/SVG node as children).
 */
function IconButton({
  variant = 'secondary',
  size = 'md',
  disabled = false,
  label,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: 34,
    md: 40,
    lg: 46
  };
  const dim = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: 'var(--brand)',
      bgHover: 'var(--brand-hover)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    },
    secondary: {
      bg: 'var(--surface-card)',
      bgHover: 'var(--gray-50)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--gray-100)',
      color: 'var(--text-brand)',
      border: '1px solid transparent'
    }
  };
  const p = palettes[variant] || palettes.secondary;
  const [active, setActive] = useState(false);
  const isBlock = variant !== 'ghost';
  const blockColor = variant === 'primary' ? 'var(--gray-400)' : 'var(--gray-300)';
  const off = active ? 1 : hover ? 2 : 3;
  const parts = [];
  if (focus) parts.push('var(--shadow-ring)');
  if (isBlock && !disabled) parts.push(`${off}px ${off}px 0 0 ${blockColor}`);
  const boxShadow = parts.length ? parts.join(', ') : 'none';
  const transform = disabled ? 'none' : isBlock ? active ? 'translate(2px,2px)' : hover ? 'translate(1px,1px)' : 'none' : 'none';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: p.border,
      background: disabled ? 'var(--gray-200)' : hover ? p.bgHover : p.bg,
      color: disabled ? 'var(--text-subtle)' : p.color,
      boxShadow: boxShadow,
      transform: transform,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Input
 * Single-line text field. Hairline border, forest focus ring, md radius.
 */
function Input({
  size = 'md',
  invalid = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      h: 38,
      fs: '0.875rem',
      px: 12
    },
    md: {
      h: 44,
      fs: '0.9375rem',
      px: 14
    },
    lg: {
      h: 52,
      fs: '1rem',
      px: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--gray-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      height: s.h,
      padding: `0 ${s.px}px`,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      color: 'var(--text-body)',
      background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-ring)' : 'var(--shadow-offset-xs)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      cursor: disabled ? 'not-allowed' : 'text',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Select
 * Native select styled to match Input, with a chevron affordance.
 */
function Select({
  size = 'md',
  invalid = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      h: 38,
      fs: '0.875rem'
    },
    md: {
      h: 44,
      fs: '0.9375rem'
    },
    lg: {
      h: 52,
      fs: '1rem'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--gray-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: s.h,
      padding: '0 40px 0 14px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      color: 'var(--text-body)',
      background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-ring)' : 'var(--shadow-offset-xs)',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Tag
 * Interactive-ish chip for filters / categories. Optional dismiss + selected state.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '5px 12px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: selected ? 'var(--accent)' : 'var(--text-body)',
      background: selected ? 'var(--accent-soft)' : hover ? 'var(--gray-50)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--accent-border)' : 'var(--border-default)'}`,
      boxShadow: 'var(--shadow-offset-xs)',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
      cursor: rest.onClick ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      lineHeight: 0,
      fontSize: 15
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Async Forest — Textarea
 * Multi-line text field. Matches Input styling.
 */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--gray-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      padding: '12px 14px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-ring)' : 'var(--shadow-offset-xs)',
      outline: 'none',
      resize: 'vertical',
      minHeight: 88,
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Async Forest website — Contact form (interactive → thank-you) */
const afContactStyles = {
  section: {
    maxWidth: 'var(--container-narrow)',
    margin: '0 auto',
    padding: 'var(--section-y) var(--gutter)'
  },
  head: {
    textAlign: 'center',
    maxWidth: '48ch',
    margin: '0 auto 36px'
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 'clamp(1.9rem,3.5vw,2.75rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--text-strong)',
    margin: '14px 0 12px'
  },
  lead: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-md)',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    margin: 0
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  },
  thanks: {
    textAlign: 'center',
    padding: '20px 0'
  },
  tIcon: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: 'var(--gray-100)',
    color: 'var(--gray-900)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18
  },
  tH: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 26,
    color: 'var(--text-strong)',
    margin: '0 0 8px'
  },
  tP: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: 'var(--text-muted)',
    margin: 0
  }
};
function Contact() {
  const {
    Card,
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    Eyebrow
  } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const [sent, setSent] = React.useState(false);
  const [nda, setNda] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: afContactStyles.section,
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: afContactStyles.head
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    style: afContactStyles.h2
  }, "Tell me what you\u2019re about to bet on"), /*#__PURE__*/React.createElement("p", {
    style: afContactStyles.lead
  }, "A few sentences is plenty. I\u2019ll reply with whether I can help, and how I\u2019d scope it.")), /*#__PURE__*/React.createElement(Card, {
    padding: "clamp(1.5rem,4vw,2.5rem)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: afContactStyles.thanks
  }, /*#__PURE__*/React.createElement("span", {
    style: afContactStyles.tIcon
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check",
    s: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: afContactStyles.tH
  }, "Thanks \u2014 that\u2019s with me."), /*#__PURE__*/React.createElement("p", {
    style: afContactStyles.tP
  }, "I read every message myself and usually reply within a couple of working days.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: afContactStyles.row,
    className: "af-contact-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    htmlFor: "n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Alex Rivera",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "e",
    hint: "I\u2019ll only use this to reply."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What kind of engagement?",
    htmlFor: "t"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "t",
    defaultValue: "assurance"
  }, /*#__PURE__*/React.createElement("option", {
    value: "assurance"
  }, "Technical assurance review"), /*#__PURE__*/React.createElement("option", {
    value: "architecture"
  }, "Architecture & AI in production"), /*#__PURE__*/React.createElement("option", {
    value: "security"
  }, "Security & scalability audit"), /*#__PURE__*/React.createElement("option", {
    value: "exposure"
  }, "Regulatory exposure flagging"), /*#__PURE__*/React.createElement("option", {
    value: "other"
  }, "Something else"))), /*#__PURE__*/React.createElement(Field, {
    label: "What would you like reviewed?",
    htmlFor: "m"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "m",
    rows: 4,
    placeholder: "A few sentences on the system, the stack, and what\u2019s worrying you."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    id: "nda",
    checked: nda,
    onChange: e => setNda(e.target.checked),
    label: "This may need to be covered by an NDA before we talk specifics."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      n: "arrow-right",
      s: 18
    })
  }, "Send it over")))));
}
window.AFContact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Async Forest website — Footer */
const afFooterStyles = {
  wrap: {
    background: 'var(--surface-dark)',
    borderTop: '1px solid rgba(255,255,255,0.08)'
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: 'clamp(2.5rem,5vw,4rem) var(--gutter) 2.5rem'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 32,
    paddingBottom: 32,
    borderBottom: '1px solid rgba(255,255,255,0.08)'
  },
  brand: {
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: 9
  },
  name: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 24,
    color: 'var(--gray-50)'
  },
  async: {
    color: 'var(--gray-400)'
  },
  desc: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--gray-400)'
  },
  tag: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--gray-400)',
    lineHeight: 1.6,
    maxWidth: '34ch',
    marginTop: 14
  },
  colTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--gray-500)',
    marginBottom: 14
  },
  link: {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--gray-50)',
    textDecoration: 'none',
    marginBottom: 10,
    cursor: 'pointer',
    opacity: 0.85
  },
  cols: {
    display: 'flex',
    gap: 64,
    flexWrap: 'wrap'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    paddingTop: 22,
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'var(--gray-500)'
  }
};
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: afFooterStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: afFooterStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: afFooterStyles.top
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: afFooterStyles.brand
  }, /*#__PURE__*/React.createElement("span", {
    style: afFooterStyles.name
  }, /*#__PURE__*/React.createElement("span", {
    style: afFooterStyles.async
  }, "Async"), " Forest"), /*#__PURE__*/React.createElement("span", {
    style: afFooterStyles.desc
  }, "Advisory")), /*#__PURE__*/React.createElement("p", {
    style: afFooterStyles.tag
  }, "Independent, accountable technical assurance and advisory for founders building on systems that have to hold.")), /*#__PURE__*/React.createElement("div", {
    style: afFooterStyles.cols
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: afFooterStyles.colTitle
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('services')
  }, "Assurance review"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('services')
  }, "Architecture & AI"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('services')
  }, "Security & scale"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('services')
  }, "Exposure flagging")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: afFooterStyles.colTitle
  }, "Practice"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('process')
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('sample')
  }, "Sample report"), /*#__PURE__*/React.createElement("a", {
    style: afFooterStyles.link,
    onClick: () => onNav('contact')
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    style: afFooterStyles.bottom
  }, /*#__PURE__*/React.createElement("span", {
    className: "tnums"
  }, "Async Forest Advisory Ltd \xB7 Registered in England & Wales \xB7 No. 14827193"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--gray-400)',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--gray-400)',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    href: "#",
    onClick: e => e.preventDefault()
  }, "Terms")))));
}
window.AFFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Async Forest website — Header (sticky, translucent, mobile menu) */
const afHeaderStyles = {
  wrap: {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    background: 'rgba(249,251,255,0.82)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)',
    height: 68,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brand: {
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: 9,
    textDecoration: 'none'
  },
  name: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: '-0.015em',
    color: 'var(--text-strong)'
  },
  async: {
    color: 'var(--gray-500)'
  },
  desc: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 28
  },
  link: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--text-muted)',
    textDecoration: 'none',
    cursor: 'pointer',
    paddingBottom: 2,
    borderBottom: '2px solid transparent',
    transition: 'color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)'
  },
  linkActive: {
    color: 'var(--text-strong)',
    fontWeight: 600,
    borderBottom: '2px solid var(--gray-900)'
  }
};
function Header({
  onNav,
  active
}) {
  const {
    Button,
    IconButton
  } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const [open, setOpen] = React.useState(false);
  const links = [['Services', 'services'], ['How it works', 'process'], ['Sample report', 'sample'], ['Contact', 'contact']];
  const go = id => {
    setOpen(false);
    onNav && onNav(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: afHeaderStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: afHeaderStyles.inner
  }, /*#__PURE__*/React.createElement("a", {
    style: afHeaderStyles.brand,
    onClick: () => go('top')
  }, /*#__PURE__*/React.createElement("span", {
    style: afHeaderStyles.name
  }, /*#__PURE__*/React.createElement("span", {
    style: afHeaderStyles.async
  }, "Async"), " Forest"), /*#__PURE__*/React.createElement("span", {
    style: afHeaderStyles.desc
  }, "Advisory")), /*#__PURE__*/React.createElement("nav", {
    style: afHeaderStyles.nav,
    className: "af-desktop-nav"
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    "aria-current": active === id ? 'true' : undefined,
    style: {
      ...afHeaderStyles.link,
      ...(active === id ? afHeaderStyles.linkActive : {})
    },
    onClick: () => go(id)
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => go('contact')
  }, "Start a conversation")), /*#__PURE__*/React.createElement("div", {
    className: "af-mobile-nav",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    variant: "secondary",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Ico, {
    n: open ? 'x' : 'menu',
    s: 20
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px var(--gutter) 18px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    style: {
      ...afHeaderStyles.link,
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    },
    onClick: () => go(id)
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "primary",
    onClick: () => go('contact')
  }, "Start a conversation"))));
}
window.AFHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Async Forest website — Hero */
const afHeroStyles = {
  section: {
    background: 'var(--surface-card)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: 'clamp(3.5rem,7vw,6.5rem) var(--gutter)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: 'clamp(2rem,5vw,4rem)',
    alignItems: 'center'
  },
  h1: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 'clamp(2.4rem,5vw,3.75rem)',
    lineHeight: 1.06,
    letterSpacing: '-0.03em',
    color: 'var(--text-strong)',
    margin: '18px 0 20px',
    textWrap: 'balance'
  },
  u: {
    boxShadow: 'inset 0 -0.12em 0 var(--accent)'
  },
  sub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1rem,1.5vw,1.175rem)',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    maxWidth: '52ch',
    margin: '0 0 28px'
  },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 26
  },
  trust: {
    fontFamily: 'var(--font-mono)',
    fontSize: 11.5,
    letterSpacing: '0.02em',
    color: 'var(--text-subtle)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px 14px'
  },
  card: {
    background: 'var(--surface-dark)',
    borderRadius: 'var(--radius-2xl)',
    padding: 30,
    color: 'var(--gray-50)',
    boxShadow: 'var(--shadow-offset-lg)'
  },
  cardHead: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--gray-400)',
    marginBottom: 16
  },
  line: {
    display: 'flex',
    gap: 12,
    padding: '13px 0',
    borderBottom: '1px solid rgba(255,255,255,0.09)',
    alignItems: 'flex-start'
  },
  lineT: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    color: 'var(--gray-50)',
    marginBottom: 2
  },
  lineS: {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: 'var(--gray-400)',
    lineHeight: 1.5
  }
};
function Hero({
  onNav
}) {
  const {
    Button,
    Eyebrow
  } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const rows = [['What was in scope', 'A precise boundary — no vague "full audit" promises.'], ['What I found', 'Verified myself, hands-on, not a generated checklist.'], ['What to fix first', 'Prioritised, actionable, and explained plainly.']];
  return /*#__PURE__*/React.createElement("section", {
    style: afHeroStyles.section,
    className: "af-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.grid,
    className: "af-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tick: true
  }, "Independent technical assurance"), /*#__PURE__*/React.createElement("h1", {
    style: afHeroStyles.h1
  }, "An expert who verifies it themselves \u2014 and ", /*#__PURE__*/React.createElement("span", {
    style: afHeroStyles.u
  }, "stands behind the answer.")), /*#__PURE__*/React.createElement("p", {
    style: afHeroStyles.sub
  }, "I'm an independent technical consultant. I review the systems founders are about to bet on \u2014 architecture, AI in production, security, and scale \u2014 and give you a point-in-time report with prioritised, actionable fixes."), /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.ctas
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNav('contact'),
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      n: "arrow-right",
      s: 18
    })
  }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNav('process')
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.trust
  }, /*#__PURE__*/React.createElement("span", null, "UK limited company"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "PI insured"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Technical observations, not legal advice"))), /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.card
  }, /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.cardHead
  }, "A report you can show a board"), rows.map(([t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...afHeroStyles.line,
      borderBottom: i === rows.length - 1 ? 'none' : afHeroStyles.line.borderBottom
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-100)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check",
    s: 17
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.lineT
  }, t), /*#__PURE__*/React.createElement("div", {
    style: afHeroStyles.lineS
  }, s))))))));
}
window.AFHero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
/* Async Forest website — Process (how it works) on warm surface */
const afProcStyles = {
  band: {
    background: 'var(--surface-warm)',
    borderTop: '1px solid var(--border-warm)',
    borderBottom: '1px solid var(--border-warm)'
  },
  section: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: 'var(--section-y) var(--gutter)'
  },
  head: {
    maxWidth: '52ch',
    marginBottom: 44
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 'clamp(1.9rem,3.5vw,2.75rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--text-strong)',
    margin: '14px 0 12px'
  },
  lead: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-md)',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 0,
    borderTop: '1px solid var(--gray-300)'
  },
  step: {
    padding: '26px 22px 26px 0',
    borderRight: '1px solid var(--gray-300)'
  },
  num: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--gray-500)',
    letterSpacing: '0.1em'
  },
  st: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 20,
    color: 'var(--text-strong)',
    margin: '14px 0 8px'
  },
  sp: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    margin: 0
  }
};
function Process() {
  const {
    Eyebrow
  } = window.AsyncForestDesignSystem_6656fd;
  const steps = [['01', 'Scope', 'We agree exactly what’s in and out — a precise boundary, in writing.'], ['02', 'Verify', 'I do my own hands-on verification against the real system, not a self-assessment or a generated checklist.'], ['03', 'Report', 'Point-in-time findings, prioritised, each with an actionable fix and the reasoning behind it.'], ['04', 'Stand behind it', 'I walk you and your stakeholders through it, and I’m accountable for the conclusion.']];
  return /*#__PURE__*/React.createElement("div", {
    style: afProcStyles.band,
    id: "process"
  }, /*#__PURE__*/React.createElement("section", {
    style: afProcStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: afProcStyles.head
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: afProcStyles.h2
  }, "Independent, and accountable"), /*#__PURE__*/React.createElement("p", {
    style: afProcStyles.lead
  }, "The difference is simple: a qualified expert checks it and puts their name to the result.")), /*#__PURE__*/React.createElement("div", {
    style: afProcStyles.grid,
    className: "af-proc-grid"
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...afProcStyles.step,
      borderRight: i === steps.length - 1 ? 'none' : afProcStyles.step.borderRight,
      paddingLeft: i === 0 ? 0 : 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: afProcStyles.num
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: afProcStyles.st
  }, t), /*#__PURE__*/React.createElement("p", {
    style: afProcStyles.sp
  }, d))))));
}
window.AFProcess = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sample.jsx
try { (() => {
/* Async Forest website — Sample report excerpt (credibility, dark band) */
const afSampleStyles = {
  band: {
    background: 'var(--surface-dark)'
  },
  section: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: 'var(--section-y) var(--gutter)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: 'clamp(2rem,5vw,4rem)',
    alignItems: 'center'
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 'clamp(1.9rem,3.5vw,2.6rem)',
    lineHeight: 1.12,
    letterSpacing: '-0.025em',
    color: 'var(--gray-50)',
    margin: '14px 0 16px'
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-md)',
    lineHeight: 1.65,
    color: 'var(--gray-400)',
    margin: '0 0 14px',
    maxWidth: '46ch'
  },
  paper: {
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-offset-dark)',
    overflow: 'hidden'
  },
  paperHead: {
    padding: '18px 22px',
    borderBottom: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  paperTitle: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 17,
    color: 'var(--text-strong)'
  },
  meta: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10.5,
    letterSpacing: '0.06em',
    color: 'var(--text-subtle)',
    textTransform: 'uppercase'
  },
  body: {
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
};
function Sample() {
  const {
    Eyebrow,
    Callout,
    Badge
  } = window.AsyncForestDesignSystem_6656fd;
  return /*#__PURE__*/React.createElement("div", {
    style: afSampleStyles.band,
    id: "sample"
  }, /*#__PURE__*/React.createElement("section", {
    style: afSampleStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: afSampleStyles.grid,
    className: "af-sample-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gray-400)"
  }, "The deliverable"), /*#__PURE__*/React.createElement("h2", {
    style: afSampleStyles.h2
  }, "A written report, not a rubber stamp"), /*#__PURE__*/React.createElement("p", {
    style: afSampleStyles.p
  }, "You get a scope-limited document you can hand to a board, an investor, or your own team. Every finding is prioritised, verified, and paired with a fix."), /*#__PURE__*/React.createElement("p", {
    style: afSampleStyles.p
  }, "Here\u2019s the shape of it \u2014 a couple of findings from a fictional payment-path review.")), /*#__PURE__*/React.createElement("div", {
    style: afSampleStyles.paper
  }, /*#__PURE__*/React.createElement("div", {
    style: afSampleStyles.paperHead
  }, /*#__PURE__*/React.createElement("span", {
    style: afSampleStyles.paperTitle
  }, "Payment path \u2014 assurance review"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Verified")), /*#__PURE__*/React.createElement("div", {
    style: afSampleStyles.body
  }, /*#__PURE__*/React.createElement("div", {
    style: afSampleStyles.meta
  }, "Findings \xB7 prioritised"), /*#__PURE__*/React.createElement(Callout, {
    tone: "risk",
    title: "Priority 1 \xB7 Correctness"
  }, "No idempotency key on the charge endpoint. A client retry after a timeout can double-charge. Fix: derive a key from the order id and enforce it at the gateway."), /*#__PURE__*/React.createElement(Callout, {
    tone: "caution",
    title: "Priority 2 \xB7 Resilience"
  }, "Retries on the downstream call are unbounded. A single stall amplifies load. Fix: cap attempts, add jittered backoff and a circuit breaker."), /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: "Observation \xB7 Exposure"
  }, "Card-holder data is logged at debug. Flagged as a technical observation for your DPO \u2014 not legal advice."))))));
}
window.AFSample = Sample;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sample.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Async Forest website — Services */
const afSvcStyles = {
  section: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: 'var(--section-y) var(--gutter)'
  },
  head: {
    maxWidth: '56ch',
    marginBottom: 44
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 'clamp(1.9rem,3.5vw,2.75rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--text-strong)',
    margin: '14px 0 12px'
  },
  lead: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-md)',
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: 18
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-md)',
    background: 'var(--gray-100)',
    color: 'var(--gray-900)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  cardH: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 21,
    letterSpacing: '-0.01em',
    color: 'var(--text-strong)',
    margin: '0 0 8px'
  },
  cardP: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    margin: 0
  }
};
function Services() {
  const {
    Card,
    Eyebrow,
    Badge
  } = window.AsyncForestDesignSystem_6656fd;
  const Ico = window.AFIco;
  const items = [['shield-check', 'Technical assurance review', 'Independent, accountable verification of the thing you’re about to ship or raise on. I do the checking myself and stand behind the conclusion.', 'Core'], ['workflow', 'Architecture & AI in production', 'Responsible, practical ML and GenAI quality drivers. Concurrency, resilience, and cost for AI-integrated systems under real conditions.', null], ['gauge', 'Security & scalability audits', 'Security review and load/scalability testing — where the system bends, where it breaks, and what to harden first.', null], ['scale', 'Regulatory exposure flagging', 'UK GDPR & Children’s Code, Online Safety Act, EU AI Act — surfaced as technical observations, not legal advice.', 'Emerging']];
  return /*#__PURE__*/React.createElement("section", {
    style: afSvcStyles.section,
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    style: afSvcStyles.head
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What I do"), /*#__PURE__*/React.createElement("h2", {
    style: afSvcStyles.h2
  }, "A portfolio of hands-on technical work"), /*#__PURE__*/React.createElement("p", {
    style: afSvcStyles.lead
  }, "Every engagement ends in a written, point-in-time report: scope-limited, prioritised, and honest about what I did and didn\u2019t verify.")), /*#__PURE__*/React.createElement("div", {
    style: afSvcStyles.grid,
    className: "af-svc-grid"
  }, items.map(([ic, t, d, tag], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: afSvcStyles.icon
  }, /*#__PURE__*/React.createElement(Ico, {
    n: ic,
    s: 22
  })), tag && /*#__PURE__*/React.createElement(Badge, {
    tone: tag === 'Emerging' ? 'warning' : 'brand'
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: afSvcStyles.cardH
  }, t), /*#__PURE__*/React.createElement("p", {
    style: afSvcStyles.cardP
  }, d)))));
}
window.AFServices = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Block = __ds_scope.Block;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
