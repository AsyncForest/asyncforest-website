import React from 'react';

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  invalid?: boolean;
  disabled?: boolean;
  rows?: number;
}

/** Multi-line text field; matches Input. Vertically resizable. */
export function Textarea(props: TextareaProps): JSX.Element;
