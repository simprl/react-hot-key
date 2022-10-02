import React, { useMemo, useRef } from 'react';
import { HotKeysProvider } from './HotKeysProvider';

export interface HotKeysContainerRenderProps {
  /** propagate hot key to parent container if there are no hot keys handler
   *  in the current container */
  propagate?: boolean;
  /** additional dom elements or refs that wait for click */
  shards?: Array<React.RefObject<HTMLElement> | HTMLElement>;
  children: (hotKeysProps: {
    ref: React.RefObject<HTMLElement> | HTMLElement;
    role: string;
    tabIndex: number;
  }) => React.ReactNode;
}

export const HotKeysContainerRender = ({ children, shards, propagate }: HotKeysContainerRenderProps)
  : JSX.Element => {
  const ref = useRef(null);
  const props = useMemo(
    () => ({
      ref,
      role: 'presentation',
      tabIndex: -1,
    }),
    [ref]
  );
  const allShards = useMemo(() => (shards ? [...shards, ref] : [ref]), [shards, ref]);
  return (
    <HotKeysProvider propagate={propagate} shards={allShards}>{children(props)}</HotKeysProvider>
  );
};
