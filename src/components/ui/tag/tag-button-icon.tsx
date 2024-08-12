'use client';
import { IconTag } from './icon-tag';

export function IconTagButton(props: { name: string; selected: boolean; onClick?: () => void }) {
  return (
    <button onClick={props.onClick}>
      <IconTag name={props.name} selected={props.selected} />
    </button>
  );
}
