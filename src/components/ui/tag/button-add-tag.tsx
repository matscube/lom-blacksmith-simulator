'use client';
import { clsx } from 'clsx';
import { MouseEventHandler, ReactNode, forwardRef } from 'react';

export const ButtonAddTag = forwardRef(function ButtonAddTag(
  props: {
    onAdd: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
  },
  ref: any,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        'inline-flex border border-white rounded-full px-4 h-8',
        'items-center gap-x-2',
        'hover:opacity-50 transition-opacity',
      )}
      onClick={props.onAdd}
    >
      <span className={clsx('relative flex items-center justify-center', 'w-4 h-4')}>
        <span className={clsx('absolute w-3 h-[1.5px] bg-white')}></span>
        <span className={clsx('absolute w-3 h-[1.5px] bg-white rotate-90')}></span>
      </span>
      <span className={clsx('text-gray-400 text-xs')}>{props.children}</span>
    </button>
  );
});
