interface Listener {
  onKeyDown?: KeyboardEventHandler;
  parent?: KeyboardEventHandler;
}
export interface KeyboardEventHandler {
  (e: KeyboardEvent): boolean;
}
export interface KeySelector {
  (e: KeyboardEvent): boolean;
}

export default Listener;
