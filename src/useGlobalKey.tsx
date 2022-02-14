import { useEffect } from 'react';
import { useConstFunc } from 'use-constant-handler';
import { globalListeners } from './subscribe';
import { KeyboardEventHandler } from './Listener';

export const useGlobalKey = (
  selector: (e: KeyboardEvent) => boolean,
  onKey: () => void
): void => {
  const onKeyDown = useConstFunc<KeyboardEventHandler>((e) => {
    const selected = selector && selector(e);
    if (selected) {
      onKey();
    }
    return selected;
  });

  useEffect(() => {
    globalListeners.add(onKeyDown);
    return () => {
      globalListeners.delete(onKeyDown);
    };
  }, [onKeyDown]);
};
