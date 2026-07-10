import React from 'react';

export type BadgeTone = 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'info';

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  /** Color tone; default 'neutral'. */
  tone?: BadgeTone;
  children?: React.ReactNode;
}

/** Small mono status pill with a soft backing. */
export function Badge(props: BadgeProps): JSX.Element;
