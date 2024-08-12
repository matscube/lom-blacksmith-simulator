'use client';
import clsx from 'clsx';
import { ForwardedRef, MutableRefObject, ReactNode, useEffect, useState } from 'react';
import { ClickAwayListener } from '../functional/click-away-listener';
import { useBodyScrollLocker } from '../functional/use-body-scroll-locker';
import { useEscapeListener } from '../functional/use-escape-listner';
import { useKeyboardListener } from '../functional/use-keyboard-listener';

export function useModal(
  props: { focusRef?: ForwardedRef<HTMLInputElement>; isOpenFirstly?: boolean } = {},
) {
  const [isOpen, setIsOpen] = useState(props.isOpenFirstly ?? false);
  useEscapeListener({ onListen: () => setIsOpen(false) });
  useKeyboardListener({
    handleKeyEvent: (event) => {
      if (event.metaKey && event.key === 'k') {
        setIsOpen((prev) => !prev);
      }
    },
  });
  useBodyScrollLocker({ locked: isOpen });

  /**
   * Focus on the input element just after the modal is shown
   */
  useEffect(
    function focusJustAfterShowing() {
      const inputRef = props.focusRef as MutableRefObject<HTMLInputElement> | undefined;
      if (isOpen && inputRef?.current) {
        inputRef.current.focus();
      }
    },
    [isOpen, props.focusRef],
  );

  return { isOpen, setIsOpen };
}

/**
 * how to use
 * - call useModal in parent component of ModalEmpty
 * - pass useModal's return value to ModalEmpty's props
 */
export function ModalEmpty(props: { children: ReactNode; useModal: ReturnType<typeof useModal> }) {
  return (
    <>
      <div
        tabIndex={-1}
        aria-hidden='true'
        className={clsx(
          props.useModal.isOpen ? 'flex animate-[fade-in_0.3s]' : 'hidden',
          'overflow-y-auto overflow-x-hidden',
          'fixed top-0 right-0 left-0 z-50',
          'justify-center items-center',
          'w-full md:inset-0 h-[calc(100%-1rem)] max-h-full',
          'bg-[rgba(0,0,0,.3)]',
        )}
      >
        <ClickAwayListener onClick={() => props.useModal.setIsOpen(false)}>
          <div className={clsx('relative', 'p-4 w-full max-w-2xl max-h-full')}>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              {props.children}
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
}
