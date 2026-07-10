import React from 'react';

export type CalloutTone = 'note' | 'warm' | 'caution' | 'risk';

export interface CalloutProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Tone; default 'note' (forest). */
  tone?: CalloutTone;
  /** Optional mono uppercase label. */
  title?: React.ReactNode;
  children?: React.ReactNode;
}

/** Hairline note/observation block with a left rule — the reports' editorial aside. */
export function Callout(props: CalloutProps): JSX.Element;
