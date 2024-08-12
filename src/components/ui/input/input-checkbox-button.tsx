'use client';
import clsx from 'clsx';
import { ReactNode } from 'react';

export function InputCheckboxButton(props: {
  children: ReactNode;
  selected: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded border text-white',
        'hover:opacity-90',
        props.selected
          ? 'bg-[var(--bg-button-primary)] border-[var(--border-primary)]'
          : 'bg-transparent border-[var(--bg-button-primary)] hover:bg-[var(--bg-button-primary)] hover:border-[var(--border-primary)]',
        'transition-colors',
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
