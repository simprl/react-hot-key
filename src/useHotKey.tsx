import { useContext, useEffect } from 'react';
import { useConstFunc } from 'use-constant-handler';
import { Context } from './Context';

export const useHotKey = (
  selector: (e: KeyboardEvent) => boolean,
  onKey: () => void,
  global = false
): void => {
  const onKeyDown = useConstFunc((e: KeyboardEvent) => {
    const selected = selector && selector(e);
    if (selected) {
      onKey();
    }
    return selected;
  });
  const listeners = useContext(Context);
  useEffect(() => {
    const listener = { onKeyDown, global };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [listeners, onKeyDown, global]);
};