import { KeySelector } from './Listener';

export const DELETE: KeySelector = (e) => e.key === 'Delete';
export const ENTER: KeySelector = (e) => e.key === 'Enter';
export const ESC: KeySelector = (e) => e.key === 'Escape';
export const ARROW_UP: KeySelector = (e) => e.key === 'ArrowUp';
export const ARROW_DOWN: KeySelector = (e) => e.key === 'ArrowDown';
export const ARROW_LEFT: KeySelector = (e) => e.key === 'ArrowLeft';
export const ARROW_RIGHT: KeySelector = (e) => e.key === 'ArrowRight';
export const SPACE: KeySelector = (e) => e.key === ' ';
export const SAVE: KeySelector = (e) => e.key === 's' && e.ctrlKey;
