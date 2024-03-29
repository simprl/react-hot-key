import React, {
  useMemo, useRef, ReactNode, ReactElement,
} from 'react';
import { HotKeysProvider } from './HotKeysProvider';
import style from './style.module.css';

/**
 * HotKeysContainer properties.
 */
interface HotKeysContainerProps {
  /** class name of the div element */
  className?: string;
  /** propagate hot key to parent container if there are no hot keys handler
   *  in the current container */
  propagate?: boolean;
  /** additional dom elements or refs that wait for click */
  shards?: Array<React.RefObject<HTMLElement> | HTMLElement>;
  children?: ReactNode | undefined;
}

export const HotKeysContainer = ({
  children, className, shards, propagate,
}: HotKeysContainerProps): ReactElement => {
  const ref = useRef(null);
  const allShards = useMemo(() => (shards ? [...shards, ref] : [ref]), [shards, ref]);
  return (
    <div ref={ref} className={className ?? style.container} role="presentation" tabIndex={-1}>
      <HotKeysProvider shards={allShards} propagate={propagate}>{children}</HotKeysProvider>
    </div>
  );
};
