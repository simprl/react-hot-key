import React from "react";
import HotKeyListener from "Listener";

export const subscribe = (shards: Array<React.RefObject<HTMLElement> | HTMLElement>, listeners: Set<HotKeyListener>): () => void => {
    const pressedKeys = new Set<string>();
    const keyDownHandler = (e: KeyboardEvent) => {
        if (!pressedKeys.has(e.code)) {
            listeners.forEach((listener) => listener.onKeyDown(e));
            pressedKeys.add(e.code);
        }
        e.stopPropagation();
    };

    const keyUpHandler = (e: KeyboardEvent) => {
        pressedKeys.delete(e.code);
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
}
