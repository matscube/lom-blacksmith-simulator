'use client';
import clsx from 'clsx';
import { ChangeEventHandler, HTMLInputTypeAttribute, useId } from 'react';

export function AppInput(props: {
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  const hasValue = props.value !== '';
  const id = useId();
  return (
    <div className={clsx(props.className || 'w-full', 'relative z-0 group')}>
      <input
        type={props.type}
        ref={props.inputRef}
        id={id}
        className={clsx(
          'block py-2.5 px-0 w-full',
          'text-base text-white',
          'bg-transparent border-0 border-b border-gray-300',
          'appearance-none focus:outline-none focus:ring-0 focus:border-blue-400',
          'peer',
        )}
        // 仮の値を入れてplaceholder擬似クラスを利用する
        placeholder={' '}
        required={props.required ?? false}
        value={props.value}
        onChange={props.onChange}
        // 1Password Extensionの自動補完を無効化する（Labelがあるとtype=textでも補完しようとする）
        data-1p-ignore
      />
      {/* 入力がないときはplaceholderのように振る舞う */}
      {/* 入力があるときは表示位置を上にずらしてlabelのように振る舞う */}
      <label
        htmlFor={id}
        className={clsx(
          'text-sm text-gray-400 not-italic',
          // 入力があるときは上の方に避けて表示
          'absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]',
          // focus時は色をActiveにする
          'peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:not-italic',
          // 入力がないときはplaceholder的に表示
          'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:italic',
        )}
      >
        {props.label}
      </label>
    </div>
  );
}
