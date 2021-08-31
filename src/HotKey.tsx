import React, {useContext, useEffect, FC } from 'react';
import { useConstant } from 'use-constant-handler';
import { Context } from './Context';

/**
 * HotKey properties.
 */
interface Props {
	/** if selector return true then onKey handler will call */
	selector: (e: KeyboardEvent) => boolean;
	/** HotKey handler */
	onKey: () => void;
}

export const HotKey: FC<Props> = ({ selector, onKey }) => {
	const onKeyDown = useConstant((e: KeyboardEvent) => {
		selector && onKey && selector(e) && onKey();
	});
	const listeners = useContext(Context);
	useEffect(() => {
		const listener = { onKeyDown };
		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	}, []);
	return null;
};
