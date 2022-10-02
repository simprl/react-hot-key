import React from 'react';
import { Provider } from './Context';
import { useHotKeysContainer } from './useHotKeysContainer';

export interface HotKeysProviderProps {
    children: React.ReactNode;
    propagate?: boolean;
    shards?: Array<React.RefObject<HTMLElement> | HTMLElement>;
}
export const HotKeysProvider = React.memo(
  ({ children, shards, propagate }: HotKeysProviderProps) => (
    <Provider value={useHotKeysContainer(shards, propagate)}>{children}</Provider>
  )
);
