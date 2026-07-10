import React from 'react';

/**
 * Async Forest — Callout
 * Hairline note block for reports & pages. Left rule + eyebrow + body.
 * Brand-specific: mirrors the editorial "observation" voice of the reports.
 */
export function Callout({ tone = 'note', title, children, style = {}, ...rest }) {
  const tones = {
    note:    { rule: 'var(--gray-700)', bg: 'var(--gray-100)',  bd: 'var(--gray-200)', label: 'var(--gray-900)' },
    warm:    { rule: 'var(--amber-400)',  bg: 'var(--amber-50)',   bd: 'var(--amber-100)',  label: 'var(--amber-700)' },
    caution: { rule: 'var(--warning)',    bg: 'var(--warning-soft)', bd: 'var(--amber-100)', label: 'var(--amber-700)' },
    risk:    { rule: 'var(--danger)',     bg: 'var(--danger-soft)', bd: '#f2d4cd',          label: 'var(--red-600)' },
  };
  const t = tones[tone] || tones.note;
  return (
    <div
      style={{
        display: 'flex', gap: 14, padding: '16px 18px',
        background: t.bg, border: `1px solid ${t.bd}`,
        borderLeft: `3px solid ${t.rule}`, borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-offset-xs)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ minWidth: 0 }}>
        {title && (
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
            letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
            color: t.label, marginBottom: 6, fontWeight: 500,
          }}>{title}</div>
        )}
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
          lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)',
        }}>{children}</div>
      </div>
    </div>
  );
}
