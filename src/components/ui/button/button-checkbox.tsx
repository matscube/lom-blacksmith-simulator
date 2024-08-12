'use client';
import { useState } from 'react';
import { InputCheckboxCheck } from '../input/input-checkbox-check';

export function ButtonCheckbox(props: {
  emitKey: number | string;
  checked: boolean;
  disabled?: boolean;
  onUpdated: (payload: { emitKey: number | string; checked: boolean }) => void;
}) {
  const [checked, setChecked] = useState(props.checked);
  return (
    <>
      <InputCheckboxCheck
        checked={checked}
        // TODO: disabledを実装する
        onChange={(event) => {
          setChecked(event.target.checked);
          props.onUpdated({ emitKey: props.emitKey, checked: event.target.checked });
        }}
      />
    </>
  );
}
