interface Listener {
	onKeyDown: KeyboardEventHandler;
}
export interface KeyboardEventHandler {
	(e: KeyboardEvent): void;
}
export interface KeySelector {
	(e: KeyboardEvent): boolean;
}

export default Listener;
