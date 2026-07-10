import React from 'react';

export interface FieldProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: React.ReactNode;
  /** Helper text shown below (hidden when error is set). */
  hint?: React.ReactNode;
  /** Error message; replaces hint and colors it danger. */
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
}

/** Label + hint/error wrapper for a single form control. */
export function Field(props: FieldProps): JSX.Element;
