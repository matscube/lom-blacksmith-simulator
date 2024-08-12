'use client';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ClickAwayListener } from '../functional/click-away-listener';

export function PopupLayout(props: {
  isShowPopup: boolean;
  children: ReactNode;
  onHidePopup: () => void;
}) {
  return (
    <>
      {props.isShowPopup &&
        ReactDOM.createPortal(
          <ClickAwayListener onClick={() => props.onHidePopup()}>
            {props.children}
          </ClickAwayListener>,
          document.body,
        )}
    </>
  );
}
