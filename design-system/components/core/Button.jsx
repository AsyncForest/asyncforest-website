import React, { useState } from 'react';

/**
 * Async Forest — Button
 * Raised variants carry a subtle "block" offset shadow that presses on click.
 * primary = ink fill; secondary = hairline; ghost = text; subtle = gray; accent = deep blue.
 */
export function Button({
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
    sm: { padding: '0 14px', height: 36, fontSize: '0.8125rem', gap: 7, radius: 'var(--radius-sm)' },
    md: { padding: '0 20px', height: 44, fontSize: '0.9375rem', gap: 8, radius: 'var(--radius-md)' },
    lg: { padding: '0 26px', height: 52, fontSize: '1rem', gap: 10, radius: 'var(--radius-md)' },
  };
  const s = sizes[size] || sizes.md;

  const palettes = {
    primary: {
      bg: 'var(--brand)', bgHover: 'var(--brand-hover)', bgActive: 'var(--brand-active)',
      color: 'var(--text-on-dark)', border: '1px solid transparent',
      shadow: 'var(--shadow-sm)',
    },
    secondary: {
      bg: 'var(--surface-card)', bgHover: 'var(--gray-50)', bgActive: 'var(--gray-100)',
      color: 'var(--text-strong)', border: '1px solid var(--border-default)',
      borderHover: '1px solid var(--border-strong)', shadow: 'var(--shadow-xs)',
    },
    ghost: {
      bg: 'transparent', bgHover: 'var(--gray-100)', bgActive: 'var(--gray-200)',
      color: 'var(--text-brand)', border: '1px solid transparent', shadow: 'none',
    },
    subtle: {
      bg: 'var(--gray-100)', bgHover: 'var(--gray-200)', bgActive: 'var(--gray-200)',
      color: 'var(--gray-800)', border: '1px solid transparent', shadow: 'none',
    },
    accent: {
      bg: 'var(--accent)', bgHover: 'var(--accent-hover)', bgActive: 'var(--accent-active)',
      color: 'var(--text-on-dark)', border: '1px solid transparent',
    },
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
  const transform = disabled ? 'none'
    : isBlock ? (active ? 'translate(2px,2px)' : hover ? 'translate(1px,1px)' : 'none')
    : (active ? 'translateY(1px)' : 'none');

  const styleObj = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    height: s.height, padding: s.padding, borderRadius: s.radius,
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: s.fontSize,
    lineHeight: 1, letterSpacing: '0.005em',
    color: disabled ? 'var(--text-subtle)' : p.color,
    background: bg,
    border: hover && p.borderHover ? p.borderHover : p.border,
    boxShadow: boxShadow,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transform: transform,
    transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
    textDecoration: 'none', whiteSpace: 'nowrap', userSelect: 'none',
    ...style,
  };

  const Tag = href ? 'a' : as;
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      style={styleObj}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </Tag>
  );
}
