'use client';
import { clsx } from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

export function ButtonPrimary(props: {
  disabled?: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={clsx(
        'border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors',
      )}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
