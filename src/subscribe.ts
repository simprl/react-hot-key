import React from 'react';
import HotKeyListener, { KeyboardEventHandler } from './Listener';

export interface ClearFunc {
  (): void;
}

export const globalListeners = new Set<KeyboardEventHandler>();
const globalPressedKeys = new Set<string>();
let globalFired = false;

export const subscribe = (
  shards: Array<React.RefObject<HTMLElement> | HTMLElement>,
  listeners: Set<HotKeyListener>
): ClearFunc => {
  const pressedKeys = new Set<string>();

  const keyDownHandler = (e: KeyboardEvent): void => {
    let fired = false;
    if (!pressedKeys.has(e.code)) {
      listeners.forEach(({ onKeyDown }) => {
        if (onKeyDown && onKeyDown(e)) {
          fired = true;
        }
      });
      if (!fired) {
        listeners.forEach(({ parent }) => {
          if (parent && parent(e)) {
            fired = true;
          }
        });
      }
      pressedKeys.add(e.code);
    }
    if (!globalPressedKeys.has(e.code)) {
      globalListeners.forEach((handler) => {
        if (handler(e)) {
          globalFired = true;
        }
      });
      globalPressedKeys.add(e.code);
    }

    e.stopPropagation();
    if (fired || globalFired) {
      e.preventDefault();
    }
  };

  const keyUpHandler = (e: KeyboardEvent) => {
    pressedKeys.delete(e.code);
    globalPressedKeys.delete(e.code);
    globalFired = false;
  };

  const els = shards
    ?.map((shard) => (shard instanceof HTMLElement ? shard : shard?.current))
    ?.filter((el) => el !== undefined) as HTMLElement[] | undefined;

  els?.forEach((el) => {
    el.addEventListener('keydown', keyDownHandler);
    el.addEventListener('keyup', keyUpHandler);
  });

  return () => {
    els?.forEach((el) => {
      el.removeEventListener('keydown', keyDownHandler);
      el.removeEventListener('keyup', keyUpHandler);
    });
    pressedKeys.clear();
  };
};
