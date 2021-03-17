import React from 'react';

export interface InputProps<T> {
  type: T;
  style: T;
  text: T;
  highlightedText?: T;
}
export const Input = ({ type, style, text, highlightedText }: InputProps<string>) => (
  <label className={style}>
    <input type={type} />
    <span>{text}</span>
    {highlightedText && <span>{highlightedText}</span>}
  </label>
);
