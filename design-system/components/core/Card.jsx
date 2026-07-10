import React, { useState } from 'react';

/**
 * Async Forest — Card
 * White surface, hairline border, subtle solid "block" offset shadow, lg radius.
 * Interactive variant presses toward its shadow on hover (tactile block language).
 */
export function Card({
  interactive = false,
  tone = 'default',
  padding = 'var(--space-6)',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    default: { bg: 'var(--surface-card)', bd: 'var(--border-subtle)' },
    warm:    { bg: 'var(--surface-warm)', bd: 'var(--border-warm)' },
    sunken:  { bg: 'var(--surface-sunken)', bd: 'var(--border-subtle)' },
    brand:   { bg: 'var(--gray-100)', bd: 'var(--gray-200)' },
  };
  const t = tones[tone] || tones.default;
  return (
    <div
      style={{
        background: t.bg,
        border: `1px solid ${interactive && hover ? 'var(--border-strong)' : t.bd}`,
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: interactive && hover ? '2px 2px 0 0 var(--gray-300)' : 'var(--shadow-offset-md)',
        transform: interactive && hover ? 'translate(2px,2px)' : 'none',
        transition: 'box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out), border-color var(--duration-normal) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
