'use client';
import { useEffect } from 'react';

export function useKeyboardListener({
  handleKeyEvent,
}: {
  handleKeyEvent: (event: KeyboardEvent) => void;
}) {
  function _handleKeyDown(event: KeyboardEvent) {
    handleKeyEvent(event);
  }

  useEffect(() => {
    window.addEventListener('keydown', _handleKeyDown);
    return () => {
      window.removeEventListener('keydown', _handleKeyDown);
    };
  }, []);
}
