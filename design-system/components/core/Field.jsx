import React, { useState } from 'react';

/**
 * Async Forest — Field
 * Label + optional hint + optional error wrapper for form controls.
 */
export function Field({ label, hint, error, required = false, htmlFor, children, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
      {label && (
        <label
          htmlFor={htmlFor}
          style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600,
            color: 'var(--text-strong)', display: 'inline-flex', gap: 4,
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--danger)' }}>*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
