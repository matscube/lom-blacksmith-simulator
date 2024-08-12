'use client';
import { clsx } from 'clsx';
import { useId } from 'react';

export function InputCheckbox(props: {
  key: string | number;
  label: string;
  checked: boolean;
  onUpdate: (checked: boolean) => void;
}) {
  // const [checked, setChecked] = useState(false);
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={clsx(
        'w-full',
        'px-2 py-1',
        'flex items-center gap-x-3',
        'transition cursor-pointer',
        'hover:bg-[rgba(0,0,0,0.1)] rounded',
        'focus-within:bg-[rgba(0,0,0,0.1)]',
      )}
    >
      <input
        className={clsx('sr-only')}
        id={id}
        type='checkbox'
        checked={props.checked}
        onChange={(e) => {
          props.onUpdate(e.target.checked);
        }}
      />
      <span
        className={clsx(
          'w-[0.8rem] h-[0.5rem] border-l-2 border-b-2 border-green-400 rotate-[-35deg]',
          props.checked ? 'visible' : 'invisible',
        )}
        aria-hidden
      ></span>
      <span>{props.label}</span>
    </label>
  );
}
