import { FC } from 'react';
import { useHotKey } from './useHotKey';

/**
 * HotKey properties.
 */
interface Props {
  /** if selector return true then onKey handler will call */
  selector: (e: KeyboardEvent) => boolean;
  /** HotKey handler */
  onKey: () => void;
  /** subscribe to children contexts too */
  global?: boolean;
}

export const HotKey: FC<Props> = ({ selector, onKey, global = false }) => {
  useHotKey(selector, onKey, global);
  return null;
};
