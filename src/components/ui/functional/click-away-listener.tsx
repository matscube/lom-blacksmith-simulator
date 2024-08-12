import React, { useRef, useEffect, ReactNode } from 'react';

export const ClickAwayListener = (props: { children: ReactNode; onClick: () => void }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.onClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return <div ref={wrapperRef}>{props.children}</div>;
};
