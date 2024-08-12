'use client';
import { clsx } from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

export function ButtonSecondary(props: {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={clsx(
        props.className,
        'border border-gray-400',
        'px-4 py-2',
        'rounded',
        'transition-colors hover:bg-gray-400 hover:text-white',
      )}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
