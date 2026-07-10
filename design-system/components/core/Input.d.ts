import React from 'react';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  /** Error styling (danger border). */
  invalid?: boolean;
  disabled?: boolean;
}

/** Single-line text field with forest focus ring. Pair with Field for label + hint. */
export function Input(props: InputProps): JSX.Element;
