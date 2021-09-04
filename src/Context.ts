import React from 'react';
import Listener from './Listener';
import {subscribe} from './subscribe';

const rootListeners = new Set<Listener>()
subscribe([document.body], rootListeners);
const Context = React.createContext(rootListeners);
const { Provider } = Context;
export { Context, Provider };
