import { VFC } from 'react';
import { useGlobalKey } from './useGlobalKey';

/**
 * GlobalKey properties.
 */
interface Props {
  /** if selector return true then onKey handler will call */
  selector: (e: KeyboardEvent) => boolean;
  /** HotKey handler. if function return false then key press propagate */
  onKey: () => void | boolean;
}

export const GlobalKey: VFC<Props> = ({ selector, onKey }) => {
  useGlobalKey(selector, onKey);
  return null;
};
