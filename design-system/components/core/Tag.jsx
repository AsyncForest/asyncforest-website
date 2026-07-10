import React, { useState } from 'react';

/**
 * Async Forest — Tag
 * Interactive-ish chip for filters / categories. Optional dismiss + selected state.
 */
export function Tag({ children, selected = false, onRemove, style = {}, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '5px 12px', borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500,
        color: selected ? 'var(--accent)' : 'var(--text-body)',
        background: selected ? 'var(--accent-soft)' : (hover ? 'var(--gray-50)' : 'var(--surface-card)'),
        border: `1px solid ${selected ? 'var(--accent-border)' : 'var(--border-default)'}`,
        boxShadow: 'var(--shadow-offset-xs)',
        transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
        cursor: rest.onClick ? 'pointer' : 'default', ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          aria-label="Remove"
          style={{
            display: 'inline-flex', border: 0, background: 'transparent', padding: 0,
            cursor: 'pointer', color: 'var(--text-muted)', lineHeight: 0, fontSize: 15,
          }}
        >×</button>
      )}
    </span>
  );
}
