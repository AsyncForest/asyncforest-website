import React from 'react';

/**
 * Async Forest — Block
 * Tactile 3D "block" element (adapted from blocks.css by @thesephist, MIT).
 * CSS-driven: applies the .block classes shipped in components/blocks/blocks.css
 * via styles.css. The press mechanics live in CSS (pseudo-elements), so this
 * component is intentionally class-based rather than inline-styled.
 */
export function Block({
  variant = 'default',   // 'default' | 'accent'
  shape = 'default',     // 'default' | 'round'
  size = 'default',      // 'default' | 'inline'
  fixed = false,         // non-interactive (static label)
  as = 'button',         // 'button' | 'a' | 'div' | 'span'
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['block'];
  if (variant === 'accent') cls.push('accent');
  if (shape === 'round') cls.push('round');
  if (size === 'inline') cls.push('inline');
  if (fixed) cls.push('fixed');
  if (className) cls.push(className);
  const Tag = href ? 'a' : as;
  return (
    <Tag className={cls.join(' ')} href={href} {...rest}>
      {children}
    </Tag>
  );
}
