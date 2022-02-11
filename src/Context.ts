import React from 'react';
import { Listeners } from './Listeners';

const rootListeners = new Listeners([document.body]);
const Context = React.createContext(rootListeners);
const { Provider } = Context;
export { Context, Provider };
