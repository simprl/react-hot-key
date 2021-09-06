import React, {useContext, useEffect } from 'react';
import { useConstFunc } from 'use-constant-handler';
import { Context } from './Context';

export const useHotKey = (selector: (e: KeyboardEvent) => boolean, onKey: () => void): void => {
	const onKeyDown = useConstFunc((e: KeyboardEvent) => {
		const selected = selector && selector(e)
		selected && onKey();
		console.log(selected)
		return selected;
	});
	const listeners = useContext(Context);
	useEffect(() => {
		const listener = { onKeyDown };
		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	}, []);
};
