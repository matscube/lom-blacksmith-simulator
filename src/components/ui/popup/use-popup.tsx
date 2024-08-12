'use client';
import { MutableRefObject, useState } from 'react';
import { useEscapeListener } from '../functional/use-escape-listner';

export function usePopup(props: { ref: MutableRefObject<null> }) {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const hidePopup = () => setIsShowPopup(false);
  const showPopup = (e: any) => {
    if (!props.ref || !props.ref.current) return;
    const buttonRect = (props.ref.current as any).getBoundingClientRect();
    const paddingY = 4;
    const top = buttonRect.bottom + window.scrollY + paddingY;
    const left = buttonRect.left + window.scrollX;
    setPopupPosition({ top, left });
    setIsShowPopup(true);
  };
  useEscapeListener({
    onListen: () => {
      setIsShowPopup(false);
    },
  });
  return {
    isShowPopup,
    popupPosition,
    showPopup,
    hidePopup,
  };
}
