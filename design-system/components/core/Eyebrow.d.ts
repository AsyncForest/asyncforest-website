import React from 'react';

export interface EyebrowProps extends React.ComponentPropsWithoutRef<'span'> {
  /** CSS color; default gray-800 (ink). */
  color?: string;
  /** Show a small ink tick before the label. */
  tick?: boolean;
  children?: React.ReactNode;
}

/** Mono, uppercase, letter-spaced section tag — the brand's signature label. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
