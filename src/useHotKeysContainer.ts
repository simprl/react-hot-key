import {
  useCallback, useContext, useEffect, useMemo, RefObject,
} from 'react';
import { Context } from './Context';
import { Listeners } from './Listeners';
import { KeyboardEventHandler } from './Listener';

const empty = [] as HTMLElement[];

export const useHotKeysContainer = (
  shards?: (RefObject<HTMLElement>| HTMLElement)[],
  propagate?: boolean
): Listeners => {
  const listeners = useMemo(() => new Listeners(shards ?? empty), [shards]);

  const parentListeners = useContext(Context);

  const parent = useCallback<KeyboardEventHandler>((e) => {
    let fired = false;
    parentListeners.forEach(({ onKeyDown }) => {
      if (onKeyDown && onKeyDown(e)) {
        fired = true;
      }
    });
    if (!fired) {
      parentListeners.forEach((parentListener) => {
        if (parentListener.parent && parentListener.parent(e)) {
          fired = true;
        }
      });
    }
    return fired;
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
