import React from 'react';

/**
 * Async Forest — Checkbox
 * Custom-styled checkbox with forest fill + label.
 */
export function Checkbox({ checked, onChange, label, disabled = false, id, style = {}, ...rest }) {
  return (
    <label
      htmlFor={id}
      style={{
        display: 'inline-flex', alignItems: 'flex-start', gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.4, ...style,
      }}
    >
      <span
        style={{
          flex: '0 0 auto', width: 20, height: 20, borderRadius: 'var(--radius-xs)',
          border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--accent)' : 'var(--surface-card)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
          marginTop: 1,
        }}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        id={id} type="checkbox" checked={checked} disabled={disabled}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
