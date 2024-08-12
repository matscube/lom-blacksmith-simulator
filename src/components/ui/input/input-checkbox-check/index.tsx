'use client';
import clsx from 'clsx';
import { ChangeEvent, useId, useState } from 'react';
import styles from './index.module.css';

const DEFAULT_SIZE = 24;
export function InputCheckboxCheck(props: {
  size?: number;
  name?: string;
  /**
   * 親コンポーネントでstate管理したい場合はchecked / onChangeを使う
   * 使わなければ独立したチェックボックスとして機能する（name属性経由でformから取得可能）
   */
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const id = useId();
  const size = props.size ?? DEFAULT_SIZE; // px
  const scaleValue = size / DEFAULT_SIZE;
  const useUseState = typeof props.checked === 'undefined';
  const [checked, setChecked] = useState(false);
  const _checked = useUseState ? checked : props.checked;
  return (
    <div className={clsx('flex items-center justify-center')} style={{ width: size, height: size }}>
      <input
        id={id}
        name={props.name ?? 'checkbox'}
        type='checkbox'
        className={clsx('sr-only', 'peer/checkbox')}
        checked={_checked}
        onChange={(event) => {
          if (useUseState) {
            setChecked(event.target.checked);
          } else {
            props.onChange && props.onChange(event);
          }
        }}
      />
      <label
        htmlFor={id}
        style={{
          transform: `scale(${scaleValue})`,
          width: size / scaleValue,
          height: size / scaleValue,
        }}
        className={clsx(
          // アイコンサイズ調整はここでやる
          'flex items-center justify-center relative cursor-pointer',
          /**
           * outline実装について
           *
           * focusだけだとkeyboard/click両方でoutlineが出てしまう
           * focus-visibleだとkeyboardのみで表示される（ブラウザによって異なるかも）
           * label要素でクリック制御したいが/tabindexはinputに当たってしまう
           * checkboxはsr-onlyでoutlineが当てれないのでoutlineはlabelで表示する
           * inputのfocus-visible状態をpeer sibling state機能で取得してoutline制御する
           */
          'peer-focus-visible/checkbox:outline rounded outline-offset-2 outline-1 outline-[rgba(89,177,137)]',

          styles.goodButtonWrapper,
        )}
      >
        <span className={clsx(_checked && styles.circleOrbitBase)}></span>
        <span className={clsx(!_checked && styles.circle)}></span>
        <IconCheckFilled
          className={clsx(
            'absolute',
            _checked && styles.animationChecked,
            !_checked && 'opacity-0',
          )}
        ></IconCheckFilled>
      </label>
    </div>
  );
}

function IconCheckFilled(props: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={3}
      stroke='currentColor'
      className={clsx(props.className, 'w-4 h-4')}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
    </svg>
  );
}
