import React, {useContext, useEffect } from 'react';
import { useConstant } from 'use-constant-handler';
import { Context } from './Context';

interface HotKeyProps {
	selector: (e: KeyboardEvent) => boolean;
	onKey: () => void;
}

const HotKey: React.FC<HotKeyProps> = ({ selector, onKey }) => {
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

export default HotKey;
