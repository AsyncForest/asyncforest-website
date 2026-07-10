import React from 'react';

export interface BlockProps extends React.HTMLAttributes<HTMLElement> {
  /** 'default' (outline) or 'accent' (filled ink). */
  variant?: 'default' | 'accent';
  /** 'default' (crisp) or 'round' (pill). */
  shape?: 'default' | 'round';
  /** 'default' or 'inline' (small inline chip). */
  size?: 'default' | 'inline';
  /** Non-interactive static block (no press animation). */
  fixed?: boolean;
  /** Element to render; ignored when href is set (renders <a>). */
  as?: 'button' | 'a' | 'div' | 'span';
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Tactile 3D "block" control with a hard offset shadow that depresses on press.
 * Adapted from blocks.css (@thesephist, MIT); themed to the monochrome palette.
 * Theme per-instance via the --block-* CSS custom properties; wrap in an element
 * with class "block-on-dark" to use on dark surfaces.
 */
export function Block(props: BlockProps): JSX.Element;
