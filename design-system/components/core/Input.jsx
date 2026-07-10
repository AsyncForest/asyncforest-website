import React, { useState } from 'react';

/**
 * Async Forest — Input
 * Single-line text field. Hairline border, forest focus ring, md radius.
 */
export function Input({ size = 'md', invalid = false, disabled = false, style = {}, ...rest }) {
  const [focus, setFocus] = useState(false);
  const sizes = { sm: { h: 38, fs: '0.875rem', px: 12 }, md: { h: 44, fs: '0.9375rem', px: 14 }, lg: { h: 52, fs: '1rem', px: 16 } };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--danger)' : (focus ? 'var(--gray-500)' : 'var(--border-default)');
  return (
    <input
      disabled={disabled}
      onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
      style={{
        width: '100%', height: s.h, padding: `0 ${s.px}px`, boxSizing: 'border-box',
        fontFamily: 'var(--font-sans)', fontSize: s.fs, color: 'var(--text-body)',
        background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--shadow-ring)' : 'var(--shadow-offset-xs)',
        outline: 'none', transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        cursor: disabled ? 'not-allowed' : 'text', ...style,
      }}
      {...rest}
    />
  );
}
