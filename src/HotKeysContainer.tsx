import React, { useMemo, useRef } from 'react';
import { Provider } from './Context';
import {useHotKeysContainer} from './useHotKeysContainer';
import style from './style.module.css';

interface HotKeysProviderProps {
	children: React.ReactNode;
	propagate?: boolean;
	shards?: Array<React.RefObject<HTMLElement> | HTMLElement>;
}
const HotKeysProvider: React.FC<HotKeysProviderProps> = ({ children, shards, propagate }) => (
	<Provider value={useHotKeysContainer(shards, propagate)}>{children}</Provider>
);

interface HotKeysContainerProps {
	className?: string;
	propagate?: boolean;
	shards?: Array<React.RefObject<HTMLElement> | HTMLElement>;
}

export const HotKeysContainer: React.FC<HotKeysContainerProps> = ({ children, className = style.container, shards, propagate }) => {
	const ref = useRef(null);
	const allShards = useMemo(() => (shards ? [...shards, ref] : [ref]), [shards, ref]);
	return (
		<div ref={ref} className={className} role="presentation" tabIndex={-1}>
			<HotKeysProvider shards={allShards} propagate={propagate}>{children}</HotKeysProvider>
		</div>
	);
};
