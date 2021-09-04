import React, {useCallback, useContext, useEffect, useMemo} from "react";
import HotKeyListener from './Listener';
import {subscribe} from './subscribe';
import {Context} from './Context';

export const useHotKeysContainer = (shards?: Array<React.RefObject<HTMLElement>| HTMLElement>, propagate?: boolean): Set<HotKeyListener> => {
    const listeners = useMemo(() => new Set<HotKeyListener>(), []);
    useEffect(() => shards ? subscribe(shards, listeners ): undefined, [shards]);

    const parentListeners = useContext(Context);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        parentListeners.forEach((listener) => listener.onKeyDown(e));
    }, [parentListeners]);

    useEffect(() => {
        if(propagate) {
            const listener = { onKeyDown };
            listeners.add(listener);
            return () => {
                listeners.delete(listener);
            };
        }
    }, [propagate, parentListeners]);


    return listeners;
};
