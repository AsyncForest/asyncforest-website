import React from 'react';

export interface TagProps extends React.ComponentPropsWithoutRef<'span'> {
  /** Selected/active styling (forest tint). */
  selected?: boolean;
  /** When provided, renders a × dismiss control. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/** Sans chip for filters and categories; supports selected + removable states. */
export function Tag(props: TagProps): JSX.Element;
