'use client';
import { clsx } from 'clsx';

export function IconTag(props: { name: string; selected?: boolean }) {
  return (
    <span
      className={clsx(
        'inline-flex border rounded-full px-4 h-8 items-center',
        props.selected
          ? 'bg-[var(--bg-button-primary)] border-[var(--border-primary)]'
          : 'border-white',
      )}
    >
      {props.name}
    </span>
  );
}
