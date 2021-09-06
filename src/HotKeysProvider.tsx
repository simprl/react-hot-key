import React from "react";
import {Provider} from "./Context";
import {useHotKeysContainer} from "./useHotKeysContainer";

interface HotKeysProviderProps {
    children: React.ReactNode;
    propagate?: boolean;
    shards?: Array<React.RefObject<HTMLElement> | HTMLElement>;
}
export const HotKeysProvider: React.FC<HotKeysProviderProps> = ({ children, shards, propagate }) => (
    <Provider value={useHotKeysContainer(shards, propagate)}>{children}</Provider>
);
