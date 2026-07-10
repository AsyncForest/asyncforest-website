import React from 'react';

export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

/** Native select styled to match Input, with a chevron. Pass <option>s as children. */
export function Select(props: SelectProps): JSX.Element;
