'use client';
import clsx from 'clsx';
import { ChangeEvent, useId, useState } from 'react';
import styles from './index.module.css';

const DEFAULT_SIZE = 24;
export function InputCheckboxGood(props: {
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
          'peer-focus-visible/checkbox:outline outline-1 outline-[rgb(227,37,76)] rounded',

          styles.goodButtonWrapper,
        )}
      >
        <IconHeartOutline
          className={clsx(
            'absolute',
            _checked && 'opacity-0',
            !_checked && styles.animationUnChecked,
          )}
        ></IconHeartOutline>
        <IconHeartFilled
          className={clsx(
            'absolute',
            _checked && styles.animationChecked,
            !_checked && 'opacity-0',
          )}
        ></IconHeartFilled>
        <span className={clsx(_checked && styles.innerCircle)}></span>
        <span className={clsx(_checked && styles.outerCircle)}></span>
        <div className={clsx(_checked && styles.fireWorksPrimary)}>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksPrimarySphere)}></span>
        </div>
        <div className={clsx(_checked && styles.fireWorksSecondary)}>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
          <span className={clsx(_checked && styles.fireWorksSecondarySphere)}></span>
        </div>
      </label>
    </div>
  );
}

function IconHeartOutline(props: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={clsx(props.className, 'w-6 h-6')}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
      />
    </svg>
  );
}

function IconHeartFilled(props: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={clsx(props.className, 'w-6 h-6')}
    >
      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
    </svg>
  );
}
