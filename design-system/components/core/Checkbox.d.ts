import React from 'react';

export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

/** Custom checkbox with forest fill and inline label. */
export function Checkbox(props: CheckboxProps): JSX.Element;
