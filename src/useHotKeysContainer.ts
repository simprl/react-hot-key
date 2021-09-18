import {
  useCallback, useContext, useEffect, useMemo,
} from 'react';
import HotKeyListener from './Listener';
import { subscribe } from './subscribe';
import { Context } from './Context';

export const useHotKeysContainer = (
  shards?: Array<React.RefObject<HTMLElement>| HTMLElement>,
  propagate?: boolean
): Set<HotKeyListener> => {
  const listeners = useMemo(() => new Set<HotKeyListener>(), []);
  useEffect(() => (shards ? subscribe(shards, listeners) : undefined), [shards, listeners]);

  const parentListeners = useContext(Context);

  const parent = useCallback((e: KeyboardEvent) => {
    let fired = false;
    parentListeners.forEach(({ onKeyDown }) => {
      if (onKeyDown && onKeyDown(e)) {
        fired = true;
      }
    });
    if (!fired) {
      parentListeners.forEach((parentListener) => {
        if (parentListener.parent) {
          parentListener.parent(e);
        }
      });
    }
  }, [parentListeners]);

  useEffect(() => {
    if (propagate) {
      const listener = { parent };
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
    return undefined;
  }, [propagate, parentListeners, parent, listeners]);

  return listeners;
};
