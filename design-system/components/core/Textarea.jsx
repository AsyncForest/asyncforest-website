import React, { useState } from 'react';

/**
 * Async Forest — Textarea
 * Multi-line text field. Matches Input styling.
 */
export function Textarea({ invalid = false, disabled = false, rows = 4, style = {}, ...rest }) {
  const [focus, setFocus] = useState(false);
  const borderColor = invalid ? 'var(--danger)' : (focus ? 'var(--gray-500)' : 'var(--border-default)');
  return (
    <textarea
      rows={rows}
      disabled={disabled}
      onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
      style={{
        width: '100%', padding: '12px 14px', boxSizing: 'border-box',
        fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 'var(--leading-normal)',
        color: 'var(--text-body)', background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--shadow-ring)' : 'var(--shadow-offset-xs)',
        outline: 'none', resize: 'vertical', minHeight: 88,
        transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    />
  );
}
