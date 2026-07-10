import React from 'react';

/**
 * Async Forest — Badge
 * Small status pill with a soft backing. Uses the status token pairs.
 */
export function Badge({ tone = 'neutral', children, style = {}, ...rest }) {
  const tones = {
    neutral: { bg: 'var(--gray-100)', fg: 'var(--gray-700)', bd: 'var(--gray-200)' },
    brand:   { bg: 'var(--gray-100)', fg: 'var(--gray-900)', bd: 'var(--gray-200)' },
    accent:  { bg: 'var(--accent-soft)', fg: 'var(--accent)', bd: 'var(--accent-border)' },
    success: { bg: 'var(--success-soft)', fg: 'var(--gray-900)', bd: 'var(--gray-200)' },
    warning: { bg: 'var(--warning-soft)', fg: 'var(--amber-700)', bd: 'var(--amber-100)' },
    danger:  { bg: 'var(--danger-soft)', fg: 'var(--red-600)', bd: '#f2d4cd' },
    info:    { bg: 'var(--info-soft)', fg: 'var(--blue-600)', bd: '#d6e0f2' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 10px', borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
        fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
        color: t.fg, background: t.bg, border: `1px solid ${t.bd}`,
        boxShadow: 'var(--shadow-offset-xs)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
