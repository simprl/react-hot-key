import React from 'react';
import Listener from './Listener';
import { ClearFunc, subscribe } from './subscribe';

const rootListeners = new Set<Listener>();
const subscribeRoot = (
  shards: Array<React.RefObject<HTMLElement> | HTMLElement> = [document.body]
): ClearFunc => subscribe(shards, rootListeners);
const Context = React.createContext(rootListeners);
const { Provider } = Context;
export { Context, Provider, subscribeRoot };
