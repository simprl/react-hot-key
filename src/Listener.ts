interface Listener {
	onKeyDown: KeyboardEventHandler;
}
export interface KeyboardEventHandler {
	(e: KeyboardEvent): void;
}

export default Listener;
