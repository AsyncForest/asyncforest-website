import React, { useState } from 'react';

/**
 * Async Forest — IconButton
 * Square button for a single icon (pass a Lucide/SVG node as children).
 */
export function IconButton({ variant = 'secondary', size = 'md', disabled = false, label, children, style = {}, ...rest }) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = { sm: 34, md: 40, lg: 46 };
  const dim = sizes[size] || sizes.md;
  const palettes = {
    primary:   { bg: 'var(--brand)', bgHover: 'var(--brand-hover)', color: 'var(--text-on-dark)', border: '1px solid transparent' },
    secondary: { bg: 'var(--surface-card)', bgHover: 'var(--gray-50)', color: 'var(--text-strong)', border: '1px solid var(--border-default)' },
    ghost:     { bg: 'transparent', bgHover: 'var(--gray-100)', color: 'var(--text-brand)', border: '1px solid transparent' },
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
  const transform = disabled ? 'none' : (isBlock ? (active ? 'translate(2px,2px)' : hover ? 'translate(1px,1px)' : 'none') : 'none');
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: dim, height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-md)', border: p.border,
        background: disabled ? 'var(--gray-200)' : (hover ? p.bgHover : p.bg),
        color: disabled ? 'var(--text-subtle)' : p.color,
        boxShadow: boxShadow,
        transform: transform,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
