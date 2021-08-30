import React from 'react';
import Listener from './Listener';

const Context = React.createContext(new Set<Listener>());
const { Provider } = Context;
export { Context, Provider };
