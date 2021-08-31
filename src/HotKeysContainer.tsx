import React, { useEffect, useMemo, useRef } from 'react';
import { Provider } from './Context';
import HotKeyListener from './Listener';

interface HotKeysProviderProps {
	children: React.ReactNode;
	shards?: Array<React.RefObject<any> | HTMLElement>;
}
interface HotKeysContainerProps extends HotKeysProviderProps {
	className?: string;
}

const STYLE = { width: '100%', height: '100%' };

export const useHotKeysContainer = (shards?: Array<React.RefObject<any> | HTMLElement>): Set<HotKeyListener> => {
	const listeners = useMemo(() => new Set<HotKeyListener>(), []);
	const pressedKeys = useMemo(() => new Set<string>(), []);

	useEffect(() => {
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
			?.map((shard) => (shard as React.RefObject<HTMLElement> | undefined)?.current as HTMLElement | undefined)
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
	}, [shards]);

	return listeners;
};

export const HotKeysProvider: React.FC<HotKeysProviderProps> = ({ children, shards }) => (
	<Provider value={useHotKeysContainer(shards)}>{children}</Provider>
);

export const HotKeysContainer: React.FC<HotKeysContainerProps> = ({ children, className, shards }) => {
	const ref = useRef(null);
	const allShards = useMemo(() => (shards ? [...shards, ref] : [ref]), [shards, ref]);
	return (
		<div ref={ref} style={STYLE} className={className} role="presentation" tabIndex={-1}>
			<HotKeysProvider shards={allShards}>{children}</HotKeysProvider>
		</div>
	);
};

export default HotKeysContainer;
