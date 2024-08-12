'use client';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

export function TextEditable(props: {
  name?: string;
  text: string;
  type?: 'input-text' | 'textarea';
  onUpdate: (payload: { isEditing: boolean; text?: string }) => void;
}) {
  const isInputText = props.type === 'input-text' || props.type === undefined;
  const isTextarea = props.type === 'textarea';
  return (
    <div>
      {isInputText && InputTextEditable(props)}
      {isTextarea && TextareaEditable(props)}
    </div>
  );
}

function InputTextEditable(props: {
  name?: string;
  text: string;
  onUpdate: (payload: { isEditing: boolean; text?: string }) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [textDisplay, setTextDisplay] = useState(props.text);
  const [isComposing, setIsComposing] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  function _onUpdate(payload: { isEditing: boolean; text?: string }) {
    setIsEditing(payload.isEditing);
    props.onUpdate(payload);
  }
  return (
    <>
      {!isEditing && (
        <button
          className={clsx(
            'w-full text-left py-1',
            'hover:opacity-50 transition-opacity',
            'break-all',
          )}
          onClick={() => {
            _onUpdate({ isEditing: true });
            setTimeout(() => {
              ref?.current?.focus();
            }, 100);
          }}
        >
          {textDisplay}
        </button>
      )}
      {isEditing && (
        <input
          name={props.name ?? ''}
          type='text'
          ref={ref}
          className={clsx('w-full text-left py-1 px-2', 'text-gray-900')}
          value={textDisplay}
          onChange={(event) => {
            setTextDisplay(event.target.value);
          }}
          /**
           * Enterで確定
           * ただし、IME返還中はEnterで確定させない
           */
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !isComposing) {
              _onUpdate({ isEditing: false, text: textDisplay });
            }
          }}
          onCompositionStart={() => {
            setIsComposing(true);
          }}
          onCompositionEnd={() => {
            setIsComposing(false);
          }}
          onBlur={() => {
            _onUpdate({ isEditing: false, text: textDisplay });
          }}
        />
      )}
    </>
  );
}

function TextareaEditable(props: {
  name?: string;
  text: string;
  placeholder?: string;
  onUpdate: (payload: { isEditing: boolean; text?: string }) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [textDisplay, setTextDisplay] = useState(formatText(props.text));
  const ref = useRef<HTMLTextAreaElement>(null);
  const showPlaceholder = textDisplay === '';
  const placeholder = props.placeholder ?? 'テキストを入力できます';
  function adjustHeight() {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  }
  function saveText() {
    const savedText = formatText(textDisplay);
    _onUpdate({ isEditing: false, text: savedText });
    setTextDisplay(savedText);
  }
  function _onUpdate(payload: { isEditing: boolean; text?: string }) {
    setIsEditing(payload.isEditing);
    props.onUpdate(payload);
  }
  return (
    <>
      {!isEditing && (
        <button
          className={clsx(
            'w-full text-left py-1',
            'hover:opacity-50 transition-opacity',
            'break-all',
            showPlaceholder && 'text-gray-400 italic',
          )}
          onClick={() => {
            _onUpdate({ isEditing: true });
            setTimeout(() => {
              ref?.current?.focus();
              adjustHeight();
            }, 100);
          }}
        >
          {/* TODO: サニタイズする */}
          <span dangerouslySetInnerHTML={{ __html: convertNewlinesToBreaks(textDisplay) }}></span>
          {showPlaceholder && placeholder}
        </button>
      )}
      {isEditing && (
        <textarea
          ref={ref}
          name={props.name ?? ''}
          className={clsx(
            'w-full text-left py-1 px-2',
            'text-gray-900 placeholder:text-gray-400 placeholder:italic',
            // 高さ自動調節のために必要
            'overflow-y-hidden resize-none min-h-[100px]',
          )}
          placeholder={props.placeholder ?? 'テキストを入力できます'}
          value={textDisplay}
          onChange={(event) => {
            adjustHeight();
            setTextDisplay(event.target.value);
          }}
          /**
           * Ctrl + Enterで確定
           * Enterは改行用に使用させる
           */
          onKeyDown={(event) => {
            if (event.key === 'Enter' && event.metaKey) {
              saveText();
            } else if (event.code === 'Escape') {
              saveText();
            }
          }}
          onBlur={() => {
            saveText();
          }}
        />
      )}
    </>
  );
}

// TODO: Utilityに移動する
function convertNewlinesToBreaks(str: string) {
  return str.replace(/\n/g, '<br>');
}
function formatText(str: string) {
  // 先頭末尾の空白と改行を削除
  return str.trim().replace(/^\s+|\s+$/g, ' ');
}
