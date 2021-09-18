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
}

export const HotKey: FC<Props> = ({ selector, onKey }) => {
  useHotKey(selector, onKey);
  return null;
};
