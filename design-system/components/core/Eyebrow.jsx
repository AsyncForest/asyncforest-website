import React from 'react';

/**
 * Async Forest — Eyebrow
 * The mono uppercase section tag that opens most headings. Core brand signature.
 */
export function Eyebrow({ children, color = 'var(--gray-800)', tick = false, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        fontWeight: 500, color, ...style,
      }}
      {...rest}
    >
      {tick && <span style={{ width: 6, height: 6, borderRadius: 2, background: 'var(--gray-900)', display: 'inline-block' }} />}
      {children}
    </span>
  );
}
