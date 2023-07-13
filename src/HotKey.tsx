import { useHotKey } from './useHotKey';

/**
 * HotKey properties.
 */
interface Props {
  /** if selector return true then onKey handler will call */
  selector: (e: KeyboardEvent) => boolean;
  /** HotKey handler. if function return false then key press propagate */
  onKey: () => void | boolean;
}

export const HotKey = ({ selector, onKey }: Props): null => {
  useHotKey(selector, onKey);
  return null;
};
