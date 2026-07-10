import React from 'react';

export interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Accessible label (required — icon-only control). */
  label: string;
  /** The icon node (Lucide/SVG). */
  children?: React.ReactNode;
}

/** Square button holding a single icon. Always pass an accessible `label`. */
export function IconButton(props: IconButtonProps): JSX.Element;
