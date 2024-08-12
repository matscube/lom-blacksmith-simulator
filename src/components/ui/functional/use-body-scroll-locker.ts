import { useEffect } from 'react';

export const useBodyScrollLocker = (props: { locked: boolean }) => {
  const lockedCssClass = 'overflow-hidden'; // defined in tailwindcss
  useEffect(() => {
    if (props.locked) {
      document.body.classList.add(lockedCssClass);
    } else {
      document.body.classList.remove(lockedCssClass);
    }

    return () => {
      document.body.classList.remove(lockedCssClass);
    };
  }, [props.locked]);
};
