import React from 'react';

export type CardTone = 'default' | 'warm' | 'sunken' | 'brand';

/**
 * Content container: white surface, hairline border, soft shadow, 14px radius.
 *
 * @startingPoint section="Core" subtitle="Card surfaces & tones" viewport="700x260"
 */
export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Adds hover lift + pointer; use for clickable cards. */
  interactive?: boolean;
  /** Surface tone; default white. */
  tone?: CardTone;
  /** CSS padding value; default var(--space-6). */
  padding?: string;
  children?: React.ReactNode;
}

/** Content container: white surface, hairline border, soft shadow, 14px radius. */
export function Card(props: CardProps): JSX.Element;
