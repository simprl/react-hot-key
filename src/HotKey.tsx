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

export const HotKey = ({ selector, onKey }: Props): null => {
  useHotKey(selector, onKey);
  return null;
};
