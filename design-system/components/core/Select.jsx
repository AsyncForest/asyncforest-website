import React, { useState } from 'react';

/**
 * Async Forest — Select
 * Native select styled to match Input, with a chevron affordance.
 */
export function Select({ size = 'md', invalid = false, disabled = false, children, style = {}, ...rest }) {
  const [focus, setFocus] = useState(false);
  const sizes = { sm: { h: 38, fs: '0.875rem' }, md: { h: 44, fs: '0.9375rem' }, lg: { h: 52, fs: '1rem' } };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--danger)' : (focus ? 'var(--gray-500)' : 'var(--border-default)');
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', height: s.h, padding: '0 40px 0 14px', boxSizing: 'border-box',
          fontFamily: 'var(--font-sans)', fontSize: s.fs, color: 'var(--text-body)',
          background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
          border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
          boxShadow: focus ? 'var(--shadow-ring)' : 'var(--shadow-offset-xs)',
          outline: 'none', appearance: 'none', WebkitAppearance: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
          ...style,
        }}
        {...rest}
      >
        {children}
      </select>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"
        style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
