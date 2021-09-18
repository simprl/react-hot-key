interface Listener {
  onKeyDown?: KeyboardEventHandler;
  parent?: KeyboardEventHandler<void>;
}
export interface KeyboardEventHandler<RetT = boolean> {
  (e: KeyboardEvent): RetT;
}
export interface KeySelector {
  (e: KeyboardEvent): boolean;
}

export default Listener;
