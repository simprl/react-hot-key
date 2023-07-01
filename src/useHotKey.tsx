import { useContext, useEffect } from 'react';
import { useConstFunc } from 'use-constant-handler';
import { Context } from './Context';
import { KeyboardEventHandler } from './Listener';

export const useHotKey = (
  selector: (e: KeyboardEvent) => boolean,
  onKey: () => void | boolean
): void => {
  const onKeyDown = useConstFunc<KeyboardEventHandler>((e) => {
    const selected = selector && selector(e);
    if (selected) {
      onKey();
    }
    return selected;
  });
  const listeners = useContext(Context);
  useEffect(() => {
    const listener = { onKeyDown };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [listeners, onKeyDown]);
};
