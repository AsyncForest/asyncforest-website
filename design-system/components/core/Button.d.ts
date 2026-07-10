import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'subtle' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the primary interactive control on Async Forest surfaces.
 *
 * @startingPoint section="Core" subtitle="Button variants & sizes" viewport="700x220"
 */
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /** Visual style. Default 'primary' (forest fill). */
  variant?: ButtonVariant;
  /** Height/padding preset. Default 'md' (44px). */
  size?: ButtonSize;
  /** Stretch to container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Node rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as another element; automatically an <a> when href is set. */
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
}

/** Primary interactive control for Async Forest surfaces. */
export function Button(props: ButtonProps): JSX.Element;
