import { useEffect } from 'react';
/*eslint-disable*/
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      e.stopImmediatePropagation();
      handler(e);
      console.log('eventListener');
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
